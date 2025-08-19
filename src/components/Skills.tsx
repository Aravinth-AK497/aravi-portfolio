import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Globe, Smartphone, Database, Cloud } from 'lucide-react';

const Skills: React.FC = () => {
  const [visibleBars, setVisibleBars] = useState<Set<string>>(new Set());

  const skillCategories = [
    {
      icon: <Code className="text-blue-600" size={32} />,
      title: "Programming",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 85 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      icon: <Brain className="text-violet-600" size={32} />,
      title: "ML/AI",
      skills: [
        { name: "Computer Vision", level: 90 },
        { name: "YOLOv8", level: 88 },
        { name: "NLP", level: 75 },
        { name: "Mediapipe", level: 85 }
      ]
    },
    {
      icon: <Globe className="text-green-600" size={32} />,
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Angular", level: 80 },
        { name: "Full Stack Python", level: 85 }
      ]
    },
    {
      icon: <Smartphone className="text-orange-600" size={32} />,
      title: "Mobile",
      skills: [
        { name: "Flutter", level: 80 }
      ]
    },
    {
      icon: <Database className="text-purple-600" size={32} />,
      title: "Tools & Analytics",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Git/GitHub", level: 90 }
      ]
    },
    {
      icon: <Cloud className="text-sky-600" size={32} />,
      title: "Cloud",
      skills: [
        { name: "Cloud Basics", level: 70 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill');
            if (skillName) {
              setTimeout(() => {
                setVisibleBars(prev => new Set([...prev, skillName]));
              }, Math.random() * 1000);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillBars = document.querySelectorAll('[data-skill]');
    skillBars.forEach(bar => observer.observe(bar));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white ml-3">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} data-skill={`${category.title}-${skill.name}`}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-violet-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: visibleBars.has(`${category.title}-${skill.name}`) 
                            ? `${skill.level}%` 
                            : 0 
                        }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;