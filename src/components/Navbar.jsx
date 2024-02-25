import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import logo from '../assets/KHT_3.png'
import {motion} from 'framer-motion'

const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  function openMenu(){
    setToggle(true)
  }
  function closeMenu(){
    setToggle(false)
  }

  const nav_items=[
    {
    title:'Home',
    link:'#home'
    },
    {
      title:'About',
      link:'#about'
      },
    {
      title:'Projects',
      link:'#projects'
    },
    {
      title:'Experiences',
      link:'#experiences'
      },
      {
        title:'Contact',
        link:'#contact'
        },
  ]

  return (
    <>
    <nav className=' py-4 px-5 flex items-center justify-between lg:flex-row mx-auto shadow-lg'>
   
        <div className='h-10 w-10'>
        <img className='rounded-full shadow-lg' src={logo} alt="" />
        </div>
        <div className='space-x-4 '>
          <div className='hidden  sm:inline-flex space-x-2'>
            {nav_items.map((item,index) =>{
              return (
                <a key={index}
                href={item.link}
                className="relative cursor-pointer mr-1  text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                >{item.title}</a>
              )
            })}
          
          </div>

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