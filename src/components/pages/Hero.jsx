import React from 'react'
import {BsFacebook,BsTwitter,BsLinkedin,BsTelegram} from 'react-icons/bs'


const Hero = () => {

 
  return (
   <section id="home" className='flex flex-col-reverse   sm:flex sm:flex-row md:h-screen px-4 mb-3 mx-auto justify-between items-center space-x-10 p-10  text-black'>
    <div className='md:w-1/2  w-fit text-center md:text-left'>
      <p className=' text-2xl sm:text-4xl mb-5 text-slate-300'>Hello, I'm</p>
      <h1 className='text-4xl font-mono sm:text-6xl'><span className='text-[#FF90BC]'>K</span>haing Hsu Thwe</h1>
      
      <p className='mt-10  text-xl font-sans mb-4 text-slate-700'>A passionate Software Engineer with strong focus on Web Development and Data Science.</p>
      <button className='px-4 py-2 mb-2 bg-[#FF90BC] text-white hover:bg-[#EF8EB4] border border-white shadow-md '>Contact Me</button>
    </div>


    <div className='md:w-1/2 items-center'>
      <img src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D" alt=""  
      className='rounded-full w-[150px] h-[150px] object-fit border-3 border-white '/>
    </div>
    
   </section>
  )
}

export default Hero