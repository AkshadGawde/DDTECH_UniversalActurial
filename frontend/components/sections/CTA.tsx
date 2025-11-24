'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CTAProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CTA({
  title,
  description,
  primaryButtonText = 'Get Started',
  primaryButtonLink = '/contact',
  secondaryButtonText,
  secondaryButtonLink = '/services',
}: CTAProps) {
  return (
    <section className="section-padding bg-linear-to-br from-primary to-primary-700 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
        
        {/* Animated grid lines */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              type: 'spring',
              stiffness: 100,
            }}
            className="text-4xl md:text-5xl font-bold mb-6 relative"
          >
            {title}
            {/* Underline decoration */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 bg-accent mx-auto mt-4 rounded-full"
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              type: 'spring',
              stiffness: 100,
            }}
            className="text-lg md:text-xl mb-10 text-white/90"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href={primaryButtonLink}>
              <motion.button
                whileHover={{ 
                  scale: 1.08,
                  boxShadow: '0 20px 60px rgba(230, 57, 70, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="group bg-accent text-white px-8 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2 relative overflow-hidden"
              >
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">{primaryButtonText}</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
            </Link>

            {secondaryButtonText && (
              <Link href={secondaryButtonLink}>
                <motion.button
                  whileHover={{ 
                    scale: 1.08,
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    borderColor: 'rgba(255, 255, 255, 0.6)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all relative overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-white/5"
                    initial={{ opacity: 0 }}
                    whileHover={{ 
                      opacity: [0, 1, 0],
                      scale: [0.8, 1.2],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="relative z-10">{secondaryButtonText}</span>
                </motion.button>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
