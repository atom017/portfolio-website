import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50">
      <div className="flex justify-between items-center p-5">
        <div className="text-xl font-semibold">My Portfolio</div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-gray-800 p-6 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Mobile Links */}
          <div className="flex flex-col items-center space-y-4">
            <Link href="#home" className="text-white hover:text-gray-400">Home</Link>
            <Link href="#about" className="text-white hover:text-gray-400">About</Link>
            <Link href="#projects" className="text-white hover:text-gray-400">Projects</Link>
            <Link href="#experience" className="text-white hover:text-gray-400">Experience</Link>
            <Link href="#contact" className="text-white hover:text-gray-400">Contact</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
