import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const menuItems = [
    { title: "HOME", href: "#home" },
    { title: "ABOUT", href: "#about" },
    { title: "SERVICES", href: "#services" },
    { title: "PROJECTS", href: "#projects" },
    { title: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <span className="text-black font-bold text-xs">MG</span>
            </div>
            <h1 className="text-xl font-bold text-black dark:text-white tracking-tight cursor-pointer">
              Portfolio
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-black dark:text-white"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black dark:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white dark:bg-black border-b border-gray-200 dark:border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Header;
