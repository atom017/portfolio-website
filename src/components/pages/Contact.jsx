import React,{useState} from 'react'
import emailjs from 'emailjs-com';
import {FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaPhone, FaTelegram, FaWhatsapp} from 'react-icons/fa'


const Contact = React.forwardRef((props,ref) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        'service_bwf2yz3',//process.env.REACT_APP_SERVICE_ID,
        'template_vvw3fsd',//process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        'hXMD3x5_-i73ckO31'//process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <section ref={ref} id="contact" className='p-3 '>
      <h2 className=' font-bricolage text-4xl md:text-5xl font-bold mb-3 px-10'>Keep In Touch</h2>
      <div className="  flex flex-col-reverse md:flex md:flex-row  px-4 mx-auto md:justify-between  space-x-10 p-10 ">
     
        <div className=' md:border-r px-5 py-6 max-w-[1/2]'>
          <p className=' mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure impedit sint distinctio temporibus?</p>
          <p className=' mb-3'><FaEnvelope className='inline-block mr-2 text-[#5A2FFB]'/>khaing.hsu.thwe.dev@gmail.com</p>
          {/* <p className=' mb-3'><FaPhone className='inline-block mr-2 text-[#FF90BC]'/>+959769868633</p>
          <p className=' mb-3'><FaWhatsapp className='inline-block mr-2 text-[#FF90BC]'/>khaing.hsu.thwe.dev@gmail.com</p>
            */}
            <div className='flex py-2'>
              <FaLinkedin className='mr-3 inline-block text-4xl text-[#6c63ff]'/>
              <FaGithub className='mr-3 inline-block text-4xl text-[#6c63ff]'/>
              <FaTelegram className='mr-3 inline-block text-4xl text-[#6c63ff]'/>
            </div>
        </div>

        <div className='md:w-[50%] lg:w-[60%] ' onSubmit={sendEmail}>
          <form className='md:p-2'>
            <div className='mb-2'>
            <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="text" id="user_name" name="user_name" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name"/>

            </div>

            <div className='mb-2'>
            <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="user_email" name="user_email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email"/>

            </div> 
            
            <div className='mb-2'>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
              <textarea id="message" name="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave your message..."></textarea>
            </div>
          
            <button type="submit" className="text-white bg-[#6c63ff] hover:bg-[#EF8EB4] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " disabled={isSubmitting}>Send</button>
            {stateMessage && <p>{stateMessage}</p>}
          </form>
        </div>
      </div>
      
    </section>
  )
}
)
export default Contact