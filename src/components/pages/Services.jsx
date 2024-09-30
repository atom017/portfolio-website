import React from 'react';
import { FaDesktop, FaCode, FaFileCode } from 'react-icons/fa';

const Services = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="service" className='mx-auto px-4 py-8 mb-5 max-w-[1200px]'>
      <h2 className='text-center text-4xl md:text-5xl mb-10 font-bold text-[#6c63ff]'>Services</h2>
      <div className='flex flex-col space-y-5 items-center md:flex-row md:space-x-5 md:justify-between py-5 my-12'>
        
        <div className='flex flex-col justify-between h-full w-full md:w-[300px] p-6 bg-[#f9f5ff] rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:scale-105 hover:bg-[#e7e7ff] hover:ring-2 hover:ring-[#6c63ff]'>
          <div className='flex justify-center mb-4'>
            <FaDesktop size={64} className="text-[#6c63ff]" />
          </div>
          <h3 className='text-xl font-bold mb-3 text-center text-gray-800'>Web Development</h3>
          <p className='text-center text-gray-600'>I create responsive and user-friendly websites according to your unique needs.</p>
        </div>
        
        <div className='flex flex-col justify-between h-full w-full md:w-[300px] p-6 bg-[#f9f5ff] rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:scale-105 hover:bg-[#e7e7ff] hover:ring-2 hover:ring-[#6c63ff]'>
          <div className='flex justify-center mb-4'>
            <FaFileCode size={64} className="text-[#6c63ff]" />
          </div>
          <h3 className='text-xl font-bold mb-3 text-center text-gray-800'>Python Scripts</h3>
          <p className='text-center text-gray-600'>With a focus on best practices and industry standards, I offer clean python scripts development including web scraping, computer vision, and clean code editing.</p>
        </div>
        
        <div className='flex flex-col justify-between h-full w-full md:w-[300px] p-6 bg-[#f9f5ff] rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:scale-105 hover:bg-[#e7e7ff] hover:ring-2 hover:ring-[#6c63ff]'>
          <div className='flex justify-center mb-4'>
            <FaCode size={64} className="text-[#6c63ff]" />
          </div>
          <h3 className='text-xl font-bold mb-3 text-center text-gray-800'>Backend Development</h3>
          <p className='text-center text-gray-600'>I design RESTful APIs with a focus on scalability and security using modern frameworks and tools like Node.js, Express, and Django.</p>
        </div>
        
      </div>
    </section>
  );
});

export default Services;
