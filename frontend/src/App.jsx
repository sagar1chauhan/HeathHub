import  Contact from './pages/Contact/Contact';
import Footer from './components/commons/Footer'
import Navbar from './components/commons/Navbar'

import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Landing1 from './pages/Landing1/Landing1';
import About1 from './pages/About/About1';
import Input from './pages/Input/Input1';
import Result from './pages/Result/Result';
import Home from './pages/Home/Home'
import Terms from './pages/footer/TermsOfServices'
import Policy from './pages/footer/PrivacyPolicy'
import Doctor from './pages/doctor/doctor'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import SignIn from './pages/Auth/SignIn';
// import SignUp from './pages/Auth/SignUp';
// import Landing1 from './pages/Landing1/Landing1';
// import About1 from './pages/About/About1';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>
    

        {/* <Navbar />  */}
       
        {/* <Landing1/>  */}
        {/* <About1/>  */}
        {/* <Input/> */}
        {/* <Contact/>   */}
        {/* <SignIn/>    */}
        {/* <Sign/Up>   */}
        {/* <Result /> */}

          <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" element={<Landing1 />} />
          <Route path="/about" element={<About1 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/result" element={<Result />} />
          <Route path="/Input" element={<Input />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/doctor" element={<Doctor />} />
        </Routes>
        </BrowserRouter>  
        <Footer/>  
        <ToastContainer /> 
        
    </>
  )
}

export default App;


//import React, { useState } from 'react';

// const MedicalDiagnosisApp = () => {
//     const [symptom, setSymptom] = useState('');
//     const [selectedSymptoms, setSelectedSymptoms] = useState([]);
//     const [result, setResult] = useState([]);

//     const symptoms = [
//         'itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 'joint_pain',
//         'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting', 'burning_micturition', 'fatigue',
//         'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy',
//         'patches_in_throat', 'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes', 'breathlessness', 'sweating',
//         'dehydration', 'indigestion', 'headache', 'yellowish_skin', 'dark_urine', 'nausea', 'loss_of_appetite',
//         'pain_behind_the_eyes', 'back_pain', 'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine',
//         'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes',
//         'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 'redness_of_eyes', 'sinus_pressure',
//         'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate', 'pain_during_bowel_movements',
//         'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps', 'bruising',
//         'obesity', 'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails',
//         'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech',
//         'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness',
//         'spinning_movements', 'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side', 'loss_of_smell',
//         'bladder_discomfort', 'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)',
//         'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 'belly_pain',
//         'abnormal_menstruation', 'watering_from_eyes', 'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum',
//         'rusty_sputum', 'lack_of_concentration', 'visual_disturbances', 'receiving_blood_transfusion',
//         'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen', 'history_of_alcohol_consumption',
//         'blood_in_sputum', 'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads',
//         'scurring', 'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister',
//         'red_sore_around_nose', 'yellow_crust_ooze'
//     ];

//     const handleInputChange = (e) => {
//         setSymptom(e.target.value);
//     };

//     const handleAddSymptom = () => {
//         setSelectedSymptoms([...selectedSymptoms, symptom]);
//         setSymptom('');
//     };

//     const handlePredictDisease = async () => {
//         try {
//             const response = await fetch('http://127.0.0.1:5000/predict', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Origin': 'http://localhost:5000'
//                 },
//                 body: JSON.stringify(selectedSymptoms)
//             });
//             const data = await response.json();
//             setResult(data);
//         } catch (error) {
//             console.error('Error predicting disease:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Medical Diagnosis App</h1>
//             <input type="text" value={symptom} onChange={handleInputChange} placeholder="Enter a symptom" />
//             <button onClick={handleAddSymptom}>Add Symptom</button>
//             <button onClick={handlePredictDisease}>Predict Disease</button>
//             <ul>
//                 {selectedSymptoms.map((sym, index) => (
//                     <li key={index}>{sym}</li>
//                 ))}
//             </ul>
//             <div>
//                 {result.map((item, index) => (
//                     <div key={index}>
//                         <p><strong>Disease:</strong> {item.disease}</p>
//                         <p><strong>Probability:</strong> {item.probability}</p>
//                         <p><strong>Description:</strong> {item.description}</p>
//                         <p><strong>Precautions:</strong> {item.precautions.join(', ')}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MedicalDiagnosisApp;
