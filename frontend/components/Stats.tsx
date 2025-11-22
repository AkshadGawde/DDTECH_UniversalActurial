'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

interface StatsProps {
  stats: Stat[];
}

function AnimatedNumber({ value, suffix = '', prefix = '' }: Stat) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  const spring = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });

    return () => unsubscribe();
  }, [spring]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
              }}
              className="text-center relative group"
            >
              {/* Animated background circle */}
              <motion.div
                className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5 rounded-2xl -z-10"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              />
              
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl -z-20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="p-6">
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-primary mb-2"
                  whileHover={{
                    scale: 1.1,
                    color: '#E63946',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatedNumber {...stat} />
                </motion.div>
                <motion.div 
                  className="text-sm md:text-base text-gray-600 font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {stat.label}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
