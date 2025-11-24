'use client';

import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import CTA from '@/components/sections/CTA';
import { Shield, TrendingUp, FileText, Calculator, BarChart3, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Shield,
    title: 'Property & Casualty',
    description: 'Risk assessment, pricing strategies, and reserving analysis for P&C insurers.',
  },
  {
    icon: TrendingUp,
    title: 'Life & Annuity',
    description: 'Product development, pricing, and reserve adequacy testing for life insurance.',
  },
  {
    icon: FileText,
    title: 'Reinsurance Strategy',
    description: 'Optimization of reinsurance programs and treaty negotiations.',
  },
  {
    icon: Calculator,
    title: 'Actuarial Modeling',
    description: 'Advanced predictive modeling and catastrophe analysis.',
  },
  {
    icon: BarChart3,
    title: 'Capital Management',
    description: 'Economic capital modeling, risk-based capital, and solvency assessments.',
  },
  {
    icon: AlertCircle,
    title: 'Regulatory Compliance',
    description: 'NAIC, Solvency II, and other regulatory reporting assistance.',
  },
];

export default function InsuranceConsultingPage() {
  return (
    <main className="overflow-hidden">
      <Hero
        title="Insurance Consulting Services"
        subtitle="Expert Actuarial Solutions"
        description="Specialized actuarial consulting for insurance companies, helping you navigate complex challenges and optimize performance."
        ctaText="Explore Our Services"
        ctaLink="/contact"
      />

      <section className="section-padding bg-linear-to-br from-white via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            subtitle="Our Expertise"
            title="Insurance Actuarial Consulting"
            description="Comprehensive actuarial solutions tailored for the insurance industry."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => {
              const Icon = service.icon;
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
                  <div className="w-14 h-14 bg-linear-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA
        title="Partner with Insurance Experts"
        description="Connect with our actuarial team to discuss your insurance consulting needs."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
      />
    </main>
  );
}
