'use client'

//import React from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline';

// import { CheckCircle, ChevronDown, ChevronUp,  Star, } from 'lucide-react'
// import Doc from '../../assets/Logo/Doc.png';
import Img1 from '../../assets/Logo/img1.png'
import Book from '../../assets/Logo/book.png'
import Experience from '../../assets/Logo/experience.png'
// import doctor from '../../assets/Logo/doctor.png';
import Schedule from '../../assets/Logo/schedule.png'
import Thumb from '../../assets/Logo/thumb.png'
import Frame from '../../assets/Logo/frame.png'
const Landing=()=> {
 

  return (
    <div className="w-full">
     
      {/* Hero Section */}
      <div className="relative w-full bg-white" >
        <div className="mx-auto max-w-xxl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-6 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            {/* <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
              <div className="rounded-full bg-white p-1 px-2">
                <p className="text-sm font-medium">We&apos; hiring</p>
              </div>
              <p className="text-sm font-medium">Join our team &rarr;</p>
            </div> */}
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl text-center "style={{ color: '#33805D' }}>
              The next Generation of care for children and Families
            </h1>
            <p className="mt-8 text-lg text-gray-700 text-center">
             Get 24/7 on demand Virtual care. Or book same/next appoinments online.
            </p>
            {/* <form action="" className="mt-8 flex items-start space-x-2">
              <div>
                <input
                  className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                ></input>
                <p className="mt-2 text-sm text-gray-500">We care about your privacy</p>
              </div>
              <div>
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Subscribe
                </button>
              </div>
            </form> */}
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
              src={Img1}
              height={500}
              width={850}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="mx-auto my-0 max-w-xxl px-2 lg:px-8"  >
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
            <img
                className="h-23 w-23 "
                src={Thumb}
              />
              {/* <svg
                className="h-9 w-9 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              > */}
                {/* <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg> */}
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Experience</h3>
            <p className="mt-4 text-sm text-gray-600">
            Combined, our doctor have great experience. They are ready to put it to action for you!
            </p>
          </div>
          <div>
            {/* <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full "> */}
            <div className="mx-auto flex h-20 w-20 ">

              <img
                className="h-23 w-23 "
                src={Book}
              />
                {/* <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d={doctor}
                /> */}
              {/* </svg> */}
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Easy Booking</h3>
            <p className="mt-4 text-sm text-gray-600">
            Booking an appointment at our healthHub is as easy as doing 2 clicks !
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-21 w-20 items-center justify-center rounded-full " >
            <img
                className="h-23 w-23 "
                src={Experience}
              />
              {/* <svg
                className="h-9 w-9 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              > */}
                {/* <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg> */}
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Flexible Schedule</h3>
            <p className="mt-4 text-sm text-gray-600">
            Available during holidays besides working 24/7 during the regular days. In case of emergencies we accept weekend bookings.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <img
                className="h-23 w-23 "
                src={Schedule}
              />
              {/* <svg
                className="h-9 w-9 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              > */}
                {/* <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg> */}
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Best Results</h3>
            <p className="mt-4 text-sm text-gray-600">
            We treated many patients across India and obtained excellent feedbacks. 
            </p>
          </div>
        </div>
      </div>
      {/* FAQs */}
      <section className="mx-auto max-w-xxl bg-gray-50 px-2 py-10 md:px-0" >
        <div>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl" style={{color: "#116D6E"}}>
             Why Choose HealthHub?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
            <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black" style={{color: "#116D6E"}}>How do I get started?</span>

                <ChevronUpIcon className="h-5 w-5 text-gray-500" />
              </button>
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
                  iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?
                </p>
              </div>
            </div>
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200"
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                >
                  <span className="flex text-start text-lg font-semibold text-black" style={{color: "#116D6E"}}>
                    What is the difference between a free and paid account?
                  </span>
                  <ChevronDownIcon className="hidden h-5 w-5 text-gray-500 md:block" />
                </button>
              </div>
            ))}
          </div>
          <p className="textbase mt-6 text-center text-gray-600">
            Can&apos;t find what you&apos;re looking for?{' '}
            <a href="#" title="" className="font-semibold text-black hover:underline">
              Contact our support
            </a>
          </p>
        </div>
      </section>
      {/* Pricing Section */}
      <div className="relative w-full bg-white" >

        
        <div className="mx-auto max-w-xxl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[600px] xl:aspect-[16/9]"
              src={Frame}
              height={10}
              width={700}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            {/* <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
              <div className="rounded-full bg-white p-1 px-2">
                <p className="text-sm font-medium">We&apos; hiring</p>
              </div>
              <p className="text-sm font-medium">Join our team &rarr;</p>
            </div> */}
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl" style={{color: "#33805D"}}>
            Complete Medical Solutions in One Place
            </h1>
            <p className="mt-8 text-lg text-gray-700">
            At Heathcare we offer our customers access to latest developments in medicare we continuously expand our services to better serve patients with dignity and respect.  
            </p>
            {/* <form action="" className="mt-8 flex items-start space-x-2">
              <div>
                <input
                  className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                ></input>
                <p className="mt-2 text-sm text-gray-500">We care about your privacy</p>
              </div>
              <div>
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Subscribe
                </button>
              </div>
            </form> */}
          </div>
        </div>
      </div>
      

      
    </div>
  )
}
//style={{backgroundColor:"#c5dfd0" }}
export default Landing;