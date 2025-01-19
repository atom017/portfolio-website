import Image from 'next/image';
import { useEffect } from 'react';
const HomePage = () => {
  useEffect(() => {
    const stars = document.querySelector('.stars');
    const numberOfStars = 200;

    const createStar = () => {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.position = 'absolute';
      star.style.width = `${Math.random() * 3 + 1}px`;
      star.style.height = `${Math.random() * 3 + 1}px`;
      star.style.backgroundColor = 'white';
      star.style.borderRadius = '50%';

      // Slow down the movement by increasing the animation duration
      const animationDuration = Math.random() * 5 + 5; // Random duration between 5s and 10s
      star.style.animationDuration = `${animationDuration}s`;

      star.style.left = `${Math.random() * window.innerWidth}px`;
      star.style.top = `${Math.random() * window.innerHeight}px`;

      stars.appendChild(star);
    };

    for (let i = 0; i < numberOfStars; i++) {
      createStar();
    }
  }, []);

  return (
    <section id="home" className="relative flex items-center justify-center bg-gray-900 text-white h-screen pt-24">
      <div className="absolute inset-0 z-0 stars"></div> {/* Galaxy background */}

      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center relative z-10">
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-4">Hello, I'm <span className='text-blue-500'>Khaing Hsu Thwe</span></h1>
          <p className="text-lg mb-6">
            I am passionate software engineer creating innovative projects on machine learning and web development. I have done real world projects related to machine learning and full-stack developments.
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
          <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg mb-5">
            <img
              src="/KHT.png"
              alt="Profile Image"
              layout="fill"
              objectFit="contain"
              className="w-full h-full rounded-full bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

