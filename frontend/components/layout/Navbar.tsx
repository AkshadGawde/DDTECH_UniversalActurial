'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'About Us',
    path: '/about',
    dropdown: [
      { name: 'Overview', path: '/about/overview' },
      { name: 'Our Approach', path: '/about/our-approach' },
      { name: 'Management', path: '/about/management' },
      { name: 'Success Stories', path: '/about/success-stories' },
      { name: 'Retirement Consulting', path: '/about/retirement-consulting' },
      { name: 'Benefit Consulting', path: '/about/benefit-consulting' },
    ],
  },
  {
    name: 'Services',
    path: '/services',
    dropdown: [
      { name: 'Employee Benefits', path: '/services/employee-benefits' },
      { name: 'Insurance Consulting', path: '/services/insurance-consulting' },
    ],
  },
  {
    name: 'Insights',
    path: '/insights',
    dropdown: [
      { name: 'Research Reports', path: '/insights/research-reports' },
      { name: 'Interest Rates', path: '/insights/interest-rates' },
      { name: 'Regulatory Reports', path: '/insights/regulatory-reports' },
    ],
  },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );

  const backdropBlur = useTransform(scrollY, [0, 80], ['blur(0px)', 'blur(16px)']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-xl border-b border-gray-100' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl blur-md opacity-50" />
                <div className="relative w-12 h-12 bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">UA</span>
                </div>
              </div>
              <div className="hidden md:block">
                <span className="font-bold text-xl bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Universal Actuaries
                </span>
                <p className="text-xs text-gray-500 font-medium">Excellence in Actuarial Science</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <motion.button
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center space-x-1 ${
                        isActive(link.path)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    </motion.button>

                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                        >
                          <div className="p-2">
                            {link.dropdown.map((item, idx) => (
                              <Link key={item.path} href={item.path}>
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                                    pathname === item.path
                                      ? 'bg-linear-to-r from-blue-50 to-indigo-50 text-blue-600'
                                      : 'text-gray-700 hover:bg-gray-50'
                                  }`}
                                >
                                  {item.name}
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link href={link.path}>
                    <motion.div
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        isActive(link.path)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                )}
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:block"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.dropdown ? (
                    <div className="space-y-1">
                      <button
                        onClick={() =>
                          setActiveDropdown(activeDropdown === link.name ? null : link.name)
                        }
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === link.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1"
                          >
                            {link.dropdown.map((item) => (
                              <Link key={item.path} href={item.path}>
                                <div
                                  className={`px-4 py-2 rounded-lg text-sm ${
                                    pathname === item.path
                                      ? 'bg-blue-50 text-blue-600 font-medium'
                                      : 'text-gray-600 hover:bg-gray-50'
                                  }`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {item.name}
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={link.path}>
                      <motion.div
                        className={`px-4 py-3 rounded-lg text-sm font-semibold ${
                          isActive(link.path)
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </motion.div>
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/contact">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-xl shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
