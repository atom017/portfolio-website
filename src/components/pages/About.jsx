import React from 'react'
import { FaBeer, FaCircle, FaCss3, FaHtml5, FaJs, FaOpencart, FaPython, FaUser } from 'react-icons/fa'
import Django from '../../../public/assets/skills/Django.svg'
import Python from '../../../public/assets/skills/Python-Light.svg'
import JavaScript from '../../../public/assets/skills/JavaScript.svg'
import Nodejs from '../../../public/assets/skills/NodeJS-Light.svg'
import TailwindCSS from '../../../public/assets/skills/TailwindCSS-Light.svg'
import Flask from '../../../public/assets/skills/Flask-Light.svg'
import Tensorflow from '../../../public/assets/skills/TensorFlow-Light.svg'
import PostgreSQL from '../../../public/assets/skills/PostgreSQL-Light.svg'
import MySQL from '../../../public/assets/skills/MySQL-Light.svg'
import MongoDB from '../../../public/assets/skills/MongoDB.svg'
import ReactJs from '../../../public/assets/skills/React-Light.svg'
import { motion } from 'framer-motion';
import profile_chatbot from '../../../public/assets/profile_chatbot.svg';
import SkillsCarousel from '../SkillsCarousel'

const About = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about" className='relative flex  flex-col  items-center  mx-auto  px-5 py-8 max-w-[1200px]'>
      <h2 className='font-bricolage text-center  text-4xl md:text-5xl mb-10 text-[#6c63ff] font-bold'>
        About Me<FaUser className='inline-flex text-[#6c63ff]' />
      </h2>
      <div className='relative flex flex-col justify-center  w-full h-full  space-x-4 '>
        <div className='relative p-5 bg-[#f9f5ff] mb-5  flex flex-col justify-center rounded-md'>
          {/* <h5 className=' text-xl mb-2 text-center'>Welcome!</h5> */}
          <p className='mb-5 py-2 text-md md:text-lg  text-slate-600 font-sans'>
            Hello! I’m Khaing Hsu Thwe, a dedicated and skilled Software Engineer with a passion for Software Development and Machine Learning. With a strong background in Computer Science, I bring a wealth of experience in Machine Learning and full-stack web applications
          </p>

          {/* <div className='relative self-center w-fit'>
            <motion.svg animate={{ rotate: 360 }} transition={{ duration: 10, delay: 0.2, repeat: Infinity, ease: "linear" }}
              viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
              className='w-52 h-52 md:w-[150px] md:h-[150px] '>
              <path id="circlePath" fill="none" stroke-width="2" stroke="hsl(0% 0% 0% / 0.5)" d="
                      M 10, 50
                      a 40,40 0 1,1 80,0
                      a 40,40 0 1,1 -80,0
                    " />
              <text id="text" font-family="monospace" font-size="12" font-weight="bold" fill="var(--text-1)">
                <textPath id="textPath" href="#circlePath">WEB DEVELOPMENT AND MACHINE LEARNING.</textPath>
              </text>
            </motion.svg>
            <img
              className='absolute w-28 h-28 md:w-28 md:h-28 top-0 left-0 right-0 bottom-0 items-center justify-center m-auto flex text-slate-200 rounded-full'
              src="https://images.unsplash.com/photo-1504270997636-07ddfbd48945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fERpZ2l0YWx8ZW58MHx8MHx8fDA%3D" alt="" />


            
          </div> */}
          <div className='w-full mt-10'>
            <h2 className='font-bold text-lg md:text-xl font-bricolage'>Tech Stack</h2>
            <SkillsCarousel />
          </div>
        </div>





      </div>
      <div className='relative self-center my-20'>
        <img src={profile_chatbot}
          className='self-center md:max-w-[500px]' alt="" />
      </div>
    </section>
  )
}
)

export default About