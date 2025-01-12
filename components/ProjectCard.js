import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';

const ProjectCard = ({ title, demoLink, sourceLink, image, techIcons, tags, description }) => {
  return (
    <div className="group h-72 w-80  [perspective:1000px] border-2 border-gray-600 rounded-xl">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* Front Face: Image and Title */}
        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
          <div className="relative w-full h-full">
            {image && (
              <img
                className="object-cover cursor-pointer object-center w-full h-full rounded-xl"
                src={image}
                alt={title}
              />
            )}

            {/* Half overlay at the bottom of the image */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-black/50 rounded-b-xl"></div>

            <div className="absolute bottom-2 left-2 right-2 text-white text-center z-10">
              <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
            </div>
          </div>
        </div>

        {/* Back Face: Code Link, Demo Link, Tags, Description */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-6 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">{title}</h3>
            {/* Tags */}
            <div className="flex justify-center space-x-2 mt-2 mb-3">
              {tags && tags.map((tag, index) => (
                <span key={index} className="bg-gray-700 text-xs px-2 py-1 rounded-lg">{tag}</span>
              ))}
            </div>
            {/* Description */}
            <p className="text-xs md:text-sm text-center mb-3">{description}</p>

            {/* Links moved to the back face */}
            <div className="flex justify-center space-x-3 mt-3">
              {/* Source Code Link */}
              <Link href={sourceLink}>
                <div className="bg-gray-800 text-white py-1 px-3 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out flex items-center space-x-2 cursor-pointer">
                  <FaGithub size={16} />
                  <span className="text-xs md:text-sm">Code</span>
                </div>
              </Link>

              {demoLink && <Link href={demoLink}>
                <div className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out flex items-center space-x-2 cursor-pointer">
                  <FaExternalLinkAlt size={16} />
                  <span className="text-xs md:text-sm">Demo</span>
                </div>
              </Link>}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
