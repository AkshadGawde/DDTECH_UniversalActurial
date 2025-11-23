# Parallax Effects & Premium UI/UX Enhancements

## Overview
This document outlines the comprehensive parallax effects and premium UI/UX improvements implemented across the Universal Actuaries website, focusing on the homepage.

## 🎨 Key Features Implemented

### 1. **Multi-Layer Parallax System**
- **ParallaxProvider**: Global parallax wrapper with scroll progress tracking
- **Scroll Breakpoints**: Visual indicators showing which section you're viewing
- **Smooth Transitions**: Spring-based animations for fluid movement

### 2. **Enhanced Hero Section**
- Multi-depth parallax layers (background, orbs, content)
- Independent scroll speeds for depth perception
- Animated floating particles
- Dynamic opacity and scale transforms
- Scroll-triggered content fade
- Premium animated CTAs with shine effects

**Parallax Speeds:**
- Background: 50% slower than scroll
- Orbs: 70% slower than scroll  
- Content: 30% slower than scroll

### 3. **Stats Section with Parallax**
- Animated number counters with spring physics
- Background elements with independent parallax motion
- Hover effects with glow and scale animations
- Staggered reveal animations (0.1s delay per card)

### 4. **Service Cards Enhancement**
- 3D tilt effect on mouse movement
- Scroll-based parallax (±20% range)
- Hover-triggered animations:
  - Icon rotation and glow
  - Gradient overlays
  - Shine sweep effect
  - Arrow pulse animation
- Preserve-3d transform style for depth

### 5. **Sector Cards with Depth**
- Image parallax on scroll (15% range)
- Content parallax in opposite direction (-10%)
- Floating particles on images
- Hover effects:
  - Image scale and rotation
  - Gradient overlays
  - Progress bar animation

### 6. **Visual Showcase Section**
- Image scale transitions
- Hover overlays with gradient
- Staggered animations
- 3D transform effects

### 7. **Scroll Progress Indicators**
- **Top Progress Bar**: Horizontal gradient bar showing scroll percentage
- **Circular Progress**: Bottom-left circular indicator with percentage
- **Section Dots**: Right-side vertical navigation dots (desktop only)
- **Scroll to Top**: Animated FAB button (appears after 20% scroll)

## 📊 Scroll Breakpoints

The homepage is divided into 7 main scroll sections:
1. Hero Section
2. Stats Section  
3. Services Section
4. Sectors Section
5. Visual Showcase
6. Why Choose Us
7. CTA Section

Each section is marked with `data-scroll-section` attribute for tracking.

## 🎯 Animation Timings

### Entry Animations
- Hero elements: 0.2s - 1.0s staggered delays
- Service cards: 0.1s incremental delay
- Sector cards: 0.1s incremental delay
- Stats: Animate on view once

### Hover Animations
- Scale transitions: 0.3s
- Color transitions: 0.3s
- 3D rotations: 0.5s
- Shine effects: 0.6s - 0.8s

### Scroll Animations
- Parallax: Follows scroll position (no delay)
- Opacity fades: Gradual based on viewport position
- Spring physics: 100 stiffness, 30 damping

## 🎨 Visual Effects

### Depth Layers (Z-Index)
- Progress bar: z-50
- Scroll indicators: z-40
- Hero scroll button: z-20
- Hero content: z-10
- Background elements: z-0 or negative

### Parallax Ranges
- **Hero Background**: -50% to +50%
- **Hero Orbs**: -70% to +70%
- **Hero Content**: -30% to +30%
- **Stats Background**: 0% to +20%
- **Stats Cards**: 0% to -10%
- **Service Cards**: +20% to -20%
- **Sector Images**: 0% to +15%
- **Sector Content**: 0% to -10%

### Color Scheme
- **Primary**: #003B73 (Navy Blue)
- **Accent**: #E63946 (Red)
- **Gradients**: Linear combinations of primary/accent with varying opacity

## 🔧 Technical Implementation

### Components Created/Enhanced
1. `ParallaxProvider.tsx` - Global parallax wrapper
2. `EnhancedScrollIndicator.tsx` - Scroll progress UI
3. `Hero.tsx` - Enhanced with multi-layer parallax
4. `Stats.tsx` - Added scroll animations
5. `ServiceCard.tsx` - Added parallax + 3D effects
6. `SectorCard.tsx` - Added depth parallax

### Key Dependencies
- `framer-motion`: All animations and parallax
- `useScroll`: Track scroll position
- `useTransform`: Map scroll to animation values
- `useSpring`: Smooth spring physics
- `useInView`: Trigger animations on view

### Performance Optimizations
- `viewport={{ once: true }}`: Animations run once
- Spring dampening for smooth stops
- Transform instead of position for GPU acceleration
- Passive scroll listeners where possible

## 📱 Responsive Behavior

### Desktop (lg+)
- Full parallax effects
- Section navigation dots visible
- Circular scroll indicator visible
- 3D tilt effects active

### Tablet (md)
- Reduced parallax intensity
- Section dots hidden
- Circular indicator visible
- Simplified hover effects

### Mobile (sm)
- Minimal parallax (battery/performance)
- All scroll indicators hidden except top bar
- Simplified animations
- Touch-friendly interactions

## 🚀 Usage

The parallax system is automatically active on all pages wrapped in the layout. To add parallax to a new section:

```tsx
// Mark section for navigation
<section data-scroll-section>
  <YourContent />
</section>

// Add parallax to individual elements
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ['start end', 'end start'],
});

const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

<motion.div style={{ y }}>
  Content
</motion.div>
```

## 🎯 Future Enhancements

Potential improvements:
- Magnetic cursor for interactive elements
- Page transition animations
- SVG path animations
- Scroll-triggered text reveals
- Video parallax backgrounds
- Particle system integration
- Custom cursor trails
- Interactive 3D models

## 📝 Notes

- All animations use hardware acceleration (`transform`, `opacity`)
- Parallax effects are subtle to maintain readability
- Accessibility: `prefers-reduced-motion` should be respected (TODO)
- All scroll indicators have proper ARIA labels
- Components are fully typed with TypeScript
