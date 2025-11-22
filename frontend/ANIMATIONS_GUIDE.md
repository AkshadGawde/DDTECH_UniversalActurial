# 🎨 Animation & Effects Reference Guide

## Available Animations

### AnimatedSection Component

The `AnimatedSection` component provides scroll-triggered animations. Use it to wrap content that should animate when scrolling into view.

#### Animation Types

1. **fadeIn** - Simple fade in effect
```tsx
<AnimatedSection animation="fadeIn" delay={0.1}>
  <YourContent />
</AnimatedSection>
```

2. **slideUp** - Slides up while fading in (most common)
```tsx
<AnimatedSection animation="slideUp" delay={0.2}>
  <YourContent />
</AnimatedSection>
```

3. **slideLeft** - Slides in from the right
```tsx
<AnimatedSection animation="slideLeft">
  <YourContent />
</AnimatedSection>
```

4. **slideRight** - Slides in from the left
```tsx
<AnimatedSection animation="slideRight">
  <YourContent />
</AnimatedSection>
```

5. **scaleIn** - Scales up from 80% to 100%
```tsx
<AnimatedSection animation="scaleIn" delay={0.3}>
  <YourContent />
</AnimatedSection>
```

6. **stagger** - For lists, animates children with delay
```tsx
<AnimatedSection animation="stagger">
  <AnimatedChild>Item 1</AnimatedChild>
  <AnimatedChild>Item 2</AnimatedChild>
  <AnimatedChild>Item 3</AnimatedChild>
</AnimatedSection>
```

### Delay Property
Add delay to stagger animations:
```tsx
delay={0.1}  // Delays animation by 0.1 seconds
delay={0.5}  // Delays animation by 0.5 seconds
```

## Component-Specific Effects

### ServiceCard
- **3D Tilt Effect**: Cards tilt based on mouse position
- **Hover Lift**: Cards lift up on hover
- **Shine Effect**: Light sweep across card on hover
- **Gradient Overlay**: Subtle gradient appears on hover

### SectorCard
- **Image Scale**: Background scales on hover
- **Progress Bar**: Colored bar extends on hover
- **Icon Pop**: Icon scales and rotates slightly

### Hero Component
- **Text Stagger**: Each word animates individually
- **Floating Background**: Animated gradient orbs
- **Scroll Indicator**: Bouncing chevron animation
- **CTA Animation**: Arrow moves continuously

### Navbar
- **Shrink on Scroll**: Navbar reduces padding when scrolling
- **Glass Effect**: Background blur increases with scroll
- **Active Indicator**: Animated underline for active page
- **Mobile Menu**: Smooth height transition

### Stats Component
- **Number Counter**: Numbers count up from 0
- **Spring Animation**: Smooth easing for natural feel

## Hover Effects

### Magnetic Button (Custom Implementation)
```tsx
const [position, setPosition] = useState({ x: 0, y: 0 });

<motion.button
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  }}
  onMouseLeave={() => setPosition({ x: 0, y: 0 })}
  animate={{ x: position.x, y: position.y }}
>
  Magnetic Button
</motion.button>
```

### Scale on Hover
```tsx
<motion.div whileHover={{ scale: 1.05 }}>
  Content
</motion.div>
```

### Lift on Hover
```tsx
<motion.div whileHover={{ y: -10 }}>
  Content
</motion.div>
```

### Rotate on Hover
```tsx
<motion.div whileHover={{ rotate: 5 }}>
  Content
</motion.div>
```

## Page Transitions

Automatically applied to all pages via `PageTransition` component in layout.

**Animation Flow:**
1. Page fades out with slight upward movement
2. New page fades in with slight downward movement
3. Duration: 0.6 seconds with custom easing

**Easing Curve:**
```typescript
ease: [0.43, 0.13, 0.23, 0.96] // Custom cubic-bezier
```

## Smooth Scrolling

### Lenis Configuration
```typescript
{
  duration: 1.2,          // How long scroll takes
  easing: custom,         // Easing function
  smoothWheel: true,      // Smooth mouse wheel
  wheelMultiplier: 1,     // Scroll speed
  touchMultiplier: 2,     // Touch scroll speed
}
```

### Disable on Element
```tsx
<div data-lenis-prevent>
  {/* Scrolling disabled inside this */}
</div>
```

## Custom Animations Examples

### Continuous Animation
```tsx
<motion.div
  animate={{
    y: [0, -10, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  Floating Element
</motion.div>
```

### Stagger Children
```tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Parallax Effect
```tsx
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

<motion.div style={{ y }}>
  Parallax Content
</motion.div>
```

### Scroll-Linked Animation
```tsx
const { scrollYProgress } = useScroll();
const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

<motion.div style={{ scale }}>
  Scales as you scroll
</motion.div>
```

## Performance Tips

1. **Use `will-change`** for frequently animated properties
```tsx
<motion.div style={{ willChange: "transform" }}>
```

2. **Prefer `transform` and `opacity`** over layout properties
```tsx
// ✅ Good - GPU accelerated
animate={{ scale: 1.1, opacity: 1 }}

// ❌ Avoid - triggers layout
animate={{ width: "100%", height: "200px" }}
```

3. **Use `once: true`** for scroll animations that should only happen once
```tsx
whileInView={{ opacity: 1 }}
viewport={{ once: true }}
```

4. **Reduce motion for accessibility**
```tsx
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

<motion.div
  animate={prefersReducedMotion ? {} : { scale: 1.1 }}
>
```

## Animation Timing Reference

| Duration | Use Case |
|----------|----------|
| 0.2s | Micro-interactions (buttons, icons) |
| 0.3-0.5s | UI transitions (dropdowns, modals) |
| 0.6-0.8s | Page elements (cards, sections) |
| 1.0s+ | Hero animations, special effects |

## Easing Functions

```typescript
// Linear
ease: "linear"

// Standard easing
ease: "easeIn"
ease: "easeOut"
ease: "easeInOut"

// Custom cubic-bezier
ease: [0.43, 0.13, 0.23, 0.96]

// Spring physics
type: "spring"
stiffness: 100
damping: 10
```

## Common Patterns

### Fade In on Scroll
```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

### Slide Up on Scroll
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

### Hover Scale
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
```

### Loading Spinner
```tsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "linear"
  }}
>
```

## Debugging Animations

Enable Framer Motion dev tools:
```typescript
import { MotionConfig } from 'framer-motion';

<MotionConfig reducedMotion="user">
  <App />
</MotionConfig>
```

Check animation state:
```tsx
<motion.div
  onAnimationStart={() => console.log('Animation started')}
  onAnimationComplete={() => console.log('Animation complete')}
>
```

---

**Pro Tip**: Always test animations on different devices and connection speeds. What looks great on a desktop might feel sluggish on mobile!
