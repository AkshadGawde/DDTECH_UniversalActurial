'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/**
 * Minimal, subtle loading overlay shown on initial mount and quick route changes.
 * - Small spinner with soft fade in/out
 * - Uses pathname changes to briefly show loader between pages
 * - Honors reduced motion preferences
 */
export default function LoadingScreen() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Initial mount: keep for a short minimum to avoid flash
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);

    const minTimer = setTimeout(() => setVisible(false), 600);
    return () => clearTimeout(minTimer);
  }, []);

  // Route changes: show a brief loader
  useEffect(() => {
    // ignore first run when already hidden by the initial timer
    if (visible) return;
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.25 }}
          aria-live="polite"
          role="status"
        >
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              {/* Brand mark if available */}
              <div className="flex items-center gap-2">
                {/* If Logo.png exists it will render; otherwise invisible wrapper keeps layout */}
                <div className="relative h-6 w-6">
                  <Image src="/Logo.png" alt="" fill className="object-contain" sizes="24px" />
                </div>
                <span className="sr-only">Loading</span>
              </div>

              {/* Minimal spinner */}
              <div className="h-6 w-6 rounded-full border-2 border-black/20 border-t-black animate-spin" />

              {/* Subtle progress bar accent */}
              <div className="mt-2 h-1 w-40 overflow-hidden rounded-full bg-black/10">
                <motion.div
                  className="h-full bg-black/60"
                  initial={{ x: '-100%' }}
                  animate={{ x: ['-100%', '0%', '100%'] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
