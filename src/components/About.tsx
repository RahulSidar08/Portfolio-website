import { useState } from "react";
import { motion } from "framer-motion";
import { BiCode, BiBook } from "react-icons/bi";

export const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const tabVariants = {
    inactive: { opacity: 0.7, y: 0 },
    active: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="about"
      className="w-full bg-white dark:bg-gray-900 text-black dark:text-white py-24 px-4 sm:px-6 lg:px-16"
    >
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-widest text-purple-600 dark:text-purple-400 font-bold mb-2">About Me</h2>
          <h3 className="text-4xl font-bold mb-4">Know Me Better</h3>
          <div className="w-16 h-1 bg-purple-600 dark:bg-purple-400 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Image Section */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-200 dark:bg-purple-900/30 rounded-lg rotate-3"></div>
              <div className="absolute -inset-4 bg-blue-200 dark:bg-blue-900/30 rounded-lg -rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional workspace"
                className="relative rounded-lg shadow-lg object-cover w-full max-w-md z-10"
              />
            </div>
          </motion.div>

          {/* Right Content Section */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">I'm a passionate <span className="text-purple-600 dark:text-purple-400">Web Developer</span></h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am a full-stack web developer with a dedication to creating interactive and responsive web applications. 
              With expertise in front-end technologies like JavaScript, React, Redux, and modern CSS frameworks, 
              as well as back-end knowledge including Node.js and Nest.js, I'm equipped to build complete, scalable solutions.
            </p>

            {/* Tabs */}
            <div className="flex space-x-6 border-b border-gray-300 dark:border-gray-700 mb-6">
              {[
                { id: "skills", label: "Skills", icon: <BiCode className="text-xl" /> },
                { id: "education", label: "Education", icon: <BiBook className="text-xl" /> },
                // { id: "other skills", label: "Achievements", icon: <BiTrophy className="text-xl" /> }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-2 text-lg font-semibold flex items-center gap-2 ${
                    activeTab === tab.id
                      ? "border-b-2 border-purple-500 text-purple-600 dark:text-purple-400"
                      : "text-gray-700 dark:text-gray-400"
                  }`}
                  variants={tabVariants}
                  animate={activeTab === tab.id ? "active" : "inactive"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.icon}
                  {tab.label}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div 
              className="text-gray-700 dark:text-gray-300 space-y-2 min-h-[200px]"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              key={activeTab}
            >
              {activeTab === "skills" && (
                <motion.ul 
                  className="grid grid-cols-2 gap-2"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {["React", "NextJS", "Bootstrap", "Tailwind", "JavaScript", "TypeScript", "Node.js", "MongoDB"].map((skill) => (
                    <motion.li 
                      key={skill} 
                      className="flex items-center gap-2"
                      variants={itemVariants}
                    >
                      <span className="text-purple-600 dark:text-purple-400">✓</span> {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              )}

              {activeTab === "education" && (
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div 
                    className="mb-4 border-l-2 border-purple-500 pl-4"
                    variants={itemVariants}
                  >
                    <h4 className="text-xl font-bold">IIIT Naya Raipur</h4>
                    <p className="text-gray-600 dark:text-gray-400">B.Tech in Computer Science & Engineering (2021-2025)</p>
                  </motion.div>
                </motion.div>
              )}
{/* 
              {activeTab === "other skills" && (
                <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariants}>
                    <p className="mb-2"><strong>Tools & Technologies:</strong> Git, Docker, Kubernetes, Postman</p>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <p className="mb-2"><strong>Languages:</strong> JavaScript, TypeScript, C++, SQL</p>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <p className="mb-2"><strong>Problem Solving:</strong> Data Structures, Algorithms, System Design</p>
                  </motion.div>
                </motion.div>
              )} */}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};