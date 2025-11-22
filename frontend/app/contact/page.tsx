'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Twitter, Facebook } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'info@universalactuaries.com',
    subDetails: 'support@universalactuaries.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+91 (XXX) XXX-XXXX',
    subDetails: 'Mon-Fri, 9AM-6PM IST',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: '123 Business Plaza, Nariman Point',
    subDetails: 'Mumbai, Maharashtra 400021',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Monday - Friday',
    subDetails: '9:00 AM - 6:00 PM IST',
  },
];

const offices = [
  {
    city: 'Mumbai',
    address: '123 Business Plaza, Nariman Point, Mumbai 400021',
    phone: '+91 (XXX) XXX-XXXX',
    type: 'Headquarters',
  },
  {
    city: 'Delhi',
    address: '456 Corporate Tower, Connaught Place, Delhi 110001',
    phone: '+91 (XXX) XXX-YYYY',
    type: 'Branch Office',
  },
  {
    city: 'Bangalore',
    address: '789 Tech Park, MG Road, Bangalore 560001',
    phone: '+91 (XXX) XXX-ZZZZ',
    type: 'Branch Office',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <Hero
        title="Get in Touch With Us"
        subtitle="Contact Us"
        description="Ready to transform your organization? Reach out to our team of experts for a consultation."
        ctaText="Call Us Now"
        ctaLink="tel:+91XXXXXXXXXX"
        showScrollIndicator={false}
      />

      {/* Contact Info Cards */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl border border-gray-100 text-center"
                >
                  <div className="w-12 h-12 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{info.title}</h3>
                  <p className="text-sm text-gray-700 font-medium">{info.details}</p>
                  <p className="text-xs text-gray-500 mt-1">{info.subDetails}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="slideRight">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-primary mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="actuarial">Actuarial Consulting</option>
                      <option value="benefits">Employee Benefits</option>
                      <option value="risk">Risk Management</option>
                      <option value="pension">Pension Advisory</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-accent text-white py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            {/* Map & Offices */}
            <AnimatedSection animation="slideLeft">
              <div className="space-y-6">
                {/* Map Placeholder */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-80">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin size={48} className="mx-auto mb-4 text-primary" />
                      <p className="text-gray-600 font-medium">Interactive Map</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Mumbai, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Offices */}
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="bg-white p-6 rounded-xl shadow-lg"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-xl font-bold text-primary">{office.city}</h4>
                        <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                          {office.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{office.address}</p>
                      <p className="text-sm text-gray-500">{office.phone}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Social & Additional Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            subtitle="Connect With Us"
            title="Follow Our Journey"
            description="Stay updated with our latest insights, industry news, and company updates."
          />

          <AnimatedSection animation="fadeIn">
            <div className="flex justify-center space-x-6">
              {[
                { icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-[#0077B5]' },
                { icon: Twitter, label: 'Twitter', color: 'hover:bg-[#1DA1F2]' },
                { icon: Facebook, label: 'Facebook', color: 'hover:bg-[#1877F2]' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={28} className="text-gray-700" />
                </motion.a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={0.2}>
            <div className="mt-12 p-8 bg-gradient-to-br from-primary to-primary-700 rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Looking for Career Opportunities?</h3>
              <p className="mb-6 text-white/90">
                Join our team of experts and be part of something extraordinary.
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
              >
                View Open Positions
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
