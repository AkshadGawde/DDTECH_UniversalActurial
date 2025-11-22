'use client';

import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import SectorCard from '@/components/SectorCard';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import AnimatedSection from '@/components/AnimatedSection';
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
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Specialized services for manufacturing industries and industrial organizations.',
  },
  {
    icon: Landmark,
    title: 'Financial Services',
    description: 'Expert consulting for banks, insurance companies, and financial institutions.',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Comprehensive benefit solutions for healthcare providers and medical institutions.',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    description: 'Customized actuarial services for consulting firms and professional service providers.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Benefit consulting and risk management for educational institutions and universities.',
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
      <section className="section-padding bg-gray-50">
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
      <section className="section-padding bg-white">
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

      {/* Why Choose Us Section */}
      <AnimatedSection animation="fadeIn" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            subtitle="Why Choose Us"
            title="Your Trusted Partner"
            description="Combining expertise, innovation, and dedication to deliver exceptional results."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="slideUp" delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Certified professionals with decades of combined experience in actuarial science and employee benefits.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Innovative Solutions</h3>
                <p className="text-gray-600">
                  Leveraging cutting-edge technology and methodologies to provide forward-thinking solutions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Client-Centric</h3>
                <p className="text-gray-600">
                  Dedicated to understanding your unique needs and delivering customized solutions that drive success.
                </p>
              </div>
            </AnimatedSection>
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
