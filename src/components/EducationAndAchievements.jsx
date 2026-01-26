import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import portfolioData from "../data/portfolio.json";

const EducationAndAchievements = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6 md:mb-16"
        >
          Education & <span className="text-accent">Achievements</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-4 md:mb-8 justify-start">
              <GraduationCap className="text-accent" size={28} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6 flex-1">
              {portfolioData?.education?.map((education, index) => (
                <div className="relative" key={index}>
                  <div className="absolute top-12 -left-10 h-full md:flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent z-10 ring-4 ring-gray-600 dark:ring-gray-800 shrink-0" />
                    <div
                      className={`w-0.5 bg-gray-600 dark:bg-gray-800 ${
                        index === portfolioData?.education?.length - 1
                          ? " min-h-[calc(80%-1.8rem)] "
                          : "  min-h-[110%] "
                      } `}
                    />
                  </div>
                  <div className="bg-gray-800 dark:bg-white/5 p-8 rounded-2xl border border-slate-300 hover:border-slate-400 dark:border-white/10 shadow-sm hover:shadow-md transition-all ease-in-out duration-1000 h-[calc(50%-12px)] flex flex-col justify-center group">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-gray-200 dark:text-white">
                          {education?.degree}
                        </h4>
                        <p className="text-accent font-medium text-sm">
                          {education?.institution}
                        </p>
                      </div>
                      <span className="text-white mt-1 dark:text-white text-xs">
                        {education?.year}
                      </span>
                    </div>
                    <span className="px-3 py-1 w-fit text-white dark:text-white bg-accent/10 dark:bg-white/5 text-xs mt-2 font-medium  rounded-full outline outline-1 outline-accent">
                      CGPA: {education?.cgpa}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-4 md:mb-8 justify-start">
              <Award className="text-accent" size={28} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Achievements
              </h3>
            </div>

            <div className="space-y-6 flex-1">
              {portfolioData?.achievements?.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-800 dark:bg-white/5 p-8 rounded-2xl border border-slate-300 hover:border-slate-400 dark:border-white/10 hover:border-accent/50 transition-all ease-in-out duration-1000 shadow-sm hover:shadow-md h-[calc(50%-12px)] flex flex-col justify-start group"
                >
                  <h4 className="text-lg font-bold text-gray-200 dark:text-white mb-2">
                    {achievement?.title}
                  </h4>
                  <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
                    {achievement?.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndAchievements;
