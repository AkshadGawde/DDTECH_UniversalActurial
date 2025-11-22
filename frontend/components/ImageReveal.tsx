'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  parallaxSpeed?: number;
  revealDirection?: 'left' | 'right' | 'top' | 'bottom';
}

export default function ImageReveal({
  src,
  alt,
  className = '',
  parallaxSpeed = 50,
  revealDirection = 'bottom',
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [parallaxSpeed, -parallaxSpeed]);

  const clipPathVariants = {
    left: {
      hidden: { clipPath: 'inset(0 100% 0 0)' },
      visible: { 
        clipPath: 'inset(0 0% 0 0)',
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }
      },
    },
    right: {
      hidden: { clipPath: 'inset(0 0 0 100%)' },
      visible: { 
        clipPath: 'inset(0 0 0 0%)',
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }
      },
    },
    top: {
      hidden: { clipPath: 'inset(100% 0 0 0)' },
      visible: { 
        clipPath: 'inset(0% 0 0 0)',
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }
      },
    },
    bottom: {
      hidden: { clipPath: 'inset(0 0 100% 0)' },
      visible: { 
        clipPath: 'inset(0 0 0% 0)',
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }
      },
    },
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={clipPathVariants[revealDirection]}
        style={{ y }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-primary/20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </div>
  );
}
