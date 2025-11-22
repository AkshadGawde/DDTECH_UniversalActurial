'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  link = '/services',
  delay = 0,
}: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <Link href={link}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.6, 
          delay,
          type: 'spring',
          stiffness: 100,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          y: -10,
          transition: { duration: 0.3 },
        }}
        className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
      >
        {/* Gradient overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.08 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-linear-to-br from-primary to-accent rounded-2xl"
        />

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(0,59,115,0.3), rgba(230,57,70,0.3))',
            padding: '2px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        <div className="relative" style={{ transform: 'translateZ(50px)' }}>
          {/* Icon */}
          <motion.div
            animate={{
              rotate: isHovered ? [0, -5, 5, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 bg-linear-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 shadow-lg relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: isHovered ? 2 : 0, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            />
            <Icon size={32} className="text-white relative z-10" />
          </motion.div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

          {/* Arrow indicator */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isHovered ? 10 : 0 }}
            className="flex items-center text-accent font-medium"
          >
            <span className="text-sm">Learn more</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{
                x: isHovered ? [0, 5, 0] : 0,
              }}
              transition={{
                duration: 0.8,
                repeat: isHovered ? Infinity : 0,
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.div>
        </div>

        {/* Shine effect */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '100%' : '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent rounded-2xl"
          style={{ transform: 'translateZ(0)' }}
        />
      </motion.div>
    </Link>
  );
}
