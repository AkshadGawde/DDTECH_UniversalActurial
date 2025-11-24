#!/bin/bash

# Navigate to components directory
cd /Users/akshadgawde/Desktop/Developer/UniversalActuiral/frontend/components

echo "🗂️  Organizing components into folders..."

# Layout components (already moved)
echo "✅ Layout components already organized"

# Section components
echo "📄 Moving section components..."
mv Hero.tsx sections/ 2>/dev/null
mv Stats.tsx sections/ 2>/dev/null
mv CTA.tsx sections/ 2>/dev/null
mv SectionHeader.tsx sections/ 2>/dev/null

# Card components
echo "🃏 Moving card components..."
mv ServiceCard.tsx cards/ 2>/dev/null
mv SectorCard.tsx cards/ 2>/dev/null

# Animation components
echo "✨ Moving animation components..."
mv AnimatedSection.tsx animation/ 2>/dev/null
mv ScrollReveal.tsx animation/ 2>/dev/null
mv TextSplitReveal.tsx animation/ 2>/dev/null
mv AdvancedImageReveal.tsx animation/ 2>/dev/null
mv PageTransition.tsx animation/ 2>/dev/null
mv SmoothScrollProvider.tsx animation/ 2>/dev/null

# Scroll components
echo "📜 Moving scroll components..."
mv ParallaxProvider.tsx scroll/ 2>/dev/null
mv EnhancedScrollIndicator.tsx scroll/ 2>/dev/null

echo ""
echo "✅ Component organization complete!"
echo ""
echo "📁 New structure:"
echo "   components/"
echo "   ├── layout/          (Navbar, Footer, CustomCursor)"
echo "   ├── sections/        (Hero, Stats, CTA, SectionHeader)"
echo "   ├── cards/           (ServiceCard, SectorCard)"
echo "   ├── animation/       (AnimatedSection, ScrollReveal, etc.)"
echo "   ├── scroll/          (ParallaxProvider, EnhancedScrollIndicator)"
echo "   └── index.ts"
echo ""
