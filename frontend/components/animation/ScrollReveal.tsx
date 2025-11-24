'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 100,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const getTransform = () => {
    switch (direction) {
      case 'left':
        return {
          x: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [distance, 0, 0, -distance]),
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
        };
      case 'right':
        return {
          x: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-distance, 0, 0, distance]),
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
        };
      case 'down':
        return {
          y: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-distance, 0, 0, distance]),
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
        };
      default: // 'up'
        return {
          y: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [distance, 0, 0, -distance]),
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
        };
    }
  };

  const transform = getTransform();

  return (
    <motion.div
      ref={ref}
      style={{
        ...transform,
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
