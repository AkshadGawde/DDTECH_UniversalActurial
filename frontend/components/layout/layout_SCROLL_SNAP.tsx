import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScrollProvider from '@/components/scroll/SmoothScrollProvider';
import PageTransition from '@/components/animation/PageTransition';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Universal Actuaries | Leading Actuarial & Benefit Consulting Services',
  description:
    'Premier actuarial and employee benefit consultancy firm providing comprehensive solutions across diverse sectors.',
  keywords: [
    'actuarial services',
    'employee benefits',
    'benefit consulting',
    'insurance consulting',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        <SmoothScrollProvider>
          <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
            <Navbar />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
