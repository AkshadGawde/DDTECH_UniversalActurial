import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

interface UseParallaxOptions {
  speed?: number;
  direction?: 'vertical' | 'horizontal';
}

export function useParallax(
  ref: RefObject<HTMLElement>,
  { speed = 0.5, direction = 'vertical' }: UseParallaxOptions = {}
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const range = direction === 'vertical' ? 300 : 200;
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [-range * speed, range * speed]
  );

  return transform;
}

export function useParallaxOpacity(
  ref: RefObject<HTMLElement>
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
}
