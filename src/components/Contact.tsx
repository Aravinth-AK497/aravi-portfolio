import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aravinth-g-b46b0a2a5',
      icon: <Linkedin size={24} />,
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Aravinth-AK497',
      icon: <Github size={24} />,
      color: 'from-gray-700 to-gray-800',
      hoverColor: 'hover:from-gray-800 hover:to-gray-900'
    },
    {
      name: 'Email',
      url: 'mailto:aravinth@example.com',
      icon: <Mail size={24} />,
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Let's <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to turn ideas into intelligent solutions? Let's collaborate and build something amazing together.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or just say hi!"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-4 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Get in Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  I'm always interested in new opportunities, exciting projects, and meaningful collaborations. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Connect with me
                </h4>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className={`flex items-center space-x-4 p-4 bg-gradient-to-r ${social.color} ${social.hoverColor} text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      {social.icon}
                      <div>
                        <span className="font-medium">{social.name}</span>
                        <p className="text-sm opacity-90">
                          {social.name === 'Email' ? 'Send me an email' :
                           social.name === 'LinkedIn' ? 'Let\'s connect professionally' :
                           'Check out my repositories'}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Fun Quote */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="p-6 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
              >
                <p className="text-gray-600 dark:text-gray-300 text-center italic mb-2">
                  "The best way to predict the future is to create it."
                </p>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  - Let's build it together! 🚀
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;