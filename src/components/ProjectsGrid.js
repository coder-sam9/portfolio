import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import midocLogo from '../assets/midoclogo.svg';
import reactNaiveApp1 from '../assets/react-native-app-1.png';
import expenseTracker from '../assets/expense-tracker.png';
import storyCreator from '../assets/story-creator.png';
import portfolio from '../assets/portfolio.png';

const ProjectsGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedType, setSelectedType] = useState(() => {
    // Try to get saved filter from localStorage
    const savedFilter = localStorage.getItem('selectedProjectType');
    return savedFilter || 'all';
  });
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Midoc',
      description: 'An AI-powered healthcare app available on Google Play Store and Apple App Store. Developed offline-capable features using localStorage and caching for seamless user access. Managed SQL database interactions and implemented native code for location permissions. Optimized Redux state management, reducing app load time by 20%.',
      techStack: ['React Native', 'Redux', 'SQL', 'localStorage', 'Caching'],
      image: midocLogo,
      type: 'company',
      link: 'www.midoc.ai'
    },
    {
      id: 3,
      title: 'React Native User Management',
      description: 'A personal project featuring user list and detail screens built with Redux Toolkit and API handling. Implemented sorting, filtering, error handling, and navigation for a smooth user experience.',
      techStack: ['React Native', 'Redux Toolkit', 'API Integration'],
      image: reactNaiveApp1,
      type: 'learning',
      link: 'https://github.com/coder-sam9/user-management-assignment'
    },
    {
      id: 4,
      title: 'Expense Tracker',
      description: 'An in-progress React.js application with Redux state management. Features dynamic expense categorization, filtering, and data visualization to help users manage their finances effectively.',
      techStack: ['React.js', 'Redux', 'JavaScript'],
      image: expenseTracker,
      type: 'learning',
      link: 'https://coder-sam9.github.io/expense-tracker/'
    },
    {
      id: 5,
      title: 'React Native Insta Story Creator',
      description: 'A creative app allowing drag & drop stickers with smooth animations using Animated and PanResponder. Enabled direct Instagram Story sharing through AndroidManifest modifications, showcasing expertise in gesture handling and native modules.',
      techStack: ['React Native', 'Animated', 'PanResponder', 'Native Modules'],
      image: storyCreator,
      type: 'learning',
      link: 'https://github.com/coder-sam9/InstaStoryCreator'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and technical skills, built with modern frontend technologies.',
      techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: portfolio,
      type: 'vibe coding',
      link: '#'
    }
  ];

  const projectTypes = [
    { id: 'all', label: 'All Projects' },
    { id: 'company', label: 'Company' },
    { id: 'learning', label: 'Learning' },
    { id: 'vibe coding', label: 'Vibe Coding' }
  ];

  // Count projects by type
  const projectCounts = projectTypes.reduce((counts, type) => {
    if (type.id === 'all') {
      counts[type.id] = projects.length;
    } else {
      counts[type.id] = projects.filter(project => project.type === type.id).length;
    }
    return counts;
  }, {});

  const filteredProjects = selectedType === 'all' 
    ? projects 
    : projects.filter(project => project.type === selectedType);

  // Handle type selection
  const handleTypeSelect = (typeId) => {
    setSelectedType(typeId);
    // Save selected type to localStorage
    localStorage.setItem('selectedProjectType', typeId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projects');
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

  // Get badge styling based on project type
  const getBadgeStyle = (type) => {
    switch(type) {
      case 'company':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 border border-purple-300 dark:border-purple-800';
      case 'learning':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border border-green-300 dark:border-green-800';
      case 'vibe coding':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 border border-orange-300 dark:border-orange-800';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-800';
    }
  };

  // Get type label
  const getTypeLabel = (type) => {
    switch(type) {
      case 'company':
        return 'Company';
      case 'learning':
        return 'Learning';
      case 'vibe coding':
        return 'Vibe Coding';
      default:
        return type;
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 px-6 md:px-20 bg-white dark:bg-gray-800 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center md:text-left">
              My Projects
            </h2>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-3 mt-6 md:mt-0">
              {projectTypes.map(type => (
                <motion.button
                  key={type.id}
                  onClick={() => handleTypeSelect(type.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center
                    ${selectedType === type.id 
                      ? 'bg-blue-500 text-white shadow-md' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                >
                  {type.label}
                  <span className={`ml-2 inline-flex items-center justify-center w-5 h-5 text-xs rounded-full 
                    ${selectedType === type.id 
                      ? 'bg-white text-blue-500' 
                      : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                    }`}>
                    {projectCounts[type.id]}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    layout
                    className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute top-3 right-3 z-10">
                        <span className={`px-3 py-1.5 rounded-full font-medium text-xs ${getBadgeStyle(project.type)}`}>
                          {getTypeLabel(project.type)}
                        </span>
                      </div>
                      <motion.img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full p-4 object-contain"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                        {project.description}
                      </p>
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.techStack.map((tech, index) => (
                            <span 
                              key={index}
                              className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <motion.a 
                          href={project.link}
                          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium inline-flex items-center"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          Learn More <span className="ml-1">→</span>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGrid; 