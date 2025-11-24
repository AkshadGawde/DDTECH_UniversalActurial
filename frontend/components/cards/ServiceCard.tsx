'use client';

import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  link = '/services',
  delay = 0,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <Link href={link}>
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
        className="group relative bg-white rounded-2xl p-8 h-full cursor-pointer overflow-hidden border border-slate-200 hover:border-[#1E3A8A]/20 transition-all duration-500 shadow-sm hover:shadow-xl"
      >
        {/* Subtle gradient on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.03 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 bg-linear-to-br from-[#1E3A8A] to-[#DC2626]"
        />

        {/* Icon container - centered */}
        <div className="flex justify-center mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-16 h-16 bg-linear-to-br from-[#1E3A8A] to-[#172554] rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300"
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
        </div>

        {/* Content - centered */}
        <div className="relative space-y-4 text-center">
          {/* Title */}
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#1E3A8A] transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed max-w-md mx-auto">
            {description}
          </p>

          {/* CTA */}
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-center gap-2 text-[#DC2626] font-semibold text-base pt-2"
          >
            <span>Learn more</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.div>
        </div>

        {/* Corner accent - subtle */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-[#DC2626]/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </Link>
  );
}
