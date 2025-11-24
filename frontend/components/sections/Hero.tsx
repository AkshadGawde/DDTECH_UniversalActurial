'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  showScrollIndicator?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = 'Get Started',
  ctaLink = '/contact',
  showScrollIndicator = true,
}: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms for different layers
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const orbsY = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section 
      ref={containerRef}
      data-scroll-section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-gray-50 via-white to-primary-50"
    >
      {/* Multi-layer Parallax Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY, scale }}
      >
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-linear-to-br from-white/95 via-white/90 to-primary/20" />
      </motion.div>
      
      {/* Animated background elements with parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: orbsY }}
      >
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -20, 0],
            y: [0, 30, -10, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 20, 0],
            y: [0, -30, 15, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Additional floating orbs */}
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-2xl"
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.15, 0.85, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Subtle particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-32"
        style={{ y: contentY, opacity }}
      >
        <div className="max-w-4xl">
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                {subtitle}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight"
          >
            {title.split(' ').map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href={ctaLink}>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(230, 57, 70, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-accent text-white px-8 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2 overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">{ctaText}</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
            </Link>

            <Link href="/services">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#003B73',
                  color: '#ffffff',
                  borderColor: '#003B73',
                }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-white text-primary px-8 py-4 rounded-lg font-semibold border-2 border-primary transition-all overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Our Services</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {showScrollIndicator && (
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-primary transition-colors z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      )}
    </section>
  );
}
