import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';

const ProjectCard = ({ title, demoLink, sourceLink, image, techIcons, tags, description }) => {
  return (
    <div className="group h-96 w-96 [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front Face: Image, Title, Links */}
        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
          <div className="relative w-full h-full">
            {image && (
              <img
                className="object-cover cursor-pointer object-center w-full h-full rounded-xl"
                src={image}
                alt={title}
              />
            )}
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <h3 className="text-xl font-semibold">{title}</h3>
              <div className="flex justify-center space-x-4 mt-4">
                {/* Source Code Link */}
                <Link href={sourceLink}>
                  <div className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out flex items-center space-x-2 cursor-pointer">
                    <FaGithub size={18} />
                    <span className="text-sm">Code</span>
                  </div>
                </Link>

                {/* Live Demo Link */}
                <Link href={demoLink}>
                  <div className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out flex items-center space-x-2 cursor-pointer">
                    <FaExternalLinkAlt size={18} />
                    <span className="text-sm">Demo</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Back Face: Title, Tags, Description */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-8 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            {/* Tags */}
            <div className="flex justify-center space-x-2 mt-3 mb-4">
              {tags && tags.map((tag, index) => (
                <span key={index} className="bg-gray-700 text-xs px-2 py-1 rounded-lg">{tag}</span>
              ))}
            </div>
            {/* Description */}
            <p className="text-sm text-center mb-4">{description}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
