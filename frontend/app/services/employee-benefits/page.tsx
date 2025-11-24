"use client";

import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import ServiceCard from '@/components/cards/ServiceCard';
import CTA from '@/components/sections/CTASection';
import AnimatedSection from '@/components/animation/AnimatedSection';
import { motion } from 'framer-motion';
import {
	HeartPulse,
	ShieldCheck,
	Briefcase,
	DollarSign,
	GraduationCap,
	Users,
} from 'lucide-react';

// Core employee benefit offerings
const benefitCategories = [
	{
		icon: HeartPulse,
		title: 'Health & Medical Plans',
		description: 'Design and optimization of group health, hospitalization, and wellness benefit structures with cost containment strategies.',
	},
	{
		icon: ShieldCheck,
		title: 'Risk & Protection Benefits',
		description: 'Life, disability, and critical illness coverage benchmarking, pricing support, and insurer negotiation.',
	},
	{
		icon: DollarSign,
		title: 'Retirement & Pension',
		description: 'Defined benefit & defined contribution plan valuation, funding strategy, and long-term sustainability planning.',
	},
	{
		icon: GraduationCap,
		title: 'Financial Wellness & Education',
		description: 'Programs to improve financial literacy, retirement readiness, and benefit engagement across employee demographics.',
	},
	{
		icon: Briefcase,
		title: 'Executive & Key Talent Plans',
		description: 'Customized supplemental retirement, deferred compensation, and retention-focused benefit structures.',
	},
	{
		icon: Users,
		title: 'Flexible Benefits & Cafeteria',
		description: 'Modular benefit frameworks enabling personalization while maintaining budget discipline and governance.',
	},
];

// Simplified modernization & optimization process
const optimizationProcess = [
	{
		step: '01',
		title: 'Assess',
		description: 'Claims, utilization, demographic, and cost trend analysis to surface inefficiencies.'
	},
	{
		step: '02',
		title: 'Design',
		description: 'Strategic plan architecture balancing competitiveness, equity, compliance, and affordability.'
	},
	{
		step: '03',
		title: 'Implement',
		description: 'Carrier negotiation, communication rollout, governance model, and KPI tracking setup.'
	},
	{
		step: '04',
		title: 'Optimize',
		description: 'Ongoing monitoring, renewal strategy, and iterative enhancement based on data & feedback.'
	},
];

export default function EmployeeBenefits() {
	return (
		<main className="overflow-hidden">
			{/* Hero */}
			<Hero
				title="Strategic Employee Benefits Consulting"
				subtitle="Employee Benefits"
				description="We architect high-impact, data-driven benefit programs that attract talent, improve wellbeing, and manage long-term financial risk."
				ctaText="Speak to a Consultant"
				ctaLink="/contact"
				showScrollIndicator={false}
			/>

			{/* Benefit Categories */}
			<section className="section-padding bg-white">
				<div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
					<SectionHeader
						subtitle="Core Domains"
						title="Holistic Benefit Architecture"
						description="Comprehensive coverage across health, protection, retirement, engagement, and executive benefit strategies."
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{benefitCategories.map((b, i) => (
							<ServiceCard
								key={b.title}
								icon={b.icon}
								title={b.title}
								description={b.description}
								delay={i * 0.08}
								link="#"
							/>
						))}
					</div>
				</div>
			</section>

			{/* Optimization Process */}
			<section className="section-padding bg-gray-50">
				<div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
					<SectionHeader
						subtitle="Methodology"
						title="Benefit Optimization Lifecycle"
						description="A disciplined, actuarially grounded framework ensuring competitive positioning, cost efficiency, and sustainable value creation."
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
						{optimizationProcess.map((item, idx) => (
							<AnimatedSection key={item.step} animation="slideUp" delay={idx * 0.1}>
								<div className="relative flex flex-col items-center text-center">
									<motion.div
										whileHover={{ scale: 1.08, rotate: 3 }}
										className="w-20 h-20 mb-6 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold shadow-lg"
									>
										{item.step}
									</motion.div>
									<h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
									<p className="text-sm text-gray-600 leading-relaxed max-w-sm">{item.description}</p>
								</div>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>

			{/* Outcomes / Value Props */}
			<section className="section-padding bg-white">
				<div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
					<SectionHeader
						subtitle="Impact Metrics"
						title="What Optimized Programs Deliver"
						description="Quantifiable improvements spanning cost, engagement, retention, and wellbeing outcomes." 
					/>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{ label: 'Healthcare Cost Trend Reduction', value: '8–12%' },
							{ label: 'Retention Increase in Key Roles', value: '15%' },
							{ label: 'Benefit Engagement Uplift', value: '30%+' },
							{ label: 'Data-Driven Renewal Savings', value: '5–10%' },
						].map((m, i) => (
							<AnimatedSection key={m.label} animation="scaleIn" delay={0.1 + i * 0.1}>
								<motion.div
									whileHover={{ y: -6 }}
									className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 text-center"
								>
									<div className="text-3xl font-extrabold text-primary mb-2">{m.value}</div>
									<p className="text-sm text-gray-600">{m.label}</p>
								</motion.div>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<CTA
				title="Elevate Your Employee Benefits Strategy"
				description="Partner with our actuarial experts to unlock smarter benefit design, stronger retention, and measurable financial performance."
				primaryButtonText="Request Benefits Review"
				primaryButtonLink="/contact"
				secondaryButtonText="Download Overview"
				secondaryButtonLink="#"
				features={[
					'Data-driven actuarial modeling',
					'Vendor & carrier negotiation',
					'Benchmarking & market insights',
					'Governance & compliance support',
				]}
			/>
		</main>
	);
}
