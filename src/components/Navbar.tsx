import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Mobile Menu Button (left side on small screens) */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-gray-700 dark:text-white mr-2"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
          </button>
        </div>

        {/* Brand Name (hidden on small screens) */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block text-2xl font-bold text-gray-800 dark:text-white whitespace-nowrap mx-auto"
        >
          <span className="text-purple-600 font-vibe italic text-4xl sm:text-5xl">
            Rahul Sidar
          </span>
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, i) => (
            <motion.button
              key={item.to}
              onClick={() => scrollToSection(item.to)}
              className="text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {item.label}
            </motion.button>
          ))}

          <motion.button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-[72px] inset-x-4 w-[calc(100%-2rem)] max-h-[70vh] overflow-y-auto bg-white dark:bg-gray-800 shadow-xl rounded-xl z-[999] border dark:border-gray-700 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col px-6 py-5 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.to}
                  onClick={() => scrollToSection(item.to)}
                  className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
