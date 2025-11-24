'use client';

import Hero from '@/components/sections/Hero';
import Announcements from '@/components/sections/Announcements';
import CTA from '@/components/sections/CTA';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Shield, 
  TrendingUp, 
  Users, 
  Building2, 
  Factory, 
  Landmark, 
  Heart,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const services = [
  {
    icon: Calculator,
    title: 'Actuarial Consulting',
    description: 'Expert actuarial valuations, risk assessments, and financial modeling to help you make informed decisions.',
  },
  {
    icon: Shield,
    title: 'Employee Benefits',
    description: 'Comprehensive employee benefit design, administration, and compliance solutions tailored to your organization.',
  },
  {
    icon: TrendingUp,
    title: 'Risk Management',
    description: 'Strategic risk analysis and mitigation strategies to protect your business and ensure sustainable growth.',
  },
  {
    icon: Users,
    title: 'Pension Advisory',
    description: 'Expert guidance on pension schemes, retirement planning, and long-term benefit strategies.',
  },
];

const sectors = [
  {
    icon: Building2,
    title: 'Corporate Sector',
    description: 'Tailored actuarial solutions for large corporations and multinational enterprises.',
    imagePlaceholder: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Specialized services for manufacturing industries and industrial organizations.',
    imagePlaceholder: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
  },
  {
    icon: Landmark,
    title: 'Financial Services',
    description: 'Expert consulting for banks, insurance companies, and financial institutions.',
    imagePlaceholder: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Comprehensive benefit solutions for healthcare providers and medical institutions.',
    imagePlaceholder: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    description: 'Customized actuarial services for consulting firms and professional service providers.',
    imagePlaceholder: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Benefit consulting and risk management for educational institutions and universities.',
    imagePlaceholder: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070',
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <Hero
        title="Expert Actuarial & Benefit Consulting"
        subtitle="Trusted Advisory Since 1998"
        description="Delivering comprehensive actuarial services and employee benefit solutions to drive business success across diverse sectors."
        ctaText="Start Your Journey"
        ctaLink="/contact"
      />

      {/* Announcements Section - Latest Research & Reports */}
      <Announcements />

      {/* Services Section - Enhanced */}
      <section data-scroll-section className="relative section-padding overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-blue-50/30 to-indigo-50/50" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-blue-50 to-indigo-50 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-blue-600">What We Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Our Core Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive actuarial and consulting services designed to meet your unique business needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      {/* Learn More Link */}
                      <div className="flex items-center space-x-2 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                        <span>Learn More</span>
                        <motion.svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </div>
                    </div>

                    {/* Decorative Corner Boxes - Elegant Floating */}
                    <motion.div 
                      className="absolute top-0 right-0 w-28 h-28 bg-linear-to-br from-blue-400/15 to-indigo-400/10 rounded-3xl transform translate-x-14 -translate-y-14 group-hover:translate-x-10 group-hover:-translate-y-10 transition-all duration-700"
                      animate={{ 
                        y: [0, -8, 0],
                        rotate: [0, 3, 0]
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 w-20 h-20 bg-linear-to-tr from-indigo-400/15 to-purple-400/10 rounded-2xl transform -translate-x-10 translate-y-10 group-hover:-translate-x-6 group-hover:translate-y-6 transition-all duration-700"
                      animate={{ 
                        y: [0, 8, 0],
                        rotate: [0, -3, 0]
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors Section - Enhanced */}
      <section data-scroll-section className="relative section-padding overflow-hidden bg-white">
        {/* Decorative Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-indigo-100/40 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-indigo-50 to-purple-50 rounded-full mb-6">
              <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-indigo-600">Industries We Serve</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
                Sectors We Specialize In
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Providing tailored solutions across multiple industries with deep domain expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <div className="relative h-full bg-linear-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-linear-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    <div className="relative">
                      {/* Icon */}
                      <div className="w-14 h-14 bg-linear-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon className="w-7 h-7 text-indigo-600" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                        {sector.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {sector.description}
                      </p>
                      
                      {/* Hover Arrow */}
                      <div className="mt-4 flex items-center space-x-2 text-indigo-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <span>Explore</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-linear-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Showcase Section - Enhanced */}
      <section data-scroll-section className="relative section-padding overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-blue-50" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-slate-50 to-blue-50 rounded-full mb-6">
              <div className="w-2 h-2 bg-slate-600 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-slate-600">Our Work Environment</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Where Excellence Meets Innovation
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse into our collaborative workspace and professional culture
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
                alt: 'Modern office workspace',
                title: 'Collaborative Workspace',
                subtitle: 'Modern facilities designed for excellence',
              },
              {
                src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070',
                alt: 'Business analytics',
                title: 'Data-Driven Insights',
                subtitle: 'Advanced analytics and reporting',
              },
              {
                src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974',
                alt: 'Team collaboration',
                title: 'Expert Team',
                subtitle: 'Dedicated professionals at your service',
              },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -12 }}
                className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {image.subtitle}
                    </p>
                    <div className="flex items-center space-x-2 text-white font-semibold transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm">Explore</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Border on Hover */}
                <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/20 rounded-3xl transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced */}
      <section data-scroll-section className="relative section-padding overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-white to-slate-50" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3B82F6 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-emerald-50 to-teal-50 rounded-full mb-6">
              <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-emerald-600">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-gray-900 via-emerald-900 to-teal-900 bg-clip-text text-transparent">
                Your Trusted Partner
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Combining expertise, innovation, and dedication to deliver exceptional results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: '🎯',
                title: 'Expert Team',
                description: 'Certified professionals with decades of combined experience in actuarial science and employee benefits.',
                color: 'from-blue-500 to-indigo-600',
                bgColor: 'from-blue-50 to-indigo-50',
              },
              {
                emoji: '💡',
                title: 'Innovative Solutions',
                description: 'Cutting-edge methodologies and technology-driven approaches to solve complex actuarial challenges.',
                color: 'from-emerald-500 to-teal-600',
                bgColor: 'from-emerald-50 to-teal-50',
              },
              {
                emoji: '🤝',
                title: 'Client-Centric',
                description: 'Personalized service and dedicated support tailored to your unique business objectives.',
                color: 'from-purple-500 to-pink-600',
                bgColor: 'from-purple-50 to-pink-50',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-linear-to-br ${item.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <span className="text-3xl">{item.emoji}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:text-transparent transition-all" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Decorative Corner */}
                  <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-linear-to-br ${item.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Business?"
        description="Partner with us to unlock the full potential of your organization through expert actuarial and benefit consulting."
        primaryButtonText="Get Started Today"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
      />
    </main>
  );
}
