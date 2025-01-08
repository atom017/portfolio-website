import { motion } from 'framer-motion';
import { FaBriefcase, FaArrowRight } from 'react-icons/fa';  // Add icons from react-icons

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800 text-white">
      <motion.div
        className="container mx-auto px-6 md:px-12 space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-center text-blue-500">
          <FaBriefcase className="inline-block mr-2" /> Experience
        </h2>

        {/* Experience List */}
        <div className="space-y-8">
          {/* Experience 1 */}
          <motion.div
            className="flex items-center space-x-4 bg-gray-700 p-6 rounded-lg shadow-lg"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="text-blue-500 text-4xl">
              <FaBriefcase />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Frontend Developer at ABC Corp.</h3>
              <p className="text-sm text-gray-400">2022 - Present</p>
              <p className="mt-2">
                Responsible for building and maintaining responsive, user-friendly web applications with a focus on UI/UX design.
              </p>
            </div>
          </motion.div>

          {/* Experience 2 */}
          <motion.div
            className="flex items-center space-x-4 bg-gray-700 p-6 rounded-lg shadow-lg"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="text-blue-500 text-4xl">
              <FaBriefcase />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Junior Web Developer at XYZ Ltd.</h3>
              <p className="text-sm text-gray-400">2021 - 2022</p>
              <p className="mt-2">
                Assisted in the development of interactive websites and web applications using HTML, CSS, JavaScript, and React.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Arrow for visual separation */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <FaArrowRight className="text-blue-500 text-3xl animate-bounce" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
