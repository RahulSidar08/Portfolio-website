
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              <span className="text-purple-600 dark:text-purple-400">Rahul</span> Sidar
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Building digital experiences that matter.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex space-x-4 mb-4">
              <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition">Home</a>
              <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition">About</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition">Skills</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition">Projects</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition">Contact</a>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Rahul Sidar. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};