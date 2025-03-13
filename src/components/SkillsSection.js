import React, { useEffect, useState } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaGitAlt, FaBootstrap, FaNpm ,
} from 'react-icons/fa';
import { TbBrandReactNative } from "react-icons/tb";
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 size={24} />, color: 'text-orange-500' },
    { name: 'CSS3', icon: <FaCss3Alt size={24} />, color: 'text-blue-500' },
    { name: 'JavaScript', icon: <FaJs size={24} />, color: 'text-yellow-500' },
    { name: 'React', icon: <FaReact size={24} />, color: 'text-blue-400' },
    { name: 'React Native', icon: <TbBrandReactNative size={24} />, color: 'text-blue-400' },
    { name: 'TypeScript', icon: <SiTypescript size={24} />, color: 'text-blue-600' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} />, color: 'text-teal-500' },
    { name: 'Bootstrap', icon: <FaBootstrap size={24} />, color: 'text-purple-500' },
    { name: 'Git', icon: <FaGitAlt size={24} />, color: 'text-red-500' },
    { name: 'NPM', icon: <FaNpm size={24} />, color: 'text-red-600' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="skills" 
      className="py-20 px-6 md:px-20 bg-gray-100 dark:bg-gray-900 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div 
          className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
            My Skills
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className={`text-3xl mb-2 ${skill.color}`}>
                  {skill.icon}
                </div>
                <span className="text-gray-800 dark:text-white font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 