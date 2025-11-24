'use client';

import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import ServiceCard from '@/components/cards/ServiceCard';
import SectorCard from '@/components/cards/SectorCard';
import CTA from '@/components/sections/CTA';
import ParallaxSection from '@/components/scroll/ParallaxSection';
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

export default function Home() {
  const statsData = [
    { value: 25, label: 'Years of Excellence', suffix: '+' },
    { value: 500, label: 'Clients Served', suffix: '+' },
    { value: 99, label: 'Client Satisfaction', suffix: '%' },
    { value: 50, label: 'Industry Awards', suffix: '+' },
  ];

  return (
    <main className="overflow-hidden">
      {/* Section 1: Hero */}
      <Hero
        title="Actuarial Excellence That Drives Results"
        subtitle="Trusted by Industry Leaders"
        description="Premier actuarial and benefit consulting services delivering data-driven solutions across insurance, healthcare, and corporate benefits sectors."
        ctaText="Schedule Consultation"
        ctaLink="/contact"
      />

      {/* Section 2: Stats Counter */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <Stats stats={statsData} />
      </section>

      {/* Section 3: Trust Indicators */}
      <ParallaxSection speed={0.2}>
        <section className="py-16 bg-white border-y border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                Certified & Accredited
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Trusted by Leading Organizations
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Recognized excellence in actuarial science and benefit consulting
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
              {[
                { name: 'SOA Certified', icon: Shield },
                { name: 'ISO Compliant', icon: Award },
                { name: 'Industry Leader', icon: Target },
                { name: 'Award Winning', icon: Zap },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 hover:opacity-100 transition-opacity"
                >
                  <badge.icon className="w-12 h-12 text-primary-600" />
                  <span className="text-sm font-semibold text-neutral-700">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Section 4: Core Services */}
      <section className="py-24 bg-gradient-to-br from-white via-primary-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Comprehensive Actuarial Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Expert solutions tailored to your organization's unique needs
            </p>
          </div>

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

      {/* Section 5: Why Choose Us */}
      <ParallaxSection speed={0.3}>
        <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-hero-mesh opacity-30" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  <Target className="w-4 h-4" />
                  Why Universal Actuaries
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Data-Driven Decisions, Exceptional Results
                </h2>
                <p className="text-xl text-white/80 mb-8">
                  Our team of certified actuaries combines decades of experience with cutting-edge analytics to deliver solutions that drive measurable business outcomes.
                </p>
                <div className="flex gap-4">
                  <div className="flex-1 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-sm text-white/70">Client Retention</div>
                  </div>
                  <div className="flex-1 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                    <div className="text-3xl font-bold mb-2">₹2.5B+</div>
                    <div className="text-sm text-white/70">Assets Managed</div>
                  </div>
                </div>
              </div>

              {/* Right Features */}
              <div className="space-y-6">
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
                  <div
                    key={index}
                    className="flex gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Section 6: Industry Sectors */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Sectors We Serve
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Specialized expertise across multiple industries
            </p>
          </div>

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

      {/* Section 7: How We Work */}
      <ParallaxSection speed={0.25}>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                A proven methodology for delivering exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: '01', title: 'Discovery', description: 'Understand your unique needs and objectives' },
                { number: '02', title: 'Analysis', description: 'Deep-dive into data and risk assessment' },
                { number: '03', title: 'Strategy', description: 'Develop customized actuarial solutions' },
                { number: '04', title: 'Implementation', description: 'Execute and monitor for optimal outcomes' },
              ].map((step, index) => (
                <div key={index} className="relative">
                  {/* Connection Line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-primary-300 -z-10" />
                  )}

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-full text-4xl font-bold mb-6 shadow-glow-primary">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Section 8: Final CTA */}
      <CTA
        title="Ready to Transform Your Benefits Strategy?"
        description="Partner with Universal Actuaries and experience the difference that expert actuarial consulting can make."
        primaryButtonText="Schedule Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonLink="/services"
      />
    </main>
  );
}
