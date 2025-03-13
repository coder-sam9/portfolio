import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile-pic.jpg";
import resume from "../assets/download/Sami-Uddin-Resume.pdf";

const LazyImage = ({ src, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    const imgElement = document.getElementById(`lazy-image-${alt}`);
    if (imgElement) {
      observer.observe(imgElement);
    }

    return () => {
      if (imgElement) {
        observer.unobserve(imgElement);
      }
    };
  }, [alt]);

  return (
    <img
      id={`lazy-image-${alt}`}
      src={isVisible ? src : ""}
      alt={alt}
      className={className}
    />
  );
};

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    console.log("Resume downloaded");
  };

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-white dark:bg-gray-800 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row md:justify-center content-center items-center md:items-start gap-10">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-600">
                <LazyImage
                  src={profilePic}
                  alt="Sami Uddin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3 self-center">
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                I'm a developer from Hyderabad, Telangana who loves building
                things that feel good to use. Whether it's dragging stickers or
                integrating AI, I enjoy creating smooth, simple user
                experiences.
                <br />
                <br />
                Big fan of coffee, clean UIs, and learning new stuff one project
                at a time.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <motion.a
                  href="#contact"
                  className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Contact Me</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.a>
                <motion.a
                  href={resume}
                  download="Sami-Uddin-Resume.pdf"
                  onClick={handleDownload}
                  className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-800 dark:text-white font-semibold px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm hover:shadow-md transition-all duration-300 group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Download Resume</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;