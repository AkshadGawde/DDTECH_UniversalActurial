'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface AdvancedImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  revealDirection?: 'left' | 'right' | 'top' | 'bottom' | 'center';
}

export default function AdvancedImageReveal({
  src,
  alt,
  width,
  height,
  className = '',
  revealDirection = 'center',
}: AdvancedImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1]);
  
  // Calculate reveal percentage
  const revealPercent = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  // Create clip path based on direction
  const clipPath = useTransform(revealPercent, (percent) => {
    switch (revealDirection) {
      case 'left':
        return `inset(0 ${100 - percent}% 0 0)`;
      case 'right':
        return `inset(0 0 0 ${100 - percent}%)`;
      case 'top':
        return `inset(${100 - percent}% 0 0 0)`;
      case 'bottom':
        return `inset(0 0 ${100 - percent}% 0)`;
      default: // center
        return `inset(${(100 - percent) / 2}% ${(100 - percent) / 2}% ${(100 - percent) / 2}% ${(100 - percent) / 2}%)`;
    }
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{
          scale,
          opacity,
        }}
        className="relative w-full h-full"
      >
        <motion.div
          style={{
            clipPath,
          }}
          className="relative w-full h-full"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            fill={!width || !height}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </motion.div>
      
      {/* Overlay shimmer effect */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none"
      />
    </div>
  );
}
