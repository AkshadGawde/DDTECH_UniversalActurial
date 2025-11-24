'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        // Lenis v1+ recommended minimal config
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        // Removed unsupported smoothTouch option per LenisOptions typings
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        orientation: 'vertical',
      }}
    >
      {children}
    </ReactLenis>
  );
}