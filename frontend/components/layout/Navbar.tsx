'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Sectors', path: '/sectors' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.98)']
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  );
  
  const padding = useTransform(
    scrollY,
    [0, 100],
    ['1.5rem', '1rem']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        paddingTop: padding,
        paddingBottom: padding,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg border-b border-gray-200' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">UA</span>
              </div>
              <span className="font-bold text-xl text-primary hidden md:block">
                Universal Actuaries
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link key={link.path} href={link.path}>
                <motion.div
                  className="relative py-2"
                  whileHover="hover"
                  initial="initial"
                  animate="animate"
                >
                  <motion.span
                    className={`text-sm font-medium transition-colors ${
                      pathname === link.path
                        ? 'text-primary'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    {link.name}
                  </motion.span>
                  {pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-left rounded-full"
                    initial={{ scaleX: 0 }}
                    variants={{
                      hover: { scaleX: pathname === link.path ? 0 : 1 },
                      initial: { scaleX: 0 },
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary/5 rounded-lg -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    variants={{
                      hover: { scale: 1.2, opacity: 1 },
                      initial: { scale: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/contact">
              <motion.button 
                className="relative bg-accent text-white px-6 py-2.5 rounded-lg font-medium shadow-lg overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(230, 57, 70, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%', skewX: -20 }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Get Started</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-primary transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-6 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} onClick={() => setIsOpen(false)}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`block py-2 px-4 rounded-lg transition-colors ${
                    pathname === link.path
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.02 }} className="pt-2">
              <Link href="/contact">
                <button className="w-full bg-accent text-white px-6 py-3 rounded-lg font-medium">
                  Get Started
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
