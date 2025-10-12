// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Predict = () => {
//   const [symptoms1, setSymptoms1]=useState("");
//   const [symptoms2, setSymptoms2]=useState("");
//   const [symptoms3, setSymptoms3]=useState("");
//   const [symptoms4, setSymptoms4]=useState("");

//   const navigate = useNavigate();

//   // useEffect(()=>{
//   //   const disease = localStorage.getItem('disease');
//   //   if(disease){
//   //     navigate('/result')
//   //   }
//   // })

//   const collectData= async () => {
//     // console.warn(symptoms1, symptoms2, symptoms3, symptoms4);
//     let result = await fetch('http://127.0.0.1:5001/predict',{
//       method:'post',
//       body:JSON.stringify({symptoms1, symptoms2, symptoms3, symptoms4}),
//       headers:{
//         'Content-Type':'application/json'
//       },
//     })
//     result = await result.json()
//     console.warn(result);
//     localStorage.setItem("disease", JSON.stringify(result));
//     if(result)
//     {
//       navigate('/result')
//     }
//   }
  

//   return (
//     <div className="flex flex-col items-center min-h-screen py-12 gap-4 bg-gray-100">
//       <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="px-6 py-8">
//           <h1 className="text-4xl font-bold text-center mb-4">Disease Predictor</h1>
//           <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
//             Enter your symptoms and we will predict the possible disease.
//           </p>
//           <div className="grid grid-cols-1 gap-4">
//             <div className="flex flex-col">
//               <label htmlFor="symptom1" className="text-sm font-semibold text-gray-600">Select Symptom 1</label>
//               <select 
//               id="symptoms1" 
//               className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               value={symptoms1}
//               onChange={(e)=>setSymptoms1(e.target.value)}
//               >
//               <option value="">Select Symptom</option>
//                 <option value="itching">itching</option>
//                 <option value="skin_rash">skin_rash</option>
//                 <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
//                 <option value="continuous_sneezing">continuous_sneezing</option>
//                 <option value="shivering">shivering</option>
//                 <option value="joint_pain">joint_pain</option>
                
//                 {/* Add more options as needed */}
//               </select>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="symptom2" className="text-sm font-semibold text-gray-600">Select Symptom 2</label>
//               <select 
//               id="symptoms2" 
//               className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               value={symptoms2}
//               onChange={(e)=>setSymptoms2(e.target.value)}
//               >
//               <option value="">Select Symptom</option>
//               <option value="runny_nose">runny_nose</option>
//                 <option value="skin_rash">skin_rash</option>
//                 <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
//                 <option value="continuous_sneezing">continuous_sneezing</option>
//                 <option value="shivering">shivering</option>
//                 <option value="joint_pain">joint_pain</option>
//                 <option value="stomach_pain">stomach_pain</option>
                
//                 {/* Add more options as needed */}
//               </select>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="symptom3" className="text-sm font-semibold text-gray-600">Select Symptom 3</label>
//               <select 
//               id="symptoms3" 
//               className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               value={symptoms3}
//               onChange={(e)=>setSymptoms3(e.target.value)}
//               >
//               <option value="">Select Symptom</option>
//               <option value="chest_pain">chest_pain</option>
//                 <option value="skin_rash">skin_rash</option>
//                 <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
//                 <option value="continuous_sneezing">continuous_sneezing</option>
//                 <option value="shivering">shivering</option>
//                 <option value="joint_pain">joint_pain</option>
//                 <option value="stomach_pain">stomach_pain</option>
                
//                 {/* Add more options as needed */}
//               </select>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="symptom4" className="text-sm font-semibold text-gray-600">Select Symptom 4</label>
//               <select 
//               id="symptoms4" 
//               className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               value={symptoms4}
//               onChange={(e)=>setSymptoms4(e.target.value)}
//               >
//               <option value="">Select Symptom</option>
//               <option value="high_fever">high_fever</option>
//                 <option value="skin_rash">skin_rash</option>
//                 <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
//                 <option value="continuous_sneezing">continuous_sneezing</option>
//                 <option value="shivering">shivering</option>
//                 <option value="joint_pain">joint_pain</option>
//                 <option value="stomach_pain">stomach_pain</option>
                
//                 {/* Add more options as needed */}
//               </select>
//             </div>
//           </div>
//           <button className="w-full bg-black text-white hover:bg-gray-900 py-3 px-6 rounded mt-6"
//           onClick={collectData}
//           >
//   Predict
// </button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Predict;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Predict = () => {
  const [symptoms1, setSymptoms1]=useState("");
  const [symptoms2, setSymptoms2]=useState("");
  const [symptoms3, setSymptoms3]=useState("");
  const [symptoms4, setSymptoms4]=useState("");

  const navigate = useNavigate();

  // useEffect(()=>{
  //   const disease = localStorage.getItem('disease');
  //   if(disease){
  //     navigate('/result')
  //   }
  // })

  const collectData = async () => {
    console.warn(symptoms1, symptoms2, symptoms3, symptoms4);
    
    try {
        let result = await fetch('http://127.0.0.1:5001/predict', {
            method: 'post',
            body: JSON.stringify({ symptoms1, symptoms2, symptoms3, symptoms4 }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!result.ok) {
            throw new Error(`HTTP error! Status: ${result.status}`);
        }

        let jsonResponse = await result.text();

        // Replace 'NaN' with null
        jsonResponse = jsonResponse.replace(/NaN/g, 'null');

        result = JSON.parse(jsonResponse);

        console.log("Result:", result); // Log the result object to check its structure

        // Handle NaN values in precautions array
        result.forEach(item => {
            item.precautions = item.precautions.filter(precaution => typeof precaution === 'string');
        });
        
        console.warn(result);
        localStorage.setItem("disease", JSON.stringify(result));
        if (result) {
            navigate('/result');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

  return (
    <div className="flex flex-col items-center min-h-screen py-12 gap-4 bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-4xl font-bold text-center mb-4">Disease Predictor</h1>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
            Enter your symptoms and we will predict the possible disease.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label htmlFor="symptom1" className="text-sm font-semibold text-gray-600">Select Symptom 1</label>
              <select 
              id="symptoms1" 
              className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={symptoms1}
              onChange={(e)=>setSymptoms1(e.target.value)}
              >
              <option value="">Select Symptom</option>
                <option value="itching">itching</option>
                <option value="skin_rash">skin_rash</option>
                <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
                <option value="continuous_sneezing">continuous_sneezing</option>
                <option value="shivering">shivering</option>
                <option value="joint_pain">joint pain</option>
<option value="stomach_pain">stomach pain</option>
<option value="acidity">acidity</option>
<option value="ulcers_on_tongue">ulcers on tongue</option>
<option value="muscle_wasting">muscle wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning_micturition">burning micturition</option>
<option value="fatigue">fatigue</option>
<option value="weight_gain">weight gain</option>
<option value="anxiety">anxiety</option>
<option value="cold_hands_and_feets">cold hands and feet</option>
<option value="mood_swings">mood swings</option>
<option value="weight_loss">weight loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches_in_throat">patches in throat</option>
<option value="irregular_sugar_level">irregular sugar level</option>
<option value="cough">cough</option>
<option value="high_fever">high fever</option>
<option value="sunken_eyes">sunken eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish_skin">yellowish skin</option>
<option value="dark_urine">dark urine</option>
<option value="nausea">nausea</option>
<option value="loss_of_appetite">loss of appetite</option>
<option value="pain_behind_the_eyes">pain behind the eyes</option>
<option value="back_pain">back pain</option>
<option value="constipation">constipation</option>
<option value="abdominal_pain">abdominal pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild_fever">mild fever</option>
<option value="yellow_urine">yellow urine</option>
<option value="yellowing_of_eyes">yellowing of eyes</option>
<option value="acute_liver_failure">acute liver failure</option>
<option value="fluid_overload">fluid overload</option>
<option value="swelling_of_stomach">swelling of stomach</option>
<option value="swelled_lymph_nodes">swelled lymph nodes</option>
<option value="malaise">malaise</option>
<option value="blurred_and_distorted_vision">blurred and distorted vision</option>
<option value="phlegm">phlegm</option>
<option value="throat_irritation">throat irritation</option>
<option value="redness_of_eyes">redness of eyes</option>
<option value="sinus_pressure">sinus pressure</option>
<option value="runny_nose">runny nose</option>
<option value="congestion">congestion</option>
<option value="chest_pain">chest pain</option>
<option value="weakness_in_limbs">weakness in limbs</option>
<option value="fast_heart_rate">fast heart rate</option>
<option value="pain_during_bowel_movements">pain during bowel movements</option>
<option value="pain_in_anal_region">pain in anal region</option>
<option value="bloody_stool">bloody stool</option>
<option value="irritation_in_anus">irritation in anus</option>
<option value="neck_pain">neck pain</option>
<option value="dizziness">dizziness</option>
<option value="cramps">cramps</option>
<option value="bruising">bruising</option>
<option value="obesity">obesity</option>
<option value="swollen_legs">swollen legs</option>
<option value="swollen_blood_vessels">swollen blood vessels</option>
<option value="puffy_face_and_eyes">puffy face and eyes</option>
<option value="enlarged_thyroid">enlarged thyroid</option>
<option value="brittle_nails">brittle nails</option>
<option value="swollen_extremeties">swollen extremities</option>
<option value="excessive_hunger">excessive hunger</option>
<option value="extra_marital_contacts">extra marital contacts</option>
<option value="drying_and_tingling_lips">drying and tingling lips</option>
<option value="slurred_speech">slurred speech</option>
<option value="knee_pain">knee pain</option>
<option value="hip_joint_pain">hip joint pain</option>
<option value="muscle_weakness">muscle weakness</option>
<option value="stiff_neck">stiff neck</option>
<option value="swelling_joints">swelling joints</option>
<option value="movement_stiffness">movement stiffness</option>
<option value="spinning_movements">spinning movements</option>
<option value="loss_of_balance">loss of balance</option>
<option value="unsteadiness">unsteadiness</option>
<option value="weakness_of_one_body_side">weakness of one body side</option>
<option value="loss_of_smell">loss of smell</option>
<option value="bladder_discomfort">bladder discomfort</option>
<option value="continuous_feel_of_urine">continuous feel of urine</option>
<option value="passage_of_gases">passage of gases</option>
<option value="internal_itching">internal itching</option>
<option value="toxic_look_(typhos)">toxic look (typhos)</option>
<option value="depression">depression</option>
<option value="irritability">irritability</option>
<option value="muscle_pain">muscle pain</option>
<option value="altered_sensorium">altered sensorium</option>
<option value="red_spots_over_body">red spots over body</option>
<option value="belly_pain">belly pain</option>
<option value="abnormal_menstruation">abnormal menstruation</option>
<option value="watering_from_eyes">watering from eyes</option>
<option value="increased_appetite">increased appetite</option>
<option value="polyuria">polyuria</option>
<option value="family_history">family history</option>
<option value="mucoid_sputum">mucoid sputum</option>
<option value="rusty_sputum">rusty sputum</option>
<option value="lack_of_concentration">lack of concentration</option>
<option value="visual_disturbances">visual disturbances</option>
<option value="receiving_blood_transfusion">receiving blood transfusion</option>
<option value="receiving_unsterile_injections">receiving unsterile injections</option>
<option value="coma">coma</option>
                
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="symptom2" className="text-sm font-semibold text-gray-600">Select Symptom 2</label>
              <select 
              id="symptoms2" 
              className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={symptoms2}
              onChange={(e)=>setSymptoms2(e.target.value)}
              >
              <option value="">Select Symptom</option>
              <option value="runny_nose">runny_nose</option>
                <option value="skin_rash">skin_rash</option>
                <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
                <option value="continuous_sneezing">continuous_sneezing</option>
                <option value="shivering">shivering</option>
                <option value="joint_pain">joint pain</option>
<option value="stomach_pain">stomach pain</option>
<option value="acidity">acidity</option>
<option value="ulcers_on_tongue">ulcers on tongue</option>
<option value="muscle_wasting">muscle wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning_micturition">burning micturition</option>
<option value="fatigue">fatigue</option>
<option value="weight_gain">weight gain</option>
<option value="anxiety">anxiety</option>
<option value="cold_hands_and_feets">cold hands and feet</option>
<option value="mood_swings">mood swings</option>
<option value="weight_loss">weight loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches_in_throat">patches in throat</option>
<option value="irregular_sugar_level">irregular sugar level</option>
<option value="cough">cough</option>
<option value="high_fever">high fever</option>
<option value="sunken_eyes">sunken eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish_skin">yellowish skin</option>
<option value="dark_urine">dark urine</option>
<option value="nausea">nausea</option>
<option value="loss_of_appetite">loss of appetite</option>
<option value="pain_behind_the_eyes">pain behind the eyes</option>
<option value="back_pain">back pain</option>
<option value="constipation">constipation</option>
<option value="abdominal_pain">abdominal pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild_fever">mild fever</option>
<option value="yellow_urine">yellow urine</option>
<option value="yellowing_of_eyes">yellowing of eyes</option>
<option value="acute_liver_failure">acute liver failure</option>
<option value="fluid_overload">fluid overload</option>
<option value="swelling_of_stomach">swelling of stomach</option>
<option value="swelled_lymph_nodes">swelled lymph nodes</option>
<option value="malaise">malaise</option>
<option value="blurred_and_distorted_vision">blurred and distorted vision</option>
<option value="phlegm">phlegm</option>
<option value="throat_irritation">throat irritation</option>
<option value="redness_of_eyes">redness of eyes</option>
<option value="sinus_pressure">sinus pressure</option>
<option value="runny_nose">runny nose</option>
<option value="congestion">congestion</option>
<option value="chest_pain">chest pain</option>
<option value="weakness_in_limbs">weakness in limbs</option>
<option value="fast_heart_rate">fast heart rate</option>
<option value="pain_during_bowel_movements">pain during bowel movements</option>
<option value="pain_in_anal_region">pain in anal region</option>
<option value="bloody_stool">bloody stool</option>
<option value="irritation_in_anus">irritation in anus</option>
<option value="neck_pain">neck pain</option>
<option value="dizziness">dizziness</option>
<option value="cramps">cramps</option>
<option value="bruising">bruising</option>
<option value="obesity">obesity</option>
<option value="swollen_legs">swollen legs</option>
<option value="swollen_blood_vessels">swollen blood vessels</option>
<option value="puffy_face_and_eyes">puffy face and eyes</option>
<option value="enlarged_thyroid">enlarged thyroid</option>
<option value="brittle_nails">brittle nails</option>
<option value="swollen_extremeties">swollen extremities</option>
<option value="excessive_hunger">excessive hunger</option>
<option value="extra_marital_contacts">extra marital contacts</option>
<option value="drying_and_tingling_lips">drying and tingling lips</option>
<option value="slurred_speech">slurred speech</option>
<option value="knee_pain">knee pain</option>
<option value="hip_joint_pain">hip joint pain</option>
<option value="muscle_weakness">muscle weakness</option>
<option value="stiff_neck">stiff neck</option>
<option value="swelling_joints">swelling joints</option>
<option value="movement_stiffness">movement stiffness</option>
<option value="spinning_movements">spinning movements</option>
<option value="loss_of_balance">loss of balance</option>
<option value="unsteadiness">unsteadiness</option>
<option value="weakness_of_one_body_side">weakness of one body side</option>
<option value="loss_of_smell">loss of smell</option>
<option value="bladder_discomfort">bladder discomfort</option>
<option value="continuous_feel_of_urine">continuous feel of urine</option>
<option value="passage_of_gases">passage of gases</option>
<option value="internal_itching">internal itching</option>
<option value="toxic_look_(typhos)">toxic look (typhos)</option>
<option value="depression">depression</option>
<option value="irritability">irritability</option>
<option value="muscle_pain">muscle pain</option>
<option value="altered_sensorium">altered sensorium</option>
<option value="red_spots_over_body">red spots over body</option>
<option value="belly_pain">belly pain</option>
<option value="abnormal_menstruation">abnormal menstruation</option>
<option value="watering_from_eyes">watering from eyes</option>
<option value="increased_appetite">increased appetite</option>
<option value="polyuria">polyuria</option>
<option value="family_history">family history</option>
<option value="mucoid_sputum">mucoid sputum</option>
<option value="rusty_sputum">rusty sputum</option>
<option value="lack_of_concentration">lack of concentration</option>
<option value="visual_disturbances">visual disturbances</option>
<option value="receiving_blood_transfusion">receiving blood transfusion</option>
<option value="receiving_unsterile_injections">receiving unsterile injections</option>
<option value="coma">coma</option>
                
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="symptom3" className="text-sm font-semibold text-gray-600">Select Symptom 3</label>
              <select 
              id="symptoms3" 
              className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={symptoms3}
              onChange={(e)=>setSymptoms3(e.target.value)}
              >
              <option value="">Select Symptom</option>
              <option value="chest_pain">chest_pain</option>
              <option value="skin_rash">skin_rash</option>
              <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
              <option value="continuous_sneezing">continuous_sneezing</option>
              <option value="shivering">shivering</option>
              <option value="joint_pain">joint pain</option>
              <option value="stomach_pain">stomach pain</option>
              <option value="acidity">acidity</option>
              <option value="ulcers_on_tongue">ulcers on tongue</option>
              <option value="muscle_wasting">muscle wasting</option>
              <option value="vomiting">vomiting</option>
              <option value="burning_micturition">burning micturition</option>
              <option value="fatigue">fatigue</option>
              <option value="weight_gain">weight gain</option>
              <option value="anxiety">anxiety</option>
              <option value="cold_hands_and_feets">cold hands and feet</option>
              <option value="mood_swings">mood swings</option>
              <option value="weight_loss">weight loss</option>
              <option value="restlessness">restlessness</option>
              <option value="lethargy">lethargy</option>
              <option value="patches_in_throat">patches in throat</option>
              <option value="irregular_sugar_level">irregular sugar level</option>
              <option value="cough">cough</option>
              <option value="high_fever">high fever</option>
              <option value="sunken_eyes">sunken eyes</option>
              <option value="breathlessness">breathlessness</option>
              <option value="sweating">sweating</option>
              <option value="dehydration">dehydration</option>
              <option value="indigestion">indigestion</option>
              <option value="headache">headache</option>
              <option value="yellowish_skin">yellowish skin</option>
              <option value="dark_urine">dark urine</option>
              <option value="nausea">nausea</option>
              <option value="loss_of_appetite">loss of appetite</option>
              <option value="pain_behind_the_eyes">pain behind the eyes</option>
              <option value="back_pain">back pain</option>
              <option value="constipation">constipation</option>
              <option value="abdominal_pain">abdominal pain</option>
              <option value="diarrhoea">diarrhoea</option>
              <option value="mild_fever">mild fever</option>
              <option value="yellow_urine">yellow urine</option>
              <option value="yellowing_of_eyes">yellowing of eyes</option>
              <option value="acute_liver_failure">acute liver failure</option>
              <option value="fluid_overload">fluid overload</option>
              <option value="swelling_of_stomach">swelling of stomach</option>
              <option value="swelled_lymph_nodes">swelled lymph nodes</option>
              <option value="malaise">malaise</option>
              <option value="blurred_and_distorted_vision">blurred and distorted vision</option>
              <option value="phlegm">phlegm</option>
              <option value="throat_irritation">throat irritation</option>
              <option value="redness_of_eyes">redness of eyes</option>
              <option value="sinus_pressure">sinus pressure</option>
              <option value="runny_nose">runny nose</option>
              <option value="congestion">congestion</option>
              <option value="chest_pain">chest pain</option>
              <option value="weakness_in_limbs">weakness in limbs</option>
              <option value="fast_heart_rate">fast heart rate</option>
              <option value="pain_during_bowel_movements">pain during bowel movements</option>
              <option value="pain_in_anal_region">pain in anal region</option>
              <option value="bloody_stool">bloody stool</option>
              <option value="irritation_in_anus">irritation in anus</option>
              <option value="neck_pain">neck pain</option>
              <option value="dizziness">dizziness</option>
              <option value="cramps">cramps</option>
              <option value="bruising">bruising</option>
              <option value="obesity">obesity</option>
              <option value="swollen_legs">swollen legs</option>
              <option value="swollen_blood_vessels">swollen blood vessels</option>
              <option value="puffy_face_and_eyes">puffy face and eyes</option>
              <option value="enlarged_thyroid">enlarged thyroid</option>
              <option value="brittle_nails">brittle nails</option>
              <option value="swollen_extremeties">swollen extremities</option>
              <option value="excessive_hunger">excessive hunger</option>
              <option value="extra_marital_contacts">extra marital contacts</option>
              <option value="drying_and_tingling_lips">drying and tingling lips</option>
              <option value="slurred_speech">slurred speech</option>
              <option value="knee_pain">knee pain</option>
              <option value="hip_joint_pain">hip joint pain</option>
              <option value="muscle_weakness">muscle weakness</option>
              <option value="stiff_neck">stiff neck</option>
              <option value="swelling_joints">swelling joints</option>
              <option value="movement_stiffness">movement stiffness</option>
              <option value="spinning_movements">spinning movements</option>
              <option value="loss_of_balance">loss of balance</option>
              <option value="unsteadiness">unsteadiness</option>
              <option value="weakness_of_one_body_side">weakness of one body side</option>
              <option value="loss_of_smell">loss of smell</option>
              <option value="bladder_discomfort">bladder discomfort</option>
              <option value="continuous_feel_of_urine">continuous feel of urine</option>
              <option value="passage_of_gases">passage of gases</option>
              <option value="internal_itching">internal itching</option>
              <option value="toxic_look_(typhos)">toxic look (typhos)</option>
              <option value="depression">depression</option>
              <option value="irritability">irritability</option>
              <option value="muscle_pain">muscle pain</option>
              <option value="altered_sensorium">altered sensorium</option>
              <option value="red_spots_over_body">red spots over body</option>
              <option value="belly_pain">belly pain</option>
              <option value="abnormal_menstruation">abnormal menstruation</option>
              <option value="watering_from_eyes">watering from eyes</option>
              <option value="increased_appetite">increased appetite</option>
              <option value="polyuria">polyuria</option>
              <option value="family_history">family history</option>
              <option value="mucoid_sputum">mucoid sputum</option>
              <option value="rusty_sputum">rusty sputum</option>
              <option value="lack_of_concentration">lack of concentration</option>
              <option value="visual_disturbances">visual disturbances</option>
              <option value="receiving_blood_transfusion">receiving blood transfusion</option>
              <option value="receiving_unsterile_injections">receiving unsterile injections</option>
              <option value="coma">coma</option>
                
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="symptom4" className="text-sm font-semibold text-gray-600">Select Symptom 4</label>
              <select 
              id="symptoms4" 
              className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={symptoms4}
              onChange={(e)=>setSymptoms4(e.target.value)}
              >
              <option value="">Select Symptom</option>
              <option value="high_fever">high_fever</option>
                <option value="skin_rash">skin_rash</option>
                <option value="nodal_skin_eruptions">nodal_skin_eruptions</option>
                <option value="continuous_sneezing">continuous_sneezing</option>
                <option value="shivering">shivering</option>
                <option value="joint_pain">joint pain</option>
<option value="stomach_pain">stomach pain</option>
<option value="acidity">acidity</option>
<option value="ulcers_on_tongue">ulcers on tongue</option>
<option value="muscle_wasting">muscle wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning_micturition">burning micturition</option>
<option value="fatigue">fatigue</option>
<option value="weight_gain">weight gain</option>
<option value="anxiety">anxiety</option>
<option value="cold_hands_and_feets">cold hands and feet</option>
<option value="mood_swings">mood swings</option>
<option value="weight_loss">weight loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches_in_throat">patches in throat</option>
<option value="irregular_sugar_level">irregular sugar level</option>
<option value="cough">cough</option>
<option value="high_fever">high fever</option>
<option value="sunken_eyes">sunken eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish_skin">yellowish skin</option>
<option value="dark_urine">dark urine</option>
<option value="nausea">nausea</option>
<option value="loss_of_appetite">loss of appetite</option>
<option value="pain_behind_the_eyes">pain behind the eyes</option>
<option value="back_pain">back pain</option>
<option value="constipation">constipation</option>
<option value="abdominal_pain">abdominal pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild_fever">mild fever</option>
<option value="yellow_urine">yellow urine</option>
<option value="yellowing_of_eyes">yellowing of eyes</option>
<option value="acute_liver_failure">acute liver failure</option>
<option value="fluid_overload">fluid overload</option>
<option value="swelling_of_stomach">swelling of stomach</option>
<option value="swelled_lymph_nodes">swelled lymph nodes</option>
<option value="malaise">malaise</option>
<option value="blurred_and_distorted_vision">blurred and distorted vision</option>
<option value="phlegm">phlegm</option>
<option value="throat_irritation">throat irritation</option>
<option value="redness_of_eyes">redness of eyes</option>
<option value="sinus_pressure">sinus pressure</option>
<option value="runny_nose">runny nose</option>
<option value="congestion">congestion</option>
<option value="chest_pain">chest pain</option>
<option value="weakness_in_limbs">weakness in limbs</option>
<option value="fast_heart_rate">fast heart rate</option>
<option value="pain_during_bowel_movements">pain during bowel movements</option>
<option value="pain_in_anal_region">pain in anal region</option>
<option value="bloody_stool">bloody stool</option>
<option value="irritation_in_anus">irritation in anus</option>
<option value="neck_pain">neck pain</option>
<option value="dizziness">dizziness</option>
<option value="cramps">cramps</option>
<option value="bruising">bruising</option>
<option value="obesity">obesity</option>
<option value="swollen_legs">swollen legs</option>
<option value="swollen_blood_vessels">swollen blood vessels</option>
<option value="puffy_face_and_eyes">puffy face and eyes</option>
<option value="enlarged_thyroid">enlarged thyroid</option>
<option value="brittle_nails">brittle nails</option>
<option value="swollen_extremeties">swollen extremities</option>
<option value="excessive_hunger">excessive hunger</option>
<option value="extra_marital_contacts">extra marital contacts</option>
<option value="drying_and_tingling_lips">drying and tingling lips</option>
<option value="slurred_speech">slurred speech</option>
<option value="knee_pain">knee pain</option>
<option value="hip_joint_pain">hip joint pain</option>
<option value="muscle_weakness">muscle weakness</option>
<option value="stiff_neck">stiff neck</option>
<option value="swelling_joints">swelling joints</option>
<option value="movement_stiffness">movement stiffness</option>
<option value="spinning_movements">spinning movements</option>
<option value="loss_of_balance">loss of balance</option>
<option value="unsteadiness">unsteadiness</option>
<option value="weakness_of_one_body_side">weakness of one body side</option>
<option value="loss_of_smell">loss of smell</option>
<option value="bladder_discomfort">bladder discomfort</option>
<option value="continuous_feel_of_urine">continuous feel of urine</option>
<option value="passage_of_gases">passage of gases</option>
<option value="internal_itching">internal itching</option>
<option value="toxic_look_(typhos)">toxic look (typhos)</option>
<option value="depression">depression</option>
<option value="irritability">irritability</option>
<option value="muscle_pain">muscle pain</option>
<option value="altered_sensorium">altered sensorium</option>
<option value="red_spots_over_body">red spots over body</option>
<option value="belly_pain">belly pain</option>
<option value="abnormal_menstruation">abnormal menstruation</option>
<option value="watering_from_eyes">watering from eyes</option>
<option value="increased_appetite">increased appetite</option>
<option value="polyuria">polyuria</option>
<option value="family_history">family history</option>
<option value="mucoid_sputum">mucoid sputum</option>
<option value="rusty_sputum">rusty sputum</option>
<option value="lack_of_concentration">lack of concentration</option>
<option value="visual_disturbances">visual disturbances</option>
<option value="receiving_blood_transfusion">receiving blood transfusion</option>
<option value="receiving_unsterile_injections">receiving unsterile injections</option>
<option value="coma">coma</option>
                
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <button className="w-full bg-black text-white hover:bg-gray-900 py-3 px-6 rounded mt-6"
          onClick={collectData}
          >
  Predict
</button>

        </div>
      </div>
    </div>
  );
};

export default Predict;