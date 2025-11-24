'use client';

import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import SectorCard from '@/components/cards/SectorCard';
import AnimatedSection from '@/components/animation/AnimatedSection';
import CTA from '@/components/sections/CTA';
import { 
  Building2, 
  Factory, 
  Landmark, 
  Heart,
  Briefcase,
  GraduationCap,
  Plane,
  ShoppingBag,
  Zap,
  Globe,
  Users,
  TreePine
} from 'lucide-react';
import { motion } from 'framer-motion';

const sectors = [
  {
    icon: Building2,
    title: 'Corporate Sector',
    description: 'Comprehensive actuarial and benefit solutions for large corporations, helping optimize employee benefits while managing costs and compliance.',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Specialized consulting for manufacturing enterprises, addressing unique workforce challenges and pension obligations.',
  },
  {
    icon: Landmark,
    title: 'Financial Services',
    description: 'Expert services for banks, insurance companies, and financial institutions including capital adequacy and product pricing.',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Tailored benefit solutions for hospitals, clinics, and healthcare organizations with focus on medical benefits and staff retention.',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    description: 'Customized consulting for law firms, accounting firms, and other professional service providers seeking competitive benefits.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Benefit design and pension management for universities, schools, and educational institutions nationwide.',
  },
  {
    icon: Plane,
    title: 'Aviation & Logistics',
    description: 'Risk assessment and benefit strategies for airlines, shipping companies, and logistics organizations.',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & E-Commerce',
    description: 'Scalable benefit solutions for retail chains and e-commerce platforms with diverse workforce needs.',
  },
  {
    icon: Zap,
    title: 'Energy & Utilities',
    description: 'Long-term actuarial planning for power companies, oil & gas, and utility providers managing large workforces.',
  },
  {
    icon: Globe,
    title: 'Technology & Startups',
    description: 'Modern benefit strategies for tech companies and startups focused on talent attraction and retention.',
  },
  {
    icon: Users,
    title: 'Government & Public Sector',
    description: 'Comprehensive consulting for government agencies and public sector organizations on pension reforms and benefits.',
  },
  {
    icon: TreePine,
    title: 'Hospitality & Tourism',
    description: 'Flexible benefit programs designed for hotels, resorts, and tourism companies with seasonal workforce patterns.',
  },
];

const industryStats = [
  { sector: 'Corporate', clients: '150+', icon: '🏢' },
  { sector: 'Manufacturing', clients: '80+', icon: '🏭' },
  { sector: 'Financial', clients: '120+', icon: '🏦' },
  { sector: 'Healthcare', clients: '90+', icon: '🏥' },
];

export default function Sectors() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <Hero
        title="Serving Diverse Industries"
        subtitle="Our Sectors"
        description="Deep domain expertise across multiple industries, delivering tailored solutions that address sector-specific challenges and opportunities."
        ctaText="Discuss Your Needs"
        ctaLink="/contact"
        showScrollIndicator={false}
      />

      {/* Industry Stats */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <AnimatedSection animation="fadeIn">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industryStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl text-center border border-gray-100"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.clients}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.sector}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            subtitle="Industries We Serve"
            title="Our Sector Expertise"
            description="From traditional industries to emerging sectors, we bring specialized knowledge and proven methodologies."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <SectorCard
                key={index}
                icon={sector.icon}
                title={sector.title}
                description={sector.description}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sector-Specific Solutions */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            subtitle="Tailored Approach"
            title="Industry-Specific Solutions"
            description="Understanding that each sector has unique requirements and challenges."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="slideRight">
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">Regulatory Expertise</h4>
                    <p className="text-gray-600">
                      Deep understanding of sector-specific regulations, compliance requirements, and reporting standards.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">Benchmarking Insights</h4>
                    <p className="text-gray-600">
                      Access to industry benchmarks and best practices to ensure competitive positioning.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">Custom Methodologies</h4>
                    <p className="text-gray-600">
                      Proprietary models and approaches designed specifically for your industry dynamics.
                    </p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideLeft">
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: -10 }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">Peer Network Access</h4>
                    <p className="text-gray-600">
                      Connections to industry peers and thought leaders for knowledge sharing and collaboration.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: -10 }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">Trend Analysis</h4>
                    <p className="text-gray-600">
                      Ongoing monitoring of sector trends, emerging risks, and opportunities for strategic advantage.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: -10 }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">6</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">Dedicated Teams</h4>
                    <p className="text-gray-600">
                      Sector-focused consultants who understand your business challenges intimately.
                    </p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Success Stories Teaser */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            subtitle="Proven Track Record"
            title="Success Across Sectors"
            description="Delivering measurable results for organizations of all sizes."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="scaleIn" delay={0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-3xl font-bold text-primary mb-2">40%</h3>
                <p className="text-gray-600 font-medium mb-2">Average Cost Savings</p>
                <p className="text-sm text-gray-500">
                  Through optimized benefit design and efficient administration
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" delay={0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-3xl font-bold text-primary mb-2">60%</h3>
                <p className="text-gray-600 font-medium mb-2">Faster Implementation</p>
                <p className="text-sm text-gray-500">
                  Leveraging proven methodologies and sector expertise
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection animation="scaleIn" delay={0.3}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-3xl font-bold text-primary mb-2">95%</h3>
                <p className="text-gray-600 font-medium mb-2">Compliance Rate</p>
                <p className="text-sm text-gray-500">
                  Maintaining regulatory compliance across all engagements
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Let's Discuss Your Sector"
        description="Every industry is unique. Share your challenges with us, and we'll show you how our sector expertise can benefit your organization."
        primaryButtonText="Schedule a Meeting"
        primaryButtonLink="/contact"
        secondaryButtonText="Download Brochure"
        secondaryButtonLink="#"
      />
    </main>
  );
}
