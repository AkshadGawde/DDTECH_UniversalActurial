'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import GSAPScrollAnimation from './GSAPScrollAnimation';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  logo?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  className?: string;
}

export default function TestimonialsCarousel({
  testimonials,
  className = '',
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={`relative ${className}`}>
      <GSAPScrollAnimation animation="fadeUp">
        <div className="max-w-5xl mx-auto">
          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center">
              <Quote size={40} className="text-primary" />
            </div>
          </motion.div>

          {/* Testimonial Content */}
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote */}
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-8 leading-relaxed">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-2">
                  {currentTestimonial.logo && (
                    <div className="mb-4 flex justify-center">
                      <img
                        src={currentTestimonial.logo}
                        alt={currentTestimonial.company}
                        className="h-8 object-contain opacity-60"
                      />
                    </div>
                  )}
                  <p className="text-xl font-semibold text-primary">
                    {currentTestimonial.author}
                  </p>
                  <p className="text-gray-600">
                    {currentTestimonial.role}
                    {currentTestimonial.company && ` • ${currentTestimonial.company}`}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {testimonials.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <motion.button
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </motion.button>

              {/* Indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    className={`transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 h-2 bg-primary'
                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    } rounded-full`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-2 border-gray-200 hover:border-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          )}
        </div>
      </GSAPScrollAnimation>
    </div>
  );
}
