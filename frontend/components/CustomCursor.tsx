'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations for cursor movement
  const springConfig = { damping: 25, stiffness: 400, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    let animationFrame: number;

    const updateMousePosition = (e: MouseEvent) => {
      // Use requestAnimationFrame for smooth 60fps updates
      animationFrame = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over interactive elements
      const isInteractive = target.closest('button, a, input, textarea, [role="button"], .cursor-pointer, .cursor-hover');
      
      setIsHovering(!!isInteractive);
    };

    // Only activate on desktop (width > 1024px)
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    
    const handleMediaChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        // Desktop - activate custom cursor
        document.body.style.cursor = 'none';
        document.addEventListener('mousemove', updateMousePosition);
        document.addEventListener('mousemove', handleElementHover);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);
      } else {
        // Mobile/Tablet - use default cursor
        document.body.style.cursor = '';
        setIsVisible(false);
        document.removeEventListener('mousemove', updateMousePosition);
        document.removeEventListener('mousemove', handleElementHover);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    // Initial check
    handleMediaChange({ matches: mediaQuery.matches } as MediaQueryListEvent);
    
    // Listen for media query changes
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      
      // Cleanup
      document.body.style.cursor = '';
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousemove', handleElementHover);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Simple Black Dot Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{ 
            duration: 0.15,
            ease: 'easeOut',
          }}
          className="w-3 h-3 bg-black rounded-full shadow-lg"
        />
      </motion.div>

      {/* Optional subtle ring on hover */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-40"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.15 }}
        >
          <div className="w-8 h-8 border border-black/20 rounded-full" />
        </motion.div>
      )}
    </>
  );
}