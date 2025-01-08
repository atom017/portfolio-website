import Link from 'next/link';

const ProjectCard = ({ title, description, demoLink, sourceLink, image }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
        {/* <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg text-xs">
          <Link href={demoLink}>
            Demo
          </Link>
        </div> */}
      </div>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
      <div className="flex space-x-4 mt-4">
        <Link href={sourceLink}>
          <span
            target="_blank"
            className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Source Code
          </span>
        </Link>
        <Link href={demoLink}>
          <span
            target="_blank"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Live Demo
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
