import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaGitAlt, FaDocker, FaFlask } from 'react-icons/fa';
import { SiDjango, SiTensorflow, SiPostman } from 'react-icons/si';
import { FaCogs, FaRobot, FaCloud, FaLaptopCode } from 'react-icons/fa';  // Add new icons

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <motion.div
        className="container mx-auto px-6 md:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* About Text */}
        <motion.h2
          className="text-3xl font-semibold text-center mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg max-w-3xl mx-auto text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          I'm a passionate developer with experience in building modern web applications and AI applications.
          I have successfully delivered projects involving object detection,
          object tracking, recommendation systems, and chatbots, showcasing my ability to integrate AI and machine learning into real-world applications.

        </motion.p>

        {/* Skills Section */}
        <motion.h3
          className="text-2xl font-semibold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Skills
        </motion.h3>

        <motion.div className="overflow-hidden relative">
          {/* The wrapper for the scroll */}
          <div
            className="flex space-x-8 animate-marquee"
            style={{ animationDuration: '30s', whiteSpace: 'nowrap' }}
          >
            {/* Skill Items (repeated for infinite scrolling) */}
            {[...Array(2)].map((_, idx) => (
              <div className="flex items-center space-x-8" key={idx}>
                {/* HTML */}
                <div className="text-3xl flex flex-col items-center">
                  <FaHtml5 />
                  <p className="mt-2 text-sm">HTML</p>
                </div>

                {/* CSS */}
                <div className="text-3xl flex flex-col items-center">
                  <FaCss3Alt />
                  <p className="mt-2 text-sm">CSS</p>
                </div>

                {/* JavaScript */}
                <div className="text-3xl flex flex-col items-center">
                  <FaJs />
                  <p className="mt-2 text-sm">JavaScript</p>
                </div>

                {/* React */}
                <div className="text-3xl flex flex-col items-center">
                  <FaReact />
                  <p className="mt-2 text-sm">React</p>
                </div>

                {/* Python */}
                <div className="text-3xl flex flex-col items-center">
                  <FaPython />
                  <p className="mt-2 text-sm">Python</p>
                </div>

                {/* Node.js */}
                <div className="text-3xl flex flex-col items-center">
                  <FaNodeJs />
                  <p className="mt-2 text-sm">Node.js</p>
                </div>

                {/* Git */}
                <div className="text-3xl flex flex-col items-center">
                  <FaGitAlt />
                  <p className="mt-2 text-sm">Git</p>
                </div>

                {/* Docker */}
                <div className="text-3xl flex flex-col items-center">
                  <FaDocker />
                  <p className="mt-2 text-sm">Docker</p>
                </div>

                {/* Flask */}
                <div className="text-3xl flex flex-col items-center">
                  <FaFlask />
                  <p className="mt-2 text-sm">Flask</p>
                </div>

                {/* Django */}
                <div className="text-3xl flex flex-col items-center">
                  <SiDjango />
                  <p className="mt-2 text-sm">Django</p>
                </div>

                {/* TensorFlow */}
                <div className="text-3xl flex flex-col items-center">
                  <SiTensorflow />
                  <p className="mt-2 text-sm">TensorFlow</p>
                </div>

                {/* Postman */}
                <div className="text-3xl flex flex-col items-center">
                  <SiPostman />
                  <p className="mt-2 text-sm">Postman</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What I Do Section */}
        <motion.h3
          className="text-2xl font-semibold text-center mt-16 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          What I Do
        </motion.h3>
        <motion.div className="flex flex-wrap justify-center gap-8">
          {/* API Development */}
          <div className="text-3xl flex flex-col items-center bg-blue-600 p-6 rounded-lg shadow-lg w-80">
            <FaCogs />
            <p className="mt-2 text-sm">API Development</p>
            <p className="text-xs text-center mt-2">I specialize in building robust APIs that power your applications, ensuring smooth and efficient communication between the front-end and back-end.</p>
          </div>

          {/* Chatbot Development */}
          <div className="text-3xl flex flex-col items-center bg-blue-600 p-6 rounded-lg shadow-lg w-80">
            <FaRobot />
            <p className="mt-2 text-sm">Chatbot Development</p>
            <p className="text-xs text-center mt-2">Creating intelligent chatbots that automate customer support and enhance user engagement through advanced AI and natural language processing techniques.</p>
          </div>

          {/* Deployment */}
          <div className="text-3xl flex flex-col items-center bg-blue-600 p-6 rounded-lg shadow-lg w-80">
            <FaCloud />
            <p className="mt-2 text-sm">Deployment</p>
            <p className="text-xs text-center mt-2">I handle deployment of applications on various platforms, ensuring smooth operations and scalability for your projects in cloud environments.</p>
          </div>

          {/* Fullstack Development */}
          <div className="text-3xl flex flex-col items-center bg-blue-600 p-6 rounded-lg shadow-lg w-80">
            <FaLaptopCode />
            <p className="mt-2 text-sm">Fullstack Development</p>
            <p className="text-xs text-center mt-2">From the front-end to the back-end, I create full-stack web applications that are fast, scalable, and user-friendly, using modern frameworks and technologies.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
