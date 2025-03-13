import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaCode, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Check if theme preference exists in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    // Add resize listener for responsive design
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-colors duration-300 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gray-800 dark:text-white">Sami Uddin</a>
        
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="#home" className="text-gray-800 dark:text-white font-semibold hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-800 dark:text-white font-semibold hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-800 dark:text-white font-semibold hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-800 dark:text-white font-semibold hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
          
          {/* Mobile Navigation */}
          <div className="flex md:hidden space-x-4">
            <a href="#home" className="text-gray-800 dark:text-white">
              <FaHome size={20} />
            </a>
            <a href="#about" className="text-gray-800 dark:text-white">
              <FaUser size={20} />
            </a>
            <a href="#projects" className="text-gray-800 dark:text-white">
              <FaCode size={20} />
            </a>
            <a href="#contact" className="text-gray-800 dark:text-white">
              <FaEnvelope size={20} />
            </a>
          </div>
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 