'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 relative ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5,
            type: 'spring',
            stiffness: 100,
          }}
          className={`mb-4 ${centered ? 'flex justify-center' : ''}`}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            {/* Badge glow effect */}
            <motion.div
              className="absolute inset-0 bg-accent/20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="relative z-10">{subtitle}</span>
          </motion.span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.6, 
          delay: 0.1,
          type: 'spring',
          stiffness: 100,
        }}
        className="text-4xl md:text-5xl font-bold text-primary mb-4 relative"
      >
        {/* Split title into words for staggered animation */}
        {title.split(' ').map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1 + index * 0.1,
            }}
            className="inline-block mr-3"
          >
            {word}
          </motion.span>
        ))}
        
        {/* Decorative accent line */}
        {centered && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '80px', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-accent mx-auto mt-4 rounded-full relative overflow-hidden"
          >
            {/* Shine effect on line */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent"
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
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: 0.3,
            type: 'spring',
            stiffness: 100,
          }}
          className={`text-lg text-gray-600 max-w-3xl ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </motion.p>
      )}
      
      {/* Background decoration */}
      {centered && (
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      )}
    </div>
  );
}
