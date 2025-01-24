import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Track the active section

  // Use IntersectionObserver to track section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Update the active section when it enters the viewport
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Observe each section
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => {
      // Cleanup observer when component unmounts
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu
  };

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50">
      <div className="flex justify-between items-center p-5">
        <div className="text-xl font-semibold"> <span className='text-[#a78ec8]'>Khaing</span>'s Portfolio</div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="#home"
            className={`${activeSection === 'home' ? 'text-[#8c6fc4]' : 'text-white'
              } hover:text-[#a78ec8]`}
          >
            Home
          </Link>
          <Link
            href="#about"
            className={`${activeSection === 'about' ? 'text-[#8c6fc4]' : 'text-white'
              } hover:text-[#a78ec8]`}
          >
            About
          </Link>
          <Link
            href="#projects"
            className={`${activeSection === 'projects' ? 'text-[#8c6fc4]' : 'text-white'
              } hover:text-[#a78ec8]`}
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className={`${activeSection === 'experience' ? 'text-[#8c6fc4]' : 'text-white'
              } hover:text-[#a78ec8]`}
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className={`${activeSection === 'contact' ? 'text-[#8c6fc4]' : 'text-white'
              } hover:text-[#a78ec8]`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-gray-800 p-6 space-y-6 h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Mobile Links */}
          <div className="flex flex-col items-center space-y-4">
            <Link
              href="#home"
              className={`${activeSection === 'home' ? 'text-[#8c6fc4]' : 'text-white'
                } hover:text-[#a78ec8]`}
              onClick={handleLinkClick} // Close the menu on link click
            >
              Home
            </Link>
            <Link
              href="#about"
              className={`${activeSection === 'about' ? 'text-[#8c6fc4]' : 'text-white'
                } hover:text-[#a78ec8]`}
              onClick={handleLinkClick} // Close the menu on link click
            >
              About
            </Link>
            <Link
              href="#projects"
              className={`${activeSection === 'projects' ? 'text-[#8c6fc4]' : 'text-white'
                } hover:text-[#a78ec8]`}
              onClick={handleLinkClick} // Close the menu on link click
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className={`${activeSection === 'experience' ? 'text-[#8c6fc4]' : 'text-white'
                } hover:text-[#a78ec8]`}
              onClick={handleLinkClick} // Close the menu on link click
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className={`${activeSection === 'contact' ? 'text-[#8c6fc4]' : 'text-white'
                } hover:text-[#a78ec8]`}
              onClick={handleLinkClick} // Close the menu on link click
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
