'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface Card3DTiltProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
}

export default function Card3DTilt({
  children,
  intensity = 8,
  className = '',
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    import('gsap').then((gsapModule) => {
      const gsap = gsapModule.default;

      const card = cardRef.current;
      if (!card) return;

      const handleMouseMove = (e: globalThis.MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -(intensity * 0.8);
        const rotateY = ((x - centerX) / centerX) * (intensity * 0.8);

        gsap.to(card, {
          rotationX: rotateX,
          rotationY: rotateY,
          transformPerspective: 1200,
          duration: 0.4,
          ease: 'power1.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.6,
          ease: 'power1.out',
        });
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, [intensity]);

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}
