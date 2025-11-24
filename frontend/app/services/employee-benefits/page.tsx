'use client';

import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import AnimatedSection from '@/components/animation/AnimatedSection';
import CTA from '@/components/sections/CTA';
import { Shield, Users, TrendingUp, Heart, FileText, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: Shield,
    title: 'Retirement Plans',
    description: 'Comprehensive 401(k), pension, and retirement benefit design and administration services.',
  },
  {
    icon: Users,
    title: 'Health & Welfare',
    description: 'Medical, dental, vision, and wellness program consulting and implementation.',
  },
  {
    icon: TrendingUp,
    title: 'Executive Compensation',
    description: 'Deferred compensation, equity plans, and executive benefit strategies.',
  },
  {
    icon: Heart,
    title: 'Total Rewards Strategy',
    description: 'Holistic approach to employee compensation and benefits optimization.',
  },
  {
    icon: FileText,
    title: 'Compliance Support',
    description: 'ERISA, IRS, DOL compliance, and regulatory reporting assistance.',
  },
  {
    icon: Calculator,
    title: 'Actuarial Valuations',
    description: 'ASC 715, GASB, and IFRS pension and OPEB valuations.',
  },
];

export default function EmployeeBenefitsPage() {
  return (
    <main className="overflow-hidden">
      <Hero
        title="Employee Benefits Consulting"
        subtitle="Comprehensive Solutions"
        description="Expert guidance in designing, implementing, and managing employee benefit programs that attract and retain top talent while optimizing costs."
        ctaText="Schedule Consultation"
        ctaLink="/contact"
      />

      <section className="section-padding bg-linear-to-br from-white via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            subtitle="Our Services"
            title="Comprehensive Employee Benefits Solutions"
            description="From strategy to execution, we provide end-to-end employee benefits consulting services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-linear-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA
        title="Transform Your Employee Benefits Program"
        description="Let's discuss how we can help you design a benefits strategy that works for your organization."
        primaryButtonText="Get Started Today"
        primaryButtonLink="/contact"
      />
    </main>
  );
}
