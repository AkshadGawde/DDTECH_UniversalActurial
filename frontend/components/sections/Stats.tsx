'use client';

import { motion, useInView, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

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
  const spring = useSpring(0, { stiffness: 60, damping: 30 });

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
    <span ref={ref} className="stats-number">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

const iconMap = [TrendingUp, Users, Award, Target];

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1E3A8A] rounded-full blur-[120px] opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#DC2626] rounded-full blur-[120px] opacity-8" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Proven Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Trusted by leading organizations worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                }}
                className="group relative w-full"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-6 md:p-8 text-center h-full shadow-sm hover:shadow-lg transition-shadow duration-500 border border-slate-200">

                  {/* Gradient glow on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] to-[#DC2626] rounded-2xl"
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#172554] rounded-xl shadow-md mb-6 mx-auto"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Number */}
                  <div className="relative text-5xl md:text-6xl font-bold text-slate-900 mb-3">
                    <AnimatedNumber {...stat} />
                  </div>

                  {/* Label */}
                  <div className="relative text-sm font-semibold text-slate-600 uppercase tracking-wider">
                    {stat.label}
                  </div>

                  {/* Subtle accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#DC2626]/5 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
