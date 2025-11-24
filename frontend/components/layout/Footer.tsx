'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowRight,
  Shield
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Employee Benefits', href: '/services/employee-benefits' },
      { name: 'Insurance Consulting', href: '/services/insurance-consulting' },
      { name: 'Pension Planning', href: '/services#pension' },
      { name: 'Compliance & Reporting', href: '/services#compliance' },
    ],
    sectors: [
      { name: 'Corporate Benefits', href: '/sectors#corporate' },
      { name: 'Healthcare', href: '/sectors#healthcare' },
      { name: 'Insurance', href: '/sectors#insurance' },
      { name: 'Pensions', href: '/sectors#pensions' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Company Info - Spans 4 columns */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/Logo.png"
                  alt="Universal Actuaries"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-bold">Universal Actuaries</div>
                <div className="text-sm text-white/70">Benefit Consulting</div>
              </div>
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed">
              Premier actuarial and employee benefit consultancy delivering data-driven solutions across diverse sectors.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:info@universalactuaries.com" 
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>info@universalactuaries.com</span>
              </a>
              <a 
                href="tel:+911234567890" 
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+91 123 456 7890</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links - Each spans 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Sectors</h3>
            <ul className="space-y-3">
              {footerLinks.sectors.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - Spans 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-white/70 text-sm mb-4">
              Get the latest insights and updates delivered to your inbox.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-4 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Facebook, href: '#', label: 'Facebook' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 hover:bg-accent-500 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Certification Badge */}
        <div className="flex items-center justify-center gap-2 py-6 border-t border-white/10">
          <Shield className="w-5 h-5 text-gold-400" />
          <span className="text-sm text-white/70">
            Certified by Society of Actuaries (SOA) | ISO 9001:2015 Compliant
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-sm text-white/60">
            © {currentYear} Universal Actuaries. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
