import React from 'react'
import {BsFacebook,BsTwitter,BsLinkedin,BsTelegram} from 'react-icons/bs'
import portfolio from '../../assets/portfolio.svg';

const Hero = () => {

 
  return (
   <section id="home" className='flex flex-col  md:flex md:flex-row md:h-screen md:items-center md:justify-center   mb-3 mx-auto  space-x-10 p-10  text-black'>
    <div className='md:px-10 pb-10 w-fit text-center md:text-left'>
      <p className=' text-2xl sm:text-4xl mb-5 text-slate-300'>Hello, I'm</p>
      <h1 className='text-4xl font-bricolage sm:text-6xl lg:text-7xl'><span className='text-[#6c63ff]'>K</span>haing Hsu Thwe</h1>
      
      <p className='mt-10  text-xl font-sans mb-4 text-slate-700'>A passionate Software Engineer with strong focus on Web Development and Data Science.</p>
      <button className='px-4 py-2 mb-2 bg-[#6c63ff] text-white hover:bg-[#EF8EB4] border border-white shadow-md '>Contact Me</button>
    </div>


    <div className=' self-center'>
      <img src={portfolio} alt=""  style={{ fill: '#262626'}}
      className='rounded-full max-w-[300px] max-h-[300px]  object-fit border-3 border-white '/>
    </div>
    
   </section>
  )
}

export default Hero