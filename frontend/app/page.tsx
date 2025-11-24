'use client';

import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import ServiceCard from '@/components/cards/ServiceCard';
import SectorCard from '@/components/cards/SectorCard';
import CTA from '@/components/sections/CTA';
import { 
  Shield, 
  TrendingUp, 
  Users, 
  FileText,
  Building2,
  HeartPulse,
  Briefcase,
  GraduationCap,
  Award,
  Target,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const statsData = [
    { value: 25, label: 'Years of Excellence', suffix: '+' },
    { value: 500, label: 'Clients Served', suffix: '+' },
    { value: 99, label: 'Client Satisfaction', suffix: '%' },
    { value: 50, label: 'Industry Awards', suffix: '+' },
  ];

  return (
    <>
      {/* Section 1: Hero - SNAP */}
      <section className="snap-start min-h-[100svh] relative">
        <Hero
          title="Actuarial Excellence That Drives Results"
          subtitle="Trusted by Industry Leaders"
          description="Premier actuarial and benefit consulting services delivering data-driven solutions across insurance, healthcare, and corporate benefits sectors."
          ctaText="Schedule Consultation"
          ctaLink="/contact"
        />
      </section>

      {/* Section 2: Stats Counter - SNAP */}
      <section className="snap-start min-h-[100svh] flex items-center">
        <Stats stats={statsData} />
      </section>

      {/* Section 3: Trust Indicators - SNAP */}
      <section className="snap-start min-h-[100svh] flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C2964B]/10 text-[#C2964B] rounded-full text-sm font-medium mb-6 border border-[#C2964B]/20">
              <Award className="w-4 h-4" />
              Certified & Accredited
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Recognized excellence in actuarial science and benefit consulting
            </p>
          </motion.div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'SOA Certified', icon: Shield },
              { name: 'ISO Compliant', icon: Award },
              { name: 'Industry Leader', icon: Target },
              { name: 'Award Winning', icon: Zap },
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                }}
                className="flex flex-col items-center gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-300 cursor-default"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#172554] rounded-xl flex items-center justify-center shadow-md">
                  <badge.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-700 text-center">
                  {badge.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Core Services - SNAP */}
      <section className="snap-start min-h-[100svh] flex items-center bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Comprehensive Actuarial Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expert solutions tailored to your organization's unique needs
            </p>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Shield}
              title="Employee Benefits"
              description="Strategic design and administration of comprehensive employee benefit programs."
              link="/services/employee-benefits"
              delay={0}
            />
            <ServiceCard
              icon={TrendingUp}
              title="Insurance Consulting"
              description="Advanced actuarial analysis and risk assessment for insurance portfolios."
              link="/services/insurance-consulting"
              delay={0.1}
            />
            <ServiceCard
              icon={Users}
              title="Pension Planning"
              description="Expert retirement plan design, funding strategies, and compliance management."
              link="/services"
              delay={0.2}
            />
            <ServiceCard
              icon={FileText}
              title="Compliance & Reporting"
              description="Ensure regulatory compliance with comprehensive audit and reporting services."
              link="/services"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Us - SNAP */}
      <section className="snap-start min-h-[100svh] flex items-center bg-gradient-to-br from-[#1a2f5a] via-[#15264a] to-[#0f1b3a] text-white relative overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(30,58,138,0.3)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(220,38,38,0.2)_0%,transparent_50%)]" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                Why Universal Actuaries
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Data-Driven Decisions, Exceptional Results
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed font-light">
                Our team of certified actuaries combines decades of experience with cutting-edge analytics to deliver solutions that drive measurable business outcomes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-sm text-white/60">Client Retention</div>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-4xl font-bold mb-2">₹2.5B+</div>
                  <div className="text-sm text-white/60">Assets Managed</div>
                </div>
              </div>
            </motion.div>

            {/* Right Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-6"
            >
              {[
                {
                  icon: Award,
                  title: 'Expert Team',
                  description: 'Certified professionals with decades of combined experience in actuarial science.',
                },
                {
                  icon: Zap,
                  title: 'Innovative Solutions',
                  description: 'Leveraging cutting-edge technology and methodologies for forward-thinking results.',
                },
                {
                  icon: Users,
                  title: 'Client-Centric',
                  description: 'Dedicated to understanding your unique needs and delivering customized solutions.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  whileHover={{
                    x: 4,
                    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                  }}
                  className="flex gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#DC2626] rounded-lg flex items-center justify-center shadow-lg">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-white/60 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: Industry Sectors - SNAP */}
      <section className="snap-start min-h-[100svh] flex items-center bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Sectors We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized expertise across multiple industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SectorCard
              icon={Building2}
              title="Corporate Benefits"
              description="Comprehensive employee benefit programs for businesses of all sizes."
              delay={0}
            />
            <SectorCard
              icon={HeartPulse}
              title="Healthcare"
              description="Actuarial services for healthcare providers and insurance companies."
              delay={0.1}
            />
            <SectorCard
              icon={Briefcase}
              title="Insurance"
              description="Risk assessment and pricing strategies for insurance portfolios."
              delay={0.2}
            />
            <SectorCard
              icon={GraduationCap}
              title="Pensions"
              description="Retirement plan design and funding optimization services."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Section 7: Process - SNAP */}
      <section className="snap-start min-h-[100svh] flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology for delivering exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Discovery', description: 'Understand your unique needs and objectives' },
              { number: '02', title: 'Analysis', description: 'Deep-dive into data and risk assessment' },
              { number: '03', title: 'Strategy', description: 'Develop customized actuarial solutions' },
              { number: '04', title: 'Implementation', description: 'Execute and monitor for optimal outcomes' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                }}
                className="relative text-center"
              >
                {/* Connection Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-[#1E3A8A] to-slate-300 -z-10" />
                )}

                <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-[#1E3A8A] to-[#172554] text-white rounded-2xl text-4xl font-bold mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA - SNAP */}
      <section className="snap-start min-h-[100svh] flex items-center">
        <CTA
          title="Ready to Transform Your Benefits Strategy?"
          description="Partner with Universal Actuaries and experience the difference that expert actuarial consulting can make."
          primaryButtonText="Schedule Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View Our Services"
          secondaryButtonLink="/services"
        />
      </section>
    </>
  );
}
