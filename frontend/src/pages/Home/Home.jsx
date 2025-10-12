import { NavLink } from 'react-router-dom'
import Symptom from '../../assets/Logo/symptom.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home=()=>{
  const disease = localStorage.getItem('disease');

const notify=() => {
  toast.success("Check Disease First!")
}
return(
  <>
  <ToastContainer />
  <div className="mx-auto max-w-7xl px-4">
<div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
          <div className="space-y-6">
            <p className="text-sm font-semibold md:text-base">Join Us&rarr;</p>
            <p className="text-3xl font-bold md:text-4xl"  style={{color: "#33805D"}}>Predict your Disease Now</p>
            <p className="text-base text-gray-600 md:text-lg" >
            Take control of your health – try our symptom checker today and stay informed about your well-being!
            </p><br/>
            <NavLink to="/Input">
            <button
            type="button"
            // className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-7" 
            className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-7"
            style={{backgroundColor: "#33805D"}}
          >
            Check Disease
          </button>
          </NavLink>
          { disease ?
          <NavLink to="/result">
          <button
            type="button"
            // className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-7" 
            className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-7"
            style={{backgroundColor: "#33805D"}}
          >
            Show Result
          </button>
            </NavLink> : 
            <button
            type="button"
            // className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-7" 
            className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-7"
            style={{backgroundColor: "#33805D"}}
            onClick={notify}
          >
            Show Result
          </button>}
          </div>
          <div className="md:mt-o mt-10 w-full">
            <img
              src={Symptom}
              className="rounded-lg"
            />
          </div>
        </div>
        </div>
        </>
)
}

export default Home;