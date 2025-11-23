'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

// Generate particles outside component to avoid re-render issues
const generateParticles = () => {
  if (typeof window === 'undefined') {
    return Array.from({ length: 20 }, (_, i) => ({
      x: i * 50,
      y: i * 40,
      duration: 3 + (i % 3),
      delay: (i % 5) * 0.4,
    }));
  }
  return Array.from({ length: 20 }, (_, i) => ({
    x: (i * 73) % window.innerWidth,
    y: (i * 97) % window.innerHeight,
    duration: 3 + (i % 3),
    delay: (i % 5) * 0.4,
  }));
};

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const particles = useMemo(() => generateParticles(), []);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 200);

    // Hide loading screen after animation
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-linear-to-br from-primary via-primary to-accent"
        >
          <div className="text-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: 'easeOut',
                type: 'spring',
                stiffness: 200
              }}
              className="mb-8"
            >
              <div className="relative">
                {/* Outer ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: 'linear' 
                  }}
                  className="w-32 h-32 border-4 border-white/30 rounded-full absolute inset-0"
                  style={{ borderTopColor: 'white' }}
                />
                
                {/* Inner logo */}
                <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
                    className="text-primary font-bold text-5xl"
                  >
                    UA
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* Company Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-3xl font-bold text-white mb-2"
            >
              Universal Actuaries
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-white/80 mb-8"
            >
              Loading Excellence...
            </motion.p>

            {/* Progress Bar */}
            <div className="w-64 h-1.5 bg-white/20 rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-white rounded-full"
              />
            </div>

            {/* Animated dots */}
            <div className="flex justify-center gap-2 mt-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    delay: i * 0.2 
                  }}
                  className="w-2 h-2 bg-white rounded-full"
                />
              ))}
            </div>
          </div>

          {/* Background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0,
                  x: particle.x,
                  y: particle.y,
                }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  y: [null, -100],
                }}
                transition={{ 
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
                className="absolute w-1 h-1 bg-white rounded-full"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
