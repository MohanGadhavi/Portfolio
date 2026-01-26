import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import portfolioData from "../data/portfolio.json";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-10 md:py-20 bg-gray-50 dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6 md:mb-16"
        >
          Professional <span className="text-accent">Experience</span>
        </motion.h2>

        <div className="space-y-6 md:space-y-12">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              // initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              // whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative pl-0 md:pl-0"
            >
              <div className="md:flex items-start gap-12">
                <div className="hidden md:block self-stretch relative">
                  <div className="absolute top-12 h-full md:flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-accent z-10 ring-4 ring-gray-600 dark:ring-gray-800 shrink-0" />
                    <div
                      className={`w-0.5 bg-gray-600 dark:bg-gray-800 ${
                        index === portfolioData.experience?.length - 1
                          ? " min-h-[calc(90%-2.2rem)] "
                          : "  min-h-[110%] "
                      } `}
                    />
                  </div>
                </div>

                <div className="flex-1 bg-gray-800 dark:bg-white/5 p-8 rounded-2xl border border-slate-300 hover:border-slate-400 dark:border-white/10 transition-all ease-in-out duration-1000 shadow-sm hover:shadow-lg group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-200 dark:text-white flex items-center gap-2">
                        <Briefcase size={20} className="text-accent" />
                        {exp.role}
                      </h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 text-sm mt-2 md:mt-0 bg-white dark:bg-white/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-200 dark:text-gray-300 text-sm leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-accent font-black">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
