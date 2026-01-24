import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Download, MousePointerClick } from "lucide-react";
import TestimonialBar from "./TestimonialBar";

const Hero = ({ personalInfo }) => {
  return (
    <section
      id="home"
      className=" min-h-[85vh] md:min-h-screen flex flex-col pt-32 bg-white dark:bg-black text-white transition-colors duration-300 relative"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 right-[-10em] w-[500px] h-[500px] bg-accent/30 dark:bg-accent/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[-5em] left-[-15em] w-[500px] h-[500px] bg-accent/20 dark:bg-accent/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Large Name Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-10 w-full"
        >
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 text-gray-800 dark:text-white">
            {personalInfo.firstName}{" "}
            <span className="text-gray-600 dark:text-gray-400">
              {personalInfo.lastName}
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-6 md:gap-16">
            {personalInfo?.hashtags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs md:text-sm font-bold text-gray-600 dark:text-gray-400 tracking-widest"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bio Section - Centered and Clean */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-4xl text-center mt-10 md:mt-24 scroll-mt-32"
        >
          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10 font-medium">
            I design and develop end-to-end web solutions focused on performance
            and scalability.
          </p>
          {/* <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10 font-medium italic">
            Currently working as a Full Stack Developer at Digital MetaWork.
          </p> */}
          {/* <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10 font-medium">
            Welcome to my portfolio! I'm{" "}
            <span className="text-gray-800 dark:text-gray-400 font-bold capitalize">
              {personalInfo.firstName}
            </span>
            , a dedicated {personalInfo.role.toLowerCase()} from India with a
            passion for crafting visually stunning, functional websites that
            deliver exceptional user experiences.
          </p> */}

          <div className="flex flex-col items-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-3 md:py-3 rounded-2xl bg-accent text-black font-extrabold text-lg transition-all hover:bg-accent/80 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgb(var(--accent)/0.25)]"
            >
              Start a Project Now <ArrowRight size={24} />
            </a>

            <p className="text-sm text-gray-500 font-medium tracking-wide">
              LET'S BUILD SOMETHING EXTRAORDINARY
            </p>
          </div>
        </motion.div>
      </div>

      {/* Testimonial Bar Section */}
      {/* <TestimonialBar /> */}
    </section>
  );
};

export default Hero;
