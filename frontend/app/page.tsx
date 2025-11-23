'use client';

import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import SectorCard from '@/components/SectorCard';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import AnimatedSection from '@/components/AnimatedSection';
import ScrollReveal from '@/components/ScrollReveal';
import TextSplitReveal from '@/components/TextSplitReveal';
import AdvancedImageReveal from '@/components/AdvancedImageReveal';
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

const stats = [
  { value: 25, label: 'Years of Excellence', suffix: '+' },
  { value: 500, label: 'Clients Served', suffix: '+' },
  { value: 50, label: 'Expert Consultants', suffix: '+' },
  { value: 98, label: 'Client Satisfaction', suffix: '%' },
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

      {/* Stats Section */}
      <Stats stats={stats} />

      {/* Services Section */}
      <section data-scroll-section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            subtitle="What We Offer"
            title="Our Core Services"
            description="Comprehensive actuarial and consulting services designed to meet your unique business needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section data-scroll-section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            subtitle="Industries We Serve"
            title="Sectors We Specialize In"
            description="Providing tailored solutions across multiple industries with deep domain expertise."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <SectorCard
                key={index}
                icon={sector.icon}
                title={sector.title}
                description={sector.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section data-scroll-section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <ScrollReveal direction="up" distance={60}>
            <SectionHeader
              subtitle="Our Work Environment"
              title="Where Excellence Meets Innovation"
              description="A glimpse into our collaborative workspace and professional culture."
            />
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
                alt: 'Modern office workspace',
                title: 'Collaborative Workspace',
                direction: 'left' as const,
              },
              {
                src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070',
                alt: 'Business analytics',
                title: 'Data-Driven Insights',
                direction: 'up' as const,
              },
              {
                src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974',
                alt: 'Team collaboration',
                title: 'Expert Team',
                direction: 'right' as const,
              },
            ].map((image, index) => (
              <ScrollReveal key={index} direction={image.direction} delay={index * 0.1} distance={80}>
                <motion.div
                  className="relative h-80 rounded-2xl overflow-hidden group cursor-hover"
                  data-cursor-text="View"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <AdvancedImageReveal
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0"
                    revealDirection="center"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-6 text-white z-10"
                  >
                    <h3 className="text-xl font-bold">{image.title}</h3>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <AnimatedSection animation="fadeIn" data-scroll-section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-semibold mb-4"
            >
              Why Choose Us
            </motion.p>
            <TextSplitReveal 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
              type="words"
            >
              Your Trusted Partner
            </TextSplitReveal>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Combining expertise, innovation, and dedication to deliver exceptional results.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-hover" data-cursor-text="Learn">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Certified professionals with decades of combined experience in actuarial science and employee benefits.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-hover" data-cursor-text="Explore">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Innovative Solutions</h3>
                <p className="text-gray-600">
                  Leveraging cutting-edge technology and methodologies to provide forward-thinking solutions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-hover" data-cursor-text="Discover">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Client-Centric</h3>
                <p className="text-gray-600">
                  Dedicated to understanding your unique needs and delivering customized solutions that drive success.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </AnimatedSection>

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
