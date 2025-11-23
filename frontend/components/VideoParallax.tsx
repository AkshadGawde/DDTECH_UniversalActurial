'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface VideoParallaxProps {
  src: string;
  poster?: string;
  className?: string;
  speed?: number;
}

export default function VideoParallax({
  src,
  poster,
  className = '',
  speed = 0.5,
}: VideoParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{
          y,
          scale,
          opacity,
        }}
        className="relative w-full h-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          className="w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/20" />
      </motion.div>
    </div>
  );
}
