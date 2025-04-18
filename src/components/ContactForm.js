import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Import icons for email and WhatsApp
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ContactForm = () => {
  // Keep the isVisible state for animations
  const [isVisible, setIsVisible] = useState(false);

  /*
  // Form state - commented out as requested
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  */

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact');
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
      id="contact" 
      className="py-20 px-6 md:px-20 bg-gray-100 dark:bg-gray-900 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <div 
          className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Get In Touch
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-10">
            <div className="text-center mb-8">
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                I'm always open to discuss your project, answer your questions or just chat about tech. 
                Feel free to reach out through any of these channels:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Email Contact Option */}
              <motion.a 
                href="mailto:simplysam679@gmail.com" 
                className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md group p-6 flex flex-col items-center"
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div className="relative z-10 w-full">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <FaEnvelope className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">Email</h3>
                  <p className="text-center text-white/90 mb-4">Drop me an email anytime</p>
                  <div className="text-center font-medium">
                    simplysam679@gmail.com
                  </div>
                </div>
              </motion.a>
              
              {/* WhatsApp Contact Option */}
              <motion.a 
                href="https://wa.me/919248573320" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow-md group p-6 flex flex-col items-center"
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div className="relative z-10 w-full">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <FaWhatsapp className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">WhatsApp</h3>
                  <p className="text-center text-white/90 mb-4">Chat with me directly</p>
                  <div className="text-center font-medium">
                    +91 92485 73320
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Call to Action */}
            <div className="mt-10 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Prefer traditional methods? I'll get back to you quickly!
              </p>
              
              <motion.a 
                href="#projects"
                className="inline-flex items-center relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-800 dark:text-white font-semibold px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm hover:shadow-md transition-all duration-300 group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center">
                  View My Projects
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.a>
            </div>

            {/* Original form - commented out 
            {submitStatus === 'success' ? (
              <div className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 p-4 rounded-lg mb-6">
                Thank you for your message! I'll get back to you soon.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label 
                  htmlFor="name" 
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                >
                  Your Name
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="email" 
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                >
                  Email Address
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-4 rounded-lg shadow-md transition-all duration-300 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'}`}
                whileHover={isSubmitting ? {} : { scale: 1.01 }}
                whileTap={isSubmitting ? {} : { scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </span>
                {!isSubmitting && (
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                )}
              </motion.button>
            </form>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 