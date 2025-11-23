'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    import('gsap').then((gsapModule) => {
      const gsap = gsapModule.default;
      
      import('gsap/ScrollTrigger').then((ScrollTriggerModule) => {
        const ScrollTrigger = ScrollTriggerModule.default;
        gsap.registerPlugin(ScrollTrigger);

        const progress = progressRef.current;
        if (!progress) return;

        gsap.to(progress, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            start: 'top top',
            end: 'max',
            scrub: 0.3,
          },
        });
      });
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
      <div
        ref={progressRef}
        className="h-full bg-linear-to-r from-primary to-accent origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
