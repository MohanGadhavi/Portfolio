import { motion } from "framer-motion";
import portfolioData from "../data/portfolio.json";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-10 md:py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6 md:mb-16"
        >
          Technical <span className="text-accent">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 items-stretch">
          {portfolioData.skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 hover:bg-gray-800 dark:bg-white/5 p-6 rounded-2xl border border-slate-300 hover:border-slate-400 dark:border-white/10 transition-colors duration-300 group h-full flex flex-col shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-200 dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2 group-hover:text-accent transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/10 dark:bg-white/5 text-white dark:text-gray-300 text-sm rounded-lg outline outline-1 outline-accent hover:bg-accent/20 dark:hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
