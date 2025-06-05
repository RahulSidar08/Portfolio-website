
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaDocker
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiNestjs,
} from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
export const Skills = () => {
  const skillCategories = [
    {
      title: "Language",
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "c++", icon: <TbBrandCpp /> },
        { name: "SQL", icon: <SiMysql/> },
        { name: "Python", icon: <FaPython /> },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Redux", icon: <SiRedux /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Nest.js", icon: <SiNestjs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", icon: <FaGithub /> },
        { name: "Docker", icon: <FaDocker /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="skills"
      className="w-full bg-gray-100 dark:bg-gray-800 py-24 px-4 sm:px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-widest text-purple-600 dark:text-purple-400 font-bold mb-2">Professional Skills</h2>
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Technical Expertise</h3>
          <div className="w-16 h-1 bg-purple-600 dark:bg-purple-400 mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6"
              variants={categoryVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="space-y-2"
                    variants={skillVariants}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
                        <span className="text-2xl text-purple-600 dark:text-purple-400">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};