import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import {motion} from 'framer-motion'

const Navbar = ({scrollTo}) => {
  const [toggle,setToggle] = useState(false)
  function openMenu(){
    setToggle(true)
  }
  function closeMenu(){
    setToggle(false)
  }

  

  const nav_items=[
    
    {
      title:'About',
      link:'about'
      },
    {
      title:'Projects',
      link:'projects'
    },
    {
      title:'Experiences',
      link:'experience'
      },
      {
        title:'Services',
        link:'service'
        },
  
      {
        title:'Contact',
        link:'contact'
        },
  ]

  return (
    <>
    <nav className='w-full py-4 px-5  flex items-center justify-between lg:flex-row mx-auto shadow-lg'>
   
        <div className='h-10 w-10'>
          <span className='text-gray-500 font-mono'>khaig.hsu.thwe.dev@gmail.com</span>
        {/* <img className='rounded-full shadow-lg' src={logo} alt="" /> */}
        </div>
        <div className='space-x-4 '>

          <ul className='hidden sm:flex font-mono'>
          <li 
          className="mr-6 relative cursor-pointer text-gray-500  text-sm md:text-lg  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#6c63ff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
           onClick={() => scrollTo('about')}>
          About
        </li>
        
        <li 
        className="mr-6 relative cursor-pointer text-gray-500  text-sm md:text-lg  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#6c63ff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
         onClick={() => scrollTo('projects')}>
          Projects
        </li>

        <li className="mr-6 relative cursor-pointer text-gray-500  text-sm md:text-lg  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#6c63ff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
         onClick={() => scrollTo('experience')}>
          Experience
        </li>

        <li className="mr-6 relative cursor-pointer text-gray-500  text-sm md:text-lg  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#6c63ff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
         onClick={() => scrollTo('service')}>
          Service
        </li>

        <li 
        className="mr-6 relative cursor-pointer text-gray-500  text-sm md:text-lg  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#6c63ff] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
         onClick={() => scrollTo('contact')}>
          Contact
        </li>

          </ul>

          <div className='ssm:block sm:hidden'>
            {toggle ? (
              <AiOutlineClose onClick={closeMenu} size={30} className=' cursor-pointer'/>
            ): (
              <FaBars onClick={openMenu} size={30} className=' cursor-pointer'/>
            )}
            
          </div>
  
        </div>
        
    </nav>
     {/* small screens */}
     {toggle && (
     <motion.div  initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     transition={{ duration: 0.2 }}
      className='flex z-2 w-full  bg-gray-700 justify-between ssm:block sm:hidden'>
            <div  className=' flex h-screen justify-between w-full'>
              <ul className='w-full'>
                {nav_items.map((item,index) =>{

                  return (
                    <motion.li key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + index / 10,
                    }}
                    onClick={() =>{
                      scrollTo(item.link);
                      closeMenu();
                    } }
                    className=' px-4 py-3 text-white   cursor-pointer  hover:bg-slate-500 underline-offset-4  text-lg'>
                    {item.title}
                    </motion.li>
                  )
                })}
                
               
              </ul>
            </div>
          </motion.div>)}
    </>
  )
}

export default Navbar