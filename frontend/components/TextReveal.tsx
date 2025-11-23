'use client';

import { useEffect, useRef } from 'react';

interface TextRevealProps {
  text: string;
  type?: 'chars' | 'words' | 'lines';
  stagger?: number;
  className?: string;
  delay?: number;
}

export default function TextReveal({
  text,
  type = 'chars',
  stagger = 0.03,
  className = '',
  delay = 0,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    import('gsap').then((gsapModule) => {
      const gsap = gsapModule.default;
      
      import('gsap/ScrollTrigger').then((ScrollTriggerModule) => {
        const ScrollTrigger = ScrollTriggerModule.default;
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        if (!container) return;

        // Split text into elements
        const splitText = () => {
          if (type === 'chars') {
            return text.split('').map((char, i) => 
              char === ' ' ? `<span key=${i} class="inline-block">&nbsp;</span>` : 
              `<span key=${i} class="inline-block opacity-0" style="transform: translateY(30px)">${char}</span>`
            ).join('');
          } else if (type === 'words') {
            return text.split(' ').map((word, i) => 
              `<span key=${i} class="inline-block opacity-0" style="transform: translateY(30px)">${word}</span>`
            ).join(' ');
          }
          return `<span class="inline-block opacity-0" style="transform: translateY(30px)">${text}</span>`;
        };

        container.innerHTML = splitText();

        gsap.to(container.querySelectorAll('span'), {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    });
  }, [text, type, stagger, delay]);

  return <div ref={containerRef} className={className} />;
}
