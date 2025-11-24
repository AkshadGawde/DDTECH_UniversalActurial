"use client";

import Hero from '@/components/sections/Hero';
import SectionHeader from '@/components/sections/SectionHeader';
import ServiceCard from '@/components/cards/ServiceCard';
import AnimatedSection from '@/components/animation/AnimatedSection';
import CTA from '@/components/sections/CTASection';
import { Shield, BarChart3, Activity, FileText, TrendingUp, Layers, LineChart, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';

const insuranceServices = [
	{
		icon: Shield,
		title: 'Product Pricing',
		description: 'Actuarial pricing frameworks for life, health, and general insurance products with embedded sensitivity testing.',
	},
	{
		icon: BarChart3,
		title: 'Reserve Adequacy',
		description: 'Independent assessment and valuation of technical provisions, IBNR, and claim reserve robustness.',
	},
	{
		icon: Activity,
		title: 'Experience Analysis',
		description: 'Mortality, morbidity, persistency, and lapse studies driving refined assumption setting and portfolio steering.',
	},
	{
		icon: FileText,
		title: 'Regulatory Reporting',
		description: 'Support for IRDAI filings, solvency monitoring, stress testing, and actuarial memorandum preparation.',
	},
	{
		icon: TrendingUp,
		title: 'Capital & Risk Modeling',
		description: 'Economic capital, ORSA support, and stochastic modeling for strategic balance sheet optimization.',
	},
	{
		icon: Layers,
		title: 'Reinsurance Strategy',
		description: 'Structure design, treaty evaluation, retention analysis, and portfolio volatility mitigation.',
	},
	{
		icon: LineChart,
		title: 'Performance Dashboards',
		description: 'Interactive KPI and actuarial metric visualization enabling proactive management oversight.',
	},
	{
		icon: ClipboardList,
		title: 'Process Modernization',
		description: 'Workflow automation, model governance enhancements, and actuarial transformation roadmaps.',
	},
];

const deliveryPhases = [
	{ step: '01', title: 'Diagnose', description: 'Gap assessment across assumptions, processes, data integrity, and regulatory posture.' },
	{ step: '02', title: 'Model', description: 'Refined actuarial modeling with scenario, sensitivity, and stress layers.' },
	{ step: '03', title: 'Implement', description: 'Operationalization via documentation, governance embeds, and training.' },
	{ step: '04', title: 'Optimize', description: 'Continuous improvement: monitoring, recalibration, and insight generation.' },
];

export default function InsuranceConsulting() {
	return (
		<main className="overflow-hidden">
			<Hero
				title="Advanced Insurance Consulting"
				subtitle="Insurance Consulting"
				description="Data-driven actuarial advisory accelerating product development, capital efficiency, and regulatory confidence."
				ctaText="Request Advisory"
				ctaLink="/contact"
				showScrollIndicator={false}
			/>

			{/* Service Spectrum */}
			<section className="section-padding bg-white">
				<div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
					<SectionHeader
						subtitle="Capabilities"
						title="Full Spectrum Actuarial Support"
						description="Strategic, technical, and operational services spanning pricing, reserving, capital, and modernization."
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{insuranceServices.map((svc, i) => (
							<ServiceCard
								key={svc.title}
								icon={svc.icon}
								title={svc.title}
								description={svc.description}
								delay={i * 0.08}
								link="#"
							/>
						))}
					</div>
				</div>
			</section>

			{/* Delivery Framework */}
			<section className="section-padding bg-gray-50">
				<div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
					<SectionHeader
						subtitle="Framework"
						title="Structured Delivery Lifecycle"
						description="Repeatable, transparent process driving measurable actuarial maturity uplift." 
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
						{deliveryPhases.map((phase, idx) => (
							<AnimatedSection key={phase.step} animation="slideUp" delay={idx * 0.1}>
								<div className="relative flex flex-col items-center text-center">
									<motion.div
										whileHover={{ scale: 1.08, rotate: 3 }}
										className="w-20 h-20 mb-6 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold shadow-lg"
									>
										{phase.step}
									</motion.div>
									<h3 className="text-xl font-bold text-primary mb-3">{phase.title}</h3>
									<p className="text-sm text-gray-600 leading-relaxed max-w-sm">{phase.description}</p>
								</div>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>

			{/* KPI Impact */}
			<section className="section-padding bg-white">
				<div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
					<SectionHeader
						subtitle="Impact"
						title="Outcome Acceleration"
						description="Target improvements across underwriting profitability, capital deployment efficiency, and operational throughput." 
					/>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{ label: 'Pricing Cycle Time Reduction', value: '20–30%' },
							{ label: 'Reserve Volatility Mitigation', value: '10–15%' },
							{ label: 'Capital Utilization Efficiency', value: '8–12%' },
							{ label: 'Automation Coverage Increase', value: '40%+' },
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

			<CTA
				title="Unlock Actuarial Advantage"
				description="Engage our insurance consulting specialists to enhance pricing precision, capital resilience, and reporting confidence."
				primaryButtonText="Start Conversation"
				primaryButtonLink="/contact"
				secondaryButtonText="Download Capabilities"
				secondaryButtonLink="#"
				features={[
					'Regulatory compliance assurance',
					'Capital modeling & ORSA support',
					'Reinsurance optimization insights',
					'Experience study modernization',
				]}
			/>
		</main>
	);
}
