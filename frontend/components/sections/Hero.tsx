'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  showScrollIndicator?: boolean;
}

const carouselImages = [
  '/img1.png',
  '/img2.png',
  '/img3.png',
];

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = 'Get Started',
  ctaLink = '/contact',
  showScrollIndicator = true,
}: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Carousel Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={carouselImages[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority={currentIndex === 0}
              quality={100}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-black/60 via-black/50 to-black/40" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Floating Content */}
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
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
            style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 0.3)' }}
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
            className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl leading-relaxed font-medium"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}
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
                  boxShadow: '0 20px 40px rgba(230, 57, 70, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-linear-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-lg font-bold shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center space-x-2 overflow-hidden"
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
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  borderColor: 'rgba(255, 255, 255, 1)',
                }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-white/90 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-lg font-bold border-2 border-white/90 transition-all overflow-hidden shadow-xl"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
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

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {carouselImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`rounded-full transition-all ${
              currentIndex === index 
                ? 'bg-white w-12 h-3' 
                : 'bg-white/50 w-3 h-3 hover:bg-white/80'
            }`}
            style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
          />
        ))}
      </div>

      {showScrollIndicator && (
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors z-20"
          style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}
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
