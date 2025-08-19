import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const DownloadCVButton: React.FC = () => {
  //const handleDownload = () => {
    // In a real application, this would trigger a PDF download
   // window.open('#', '_blank');
  //};

  return (
    <a href='/ar.pdf' download>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <motion.button
       // onClick={handleDownload}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
          rotate: [0, -10, 10, 0]
        }}
        whileTap={{ scale: 0.9 }}
        className="bg-gradient-to-r from-blue-600 to-violet-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        title="Download CV"
      >
        <motion.div
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          <Download size={24} />
        </motion.div>
      </motion.button>

      {/* Tooltip */}
      
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
         
          Download CV
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      
    </motion.div>
    </a>
  );
};

export default DownloadCVButton;