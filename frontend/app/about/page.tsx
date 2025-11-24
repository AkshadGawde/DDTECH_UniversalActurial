'use client';

import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import AnimatedSection from '@/components/animation/AnimatedSection';
import CTASection from '@/components/sections/CTASection';
import { motion } from 'framer-motion';
import { Award, Target, Eye, Users2 } from 'lucide-react';

const timeline = [
  { year: '1998', title: 'Foundation', description: 'Universal Actuaries was established with a vision to provide world-class actuarial consulting services.' },
  { year: '2005', title: 'Expansion', description: 'Expanded our services to include comprehensive employee benefit consulting across multiple sectors.' },
  { year: '2012', title: 'Innovation', description: 'Launched cutting-edge digital solutions for actuarial modeling and risk assessment.' },
  { year: '2018', title: 'Recognition', description: 'Recognized as one of the leading actuarial consulting firms in the region.' },
  { year: '2024', title: 'Growth', description: 'Serving 500+ clients across diverse industries with a team of 50+ expert consultants.' },
];

const team = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Founder & Chief Actuary',
    description: 'Fellow of the Institute of Actuaries with 30+ years of experience in actuarial consulting.',
  },
  {
    name: 'Priya Sharma',
    role: 'Managing Director',
    description: 'Expert in employee benefits with extensive experience in corporate benefit design and implementation.',
  },
  {
    name: 'Vikram Patel',
    role: 'Head of Risk Management',
    description: 'Specialist in enterprise risk management and regulatory compliance across multiple industries.',
  },
  {
    name: 'Anita Desai',
    role: 'Director of Operations',
    description: 'Leads operational excellence with focus on client satisfaction and service delivery.',
  },
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality of service through continuous learning and innovation.',
  },
  {
    icon: Target,
    title: 'Integrity',
    description: 'Upholding the highest ethical standards in all our professional engagements and client relationships.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Maintaining clear and open communication with clients, providing honest and objective advice.',
  },
  {
    icon: Users2,
    title: 'Collaboration',
    description: 'Working closely with clients as partners to achieve shared goals and sustainable success.',
  },
];

export default function About() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <Hero
        title="Pioneering Excellence in Actuarial Consulting"
        subtitle="About Us"
        description="With over 25 years of experience, we've been at the forefront of actuarial science and employee benefit consulting, helping organizations thrive."
        ctaText="Work With Us"
        ctaLink="/contact"
        showScrollIndicator={false}
      />

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideRight">
              <div className="relative h-[500px] rounded-2xl overflow-hidden group">
                <motion.div
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')] bg-cover bg-center"
                />
                <div className="absolute inset-0 bg-linear-to-br from-primary/90 to-accent/90 group-hover:from-primary/80 group-hover:to-accent/80 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center text-white p-8"
                  >
                    <h3 className="text-6xl font-bold mb-4">25+</h3>
                    <p className="text-2xl">Years of Excellence</p>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideLeft">
              <div>
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  Our Story
                </span>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Building Trust Through Expertise
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 1998, Universal Actuaries & Benefit Consultant has grown from a boutique 
                    actuarial firm to a comprehensive consulting powerhouse serving clients across diverse sectors.
                  </p>
                  <p>
                    Our journey has been marked by unwavering commitment to excellence, continuous innovation, 
                    and deep partnerships with our clients. We&apos;ve helped hundreds of organizations navigate 
                    complex actuarial challenges and design benefit programs that truly make a difference.
                  </p>
                  <p>
                    Today, we&apos;re proud to be recognized as one of the leading actuarial consulting firms, 
                    trusted by corporations, financial institutions, and government organizations alike.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection animation="slideUp" delay={0.1}>
              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional actuarial and employee benefit consulting services that empower 
                  organizations to make informed decisions, manage risks effectively, and create sustainable 
                  value for their stakeholders.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={0.2}>
              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted and innovative actuarial consulting partner, recognized globally 
                  for our expertise, integrity, and commitment to delivering solutions that transform 
                  businesses and improve lives.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            subtitle="Our Journey"
            title="Milestones of Excellence"
            description="Key moments that shaped our growth and strengthened our commitment to clients."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-accent to-primary" />

            {timeline.map((item, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 0.1}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg transform -translate-x-1/2"
                  />

                  {/* Content card */}
                  <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} w-full md:w-5/12`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                    >
                      <span className="inline-block px-3 py-1 bg-primary text-white rounded-full text-sm font-bold mb-3">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            subtitle="Our Values"
            title="What We Stand For"
            description="The principles that guide our work and define our relationships with clients."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={index} animation="scaleIn" delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="w-14 h-14 bg-linear-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon size={28} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionHeader
            subtitle="Meet the Team"
            title="Led by Industry Experts"
            description="Our leadership team brings decades of combined experience in actuarial science and consulting."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center"
                >
                  <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white">
                    <span className="text-5xl font-bold">{member.name.charAt(0)}</span>
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-1">{member.name}</h4>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Join Us on Our Journey"
        description="Whether you&apos;re looking for expert consulting or exploring career opportunities, we&apos;d love to hear from you."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact"
        secondaryButtonText="View Careers"
        secondaryButtonLink="#"
      />
    </main>
  );
}
