'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

interface PortfolioCarouselProps {
  items: PortfolioItem[];
  title?: string;
  subtitle?: string;
}

export default function PortfolioCarousel({
  items,
  title = "Featured Highlights from Our Portfolio",
  subtitle = "//Explore Our Projects//"
}: PortfolioCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <section className="py-20 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-white/60 text-sm tracking-widest mb-4 font-light">
            {subtitle}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {title}
          </h2>
        </motion.div>
      </div>

      {/* Infinite Carousel */}
      <div className="relative">
        <div className="overflow-hidden">
          <motion.div
            ref={scrollRef}
            className="flex gap-6"
            animate={{
              x: isPaused ? undefined : [0, -((items.length * 400) + (items.length * 24))],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: items.length * 5,
                ease: "linear",
              },
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedItems.map((item, index) => (
              <Link
                key={`${item.id}-${index}`}
                href={item.link}
                className="shrink-0 w-[400px]"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer"
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Category badge */}
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20">
                        {item.category}
                      </span>
                      
                      {/* Arrow icon */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                      >
                        <ArrowUpRight className="text-primary" size={20} />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-accent/10 backdrop-blur-[2px]"
                  />
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-primary to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-primary to-transparent pointer-events-none z-10" />
      </div>

      {/* Center badge */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="flex justify-center mt-12"
      >
        <div className="relative w-40 h-40 rounded-full border-4 border-white/20 flex items-center justify-center bg-primary">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-t-4 border-white"
          />
          <span className="text-white text-sm font-semibold tracking-wider">
            CASE STUDY
          </span>
        </div>
      </motion.div>
    </section>
  );
}
