import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [stateMessage, setStateMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_bwf2yz3', // Replace with your service ID
        'template_vvw3fsd', // Replace with your template ID
        e.target,
        'hXMD3x5_-i73ckO31' // Replace with your public key
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // Hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // Hide message after 5 seconds
        }
      );
  };

  return (
    <section id="contact" className="p-20 bg-gray-900 text-white">
      <h2 className="text-3xl text-center font-semibold mb-6">Contact</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg">
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full p-3 mt-4 bg-blue-500 text-white rounded-lg ${isSubmitting ? 'cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* State Message */}
      {stateMessage && (
        <div className="mt-6 text-center text-sm text-green-400">{stateMessage}</div>
      )}

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mt-8">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="text-white hover:text-gray-400 transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} className="text-white hover:text-gray-400 transition duration-300" />
        </a>
        <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} className="text-white hover:text-gray-400 transition duration-300" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
