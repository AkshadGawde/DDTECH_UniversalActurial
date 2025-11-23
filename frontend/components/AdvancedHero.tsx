'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface AdvancedHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  showScrollIndicator?: boolean;
}

export default function AdvancedHero({
  title,
  subtitle,
  description,
  ctaText = 'Get Started',
  ctaLink = '/contact',
  showScrollIndicator = true,
}: AdvancedHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['/img1.png', '/img2.png', '/img3.png'];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    import('gsap').then((gsapModule) => {
      const gsap = gsapModule.default;

      import('gsap/ScrollTrigger').then((ScrollTriggerModule) => {
        const ScrollTrigger = ScrollTriggerModule.default;
        gsap.registerPlugin(ScrollTrigger);

        // Background parallax
        if (bgLayerRef.current) {
          gsap.to(bgLayerRef.current, {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }

        // Content fade on scroll
        if (contentRef.current) {
          gsap.to(contentRef.current, {
            opacity: 0,
            y: -50,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: '50% top',
              scrub: true,
            },
          });
        }

        // Orbs parallax
        if (orb1Ref.current) {
          gsap.to(orb1Ref.current, {
            y: 200,
            x: -100,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }

        if (orb2Ref.current) {
          gsap.to(orb2Ref.current, {
            y: 150,
            x: 100,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }

        // Initial entrance animations
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        
        tl.from('.hero-subtitle', {
          y: 30,
          opacity: 0,
          duration: 0.8,
        })
        .from('.hero-title-word', {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
        }, '-=0.4')
        .from('.hero-description', {
          y: 30,
          opacity: 0,
          duration: 0.8,
        }, '-=0.4')
        .from('.hero-cta', {
          y: 20,
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          stagger: 0.1,
        }, '-=0.4');
      });
    });
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const titleWords = title.split(' ');

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900"
    >
      {/* Background carousel with parallax */}
      <div ref={bgLayerRef} className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 opacity-60">
              <Image
                src={slide}
                alt={`Background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-linear-to-br from-[#F5F5DC]/50 via-[#FFF8DC]/30 to-primary/20" />
      </div>

      {/* Animated orbs with parallax */}
      <div ref={orb1Ref} className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div ref={orb2Ref} className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        {subtitle && (
          <div className="hero-subtitle mb-6">
            <span className="inline-block px-6 py-3 bg-white/90 text-primary rounded-full text-sm md:text-base font-semibold shadow-lg">
              {subtitle}
            </span>
          </div>
        )}

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          {titleWords.map((word, index) => (
            <span key={index} className="hero-title-word inline-block mr-4">
              {word}
            </span>
          ))}
        </h1>

        <p className="hero-description text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={ctaLink} className="hero-cta">
            <button className="group relative px-8 py-4 bg-accent text-white rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all overflow-hidden">
              <span className="relative z-10 flex items-center space-x-2">
                <span>{ctaText}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </Link>

          <Link href="/services" className="hero-cta">
            <button className="px-8 py-4 bg-white text-primary rounded-lg font-semibold border-2 border-primary/20 hover:border-primary transition-all">
              Explore Services
            </button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      {showScrollIndicator && (
        <motion.button
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          aria-label="Scroll down"
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: [0.4, 0, 0.2, 1] 
          }}
        >
          <div className="flex flex-col items-center space-y-2 text-primary/60 hover:text-primary transition-colors">
            <span className="text-sm font-medium">Scroll Down</span>
            <ChevronDown size={24} />
          </div>
        </motion.button>
      )}
    </section>
  );
}
