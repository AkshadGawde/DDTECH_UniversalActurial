import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/animation/SmoothScrollProvider";
import PageTransition from "@/components/animation/PageTransition";
import ParallaxProvider from "@/components/scroll/ParallaxProvider";
import EnhancedScrollIndicator from "@/components/scroll/EnhancedScrollIndicator";
import CustomCursor from "@/components/layout/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Universal Actuaries & Benefit Consultant | Leading Actuarial Services",
  description: "Premier actuarial and employee benefit consultancy firm providing comprehensive solutions across diverse sectors including insurance, corporate benefits, and risk management.",
  keywords: "actuarial services, employee benefits, risk management, insurance consulting, corporate benefits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <CustomCursor />
          <Navbar />
          <EnhancedScrollIndicator />
          <ParallaxProvider>
            <PageTransition>
              {children}
            </PageTransition>
          </ParallaxProvider>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
