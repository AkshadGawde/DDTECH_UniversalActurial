'use client';

import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import AnimatedSection from '@/components/AnimatedSection';
import CTA from '@/components/CTA';
import { 
  Calculator, 
  Shield, 
  TrendingUp, 
  Users, 
  FileText,
  BarChart3,
  Clipboard,
  PieChart,
  Lock,
  UserCheck,
  Wallet,
  Scale
} from 'lucide-react';
import { motion } from 'framer-motion';

const mainServices = [
  {
    icon: Calculator,
    title: 'Actuarial Consulting',
    description: 'Comprehensive actuarial valuations, experience studies, and financial projections for pension plans, insurance products, and employee benefit programs.',
  },
  {
    icon: Shield,
    title: 'Employee Benefits Design',
    description: 'Strategic design and implementation of competitive employee benefit packages including health insurance, retirement plans, and wellness programs.',
  },
  {
    icon: TrendingUp,
    title: 'Risk Management',
    description: 'Enterprise risk assessment, quantification, and mitigation strategies to protect your organization from financial uncertainties.',
  },
  {
    icon: Users,
    title: 'Pension Advisory',
    description: 'Expert guidance on pension scheme design, funding strategies, and regulatory compliance for defined benefit and defined contribution plans.',
  },
];

const additionalServices = [
  {
    icon: FileText,
    title: 'Regulatory Compliance',
    description: 'Ensure adherence to local and international regulations including IRDAI, PFRDA, and other statutory requirements.',
  },
  {
    icon: BarChart3,
    title: 'Financial Modeling',
    description: 'Advanced financial modeling and forecasting for long-term planning and strategic decision-making.',
  },
  {
    icon: Clipboard,
    title: 'Benefits Administration',
    description: 'End-to-end administration of employee benefit programs with efficient processes and technology solutions.',
  },
  {
    icon: PieChart,
    title: 'Investment Consulting',
    description: 'Strategic asset allocation and investment advice for pension funds and benefit plan assets.',
  },
  {
    icon: Lock,
    title: 'Insurance Consulting',
    description: 'Product development, pricing, and reserving for life and non-life insurance companies.',
  },
  {
    icon: UserCheck,
    title: 'Talent Solutions',
    description: 'Compensation benchmarking, total rewards strategy, and executive benefit program design.',
  },
  {
    icon: Wallet,
    title: 'Retirement Planning',
    description: 'Personalized retirement planning services and post-retirement benefit management solutions.',
  },
  {
    icon: Scale,
    title: 'Mergers & Acquisitions',
    description: 'Due diligence and benefit integration support for corporate transactions and restructuring.',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understanding your unique needs, challenges, and objectives through detailed consultation.',
  },
  {
    step: '02',
    title: 'Analysis',
    description: 'Comprehensive data analysis and actuarial modeling to identify opportunities and risks.',
  },
  {
    step: '03',
    title: 'Strategy',
    description: 'Developing customized solutions aligned with your business goals and regulatory requirements.',
  },
  {
    step: '04',
    title: 'Implementation',
    description: 'Executing the solution with precision, ensuring smooth transition and stakeholder buy-in.',
  },
  {
    step: '05',
    title: 'Monitoring',
    description: 'Ongoing support, performance monitoring, and periodic reviews to ensure continued success.',
  },
];

export default function Services() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <Hero
        title="Comprehensive Actuarial Solutions"
        subtitle="Our Services"
        description="From actuarial consulting to risk management, we provide end-to-end services designed to drive value and ensure compliance."
        ctaText="Schedule Consultation"
        ctaLink="/contact"
        showScrollIndicator={false}
      />

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            subtitle="Core Offerings"
            title="Our Primary Services"
            description="Industry-leading solutions backed by decades of expertise and innovation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
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

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            subtitle="Specialized Solutions"
            title="Additional Services"
            description="Extended capabilities to meet your evolving business needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full"
                >
                  <div className="w-12 h-12 bg-linear-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                    <service.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            subtitle="How We Work"
            title="Our Consulting Process"
            description="A proven methodology that ensures successful outcomes and lasting impact."
          />

          <div className="relative">
            {/* Process flow line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <AnimatedSection key={index} animation="slideUp" delay={index * 0.1}>
                  <div className="relative">
                    {/* Step number circle */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative z-10 w-20 h-20 mx-auto mb-6 bg-linear-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl"
                    >
                      {item.step}
                    </motion.div>

                    {/* Content */}
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            subtitle="The Advantage"
            title="Why Choose Our Services"
            description="What sets us apart in delivering exceptional consulting outcomes."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="scaleIn" delay={0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-primary mb-3">Proven Expertise</h3>
                <p className="text-gray-600">
                  Our team of certified actuaries brings unmatched knowledge and experience across industries and domains.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" delay={0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-primary mb-3">Cutting-Edge Tools</h3>
                <p className="text-gray-600">
                  Leveraging advanced analytics, AI, and proprietary models to deliver superior insights and solutions.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" delay={0.3}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-primary mb-3">Tailored Solutions</h3>
                <p className="text-gray-600">
                  Every engagement is customized to your specific needs, ensuring relevant and actionable recommendations.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Get Started?"
        description="Let's discuss how our services can help you achieve your business objectives and manage risks effectively."
        primaryButtonText="Request Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Case Studies"
        secondaryButtonLink="#"
      />
    </main>
  );
}
