'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface GSAPScrollAnimationProps {
  children: ReactNode;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'reveal';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function GSAPScrollAnimation({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 1,
  className = '',
}: GSAPScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Dynamic import to avoid SSR issues
    import('gsap').then((gsapModule) => {
      const gsap = gsapModule.default;
      
      import('gsap/ScrollTrigger').then((ScrollTriggerModule) => {
        const ScrollTrigger = ScrollTriggerModule.default;
        gsap.registerPlugin(ScrollTrigger);

        const element = elementRef.current;
        if (!element) return;

        const animations = {
          fadeUp: {
            y: 80,
            opacity: 0,
          },
          fadeIn: {
            opacity: 0,
          },
          slideLeft: {
            x: -100,
            opacity: 0,
          },
          slideRight: {
            x: 100,
            opacity: 0,
          },
          scaleIn: {
            scale: 0.8,
            opacity: 0,
          },
          reveal: {
            clipPath: 'inset(0 100% 0 0)',
          },
        };

        gsap.from(element, {
          ...animations[animation],
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    });
  }, [animation, delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
