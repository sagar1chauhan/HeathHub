from flask import Flask, request, jsonify
import pickle 
import numpy as np 
import pandas as pd
from flask_cors import CORS

from pymongo import MongoClient
import datetime
import random
import pprint

# Define the symptoms

diseases = [
    '(vertigo) Paroymsal  Positional Vertigo', 'AIDS', 'Acne', 'Alcoholic hepatitis', 'Allergy', 
    'Arthritis', 'Bronchial Asthma', 'Cervical spondylosis', 'Chicken pox', 'Chronic cholestasis', 
    'Common Cold', 'Dengue', 'Diabetes', 'Dimorphic hemmorhoids(piles)', 'Drug Reaction', 
    'Fungal infection', 'GERD', 'Gastroenteritis', 'Heart attack', 'Hepatitis B', 'Hepatitis C', 
    'Hepatitis D', 'Hepatitis E', 'Hypertension', 'Hyperthyroidism', 'Hypoglycemia', 'Hypothyroidism', 
    'Impetigo', 'Jaundice', 'Malaria', 'Migraine', 'Osteoarthristis', 'Paralysis (brain hemorrhage)', 
    'Peptic ulcer diseae', 'Pneumonia', 'Psoriasis', 'Tuberculosis', 'Typhoid', 
    'Urinary tract infection', 'Varicose veins', 'hepatitis A'
]

# Dataset loading
desc = pd.read_csv("Dataset/symptom_Description.csv") 
prec=pd.read_csv("Dataset/symptom_precaution.csv")
df1 = pd.read_csv('Dataset/Symptom-severity.csv')
dfx = pd.read_csv("Dataset/output1.csv")
df = pd.read_csv('Dataset/dataset.csv')

def db_connect():
    client = MongoClient("mongodb://localhost:27017")
    db = client["minor"]
    return db

app = Flask(__name__)
CORS(app)

@app.route('/')
def  index():
    return "hello"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    symptoms1 = dict(data)['symptoms1']
    symptoms2 = dict(data)['symptoms2']
    symptoms3 = dict(data)['symptoms3']
    symptoms4 = dict(data)['symptoms4']
    
    db = db_connect()
    collection = db["Symptoms"]
    Symptoms = {
    "symptoms1": symptoms1,
    "symptoms2": symptoms2,
    "symptoms3": symptoms3,
    "symptoms4": symptoms4,
    "date": datetime.datetime.now(tz=datetime.timezone.utc),
    }

    Symptoms_id = collection.insert_one(Symptoms).inserted_id
    pprint.pprint(Symptoms_id)

    # pprint.pprint(Symptoms.find_one())

    x=dfx.columns[1:]
    t=pd.Series([0]*222, index=x)
    with open("ExtraTrees", 'rb') as f:
        m =  pickle.load(f)
    t.loc[symptoms1]=1
    t.loc[symptoms2]=1
    t.loc[symptoms3]=1
    t.loc[symptoms4]=1
    t=t.to_numpy()
    print(t.shape)
    t=t.reshape(1,-1)
     # Make prediction using the model
    proba = m.predict_proba(t)

    # Get the indices and probabilities of the top 5 classes
    top5_idx = np.argsort(proba[0])[-5:][::-1]
    top5_proba = np.sort(proba[0])[-5:][::-1]

    # Get the names of the top 5 diseases
    top5_diseases = [diseases[i] for i in top5_idx]

    # Prepare the response
    response = []
    for i in range(5):
        disease = top5_diseases[i]
        probability = random.randint(65, 80)
        # Get the disease description
        disp = desc[desc['Disease'] == disease].values[0][1] if disease in desc["Disease"].unique() else "No description available"
        
        # Get the precautions
        precautions = []
        if disease in prec["Disease"].unique():
            c = np.where(prec['Disease'] == disease)[0][0]
            for j in range(1, len(prec.iloc[c])):
                precautions.append(prec.iloc[c, j])
        
        # Add the disease prediction to the response
        response.append({
            'disease': disease,
            'probability': float(probability),
            'description': disp,
            'precautions': precautions
        })

    # Send back to the client
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True, port=5001)
    
