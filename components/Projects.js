import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {/* Project 1 */}
          <ProjectCard
            title="Portfolio Website"
            description="A personal portfolio website built with Next.js and TailwindCSS."
            demoLink="https://your-portfolio.com"
            sourceLink="https://github.com/your-username/portfolio"
            image="/images/project1.jpg" // Add image in public/images folder
          />
          {/* Project 2 */}
          <ProjectCard
            title="E-commerce Store"
            description="A full-stack e-commerce store built with React and Node.js."
            demoLink="https://your-ecommerce-store.com"
            sourceLink="https://github.com/your-username/ecommerce-store"
            image="/images/project2.jpg" // Add image in public/images folder
          />
          {/* Project 3 */}
          <ProjectCard
            title="Weather App"
            description="A weather forecasting app built using React and OpenWeather API."
            demoLink="https://your-weather-app.com"
            sourceLink="https://github.com/your-username/weather-app"
            image="https://images.unsplash.com/photo-1530563885674-66db50a1af19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlciUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D" // Add image in public/images folder
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
