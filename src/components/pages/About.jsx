import React from 'react'
import { FaBeer, FaCircle, FaCss3, FaHtml5, FaJs, FaOpencart, FaPython, FaUser } from 'react-icons/fa'
import Django from '../../assets/skills/Django.svg'
import Python from '../../assets/skills/Python-Light.svg'
import JavaScript from '../../assets/skills/JavaScript.svg'
import Nodejs from '../../assets/skills/NodeJS-Light.svg'
import TailwindCSS from '../../assets/skills/TailwindCSS-Light.svg'
import Flask from '../../assets/skills/Flask-Light.svg'
import Tensorflow from '../../assets/skills/TensorFlow-Light.svg'
import PostgreSQL from '../../assets/skills/PostgreSQL-Light.svg'
import MySQL from '../../assets/skills/MySQL-Light.svg'
import MongoDB from '../../assets/skills/MongoDB.svg'
import ReactJs from '../../assets/skills/React-Light.svg'
import {motion} from 'framer-motion';
import profile_chatbot from '../../assets/profile_chatbot.svg';

const About = React.forwardRef((props,ref)=> {
  return (
    <section ref={ref} id="about" className='relative flex  flex-col  items-center   mx-auto  px-4 py-2 md:w-[90%] '>
      <h2 className='font-bricolage text-center  text-4xl md:text-5xl mb-10 text-[#6c63ff] font-bold'>
        About Me<FaUser className='inline-flex text-[#6c63ff]'/>
        </h2>
        <div className='relative flex flex-col justify-center  py-2 px-1 h-full  space-x-4 '>
          <div className='relative p-5 bg-[#CAF4FF] mb-5  flex flex-col   '>
              {/* <h5 className=' text-xl mb-2 text-center'>Welcome!</h5> */}
              <p className='mb-5 py-2 text-md md:text-lg  text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Ipsa enim recusandae excepturi 
                  quas assumenda nulla nostrum esse nihil totam distinctio!
              </p>

              <div className='flex flex-wrap py-3'>                  
                    <p className='inline-block text-sm md:text-md text-slate-400 mr-7'>Tech Skills</p>
                    <img src={JavaScript}  className='w-[20px] h-[20px] mr-2 inline-block'/>
                    <img src={Python}  className='w-[20px] h-[20px] mr-2  inline-block'/>
                    <img src={ReactJs}  className='w-[20px] h-[20px] mr-2 inline-block'/>
                    <img src={Nodejs}  className='w-[20px] h-[20px] mr-2 inline-block'/>
                    <img src={Flask}  className='w-[20px] h-[20px] mr-2 inline-block'/>
                    <img src={Django}  className='w-[20px] h-[20px] mr-2 inline-block'/>
                    <img src={Tensorflow}  className='w-[20px] h-[20px] mr-2 inline-block'/>
                    <img src={MongoDB}  className='w-[20px] h-[20px] mr-2 inline-block'/>
                    <img src={MySQL}  className='w-[20px] h-[20px] mr-2 inline-block'/>
                    <img src={PostgreSQL}  className='w-[20px] h-[20px] mr-1 justify-center inline-block'/>
            </div>

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
          

          <div className='relative self-center my-20'>
              <img src={profile_chatbot} 
              className='self-center md:max-w-[500px]' alt="" />
            </div>
          
        </div>
        
    </section>
  )
}
)

export default About