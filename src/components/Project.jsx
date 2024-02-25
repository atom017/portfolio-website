import React from 'react'
import { FaArrowAltCircleUp, FaArrowUp, FaBeer, FaGithub,FaCode, FaGlobe, FaEye } from "react-icons/fa";

const Project = ({project}) => {
  return (
    <div className="max-w-[270px]  h-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ease-in-out transition duration-300  ">
    <div className='relative bg-black w-full overflow-hidden bg-cover bg-no-repeat'>
        <img className="w-full  transition duration-300 ease-in-out hover:scale-110 rounded-t-lg max-h-[200px]" src={project.image} alt="" />
    </div>
    <div className="px-2 pb-2 text-wrap">
        <a href="#">
            <h5 className="text-wrap  mb-1 font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
        </a>
        <div className='mb-1'>
          <span className='inline-flex mr-1 text-[0.7rem] px-3  bg-black text-white rounded-md'>JavaScript</span>
          <span className='inline-flex mr-1 text-[0.7rem] px-3  bg-black text-white rounded-md'>python</span>
          <span className='inline-flex mr-1 text-[0.7rem] px-3  bg-black text-white rounded-md'>python</span>
        </div>
        <div className=''>
          <a href="#" className="inline-flex items-center mr-3 px-4 py-2 text-sm font-medium text-center text-white bg-[#FF90BC] rounded-lg hover:bg-[#FFC0D9] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <FaCode/>  
              
          </a>
          <a href="#" className="inline-flex items-center mr-3 px-4 py-2 text-sm font-medium text-center text-white bg-[#FF90BC] rounded-lg hover:bg-[#FFC0D9] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <FaEye/>    
          </a>
        </div>
        {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
        
    </div>
</div>
  )
}

export default Project