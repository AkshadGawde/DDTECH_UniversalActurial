'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

interface CarouselSlide {
  image: string;
  title?: string;
  description?: string;
}

interface ModernCarouselProps {
  slides: CarouselSlide[];
  autoplay?: boolean;
  autoplayDelay?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
}

export default function ModernCarousel({
  slides,
  autoplay = true,
  autoplayDelay = 5000,
  showControls = true,
  showIndicators = true,
  className = '',
}: ModernCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [currentIndex, autoplay, autoplayDelay, slides.length]);

  // Progress bar animation
  useEffect(() => {
    if (!autoplay || !progressRef.current) return;

    gsap.fromTo(
      progressRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: autoplayDelay / 1000,
        ease: 'none',
      }
    );
  }, [currentIndex, autoplay, autoplayDelay]);

  // Image parallax on scroll
  useEffect(() => {
    if (!imageRef.current) return;

    const handleScroll = () => {
      if (!imageRef.current) return;
      const scrollY = window.scrollY;
      gsap.to(imageRef.current, {
        y: scrollY * 0.3,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className={`relative w-full h-[600px] overflow-hidden rounded-3xl ${className}`}>
      {/* Main carousel container */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
            }}
            className="absolute inset-0"
          >
            {/* Image with parallax effect */}
            <div ref={imageRef} className="relative w-full h-full">
              <Image
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title || `Slide ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority
                quality={95}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Animated accent overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-linear-to-br from-primary/40 to-accent/40"
              />
            </div>

            {/* Content overlay */}
            {(slides[currentIndex].title || slides[currentIndex].description) && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16 text-white z-10"
              >
                {slides[currentIndex].title && (
                  <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                  >
                    {slides[currentIndex].title}
                  </motion.h2>
                )}
                {slides[currentIndex].description && (
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-lg md:text-xl text-white/90 max-w-2xl"
                  >
                    {slides[currentIndex].description}
                  </motion.p>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation controls */}
        {showControls && slides.length > 1 && (
          <>
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </motion.button>
          </>
        )}

        {/* Indicators */}
        {showIndicators && slides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
                {/* Progress indicator for active slide */}
                {index === currentIndex && autoplay && (
                  <div
                    ref={progressRef}
                    className="absolute inset-0 bg-accent rounded-full origin-left"
                    style={{ transformOrigin: 'left' }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 right-8 z-10 opacity-20 pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-32 h-32 border-2 border-white/30 rounded-full"
        />
      </div>
      <div className="absolute bottom-8 left-8 z-10 opacity-20 pointer-events-none">
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-24 h-24 border-2 border-white/30 rounded-lg"
        />
      </div>
    </div>
  );
}
