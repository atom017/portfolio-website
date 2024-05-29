import React from 'react'
import Icon1 from '../../assets/icons/icon_1.png'
import Icon2 from '../../assets/icons/icon_2.png'
import Icon3 from '../../assets/icons/icon_3.png'

const Services =React.forwardRef((props,ref) => {
  return (
    <section ref={ref} id="service" className='mx-auto px-5 mb-5'>
      <h2 className='text-center text-4xl md:text-5xl mb-10 font-bold text-[#6c63ff]'>Services</h2>
      <div className='flex flex-col space-y-5 items-center md:flex-row md:space-x-2 md:justify-between py-5 my-12 '>
        <div className='h-auto w-full md:w-[300px] py-5 px-3 flex flex-col items-center rounded-md border shadow-lg '>
          <div className=''>
          <img width="64" height="64" src={Icon3} alt="web-apps--v1"/>
          </div>
          <h3 className='font-bold my-2'>Web Development</h3>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, provident a facere laudantium ullam voluptatem </p>
        </div>
        <div className='h-auto w-full md:w-[300px] px-3 py-5  flex flex-col items-center shadow-lg rounded-md border'>
          <div>
          <img width="64" height="64" src={Icon2} alt="web-account--v1"/>
          </div>
          <h3 className='font-bold my-2'>Clean Code</h3>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, provident a facere  perferendis neque amet iure corrupti rerum vitae</p>
        </div>
        <div className='h-auto w-full md:w-[300px] container flex flex-col items-center px-3 py-5 shadow-lg rounded-md border'>
          <div>
          <img width="64" height="64" src={Icon1} alt="code--v1"/>
          </div>
          <h3 className='font-bold my-2'>Instructor</h3>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, provident a facere laudantium ullam voluptatem hic ipsa </p>
        </div>
      </div>
      
    </section>
  )
}
);

export default Services