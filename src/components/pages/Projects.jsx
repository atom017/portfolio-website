import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import projects_data from '../../data/projects_data';
import Project from '../Project';

const Projects = React.forwardRef((props, ref) => {
  const [techDomain, setTechDomain] = useState('All');
  const [projects, setProjects] = useState(projects_data);
  const sectionRef = React.useRef(null);
  const inView = useInView(sectionRef, { once: false });

  useEffect(() => {
    handleFilter();
  }, [techDomain]);

  const handleFilter = () => {
    if (techDomain === 'All') {
      setProjects(projects_data);
      return;
    }
    const newProjects = projects_data.filter((pj) => pj.type === techDomain);
    setProjects(newProjects);
  };

  return (
    <section ref={sectionRef} id="projects" className="mx-auto px-4 py-8 mb-5 max-w-[1200px]">
      <h2 className="font-bricolage text-center text-4xl md:text-5xl font-bold mb-5 text-[#6c63ff]">Projects</h2>
      <div className="py-6 flex flex-row justify-center gap-2 mb-3">
        {['All', 'Web', 'AI'].map((type) => (
          <button
            key={type}
            onClick={() => setTechDomain(type)}
            className={`px-6 py-2 shadow-lg rounded-md border border-[#6c63ff] text-black text-lg cursor-pointer 
              ${techDomain === type ? 'bg-[#6c63ff] text-white' : 'hover:bg-[#6c63ff] hover:text-white'}`}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="mx-auto grid grid-flow-row auto-rows-auto grid-cols-1 place-items-center lg:grid-cols-3 gap-4">
        {inView && projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Slide from left for even, right for odd
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1, // Duration set to 1 second
              ease: [0.65, 0, 0.35, 1] // Smoother easing function
            }}
            className="flex flex-col h-full w-full"
          >
            <Project project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
});

export default Projects;
