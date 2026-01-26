import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FileBadge, MessageSquareShare, SendHorizonal } from "lucide-react";
import TestimonialBar from "./TestimonialBar";
import HashtagAnimation from "./HashtagAnimation";
import portfolioData from "../data/portfolio.json";
import SkillMergeAnimation from "./SkillMergeAnimation";

const Hero = () => {
  return (
    <section
      id="home"
      className=" min-h-[85dvh] md:min-h-dvh flex flex-col pt-32 bg-gradient-to-tr from-accent/10 to-white dark:bg-none dark:bg-black text-white transition-colors duration-300 relative"
    >
      {/* Background Glow */}
      <div className="hidden dark:block md:block absolute -z-0 -bottom-[10em] md:top-1/4 right-[-15em] md:right-[-10em] w-[500px] h-[500px] bg-accent/30 dark:bg-accent/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="hidden md:block absolute -z-0 top-[-5em] left-[-15em] w-[500px] h-[500px] bg-accent/20 dark:bg-accent/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Large Name Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-10 w-full"
        >
          <h1 className="relative w-fit max-w-full mx-auto text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 text-gray-800 dark:text-white">
            {portfolioData.personalInfo.firstName}{" "}
            <span className="bg-gradient-to-tr from-gray-900/80 to-gray-900/40 dark:from-white/80 dark:to-white/10 bg-clip-text text-transparent">
              {portfolioData.personalInfo.lastName}
            </span>
          </h1>

          {/* <HashtagAnimation hashtags={portfolioData.personalInfo?.hashtags} /> */}
          <SkillMergeAnimation
            tags={portfolioData?.hashtags}
            role={portfolioData?.role}
          />
        </motion.div>

        {/* Bio Section - Centered and Clean */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-4xl text-center mt-10 md:mt-24 scroll-mt-32"
        >
          <p className="text-lg md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed mb-10 font-medium">
            {portfolioData.summary}
          </p>
          <div className="flex flex-col items-center gap-8 md:gap-6">
            <div className="w-full md:w-auto px-4 md:px-0 flex flex-col md:flex-row flex-wrap justify-center gap-4">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="inline-flex items-center justify-between md:justify-normal gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl bg-accent text-gray-900 dark:text-black font-bold text-base md:text-lg transition-all duration-200 hover:bg-accent/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgb(var(--accent)/0.3)]"
              >
                Email me <MessageSquareShare size={20} />
              </a>
              <a
                href="/MohanGadhavi.pdf"
                download
                className="inline-flex items-center justify-between md:justify-normal gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl border border-accent bg-gray-800 dark:bg-transparent text-accent font-bold text-base md:text-lg transition-all duration-200 hover:bg-gray-700 dark:hover:bg-accent/10 hover:scale-105 active:scale-95"
              >
                View Resume <FileBadge size={20} />
              </a>
            </div>

            <p className="mt-0 md:mt-10 text-sm text-gray-800 dark:text-gray-400 font-medium tracking-wide italic">
              " {portfolioData.quote} "
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
