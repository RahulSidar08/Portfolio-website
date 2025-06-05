import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import jobhive from "../assets/jobHive.png";
import RecipeVault from "../assets/recipeVault.png"
import MernChat from "../assets/mernChat.png"


export const Projects = () => {


  const projects = [
    {
      id: 1,
      title: "JobHive",
      description: "JobHive is a modern job portal web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It serves as a platform for job seekers and employers, enabling efficient hiring and job search processes.",
      image: jobhive,
      tags: ["MERN", "react", "node", "Express", "mongodb"],
      github: "https://github.com/RahulSidar08/JobHive",
      demo: "https://jobhive-3.onrender.com/"
    },
    {
      id: 2,
      title: "MERN CHAT",
      description: "MERNChat is a full-stack real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack with Socket.io for instant messaging. It allows users to engage in seamless one-on-one conversations with features like authentication, real-time message.",
      image: MernChat,
      tags: ["MERN", "react", "node", "Express", "mongodb"],
      github: "https://github.com/RahulSidar08/MERN-CHAT",
      demo: "https://mern-chat-nfyf.onrender.com/"
    },
    {
      id: 3,
      title: "Recipe Vault",
      description: "Recipe Vault is a full-stack web application built with the MERN stack (MongoDB, Express.js, React, and Node.js) that allows users to manage, store, and share their favorite recipes.",
      image: RecipeVault,
      tags: ["MERN", "react", "node", "Express", "mongodb"],
      github: "https://github.com/RahulSidar08/RecipeVault",
      demo: "https://recipe-vault-navy.vercel.app/"
    },
    {
      id: 4,
      title: "InsightAI Times",
      description: "A Personalized News Digest Platform with AI Summarization and Sentiment Analysis Insight AI Times is an AI-powered news aggregation platform that delivers personalized news digests to users based on their selected interests. The application uses advanced AI models for summarizing news articles and analyzing their sentiment, providing users with concise and emotionally contextualized content.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["MERN", "react", "node", "Express", "mongodb"],
      github: "https://github.com/RahulSidar08/InsightAI-Times",
      demo: "https://insight-ai-times.vercel.app"
    },
    {
      id: 5,
      title: "Blog Craft",
      description: "Blog Craft is a full-stack blogging platform that enables users to create, edit, publish, and manage blog posts with ease. The application supports user authentication, rich text editing, and a responsive UI for a seamless writing and reading experience.",
      image: "https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Chart.js"],
      github: "https://github.com/RahulSidar08/Blog-Craft",
      demo: "https://blog-craft-seven.vercel.app"
    },
    {
      id: 6,
      title: "Finalyze (Finance + analyze)",
      description: "Finalyze is a powerful and intuitive web application designed to help users track, analyze, and visualize their personal or business financial data. With dynamic charts and insightful summaries, it provides a clear picture of income, expenses.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Next.js", "React", "Node.js", "MongoDB", "Chart.js"],
      github: "https://github.com/RahulSidar08/Finance-Visualizer",
      demo: "https://finalyze-seven.vercel.app"
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

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="projects"
      className="w-full bg-white dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-widest text-purple-600 dark:text-purple-400 font-bold mb-2">Portfolio</h2>
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Recent Projects</h3>
          <div className="w-16 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mb-8"></div>


        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={projectVariants}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-gray-900/80 p-2 rounded-full hover:bg-gray-900 transition"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-purple-600/80 p-2 rounded-full hover:bg-purple-600 transition"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};