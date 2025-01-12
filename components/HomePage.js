import Image from 'next/image';

const HomePage = () => {
  return (
    <section id="home" className="flex items-center justify-center bg-gray-900 text-white h-screens pt-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
          <h1 className="text-4xl font-semibold mb-4">Hello, I'm <sapn className='text-blue-500'>KHT</sapn></h1>
          <p className="text-lg mb-6">
            I am passionate developer creating innovative and responsive web applications. Let's build something amazing together.
          </p>
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            View Projects
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Profile Image"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
