import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projects_data from '../data/projects_data'; // Import your projects data

const Projects = () => {
  return (
    <section id="projects" className="p-20 bg-gray-900 text-white">
      <motion.div
        className="space-y-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl text-center font-semibold">Projects</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {/* Loop through the projects data and render each project card */}
          {projects_data.map(project => (
            <ProjectCard
              key={project.id}
              title={project.name}
              description={project.description || 'No description available.'}
              demoLink={project.demo}
              sourceLink={project.source}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
