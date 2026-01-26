import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HashtagAnimation = ({ hashtags = [] }) => {
  const [phase, setPhase] = useState("initial"); // initial, merging, final

  const startAnimation = useCallback(() => {
    // 1. Initial State: Show individual tags
    setPhase("initial");

    // 2. Start Merging after a delay
    const mergeTimer = setTimeout(() => {
      setPhase("merging");
    }, 3000);

    // 3. Show Final Tag after merging finishes
    const finalTimer = setTimeout(() => {
      setPhase("final");
    }, 3800);

    // 4. Restart the cycle after showing the final tag
    const resetTimer = setTimeout(() => {
      startAnimation();
    }, 8000);

    return () => {
      clearTimeout(mergeTimer);
      clearTimeout(finalTimer);
      clearTimeout(resetTimer);
    };
  }, []);

  useEffect(() => {
    const cleanup = startAnimation();
    return cleanup;
  }, [startAnimation]);

  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    merging: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    merging: (custom) => ({
      opacity: 0,
      x: custom.x || 0,
      y: custom.y || 0,
      scale: 0.3,
      filter: "blur(4px)",
      transition: {
        duration: 0.8,
        ease: "anticipate",
      },
    }),
  };

  const finalVariants = {
    initial: {
      opacity: 0,
      scale: 0.2,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      scale: [0.2, 1.1, 1],
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        times: [0, 0.7, 1],
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 1.5,
      filter: "blur(10px)",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative flex justify-center items-center min-h-[4rem] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {phase !== "final" ? (
          <motion.div
            key="initial-container"
            variants={containerVariants}
            initial="initial"
            animate={phase === "merging" ? "merging" : "animate"}
            exit="merging"
            className="flex flex-wrap justify-center gap-4 md:gap-8 items-center"
          >
            {hashtags.map((tag, idx) => {
              // Calculate a pseudo-random "merging" direction towards center
              // This makes them look like they are sucked into the middle
              const angle = (idx / hashtags.length) * Math.PI * 2;
              const x = Math.cos(angle) * -20;
              const y = Math.sin(angle) * -20;

              return (
                <motion.span
                  key={idx}
                  variants={itemVariants}
                  custom={{ x, y }}
                  className="text-xs md:text-sm font-bold text-gray-400 dark:text-gray-500 tracking-[0.3em] uppercase"
                >
                  #{tag}
                </motion.span>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="final-container"
            className="flex flex-col items-center"
          >
            <motion.span
              variants={finalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-lg md:text-2xl font-black text-white dark:text-accent tracking-[0.2em] uppercase text-center"
              style={{
                textShadow: "0 0 20px rgba(var(--accent-rgb), 0.5)",
              }}
            >
              #FullStackDeveloper
            </motion.span>

            {/* Subtle glow effect underneath */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1.5, 2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HashtagAnimation;
