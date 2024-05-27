import React from 'react'
import { FaBriefcase, FaBuilding, FaCalendar } from 'react-icons/fa'
import {motion} from 'framer-motion'

const Experience =({exp,index}) => {
  let isOdd = index%2 == 0? 'col-start-1 ':'col-start-3'
  
  return (
        // <motion.div
        // initial={{
        //   opacity: 0,
        //   // if odd index card,slide from right instead of left
        //   x: index % 2 === 0 ? -100 : 100
        // }}
        // whileInView={{
        //   opacity: 1,
        //   x: 0, // Slide in to its original position
        //   transition: {
        //     duration: 0.7 // Animation duration
        //   }
        // }}
        // viewport={{ once: true }}

        //  className='border p-3 h-auto bg-[#F9F9E0] '>
        //   <h5 className='  font-bold mb-2 text-xl italic' >{exp.position}</h5>
        //   <p className=' text-slate-500 text-xs italic mb-2'><FaCalendar className='inline-block text-black'/> 2023-present </p>
        //   <p className='text-slate-500 text-xs'><FaBuilding className='fa-solid inline-block text-black'/> Visibleone</p>
        //   <p className=' dark:text-[#FFF6E9] text-slate-700'>{exp.description}</p>
        // </motion.div>
       
        // <div className={`border p-3 h-auto bg-[#CAF4FF] col-span-1 ${index % 2 === 0 ? 'col-start-1' : 'col-start-2'}`}  >
        //   <div>
        //     <h3>{exp.position}</h3>
        //     <span>{exp.organization}</span>
        //     <p className=' text-slate-500 text-xs italic mb-2'><FaCalendar className='inline-block text-black'/> 2023-present </p>
        //     <p>{exp.description}</p>
        //   </div>
          

        // </div>

        <div id="experience" className='border-b-2 py-5 px-2 md:py-7 shadow-md '>
          <div className='flex justify-between'>
          <h3 className='text-xl md:text-3xl font-gidugu'>{exp.position}</h3>
          <p className='text-slate-600 text-sm'> 2023-2024</p>
          </div>
          
          <p className='text-slate-600 max-w-[80%]'>{exp.description}</p>
        </div>
     
  )
}

export default Experience