import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "Tailwind CSS",
      "Material UI",
      "shadcn/ui",
      "HTML5/CSS3",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Redis",
      "Swagger",
      "Postman",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Cloud & Tools",
    items: ["AWS EC2", "AWS S3", "Git", "GitHub", "Cursor IDE", "AI Tools"],
  },
];

const Skills = () => {
  return (
    <section
      id="services"
      className="py-12 md:py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10 md:mb-16"
        >
          Technical <span className="text-accent">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white hover:bg-gray-800 dark:bg-white/5 p-6 rounded-2xl border border-slate-300 hover:border-slate-400 dark:border-white/10 transition-colors duration-300 group h-full flex flex-col shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2 group-hover:text-accent transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
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
