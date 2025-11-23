'use client';

import { motion } from 'framer-motion';

interface TextSplitRevealProps {
  children: string;
  className?: string;
  delay?: number;
  type?: 'words' | 'letters' | 'lines';
}

export default function TextSplitReveal({
  children,
  className = '',
  delay = 0,
  type = 'words',
}: TextSplitRevealProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: type === 'letters' ? 0.02 : 0.05,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const splitText = () => {
    if (type === 'letters') {
      return children.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={child}
          className="inline-block"
          style={{ transformOrigin: 'bottom' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ));
    } else if (type === 'words') {
      return children.split(' ').map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={child}
          className="inline-block mr-2"
          style={{ transformOrigin: 'bottom' }}
        >
          {word}
        </motion.span>
      ));
    } else {
      // lines
      return children.split('\n').map((line, index) => (
        <motion.span
          key={`line-${index}`}
          variants={child}
          className="block"
          style={{ transformOrigin: 'bottom' }}
        >
          {line}
        </motion.span>
      ));
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
      style={{ perspective: 1000 }}
    >
      {splitText()}
    </motion.div>
  );
}
