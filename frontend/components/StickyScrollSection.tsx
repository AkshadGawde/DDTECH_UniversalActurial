'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface StickyScrollSectionProps {
  children: ReactNode;
  className?: string;
  height?: string;
}

export default function StickyScrollSection({
  children,
  className = '',
  height = '200vh',
}: StickyScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <div ref={ref} style={{ height }} className={`relative ${className}`}>
      <motion.div
        style={{
          scale,
          opacity,
        }}
        className="sticky top-0 h-screen flex items-center justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
}
