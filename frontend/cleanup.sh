#!/bin/bash

# Codebase Cleanup and Reorganization Script
# Run from: /Users/akshadgawde/Desktop/Developer/UniversalActuiral/frontend

BASE_DIR="/Users/akshadgawde/Desktop/Developer/UniversalActuiral/frontend"
COMPONENTS_DIR="$BASE_DIR/components"
ARCHIVE_DIR="$BASE_DIR/components-archive"

echo "🧹 Starting codebase cleanup..."

# Step 1: Create archive directory
echo "📁 Creating archive directory..."
mkdir -p "$ARCHIVE_DIR"

# Step 2: Delete GSAP components (causing build errors)
echo "🗑️  Deleting GSAP components..."
GSAP_FILES=(
  "AdvancedHero.tsx"
  "GSAPScrollAnimation.tsx"
  "Card3DTilt.tsx"
  "ParallaxLayer.tsx"
  "TextReveal.tsx"
)

for file in "${GSAP_FILES[@]}"; do
  if [ -f "$COMPONENTS_DIR/$file" ]; then
    rm "$COMPONENTS_DIR/$file"
    echo "  ✓ Deleted $file"
  fi
done

# Step 3: Move unused components to archive
echo "📦 Archiving unused components..."
UNUSED_FILES=(
  "ClientLogosGrid.tsx"
  "ImageGallery.tsx"
  "ImageReveal.tsx"
  "LoadingAnimation.tsx"
  "MagneticButton.tsx"
  "ModernCarousel.tsx"
  "NumberedSection.tsx"
  "PortfolioCarousel.tsx"
  "PremiumFooter.tsx"
  "PremiumHero.tsx"
  "ScrollProgress.tsx"
  "ServiceList.tsx"
  "StickyNavbar.tsx"
  "StatsCounter.tsx"
  "StickyScrollSection.tsx"
  "TestimonialsCarousel.tsx"
  "VideoParallax.tsx"
  "ParallaxSection.tsx"
)

for file in "${UNUSED_FILES[@]}"; do
  if [ -f "$COMPONENTS_DIR/$file" ]; then
    mv "$COMPONENTS_DIR/$file" "$ARCHIVE_DIR/"
    echo "  ✓ Archived $file"
  fi
done

# Step 4: Create organized folder structure
echo "📂 Creating organized folder structure..."
mkdir -p "$COMPONENTS_DIR/layout"
mkdir -p "$COMPONENTS_DIR/sections"
mkdir -p "$COMPONENTS_DIR/cards"
mkdir -p "$COMPONENTS_DIR/animation"
mkdir -p "$COMPONENTS_DIR/scroll"

# Step 5: Move components to organized folders
echo "🔄 Organizing components..."

# Layout components
mv "$COMPONENTS_DIR/Navbar.tsx" "$COMPONENTS_DIR/layout/" 2>/dev/null && echo "  ✓ Moved Navbar.tsx to layout/"
mv "$COMPONENTS_DIR/Footer.tsx" "$COMPONENTS_DIR/layout/" 2>/dev/null && echo "  ✓ Moved Footer.tsx to layout/"
mv "$COMPONENTS_DIR/CustomCursor.tsx" "$COMPONENTS_DIR/layout/" 2>/dev/null && echo "  ✓ Moved CustomCursor.tsx to layout/"

# Section components
mv "$COMPONENTS_DIR/Hero.tsx" "$COMPONENTS_DIR/sections/" 2>/dev/null && echo "  ✓ Moved Hero.tsx to sections/"
mv "$COMPONENTS_DIR/Stats.tsx" "$COMPONENTS_DIR/sections/" 2>/dev/null && echo "  ✓ Moved Stats.tsx to sections/"
mv "$COMPONENTS_DIR/CTA.tsx" "$COMPONENTS_DIR/sections/" 2>/dev/null && echo "  ✓ Moved CTA.tsx to sections/"
mv "$COMPONENTS_DIR/SectionHeader.tsx" "$COMPONENTS_DIR/sections/" 2>/dev/null && echo "  ✓ Moved SectionHeader.tsx to sections/"

# Card components
mv "$COMPONENTS_DIR/ServiceCard.tsx" "$COMPONENTS_DIR/cards/" 2>/dev/null && echo "  ✓ Moved ServiceCard.tsx to cards/"
mv "$COMPONENTS_DIR/SectorCard.tsx" "$COMPONENTS_DIR/cards/" 2>/dev/null && echo "  ✓ Moved SectorCard.tsx to cards/"

# Animation components
mv "$COMPONENTS_DIR/AnimatedSection.tsx" "$COMPONENTS_DIR/animation/" 2>/dev/null && echo "  ✓ Moved AnimatedSection.tsx to animation/"
mv "$COMPONENTS_DIR/ScrollReveal.tsx" "$COMPONENTS_DIR/animation/" 2>/dev/null && echo "  ✓ Moved ScrollReveal.tsx to animation/"
mv "$COMPONENTS_DIR/TextSplitReveal.tsx" "$COMPONENTS_DIR/animation/" 2>/dev/null && echo "  ✓ Moved TextSplitReveal.tsx to animation/"
mv "$COMPONENTS_DIR/AdvancedImageReveal.tsx" "$COMPONENTS_DIR/animation/" 2>/dev/null && echo "  ✓ Moved AdvancedImageReveal.tsx to animation/"
mv "$COMPONENTS_DIR/PageTransition.tsx" "$COMPONENTS_DIR/animation/" 2>/dev/null && echo "  ✓ Moved PageTransition.tsx to animation/"
mv "$COMPONENTS_DIR/SmoothScrollProvider.tsx" "$COMPONENTS_DIR/animation/" 2>/dev/null && echo "  ✓ Moved SmoothScrollProvider.tsx to animation/"

# Scroll components
mv "$COMPONENTS_DIR/ParallaxProvider.tsx" "$COMPONENTS_DIR/scroll/" 2>/dev/null && echo "  ✓ Moved ParallaxProvider.tsx to scroll/"
mv "$COMPONENTS_DIR/EnhancedScrollIndicator.tsx" "$COMPONENTS_DIR/scroll/" 2>/dev/null && echo "  ✓ Moved EnhancedScrollIndicator.tsx to scroll/"

echo ""
echo "✅ Cleanup complete!"
echo ""
echo "📊 Summary:"
echo "  - Deleted: ${#GSAP_FILES[@]} GSAP components"
echo "  - Archived: ${#UNUSED_FILES[@]} unused components"
echo "  - Organized: Active components into folders"
echo ""
echo "⚠️  Next steps:"
echo "  1. Update component imports in your files"
echo "  2. Update components/index.ts"
echo "  3. Run 'npm run build' to test"
