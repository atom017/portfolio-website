import React from 'react'
import Experience from '../Experience'
import experiences_data from '../../data/experiences_data'
import { FaBriefcase, FaBuilding, FaCalendar } from 'react-icons/fa'
import ExperienceTest from '../ExperienceTest'

const Experiences =React.forwardRef((props,ref) => {
  let exp = experiences_data[1]
  return (
    <section ref={ref} id='experience' className='mx-auto px-10 py-8 mb-10'>
      <h2 className='font-bricolage font-bold text-4xl md:text-5xl text-[#6c63ff] mb-7 text-center'>
        Work <FaBriefcase className='inline-flex' />
        </h2>
      <div className=''>
        {experiences_data.map((exp,index) =>{
        return (
        <Experience key={exp.id} index={index} exp={exp}/>
        )
      })}
      </div>  
    </section>
  )
}
)

export default Experiences