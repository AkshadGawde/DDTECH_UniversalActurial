'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }>;
  columns?: 2 | 3 | 4;
}

export default function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
        >
          {/* Image */}
          <motion.div
            animate={{
              scale: hoveredIndex === index ? 1.1 : 1,
            }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          {/* Overlay */}
          <motion.div
            animate={{
              opacity: hoveredIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/60 to-transparent"
          />

          {/* Content */}
          {(image.title || image.description) && (
            <motion.div
              animate={{
                y: hoveredIndex === index ? 0 : 20,
                opacity: hoveredIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-6 text-white"
            >
              {image.title && (
                <h3 className="text-xl font-bold mb-2">{image.title}</h3>
              )}
              {image.description && (
                <p className="text-white/90 text-sm">{image.description}</p>
              )}
            </motion.div>
          )}

          {/* Border animation */}
          <motion.div
            animate={{
              scale: hoveredIndex === index ? 1 : 0,
              opacity: hoveredIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 border-4 border-accent rounded-2xl"
          />
        </motion.div>
      ))}
    </div>
  );
}
