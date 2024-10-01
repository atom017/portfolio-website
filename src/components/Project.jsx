import PropTypes from 'prop-types';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

const Project = ({ project }) => {
  return (
    <div className="flex flex-col h-[350px] rounded-lg overflow-hidden shadow-lg group transition-transform transform ">
      <img
        className="w-full h-48 object-cover"
        src={project.image}
        alt="Project Image"
      />
      <div className="flex flex-col p-4 bg-white flex-grow">
        <h3 className="text-lg font-bricolage font-semibold mb-2">{project.name}</h3>
        <div className="flex flex-wrap mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.demo && (
            <a
              href={project.demo}
              className="flex items-center text-[#6c63ff] hover:underline transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaArrowRight className="mr-2 rotate-[-45deg]" />
            </a>
          )}
          {project.source && (
            <a
              href={project.source}
              className="flex items-center text-gray-600 hover:underline transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    demo: PropTypes.string,
    source: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Project;
