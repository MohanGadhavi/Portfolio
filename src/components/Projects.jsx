import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import portfolioData from "../data/portfolio.json";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-10 md:py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6 md:mb-16"
        >
          Featured <span className="text-accent">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-600 hover:border-gray-400 dark:border-white/10 transition-colors duration-300 group shadow-sm hover:shadow-xl relative"
            >
              <div className="h-48 bg-gray-200 group-hover:bg-gray-400 dark:bg-white/10 dark:group-hover:bg-accent/5 flex items-center justify-center p-4 transition-colors duration-300">
                <div className="text-4xl font-bold text-gray-400 dark:text-white/20 group-hover:text-accent transition-colors">
                  {project.title.substring(0, 2)}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-200 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 dark:text-gray-400 text-sm mb-6 h-20 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs md:text-sm font-medium text-white dark:text-gray-300  bg-accent/10 dark:bg-white/5 px-3 py-1 rounded-full outline outline-1 outline-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute top-4 right-4 flex gap-4">
                  {project.github && project.github.length > 0 && (
                    <a
                      href={project.github}
                      className="min-w-8 h-8 group-hover:px-3 flex items-center justify-center gap-1 text-sm outline outline-2 dark:outline-1 outline-accent/80 rounded-full text-white hover:text-accent bg-gray-800/60 dark:bg-white/20 transition-all duration-500"
                    >
                      <Github size={18} />{" "}
                      <span className="hidden group-hover:inline transition-all duration-500">
                        Code
                      </span>
                    </a>
                  )}
                  {project.preview && project.preview.length > 0 && (
                    <a
                      href={project.preview}
                      className="min-w-8 h-8 group-hover:px-3 flex items-center justify-center gap-1 text-sm outline outline-2 dark:outline-1 outline-accent/80 rounded-full text-white hover:text-accent bg-gray-800/60 dark:bg-white/20 transition-all duration-500"
                    >
                      <ExternalLink size={18} />
                      <span className="hidden group-hover:inline transition-all duration-500">
                        Preview
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
