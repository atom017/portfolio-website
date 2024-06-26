import React from 'react'
import { FaArrowAltCircleUp, FaArrowUp, FaBeer, FaGithub,FaCode, FaGlobe, FaEye, FaRegArrowAltCircleUp } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";

const Project = ({project}) => {
//   return (
//     <div className="max-w-[270px]  h-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ease-in-out transition duration-300  ">
//     <div className='relative bg-black w-full overflow-hidden bg-cover bg-no-repeat'>
//         <img className="w-full  transition duration-500 ease-in-out hover:scale-110 rounded-t-lg max-h-[200px]" src={project.image} alt="" />
//     </div>
//     <div className="px-2 pb-2 text-wrap">
//         <a href="#">
//             <h5 className="text-wrap  mb-1 font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
//         </a>
//         <div className='mb-1'>
//           <span className='inline-flex mr-1 text-[0.7rem] px-3  bg-black text-white rounded-md'>JavaScript</span>
//           <span className='inline-flex mr-1 text-[0.7rem] px-3  bg-black text-white rounded-md'>python</span>
//           <span className='inline-flex mr-1 text-[0.7rem] px-3  bg-black text-white rounded-md'>python</span>
//         </div>
//         <div className='mt-10'>
//           <a href="#" className="inline-flex items-center mr-3 px-4 py-2 text-sm font-medium text-center text-white bg-[#6c63ff] rounded-lg hover:bg-[#FFC0D9] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             <FaCode/>                
//           </a>
//           <a href="#" className="inline-flex items-center mr-3 px-4 py-2 text-sm font-medium text-center text-white bg-[#6c63ff] rounded-lg hover:bg-[#FFC0D9] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//           <AiOutlineExport className='font-bold'/>
//           </a>
//         </div>
//         {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
        
//     </div>
// </div>
//   )
return (

<div class="relative rounded-sm overflow-hidden group">
  <img class="w-full h-full object cover" src={project.image} alt="Project Image"/>
  <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-400"></div>
  <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
    <div class="text-center">
      <h3 class="text-white text-2xl font-bold mb-4">{project.name}</h3>
      <div class="flex justify-center space-x-4">
        <a href="#" class="px-3 py-2 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-400 ease-in-out">Preview</a>
        <a href="#" class="px-3 py-2 rounded text-white bg-gray-700 hover:bg-gray-800 transition-colors duration-400 ease-in-out">Source Code</a>
      </div>
    </div>
  </div>
</div>


)

}

export default Project