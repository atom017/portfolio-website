import React from 'react'
import Experience from '../Experience'
import experiences_data from '../../data/experiences_data'
import { FaBriefcase, FaBuilding, FaCalendar } from 'react-icons/fa'

const Experiences = () => {
  let exp = experiences_data[1]
  return (
    <section className='mx-auto px-4 py-8  '>
      <h2 className='font-mono font-bold text-3xl mb-5 text-center'>Experiences</h2>
      <div className='grid grid-cols-2 gap-4'>
      {experiences_data.map((exp,index) =>{
        return (
          
        <Experience key={exp.id} index={index} exp={exp}/>
        )
      })}

        
       
      </div>
      
    </section>
  )
}

export default Experiences