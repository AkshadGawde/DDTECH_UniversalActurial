'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

interface SectorCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imagePlaceholder?: string;
  delay?: number;
}

export default function SectorCard({
  icon: Icon,
  title,
  description,
  imagePlaceholder = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
  delay = 0,
}: SectorCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ 
        y: -15,
        transition: { duration: 0.3 },
      }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image with overlay and parallax */}
      <div className="relative h-56 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.15, rotate: 2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ y: imageY }}
          className="w-full h-full relative"
        >
          {/* Real image */}
          <Image
            src={imagePlaceholder}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/70 to-accent/70" />
          
          {/* Animated gradient overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-linear-to-br from-accent/50 to-primary/50"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Floating particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
        
        {/* Icon on image */}
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ 
            scale: 1.15, 
            rotate: [0, -5, 5, 0],
            y: -5,
          }}
          transition={{ duration: 0.5 }}
          className="absolute top-6 left-6 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg overflow-hidden"
        >
          {/* Icon background pulse */}
          <motion.div
            className="absolute inset-0 bg-primary/10"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <Icon size={28} className="text-primary relative z-10" />
        </motion.div>
      </div>

      {/* Content with parallax */}
      <motion.div className="p-6" style={{ y: contentY }}>
        <motion.h3 
          className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>

        {/* Hover indicator */}
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          className="h-1 bg-accent rounded-full mt-4 relative overflow-hidden"
          transition={{ duration: 0.3 }}
        >
          {/* Shine effect on indicator */}
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
