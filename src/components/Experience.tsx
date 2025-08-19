import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Trophy, Code } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Data Engineering Intern",
      company: "Cognifyz",
      period: "2025",
      type: "Internship",
      description: "Working with big data processing, ETL pipelines, and data analytics solutions.",
      icon: <Briefcase className="text-blue-500" size={24} />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Full Stack Python Intern",
      company: "Phoenix Softech",
      period: "2024",
      type: "Internship",
      description: "Developed web applications using Python, Django, and modern frontend technologies.",
      icon: <Code className="text-green-500" size={24} />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "App Development Intern",
      company: "SriSoftwarz",
      period: "2024",
      type: "Internship",
      description: "Built mobile applications using Flutter and worked on cross-platform solutions.",
      icon: <Code className="text-purple-500" size={24} />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Team Lead",
      company: "Smart India Hackathon 2023",
      period: "2023",
      type: "Achievement",
      description: "Led a team to finalist position in national hackathon with innovative AI solution.",
      icon: <Trophy className="text-yellow-500" size={24} />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Professional <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building expertise through hands-on experience and leadership
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-violet-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  className={`ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  } md:w-5/12 bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg`}
                >
                  <div className="flex items-center mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} mr-3`}>
                      {exp.icon}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                        {exp.type}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {exp.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-lg font-semibold text-violet-600 dark:text-violet-400">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;