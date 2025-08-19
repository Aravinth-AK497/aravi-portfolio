import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  X, Zap, Eye, MessageSquare, Search } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Face Attendance System",
      shortDesc: "AI-powered attendance tracking with 98% accuracy",
      fullDesc: "Advanced computer vision system using Mediapipe and ML algorithms for real-time face recognition and attendance tracking. Features include anti-spoofing, multiple face detection, and comprehensive reporting dashboard.",
      tech: ["Python", "Mediapipe", "OpenCV", "ML", "Flask"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      accuracy: "98%",
      icon: <Eye className="text-blue-500" size={24} />,
    },
    {
      id: 2,
      title: "Notes App",
      shortDesc: "Flutter app with text and audio notes",
      fullDesc: "Comprehensive note-taking mobile application built with Flutter. Features include text notes, audio recording, local storage, advanced search functionality, categorization, and sync capabilities across devices.",
      tech: ["Flutter", "Dart", "SQLite", "Local Storage"],
      image: "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg",
      features: ["Text & Audio Notes", "Search", "Local Storage"],
      icon: <MessageSquare className="text-green-500" size={24} />,
    },
    {
      id: 3,
      title: "Water D Rover",
      shortDesc: "YOLOv8 robot for water waste detection",
      fullDesc: "Autonomous rover equipped with YOLOv8 object detection for identifying and mapping water waste sources. Includes real-time monitoring, GPS tracking, and automated reporting system for environmental conservation efforts.",
      tech: ["YOLOv8", "Python", "ROS", "Computer Vision", "IoT"],
      image: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg",
      impact: "Environmental Conservation",
      icon: <Zap className="text-cyan-500" size={24} />,
    },
    {
      id: 4,
      title: "MedAI",
      shortDesc: "AI-powered medical report summarizer",
      fullDesc: "Intelligent medical report analysis system with multilingual support and voice input/output. Uses advanced NLP to summarize complex medical documents, extract key insights, and provide voice-activated interactions for accessibility.",
      tech: ["NLP", "Python", "Speech Recognition", "ML", "Multi-language"],
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
      features: ["Multilingual", "Voice I/O", "AI Summarization"],
      icon: <Search className="text-red-500" size={24} />,
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Innovative solutions solving real-world problems with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full">
                  {project.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-violet-600 hover:text-violet-700 transition-colors duration-200"
                  >
                    
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <div>
                      <div className="relative h-64">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          {project.icon}
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white ml-3">
                            {project.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {project.fullDesc}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>


                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;