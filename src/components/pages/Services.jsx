import React from 'react'

const Services =React.forwardRef((props,ref) => {
  return (
    <section ref={ref} id="service" className='mx-auto px-5 mb-5'>
      <h2 className='text-center text-4xl md:text-5xl mb-10 font-bold text-[#6c63ff]'>Services</h2>
      <div className='flex flex-col space-y-5 items-center md:flex-row md:space-x-2 md:justify-between py-5 my-12 '>
        <div className='h-auto w-full md:w-[300px] py-5 px-3 flex flex-col items-center rounded-md border border-[#6c63ff] shadow-lg '>
          <div className=''>
          <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/000000/web-apps--v1.png" alt="web-apps--v1"/>
          </div>
          <h3 className='font-bold my-2'>Web</h3>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, provident a facere laudantium ullam voluptatem </p>
        </div>
        <div className='h-auto w-full md:w-[300px] px-3 py-5  flex flex-col items-center shadow-lg rounded-md border border-[#6c63ff]'>
          <div>
          <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/000000/web-account--v1.png" alt="web-account--v1"/>
          </div>
          <h3 className='font-bold my-2'>Web</h3>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, provident a facere  perferendis neque amet iure corrupti rerum vitae</p>
        </div>
        <div className='h-auto w-full md:w-[300px] container flex flex-col items-center px-3 py-5 shadow-lg rounded-md border border-[#6c63ff]'>
          <div>
          <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/000000/code--v1.png" alt="code--v1"/>
          </div>
          <h3 className='font-bold'>Web</h3>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, provident a facere laudantium ullam voluptatem hic ipsa </p>
        </div>
      </div>
      
    </section>
  )
}
);

export default Services