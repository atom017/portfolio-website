import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';

const ProjectCard = ({ title, demoLink, sourceLink, image, techIcons }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300 ease-in-out">
      {/* Image Section with Overlay */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
        </div>
      </div>

      {/* Technologies Icons (if provided) */}
      {techIcons && (
        <div className="flex space-x-3 mb-3 px-4">
          {techIcons.map((Icon, index) => (
            <Icon key={index} className="text-white text-lg" />
          ))}
        </div>
      )}

      {/* Links Section */}
      <div className="flex justify-between px-4 pb-4 mt-4">
        {/* Source Code Link */}
        <Link href={sourceLink}>
          <div
            className="bg-gray-700 text-white py-1 px-2 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out flex items-center space-x-2 cursor-pointer"
          >
            <FaGithub size={16} />
            <span className="text-xs">Code</span>
          </div>
        </Link>

        {/* Live Demo Link */}
        <Link href={demoLink}>
          <div
            className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out flex items-center space-x-2 cursor-pointer"
          >
            <FaExternalLinkAlt size={16} />
            <span className="text-xs">Demo</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
