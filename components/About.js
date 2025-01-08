import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, FaGitAlt, FaDocker, FaFlask } from 'react-icons/fa';
import { SiDjango, SiTensorflow, SiPostman } from 'react-icons/si';

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
          I'm a passionate developer with experience in building modern web applications. I love working with
          technologies like React, Next.js, Django, TensorFlow, and more. My goal is to create seamless user experiences
          and beautiful interfaces while constantly learning and adapting to new technologies.
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
        
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* HTML */}
          <div className="text-4xl flex flex-col items-center">
            <FaHtml5 />
            <p className="mt-2">HTML</p>
          </div>

          {/* CSS */}
          <div className="text-4xl flex flex-col items-center">
            <FaCss3Alt />
            <p className="mt-2">CSS</p>
          </div>

          {/* JavaScript */}
          <div className="text-4xl flex flex-col items-center">
            <FaJs />
            <p className="mt-2">JavaScript</p>
          </div>

          {/* React */}
          <div className="text-4xl flex flex-col items-center">
            <FaReact />
            <p className="mt-2">React</p>
          </div>

          {/* Python */}
          <div className="text-4xl flex flex-col items-center">
            <FaPython />
            <p className="mt-2">Python</p>
          </div>

          {/* Node.js */}
          <div className="text-4xl flex flex-col items-center">
            <FaNodeJs />
            <p className="mt-2">Node.js</p>
          </div>

          {/* Git */}
          <div className="text-4xl flex flex-col items-center">
            <FaGitAlt />
            <p className="mt-2">Git</p>
          </div>

          {/* Docker */}
          <div className="text-4xl flex flex-col items-center">
            <FaDocker />
            <p className="mt-2">Docker</p>
          </div>

          {/* Flask */}
          <div className="text-4xl flex flex-col items-center">
            <FaFlask />
            <p className="mt-2">Flask</p>
          </div>

          {/* Django */}
          <div className="text-4xl flex flex-col items-center">
            <SiDjango />
            <p className="mt-2">Django</p>
          </div>

          {/* TensorFlow */}
          <div className="text-4xl flex flex-col items-center">
            <SiTensorflow />
            <p className="mt-2">TensorFlow</p>
          </div>

          {/* Postman */}
          <div className="text-4xl flex flex-col items-center">
            <SiPostman />
            <p className="mt-2">Postman</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
