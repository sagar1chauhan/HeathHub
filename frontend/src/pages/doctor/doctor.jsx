import { Search } from 'lucide-react'
import React from 'react'

const posts = [
    {
        "fungal_infection": [{
            img: "./src/assets/data/doc1.png",
            name: "Toral D. Patel, MD",
            category:"Dermatology",
            speciality: "Dermatology + Aesthetics"
        },
        {
            img: "./src/assets/data/doc2.jpg",
            name: "Priya Sharma, MD",
            category: "Dermatology",
            speciality: "Dermatology + Pediatric Dermatology"
        },
        {
            img: "./src/assets/data/doc3.webp",
            name: "Vikram Sharma, MD",
            category: "Dermatology",
            speciality: "Dermatology + Dermatopathology"
        }
    ]
    }
];

// const Doctor = () => {

    
//     return (
//     <div className="max-w-7xl mx-auto ">
//       <div className="w-full xl:w-1/2 lg:w-full xl:px-10 sm:px-5 px-8 m-auto text-center">
//         <h1 className="mt-8 text-2xl font-bold tracking-tight text-[#a27c70] md:text-4xl lg:text-6xl whitespace-nowrap">
//         Find the Perfect Doctor for You!
//         </h1>
//         {/* <p className="mt-8 text-lg text-gray-700">
            
//         </p> */}
//       </div>
//       {/* <div className="flex gap-3 grow justify-center mt-20 xl:px-20 flex-wrap px-10">
//         <input
//           className="flex h-10 w-full md:w-1/2 rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//           type="text"
//           placeholder="Search"
//         ></input>
//         <button
//           type="button"
//           className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//         >
//           <Search />
//         </button>
//         </div> */}
//         {/* posts */}
//         {/* <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
//             {posts[0]["fungal_infection"].map((doctor,doctorindex) => (
//             <div key={doctorindex} className="border">
//                 <img src={doctor.img} className="aspect-video w-full rounded-md" alt="" />
//                 <div className="min-h-min p-3">
//                 <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
//                     #{doctor.category}
//                 </p>
//                 <p className="mt-4 flex-1 text-base font-semibold text-gray-900"></p>
//                 <p className="mt-4 w-full text-sm leading-normal text-gray-600">
//                 {doctor.name}
//                 </p>
//                 <div className="mt-4 flex space-x-3 ">
//                     <img className="h-full w-10 rounded-lg" src={post.avatar} alt={post.author} />
//                     <div>
//                     <p className="text-sm font-semibold leading-tight text-gray-900">
//                         {doctor.speciality}
//                     </p>
//                     <p className="text-sm leading-tight text-gray-600">{post.date}</p>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             ))} 
//         </div> */}
//         <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
//     {posts[0]["fungal_infection"].map((doctor, doctorIndex) => (
//         <div key={doctorIndex} className="border rounded-md overflow-hidden shadow-md max-w-xs">
//             <img src={doctor.img} className="w-full h-40 object-cover" alt="" />
//             <div className="p-4">
//                 <p className="text-sm font-semibold text-gray-700"># {doctor.category}</p>
//                 <h2 className="mt-2 text-lg font-semibold text-gray-900">{doctor.name}</h2>
//                 <p className="mt-2 text-sm text-gray-600">{doctor.speciality}</p>
//                 <div className="mt-4 flex justify-between">
//                     {/* Add any additional content or actions here */}
//                 </div>
//             </div>
//         </div>
//     ))}
// </div>
//         {/* <div className="w-full border-t border-gray-300">
//             <div className="mt-2 flex items-center justify-between">
//             <div className="hidden md:block">
//                 <p>
//                 showing <strong>1</strong> to <strong>10</strong> of <strong>20</strong> results
//                 </p>
//             </div>
//             <div className="space-x-2">
//                 <button
//                 type="button"
//                 className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                 >
//                 &larr; Previous
//                 </button>
//                 <button
//                 type="button"
//                 className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//                 >
//                 Next &rarr;
//                 </button>
//             </div>
//             </div>
//         </div> */}
//         </div>
//     )
// }
    

// export default Doctor;

const Doctor = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4">
            <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-green-800">
                    Find the Perfect Doctor for You!
                </h1>
            </div>
            <div className="grid gap-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                {posts[0]["fungal_infection"].map((doctor, doctorIndex) => (
                    <div key={doctorIndex} className="border rounded-md overflow-hidden shadow-md">
                        <img src={doctor.img} className="w-full h-40 object-cover" alt="" />
                        <div className="p-4">
                            <p className="text-sm font-semibold text-gray-700"># {doctor.category}</p>
                            <h2 className="mt-2 text-lg font-semibold text-gray-900">{doctor.name}</h2>
                            <p className="mt-2 text-sm text-gray-600">{doctor.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Pagination can be added here if needed */}
        </div>
    )
}

export default Doctor;
