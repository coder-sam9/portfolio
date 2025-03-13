import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade-in animation on page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="h-screen flex items-center px-6 md:px-20 bg-gradient-to-r from-blue-600 to-purple-600"
    >
      <div 
        className={`max-w-4xl transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Hi, I'm <span className="animate-pulse">Sami Uddin</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mt-2 mb-8">
          ReactJS/React Native Developer
        </h2>
        <p className="text-gray-200 mb-8 max-w-lg">
          I build beautiful, responsive applications with modern technologies.
          Let's work together to bring your ideas to life.
        </p>
        <motion.a 
          href="#projects" 
          className="relative overflow-hidden inline-flex items-center bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center">
            See My Work
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <span className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection; 