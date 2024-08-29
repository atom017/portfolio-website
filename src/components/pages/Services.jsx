import React from 'react'
import Icon1 from '../../../public/assets/icons/service_1.svg'
import Icon2 from '../../../public/assets/icons/service_2.svg'
import Icon3 from '../../../public/assets/icons/service_3.svg'
//import {ReactComponent as Icon3} from '../../assets/icons/service_3.svg'

const Services =React.forwardRef((props,ref) => {
  return (
    <section ref={ref} id="service" className='mx-auto px-5 mb-5'>
      <h2 className='text-center text-4xl md:text-5xl mb-10 font-bold text-[#6c63ff]'>Services</h2>
      <div className='flex flex-col space-y-5 items-center md:flex-row md:space-x-2 md:justify-between py-5 my-12 '>
        <div className='h-full w-full md:w-[300px] py-5 px-3 container flex flex-col items-center rounded-md border shadow-lg bg-gradient-to-br from-[#CAF4FF] to-[#fff] hover:shadow-xl'>
          <div className=''>
          <img width="64" height="64" src={Icon1} alt="web-apps--v1"/>
          </div>
          <h3 className='font-bold my-3'>Web Development</h3>
          <p className='text-center'>I create responsive and user-friendly websites according to your unique needs. </p>
        </div>
        <div className='h-full w-full md:w-[300px] px-3 py-5 container flex flex-col items-center shadow-lg rounded-md border bg-gradient-to-br from-[#CAF4FF] to-[#fff] hover:shadow-xl'>
          <div>
          <img width="64" height="64" src={Icon2} alt="web-account--v1  "/>
          </div>
          <h3 className='font-bold my-3'>Python Scripts</h3>
          <p className='text-center'>With a focus on best practices and industry standards, I offer clean python scripts development including web scraping, computer vision and clean code editing.  </p>
        </div>
        <div className='h-full w-full md:w-[300px] container flex flex-col items-center px-3 py-5 shadow-lg rounded-md border bg-gradient-to-br from-[#CAF4FF] to-[#fff] hover:shadow-xl'>
          <div>
            
          <img width="64" height="64" src={Icon3} alt="code--v1" style={{fill:"#fff"}} fill = "red"/>
          </div>
          <h3 className='font-bold my-3'>Backend Development</h3>
          <p className='text-center'>I design RESTful APIs with a focus on scalability, security using modern frameworks and tools like Node.js, Express and Django</p>
        </div>
      </div>
      
    </section>
  )
}
);

export default Services