import React from 'react'
import { FaBeer, FaCircle, FaHtml5, FaJs } from 'react-icons/fa'
import Django from '../../assets/skills/Django.svg'
import Python from '../../assets/skills/Python-Light.svg'
import JavaScript from '../../assets/skills/JavaScript.svg'
import Git from '../../assets/skills/Git.svg'
import Nodejs from '../../assets/skills/NodeJS-Light.svg'
import ExpressJs from '../../assets/skills/ExpressJS-Light.svg'
import TailwindCSS from '../../assets/skills/TailwindCSS-Light.svg'
import Flask from '../../assets/skills/Flask-Light.svg'
import Tensorflow from '../../assets/skills/TensorFlow-Light.svg'
import PostgreSQL from '../../assets/skills/PostgreSQL-Light.svg'
import MySQL from '../../assets/skills/MySQL-Light.svg'
import MongoDB from '../../assets/skills/MongoDB.svg'
import Postman from '../../assets/skills/Postman.svg'
import ReactJs from '../../assets/skills/React-Light.svg'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <section id="about" className='relative mx-auto m-6 px-4 py-2 md:h-screen '>
      <h2 className='font-mono text-center  text-3xl md:text-4xl mb-5 font-bold '>About Me</h2>
        <div className='relative sm:flex justify-start space-x-4 '>
          <div className='relative sm:w-1/2 mb-2 flex flex-col  justify-center '>
              <h5 className=' text-xl mb-2 text-center'>Welcome!</h5>
              <p className='mb-5 text-xl text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Ipsa enim recusandae excepturi 
                  quas assumenda nulla nostrum esse nihil totam distinctio!
              </p>

            <div className='relative self-center w-fit'>
            <motion.svg animate={{rotate:360}} transition={{duration:10 , delay:0.2,repeat:Infinity, ease:"linear"}}
            viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
            className='w-52 h-52 md:w-[150px] md:h-[150px] '>
                <path id="circlePath" fill="none" stroke-width="2" stroke="hsl(0% 0% 0% / 0.5)" d="
                      M 10, 50
                      a 40,40 0 1,1 80,0
                      a 40,40 0 1,1 -80,0
                    " />
                <text id="text"  font-family="monospace" font-size="12" font-weight="bold" fill="var(--text-1)">
                  <textPath id="textPath" href="#circlePath">WEB DEVELOPMENT AND MACHINE LEARNING.</textPath>
                </text>
              </motion.svg>
              <img 
              className='absolute w-28 h-28 md:w-28 md:h-28 top-0 left-0 right-0 bottom-0 items-center justify-center m-auto flex text-slate-200 rounded-full'
              src="https://images.unsplash.com/photo-1504270997636-07ddfbd48945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fERpZ2l0YWx8ZW58MHx8MHx8fDA%3D" alt="" />
                  {/* <p className='absolute w-16 h-16 md:w-28 md:h-28 top-0 left-0 right-0 bottom-0 items-center justify-center m-auto flex text-slate-200 rounded-full'>Hire</p> */}
            </div>
          </div>
          <div className='sm:w-1/2  p-2'>
            <h5 className='text-center text-[#FF90BC]'>Skills</h5>
            <motion.div
            
             className='border p-2 grid  grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-5 place-items-center'>
          
              <label className='flex flex-col justify-center items-center'>
                <img src={Python} className='w-[30px] h-[30px] inline-block' alt="" />
                <p className='  text-xs md:text-sm'>HTML</p>
              </label>
              <label className='flex flex-col justify-center items-center'>
                <img src={JavaScript} className='w-[30px] h-[30px] justify-center inline-block' alt="" />
                <p className='text-white text-xs md:text-sm'>JavaScript</p>
              </label>
              <label className='flex flex-col justify-center items-center'>
                <img src={Django} className='w-[30px] h-[30px] inline-block' alt="" />
                <p className=' text-xs md:text-sm'>Django</p>
              </label>
              <label>
                <img src={Nodejs} className='w-[30px] h-[30px] inline-block' alt="" />
                <p className='text-xs md:text-sm'>Nodejs</p>
              </label>
              <label className='flex flex-col justify-center items-center'>
                <img src={ReactJs} className='w-[30px] h-[30px] inline-block' alt="" />
                <p className=' text-xs md:text-sm'>ReactJs</p>
              </label>

              <label className='flex flex-col justify-center items-center'>
                <img src={ExpressJs} className='w-[30px] h-[30px] inline-block' alt="" />
                <p className=' text-xs md:text-sm'>ExpressJs</p>
              </label>
              <label className='flex flex-col justify-center items-center'>
                <img src={TailwindCSS} className='w-[30px] h-[30px] inline-block ' alt="" />
                <p className=' text-xs md:text-sm'>TailwindCSS</p>
              </label>
              <label className='flex flex-col justify-center items-center'>
                <img src={Flask} className='w-[30px] h-[30px] inline-block' alt="" />
                <p className=' text-xs md:text-sm'>Flask</p>
              </label>
              <label className='flex flex-col justify-center items-center'>
                <img src={PostgreSQL} className='w-[30px] h-[30px] inline-block' alt="" />
                <p className=' text-xs md:text-sm'>PostgreSQL</p>
              </label>
              <label>
                <img src={MySQL} className='w-[30px] h-[30px] inline-block' alt="" />
                <p className=' text-xs md:text-sm'>MySQL</p>
              </label>
              <label className='flex flex-col justify-center items-center'>
                <img src={MongoDB} className='w-[30px] h-[30px] inline-block' alt="" />
                <p className='text-white text-xs md:text-sm'>MongoDB</p>
              </label>
              <label className='flex flex-col justify-center items-center'>
                <img src={Tensorflow} className='w-[30px] h-[30px] inline-block' alt="" />
                <p className='text-white text-xs md:text-sm'>Tensorflow</p>
              </label>
              <label className='flex flex-col justify-center items-center'>
                <img src={Git} className='w-[30px] h-[30px] inline-block' alt="" />
                <p className='text-white text-xs md:text-sm'>Git</p>
              </label>
              <label className='flex flex-col justify-center items-center'>
                <img src={Postman} className='w-[30px] h-[30px] inline-block' alt="" />
                <p className='text-white text-xs md:text-sm'>Postman</p>
              </label>
              
              
            </motion.div>
          </div>
        </div>
        
    </section>
  )
}

export default About