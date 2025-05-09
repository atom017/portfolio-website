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
              <ul className="mt-2 list-disc pl-5 text-gray-400">
                <li>Building and maintaining object detection models.</li>
                <li>Developing person tracking systems.</li>
                <li>Designing and implementing AI-related software applications.</li>
              </ul>
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
              <ul className="mt-2 list-disc pl-5 text-gray-400">
                <li>Contributed to backend development using Python Django and Flask.</li>
                <li>Gained practical knowledge in Python threading.</li>
                <li>Worked on API development and server management tasks.</li>
              </ul>
            </div>
          </motion.div>

          {/* Experience 3 */}
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
              <h3 className="text-xl font-semibold">AI Engineer at TeeHtwin</h3>
              <p className="text-sm text-gray-400">2023 Feb - 2025 Jan</p>
              <ul className="mt-2 list-disc pl-5 text-gray-400">
                <li>Developed apart recommender system for a realestate website which shows apartments in US, Texas.</li>
                <li>Developed a chatbot using Flask, langchain and Reactjs for an education website. </li>
                <li>Worked on backend, frontend and AI related tasks.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
