'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function EnhancedScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-accent to-primary origin-left z-50"
        style={{ scaleX }}
      />

      {/* Scroll percentage indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollPercentage > 5 ? 1 : 0 }}
        className="fixed bottom-8 left-8 z-40 hidden md:block"
      >
        <motion.div
          className="relative w-16 h-16"
          whileHover={{ scale: 1.1 }}
        >
          {/* Circular progress */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-gray-200"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              className="text-primary"
              style={{
                pathLength: scrollYProgress,
              }}
              strokeDasharray="175.93"
              strokeDashoffset="0"
            />
          </svg>
          
          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">
              {scrollPercentage}%
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: scrollPercentage > 20 ? 1 : 0,
          y: scrollPercentage > 20 ? 0 : 20,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-40 bg-accent text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </>
  );
}
