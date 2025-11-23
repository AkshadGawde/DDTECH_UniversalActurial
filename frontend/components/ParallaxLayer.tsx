'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ParallaxLayerProps {
  children?: ReactNode;
  speed?: number; // 0.5 = slower, 2 = faster
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function ParallaxLayer({
  children,
  speed = 0.5,
  direction = 'up',
  className = '',
}: ParallaxLayerProps) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    import('gsap').then((gsapModule) => {
      const gsap = gsapModule.default;
      
      import('gsap/ScrollTrigger').then((ScrollTriggerModule) => {
        const ScrollTrigger = ScrollTriggerModule.default;
        gsap.registerPlugin(ScrollTrigger);

        const layer = layerRef.current;
        if (!layer) return;

        const directionMap = {
          up: { y: () => window.innerHeight * speed },
          down: { y: () => -window.innerHeight * speed },
          left: { x: () => window.innerWidth * speed },
          right: { x: () => -window.innerWidth * speed },
        };

        gsap.to(layer, {
          ...directionMap[direction],
          ease: 'none',
          scrollTrigger: {
            trigger: layer,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    });
  }, [speed, direction]);

  return (
    <div ref={layerRef} className={className}>
      {children}
    </div>
  );
}
