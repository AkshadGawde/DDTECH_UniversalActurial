'use client';

import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import ServiceCard from '@/components/cards/ServiceCard';
import SectorCard from '@/components/cards/SectorCard';
import CTA from '@/components/sections/CTASection';
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
    <main>
      {/* Section 1: Hero - SNAP */}
      <section className="snap-start snap-always text-center">
        <Hero
          title="Actuarial Excellence That Drives Results"
          subtitle="Trusted by Industry Leaders"
          description="Premier actuarial and benefit consulting services delivering data-driven solutions across insurance, healthcare, and corporate benefits sectors."
          ctaText="Schedule Consultation"
          ctaLink="/contact"
        />
      </section>

      {/* Section 2: Stats - SNAP */}
      <section className="snap-start snap-always">
        <Stats stats={statsData} />
      </section>

      {/* Section 3: Trust Indicators - SNAP */}
      <section className="snap-start snap-always py-20 min-h-screen flex items-center bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C2964B]/10 text-[#C2964B] rounded-full text-sm font-medium mb-4 border border-[#C2964B]/20">
              <Award className="w-4 h-4" />
              Certified & Accredited
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Recognized excellence in actuarial science
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              { name: 'SOA Certified', icon: Shield },
              { name: 'ISO Compliant', icon: Award },
              { name: 'Industry Leader', icon: Target },
              { name: 'Award Winning', icon: Zap },
            ].map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-6 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <div className="w-16 h-16 bg-linear-to-br from-[#1E3A8A] to-[#172554] rounded-xl flex items-center justify-center">
                  <badge.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-700">
                  {badge.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Services - SNAP */}
  <section className="snap-start snap-always py-24 min-h-screen flex items-center bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Comprehensive Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expert solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Shield}
              title="Employee Benefits"
              description="Strategic design and administration of comprehensive benefit programs."
              link="/services/employee-benefits"
              delay={0}
            />
            <ServiceCard
              icon={TrendingUp}
              title="Insurance Consulting"
              description="Advanced actuarial analysis and risk assessment for portfolios."
              link="/services/insurance-consulting"
              delay={0.1}
            />
            <ServiceCard
              icon={Users}
              title="Pension Planning"
              description="Expert retirement plan design and funding strategies."
              link="/services"
              delay={0.2}
            />
            <ServiceCard
              icon={FileText}
              title="Compliance"
              description="Ensure regulatory compliance with comprehensive services."
              link="/services"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Us - SNAP */}
  <section className="snap-start snap-always py-24 min-h-screen flex items-center bg-linear-to-br from-[#1a2f5a] via-[#15264a] to-[#0f1b3a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(30,58,138,0.3)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(220,38,38,0.2)_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
                <Target className="w-4 h-4" />
                Why Universal Actuaries
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Data-Driven Excellence
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Combining decades of experience with cutting-edge analytics
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-sm text-white/70">Client Retention</div>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl font-bold mb-2">₹2.5B+</div>
                  <div className="text-sm text-white/70">Assets Managed</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Award,
                  title: 'Expert Team',
                  description: 'Certified professionals with decades of experience.',
                },
                {
                  icon: Zap,
                  title: 'Innovation',
                  description: 'Cutting-edge technology and methodologies.',
                },
                {
                  icon: Users,
                  title: 'Client-Centric',
                  description: 'Customized solutions that drive success.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-[#DC2626] rounded-lg flex items-center justify-center">
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

      {/* Section 6: Sectors - SNAP */}
  <section className="snap-start snap-always py-24 min-h-screen flex items-center bg-linear-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Sectors We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized expertise across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SectorCard
              icon={Building2}
              title="Corporate"
              description="Employee benefit programs for all business sizes."
              delay={0}
            />
            <SectorCard
              icon={HeartPulse}
              title="Healthcare"
              description="Actuarial services for healthcare providers."
              delay={0.1}
            />
            <SectorCard
              icon={Briefcase}
              title="Insurance"
              description="Risk assessment and pricing strategies."
              delay={0.2}
            />
            <SectorCard
              icon={GraduationCap}
              title="Pensions"
              description="Retirement plan design optimization."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Section 7: CTA - SNAP */}
      <section className="snap-start snap-always">
        <CTA
          title="Ready to Transform Your Strategy?"
          description="Partner with Universal Actuaries for expert consulting."
          primaryButtonText="Schedule Consultation"
          primaryButtonLink="/contact"
          secondaryButtonText="View Services"
          secondaryButtonLink="/services"
        />
      </section>
    </main>
  );
}
