import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';  // Add icons from react-icons

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800 text-white">
      <motion.div
        className="container mx-auto px-6 md:px-12 space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-center text-white">
          <FaBriefcase className="inline-block mr-2" /> Experience
        </h2>

        {/* Experience List */}
        <div className="space-y-8 relative">
          {/* Line connecting the experience icons */}
          <div className="absolute top-0 left-6 transform -translate-x-1/2 h-full border-l-2 border-gray-500 z-0"></div>

          {/* Experience 1 */}
          <motion.div
            className="flex items-center space-x-4 bg-gray-700 p-6 rounded-lg shadow-lg relative z-10"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="text-[#8c6fc4] text-4xl relative z-10">
              <FaBriefcase />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Software Engineer at Global Walkers</h3>
              <p className="text-sm text-gray-400">2024 Feb- Present</p>
              <p className="mt-2">
                Responsible for building and maintaining object detection models, person tracking systems, and AI-related software applications.
              </p>
            </div>
          </motion.div>

          {/* Experience 2 */}
          <motion.div
            className="flex items-center space-x-4 bg-gray-700 p-6 rounded-lg shadow-lg relative z-10"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="text-[#8c6fc4] text-4xl relative z-10">
              <FaBriefcase />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Python Developer at Visible One, HK</h3>
              <p className="text-sm text-gray-400">2023 Feb - 2023 Jul</p>
              <p className="mt-2">
                Contributed to backend development using Python Django and Flask. I have gained practical knowledge in Python threading, API development, and server management.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
