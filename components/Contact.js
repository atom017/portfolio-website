import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-center">Contact</h2>
        <p className="text-center max-w-lg mx-auto mt-4">Feel free to reach out to me!</p>
        <div className="flex justify-center mt-6">
          <form className="w-full max-w-md">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg mb-4 bg-gray-800 text-white"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-lg mb-4 bg-gray-800 text-white"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
