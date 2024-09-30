import PropTypes from 'prop-types'; 
import { FaCode, FaEye } from 'react-icons/fa';

const Project = ({ project }) => {
  return (
    <div className="flex flex-col h-[450px] rounded-lg overflow-hidden shadow-lg group transition-transform transform hover:scale-105">
      <img
        className="w-full h-48 object-cover"
        src={project.image}
        alt="Project Image"
      />
      <div className="flex flex-col p-4 bg-white flex-grow">
        <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
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
              className="flex items-center px-4 py-2 rounded bg-[#6c63ff] text-white hover:bg-[#6c63ff] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEye className="mr-2" /> Demo
            </a>
          )}
          {project.source && (
            <a
              href={project.source}
              className="flex items-center px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-700 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCode className="mr-2" /> Source Code
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
    description: PropTypes.string.isRequired,
    demo: PropTypes.string,
    source: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Project;
