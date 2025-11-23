'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface ParallaxProviderProps {
  children: ReactNode;
}

export default function ParallaxProvider({ children }: ParallaxProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = document.querySelectorAll('[data-scroll-section]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const element = section as HTMLElement;
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();

    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-primary/60 to-primary origin-left z-50"
        style={{ scaleX: smoothProgress }}
      />
      
      {/* Vertical Section Progress Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {[...Array(7)].map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              const sections = document.querySelectorAll('[data-scroll-section]');
              const section = sections[index] as HTMLElement;
              if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === index
                ? 'bg-primary scale-150'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            whileHover={{ scale: 1.5 }}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {children}
    </div>
  );
}
