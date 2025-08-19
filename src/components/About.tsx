import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-12">
            About <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-left"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Aspiring AI/ML Engineer and tech enthusiast who loves turning data into smart, impactful solutions. 
                Python is my playground, and I enjoy creating intelligent models that solve real-world problems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I believe technology should make lives better — not just run on code. 
                Outside of tech, I sketch, game, and even write Tamil poetry while debugging models.
              </p>
              
              {/* Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                >
                  <Code className="text-blue-600 mb-2" size={32} />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Clean Code</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-4 bg-violet-50 dark:bg-violet-900/20 rounded-lg"
                >
                  <Lightbulb className="text-violet-600 mb-2" size={32} />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Innovation</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg"
                >
                  <Heart className="text-red-600 mb-2" size={32} />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Impact</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative"
            >
              {/* Fun Fact Card */}
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)" 
                }}
                className="bg-gradient-to-br from-blue-500 to-violet-600 p-8 rounded-2xl text-white shadow-xl"
              >
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4">Fun Fact</h3>
                <p className="text-lg leading-relaxed">
                  "I can debug YOLOv8 while writing Tamil poetry."
                </p>
                <div className="absolute top-4 right-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 bg-white/30 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 w-8 h-8 bg-blue-200 dark:bg-blue-600 rounded-full opacity-70"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-violet-200 dark:bg-violet-600 rounded-full opacity-70"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;