
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import Profile from "../assets/Profile.jpg";
export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full opacity-20 filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full opacity-20 filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        {/* Left Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-lg sm:text-xl font-medium text-purple-600 dark:text-purple-400 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hello 👋
          </motion.h2>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I'm <span className="text-purple-600 dark:text-purple-400">Rahul Sidar</span>
          </motion.h1>

          <motion.div
            className="h-12 sm:h-16 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'MERN Stack Developer',
                2000,
                'Software Engineer',
                2000,
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400"
            />
          </motion.div>

          <motion.p
            className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            A passionate Software Developer. Let's build something
            amazing together!
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center md:justify-start gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <motion.a
              href="https://github.com/RahulSidar08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 text-2xl"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rahul-sidar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-2xl"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://x.com/SidarRahul_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <motion.a
              href="https://drive.google.com/file/d/1kXqR7uVf1RcOa34DPT5MFSQRu4G6Asgt/view?usp=sharing"
              className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition font-medium flex items-center justify-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>📄 Download Resume</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition font-medium flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>🤝 Let's Connect</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image/Animation */}
        <motion.div
          className="relative w-72 h-72 md:w-96 md:h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute inset-4 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-8 bg-gradient-to-bl from-indigo-500 to-purple-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={Profile}
              alt="Rahul Sidar"
              className="object-cover w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        onClick={() => {
          const nextSection = document.getElementById("about");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-gray-700 dark:border-gray-300 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-gray-700 dark:bg-gray-300 rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>

    </section>
  );
};