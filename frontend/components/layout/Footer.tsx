'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Sectors', path: '/sectors' },
    { name: 'Contact', path: '/contact' },
  ],
  services: [
    { name: 'Actuarial Consulting', path: '/services' },
    { name: 'Employee Benefits', path: '/services' },
    { name: 'Risk Management', path: '/services' },
    { name: 'Compliance Advisory', path: '/services' },
  ],
  resources: [
    { name: 'Blog', path: '#' },
    { name: 'Case Studies', path: '#' },
    { name: 'Insights', path: '#' },
    { name: 'Careers', path: '#' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">UA</span>
                </div>
                <span className="font-bold text-xl text-white">
                  Universal Actuaries
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Leading actuarial and employee benefit consultancy firm providing
                comprehensive solutions across diverse sectors.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-accent" />
                  <span className="text-sm">info@universalactuaries.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-accent" />
                  <span className="text-sm">+91 (XXX) XXX-XXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-accent" />
                  <span className="text-sm">Mumbai, India</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.path}
                    className="text-sm hover:text-accent transition-colors inline-flex items-center group"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="ml-1"
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    href={link.path}
                    className="text-sm hover:text-accent transition-colors inline-flex items-center group"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="ml-1"
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <Link
                    href={link.path}
                    className="text-sm hover:text-accent transition-colors inline-flex items-center group"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="ml-1"
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Universal Actuaries & Benefit Consultant. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.4 + index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                  rotate: [0, -10, 10, 0],
                  backgroundColor: 'rgb(230, 57, 70)',
                }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors relative overflow-hidden"
                aria-label={social.label}
              >
                {/* Icon pulse effect */}
                <motion.div
                  className="absolute inset-0 bg-accent/30"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
                <social.icon size={18} className="relative z-10" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
