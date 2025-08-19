import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, FileText } from 'lucide-react';


const Resume: React.FC = () => {
  const certifications = [
    {
      title: "Industry 4.0 & IIoT",
      issuer: "NPTEL",
      icon: <Award className="text-blue-500" size={24} />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Cloud Computing Basics",
      issuer: "Simplilearn",
      icon: <Award className="text-green-500" size={24} />,
      color: "from-green-500 to-green-600"
    }
  ];

  //const handleDownloadResume = () => {
  // In a real application, this would trigger a PDF download
  //  window.open('#', '_blank');
  //};

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Resume & <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-violet-600 rounded-2xl flex items-center justify-center"
                >
                  <FileText size={48} className="text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  My Resume
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Download my complete resume to learn more about my experience, skills, and achievements.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  //onClick={handleDownloadResume}
                  className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-3"
                >
                  <Download size={20} />
                  <a href="/ar.pdf" target="_blank" rel="noopener noreferrer" download>
                    <span>Download Resume</span>
                  </a>
                </motion.button>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center md:text-left">
                Certifications
              </h3>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                    className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg flex items-center"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} mr-4 flex-shrink-0`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                        {cert.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {cert.issuer}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
              >
                <p className="text-gray-600 dark:text-gray-300 text-center italic">
                  "Continuous learning is the key to staying relevant in the rapidly evolving world of technology."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;