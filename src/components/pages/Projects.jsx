import React, { useEffect, useState } from 'react'
import projects_data from '../../data/projects_data'
import Project from '../Project'


const Projects = () => {
  const [techDomain, setTechDomain] = useState('All')
  const [projects,setProjects] = useState(projects_data)
  
  const handleChange = (e,value) =>{
     setTechDomain(value)
  }
  
  useEffect(() =>{
   
    handleFilter()
    
  },[techDomain])

  const handleFilter = () =>{
    if(techDomain=='All'){
      setProjects(projects_data)
      return
    }
    const newProjects = projects_data.filter(pj =>{
      return pj['type'] === techDomain
    })
    setProjects(newProjects)
  }
  return (
    <section id='projects' className='mx-auto px-4  py-10 mb-5'>
        <h2 className='font-mono text-center text-3xl md:text-4xlfont-bold mb-5  '>Projects</h2>
        <div className='py-6  flex flex-row justify-center gap-2'>
          <button
          
          onClick={() => setTechDomain('All')}
           className='  px-6  shadow-lg  rounded-md  bg-[#FF90BC]   text-lg cursor-pointer hover:bg-[#EF8EB4]'>
            All
          </button>

          <button 
          onClick={() =>{ setTechDomain('Web'); 
        }}
          className=' px-6 py-2 shadow-lg rounded-md border-2 bg-[#FF90BC] text-white text-lg cursor-pointer hover:bg-[#EF8EB4]'>
            Web
          </button>

          <button
           onClick={() =>{ setTechDomain('AI')}}
           className=' px-6 py-2 shadow-lg rounded-md border-2 bg-[#FF90BC] text-white  text-lg cursor-pointer hover:bg-[#EF8EB4]'>AI</button>
        </div>
        <div className='mx-auto  grid grid-flow-row auto-rows-auto  sm:grid-cols-2  place-items-center md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {projects.map((project) =>{  
        return (
            <Project key={project.id} project={project} />
        )
        })}
        </div>
      
    </section>
  )
}

export default Projects