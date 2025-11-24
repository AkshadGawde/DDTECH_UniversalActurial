'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface CTAProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  features?: string[];
  backgroundGradient?: boolean;
}

export default function CTA({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  features,
  backgroundGradient = true,
}: CTAProps) {
  return (
    <section 
      className={`relative py-20 lg:py-28 overflow-hidden ${
        backgroundGradient 
          ? 'bg-linear-to-br from-blue-900 via-blue-800 to-blue-900' 
          : 'bg-gray-900'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent rotate-12 transform scale-150" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-linear-to-br from-red-500/20 to-orange-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Features List (if provided) */}
          {features && features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center text-blue-100 text-lg"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 shrink-0" />
                  {feature}
                </div>
              ))}
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Primary Button */}
            <Link href={primaryButtonLink}>
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: '0 10px 25px rgba(239, 68, 68, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 min-w-[200px]"
              >
                {primaryButtonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>

            {/* Secondary Button */}
            {secondaryButtonText && secondaryButtonLink && (
              <Link href={secondaryButtonLink}>
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 min-w-[200px] backdrop-blur-sm"
                >
                  {secondaryButtonText}
                </motion.button>
              </Link>
            )}
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <div className="flex justify-center w-full">
              <p className="text-blue-200 text-sm mb-4 text-center">
                Trusted by 500+ organizations worldwide
              </p>
            </div>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {/* Trust indicators */}
              <div className="text-white/80 text-xs font-medium">25+ Years Experience</div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="text-white/80 text-xs font-medium">98% Client Satisfaction</div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="text-white/80 text-xs font-medium">50+ Expert Consultants</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}