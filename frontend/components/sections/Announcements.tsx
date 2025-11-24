'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, TrendingUp, AlertCircle, ArrowRight, Calendar, Download } from 'lucide-react';
import { useRef } from 'react';
import Link from 'next/link';

const announcements = [
  {
    id: 1,
    type: 'Research Report',
    title: 'Q4 2024 Pension Fund Performance Analysis',
    date: 'November 20, 2024',
    category: 'Retirement',
    icon: FileText,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    id: 2,
    type: 'Interest Rates Update',
    title: 'Federal Reserve Rate Decision Impact on Insurance Reserves',
    date: 'November 18, 2024',
    category: 'Economic Insights',
    icon: TrendingUp,
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
  },
  {
    id: 3,
    type: 'Regulatory Report',
    title: 'New GASB 96 Implementation Guidelines for Public Sector',
    date: 'November 15, 2024',
    category: 'Compliance',
    icon: AlertCircle,
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
  },
];

export default function Announcements() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-linear-to-br from-gray-50 via-white to-blue-50">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <motion.div style={{ opacity, scale }} className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-blue-50 to-indigo-50 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-600">Latest Updates</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-linear-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Research & Insights
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Stay informed with our latest research reports, regulatory updates, and market insights
          </motion.p>
        </div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {announcements.map((announcement, index) => {
            const Icon = announcement.icon;
            return (
              <motion.div
                key={announcement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-linear-to-br ${announcement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="relative p-8">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 ${announcement.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${announcement.textColor}`} />
                    </div>

                    {/* Badge */}
                    <div className={`inline-block px-3 py-1 ${announcement.bgColor} ${announcement.textColor} text-xs font-bold rounded-full mb-4`}>
                      {announcement.type}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {announcement.title}
                    </h3>

                    {/* Meta */}
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{announcement.date}</span>
                      </div>
                    </div>

                    {/* Category Tag */}
                    <div className="text-sm text-gray-600 mb-6">
                      <span className="font-medium">{announcement.category}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-linear-to-r ${announcement.color} text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all`}
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-2.5 ${announcement.bgColor} ${announcement.textColor} rounded-xl hover:shadow-md transition-all`}
                      >
                        <Download className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${announcement.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '2px' }}>
                    <div className="w-full h-full bg-white rounded-2xl" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/insights">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all"
            >
              <span>View All Insights</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
