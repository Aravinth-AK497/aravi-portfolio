import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const fullText = "AI/ML Engineer | Innovator";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-violet-900 to-blue-800 dark:from-gray-900 dark:via-blue-900 dark:to-violet-900">
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -100, null],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          {/* Avatar */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 p-1 mb-8"
          >
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              {/* Photo placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-violet-100 flex items-center justify-center">
                <Sparkles size={48} className="text-blue-600" />
              </div>
            </div>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 opacity-0 hover:opacity-20 transition-opacity duration-300"
              whileHover={{ opacity: 0.3 }}
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent">
              Aravinth
            </span>
            <span className="text-white"> (Aravi)</span>
          </motion.h1>

          {/* Typing Effect Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-xl md:text-2xl lg:text-3xl text-blue-200 mb-8 min-h-[2em]"
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToProjects}
          className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
        >
          <span>Explore My Work</span>
          <ChevronDown className="animate-bounce" size={20} />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;