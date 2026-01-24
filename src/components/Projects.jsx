import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Community Track",
    description:
      "Collaborative task and project management system designed to streamline team workflows and enhance productivity.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Aspiration Trail",
    description:
      "Interactive learning and growth platform fostering skill development through gamified pathways and mentorship.",
    tags: ["React", "Tailwind CSS", "Express"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 md:py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10 md:mb-16"
        >
          Featured <span className="text-accent">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white hover:bg-gray-800 dark:bg-white/5 rounded-2xl overflow-hidden border border-slate-300 hover:border-slate-400 dark:border-white/10 transition-all ease-in-out duration-1000 group shadow-sm hover:shadow-xl group"
            >
              <div className="h-48 bg-gray-200 group-hover:bg-gray-300 dark:bg-white/10 dark:group-hover:bg-accent/5 flex items-center justify-center p-4 transition-colors duration-1000">
                <div className="text-4xl font-bold text-gray-400 dark:text-white/20 group-hover:text-accent transition-colors">
                  {project.title.substring(0, 2)}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-200 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-400 dark:text-gray-400 text-sm mb-6 h-20 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* <div className="flex gap-4">
                  <a href={project.link} className="flex items-center gap-1 text-sm text-white hover:text-green-400 transition-colors">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.link} className="flex items-center gap-1 text-sm text-white hover:text-green-400 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
