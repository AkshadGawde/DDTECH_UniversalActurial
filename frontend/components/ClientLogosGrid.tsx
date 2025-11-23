'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import GSAPScrollAnimation from './GSAPScrollAnimation';

interface ClientLogo {
  name: string;
  logo: string;
}

interface ClientLogosGridProps {
  title?: string;
  clients: ClientLogo[];
  columns?: 3 | 4 | 5 | 6;
  className?: string;
}

export default function ClientLogosGrid({
  title = 'Trusted by Industry Leaders',
  clients,
  columns = 5,
  className = '',
}: ClientLogosGridProps) {
  const gridCols = {
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
    5: 'grid-cols-3 md:grid-cols-5',
    6: 'grid-cols-3 md:grid-cols-6',
  };

  return (
    <div className={`${className}`}>
      {title && (
        <GSAPScrollAnimation animation="fadeUp">
          <h3 className="text-center text-lg md:text-xl text-gray-500 font-light mb-12">
            {title}
          </h3>
        </GSAPScrollAnimation>
      )}

      <div className={`grid ${gridCols[columns]} gap-8 md:gap-12`}>
        {clients.map((client, index) => (
          <GSAPScrollAnimation
            key={index}
            animation="fadeUp"
            delay={index * 0.1}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center p-6 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 relative h-20"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100px, 150px"
              />
            </motion.div>
          </GSAPScrollAnimation>
        ))}
      </div>
    </div>
  );
}
