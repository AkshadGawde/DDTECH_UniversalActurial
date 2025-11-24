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

  // Subtle parallax
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer h-full shadow-sm hover:shadow-xl transition-shadow duration-500"
    >
      {/* Image with parallax */}
      <div className="relative h-64 overflow-hidden">
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0 w-full h-[120%]"
        >
          <Image
            src={imagePlaceholder}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Dark overlay - muted */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

        {/* Icon */}
        <div className="absolute top-6 left-6 z-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-14 h-14 bg-gradient-to-br from-[#1E3A8A] to-[#172554] rounded-xl flex items-center justify-center shadow-lg"
          >
           {Icon && (
  <Icon className="w-7 h-7 text-white" />
)}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative bg-white p-6 border-t-2 border-[#1E3A8A]/10 group-hover:border-[#DC2626]/30 transition-colors duration-500">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#1E3A8A] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {description}
        </p>

        {/* Hover indicator */}
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-6 right-6 text-[#DC2626] group-hover:translate-x-1 transition-transform"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.div>
      </div>

      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#DC2626]/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
