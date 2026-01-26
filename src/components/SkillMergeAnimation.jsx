import React from "react";
import { motion } from "framer-motion";

import { MobileContext } from "../App";

const SkillMergeAnimation = ({ tags = [], role = "Full Stack Developer" }) => {
  const { isMobile } = React.useContext(MobileContext);

  // Animation configuration
  // Animation configuration
  const DURATION = 4; // Seconds per loop
  const DELAY = 2;
  const CENTER_DELAY = DURATION * 0.4; // Time when merge happens

  return (
    <div className="flex w-full items-center justify-center ">
      <div className="relative flex items-center justify-center">
        {/* --- GROUP 1: Individual Tags (The Ingredients) --- */}
        <motion.div
          className="relative flex items-center justify-center gap-3 flex-wrap"
          animate={
            isMobile
              ? {
                  opacity: [1, 1, 0.4, 0],
                  scale: [1, 1, 0.4, 0.2],
                  filter: [
                    "blur(0px)",
                    "blur(0px)",
                    "blur(10px)",
                    "blur(10px)",
                  ],
                }
              : {}
          }
          transition={
            isMobile
              ? {
                  duration: 8, // 8 seconds forward, 8 seconds back = 16s loop total interaction
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  times: [0, 0.4, 0.6, 1], // Hold visible 0-40%, Transition 40-60%, Hold hidden 60-100%
                }
              : {}
          }
        >
          {tags.map((tag, index) => {
            // Calculate direction to move towards center
            // Middle items move less, outer items move more
            const middleIndex = (tags.length - 1) / 2;
            const distFromCenter = index - middleIndex;
            const moveX = distFromCenter * -100; // Pixels to move inward

            return (
              <motion.div
                key={index}
                className="z-10 whitespace-nowrap rounded-full border border-gray-400 dark:border-accent bg-accent/20 dark:bg-accent/5 px-3 py-1.5 text-xs md:text-sm font-medium text-accent backdrop-blur-sm"
                // initial={{ opacity: 0, scale: 0 }}
                animate={
                  !isMobile
                    ? {
                        x: [0, 0, moveX, moveX],
                        opacity: [1, 1, 0.4, 0],
                        scale: [1, 1, 0.4, 0.2],
                        filter: [
                          "blur(0px)",
                          "blur(0px)",
                          "blur(10px)",
                          "blur(10px)",
                        ],
                      }
                    : {}
                }
                transition={
                  !isMobile
                    ? {
                        duration: 8, // 8 seconds forward, 8 seconds back = 16s loop total interaction
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        times: [0, 0.4, 0.6, 1], // Hold visible 0-40%, Transition 40-60%, Hold hidden 60-100%
                      }
                    : {}
                }
              >
                <span className="bg-gradient-to-br from-gray-800 dark:from-accent to-gray-800 dark:to-accent/50 bg-clip-text text-transparent">
                  {tag}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- GROUP 2: The Merged Result (The Output) --- */}
        <motion.div
          className="absolute z-20 whitespace-nowrap rounded-full border-2 dark:border border-gray-400 dark:border-accent bg-white dark:bg-black px-6 py-2 text-lg font-bold text-accent shadow-[0_0_30px_-5px_rgba(var(--accent)/0.6)] backdrop-blur-md"
          //   initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0, 1, 1], // Hide -> Hide -> Show -> Show
            scale: [0.5, 0.5, 1, 1], // Small -> Small -> Normal -> Normal
            filter: ["blur(10px)", "blur(10px)", "blur(0px)", "blur(0px)"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            times: [0, 0.4, 0.6, 1], // Hold hidden 0-40%, Transition 40-60%, Hold visible 60-100%
          }}
        >
          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-gray-800 dark:from-accent/70 via-gray-800 dark:via-accent to-gray-800 dark:to-accent/70 bg-clip-text text-transparent">
              #{role}
            </span>
          </div>
        </motion.div>

        {/* --- FX: Impact Flash --- */}
        <motion.div
          className="absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/80 blur-[8em]"
          animate={{
            opacity: [0, 0.2, 1, 1], // Hide -> Hide -> Show -> Show
            scale: [0.5, 0.5, 1, 1], // Small -> Small -> Normal -> Normal
            top: ["5%", "5%", "-150%", "-180%"],
            left: ["10%", "20%", "60%", "20%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            times: [0, 0.2, 0.8, 1], // Hold hidden 0-40%, Transition 40-60%, Hold visible 60-100%
          }}
        />
      </div>
    </div>
  );
};

export default SkillMergeAnimation;
