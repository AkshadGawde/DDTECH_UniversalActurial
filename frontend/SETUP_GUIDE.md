# 🚀 Universal Actuaries - Complete Setup Guide

## 📋 Project Overview

This is a premium, Awwwards-inspired multi-page portfolio website for Universal Actuaries & Benefit Consultant. The website features:

✨ **Modern Design**
- Clean corporate aesthetic with Deep Blue (#003B73) and Bold Red (#E63946) brand colors
- Responsive design that works perfectly on all devices
- Professional typography and spacing

🎭 **Premium Animations**
- Lenis smooth scrolling with inertia
- Framer Motion page transitions
- Scroll-triggered animations (fade-in, slide-up, stagger)
- 3D card hover effects
- Animated statistics counters
- Magnetic button effects

📄 **Pages Included**
1. **Home** - Hero, stats, services preview, sectors, why choose us
2. **About Us** - Story, mission/vision, timeline, values, team
3. **Services** - Main services, additional services, process, advantages
4. **Sectors** - Industry expertise, sector-specific solutions, success stories
5. **Contact** - Contact form, office locations, map, social links

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | React framework with App Router |
| TypeScript | Type-safe development |
| Tailwind CSS 4 | Utility-first styling |
| Framer Motion | Advanced animations |
| Lenis | Smooth scrolling |
| Lucide React | Icon library |

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Step 1: Install Dependencies

The following packages are already included in package.json:

```bash
cd frontend
npm install
```

**Core Dependencies:**
- next@16.0.3
- react@19.2.0
- react-dom@19.2.0
- framer-motion@^12.23.24
- lenis@^1.3.15
- lucide-react@^0.554.0

**Dev Dependencies:**
- typescript@^5
- tailwindcss@^4
- @tailwindcss/postcss@^4

### Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Brand Guidelines

### Color Palette

**Primary (Deep Blue)**
```
DEFAULT: #003B73
50:  #E6F0F8
100: #CCE1F1
500: #003B73 (Main)
700: #002345
900: #000B17
```

**Accent (Bold Red)**
```
DEFAULT: #E63946
50:  #FDEBEC
100: #FBD7D9
500: #E63946 (Main)
700: #A01622
900: #39070C
```

### Typography
- Primary Font: Geist Sans (Clean, modern sans-serif)
- Mono Font: Geist Mono (For code/technical content)

### Spacing
- Section Padding: 80px (mobile) to 128px (desktop)
- Container: Max-width 1280px with responsive padding

## 📁 Project Structure

```
frontend/
├── app/                      # Next.js App Router pages
│   ├── about/
│   │   └── page.tsx         # About Us page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   ├── sectors/
│   │   └── page.tsx         # Sectors page
│   ├── services/
│   │   └── page.tsx         # Services page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
│
├── components/              # Reusable components
│   ├── AnimatedSection.tsx  # Scroll animations wrapper
│   ├── CTA.tsx             # Call-to-action component
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Hero section
│   ├── Navbar.tsx          # Navigation bar
│   ├── PageTransition.tsx  # Page transitions
│   ├── SectionHeader.tsx   # Section headers
│   ├── SectorCard.tsx      # Sector cards
│   ├── ServiceCard.tsx     # Service cards
│   ├── SmoothScrollProvider.tsx  # Lenis provider
│   └── Stats.tsx           # Animated stats
│
├── public/                  # Static assets
├── tailwind.config.ts      # Tailwind config
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies
```

## 🎯 Key Components Usage

### 1. Hero Component
```tsx
import Hero from '@/components/Hero';

<Hero
  title="Your Main Title"
  subtitle="Optional Tagline"
  description="Compelling description text"
  ctaText="Button Text"
  ctaLink="/path"
  showScrollIndicator={true}
/>
```

### 2. ServiceCard (with 3D effects)
```tsx
import ServiceCard from '@/components/ServiceCard';
import { Calculator } from 'lucide-react';

<ServiceCard
  icon={Calculator}
  title="Service Name"
  description="Service description"
  link="/services"
  delay={0.1}
/>
```

### 3. AnimatedSection
```tsx
import AnimatedSection from '@/components/AnimatedSection';

<AnimatedSection 
  animation="slideUp"  // fadeIn, slideUp, slideLeft, slideRight, scaleIn
  delay={0.2}
>
  {/* Your content */}
</AnimatedSection>
```

### 4. Stats Component
```tsx
import Stats from '@/components/Stats';

const stats = [
  { value: 25, label: 'Years', suffix: '+' },
  { value: 500, label: 'Clients', suffix: '+' },
];

<Stats stats={stats} />
```

## 🔧 Customization Guide

### Changing Colors

**1. Update Tailwind Config** (`tailwind.config.ts`):
```typescript
colors: {
  primary: {
    DEFAULT: "#YourColor",
    // ... variants
  },
}
```

**2. Update CSS Variables** (`app/globals.css`):
```css
:root {
  --color-primary: #YourColor;
}
```

### Adding New Pages

1. Create folder in `app/`: `app/new-page/`
2. Add `page.tsx`: `app/new-page/page.tsx`
3. Add link to Navbar in `components/Navbar.tsx`

Example:
```tsx
// app/new-page/page.tsx
'use client';

import Hero from '@/components/Hero';

export default function NewPage() {
  return (
    <main>
      <Hero
        title="New Page"
        description="Description"
      />
      {/* More content */}
    </main>
  );
}
```

### Modifying Animations

**Smooth Scroll Settings** (`components/SmoothScrollProvider.tsx`):
```typescript
const lenis = new Lenis({
  duration: 1.2,        // Scroll duration
  easing: (t) => ...,   // Easing function
  smoothWheel: true,    // Smooth wheel scrolling
});
```

**Animation Variants** (`components/AnimatedSection.tsx`):
```typescript
const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  // Add your custom animations
};
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Mobile | < 768px | Single column layouts |
| Tablet | 768px - 1024px | 2-column grids |
| Desktop | > 1024px | 3+ column grids |
| Large | > 1280px | Max container width |

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

## ✅ Pre-Launch Checklist

- [ ] Replace all dummy content with real data
- [ ] Add actual company images
- [ ] Update contact information (email, phone, address)
- [ ] Test contact form functionality
- [ ] Add Google Maps integration
- [ ] Test on all devices (mobile, tablet, desktop)
- [ ] Check all links are working
- [ ] Optimize images for web
- [ ] Add meta tags for SEO
- [ ] Set up Google Analytics
- [ ] Test page load speed
- [ ] Verify accessibility (WCAG compliance)

## 🎨 Content Replacement Guide

### Home Page (`app/page.tsx`)
- Update services array with actual services
- Update sectors array with real sectors
- Modify stats with actual numbers

### About Page (`app/about/page.tsx`)
- Replace company story text
- Update timeline with real milestones
- Add actual team member photos and bios

### Services Page (`app/services/page.tsx`)
- Update service descriptions
- Modify process steps if needed
- Add real case studies

### Sectors Page (`app/sectors/page.tsx`)
- Update sector descriptions
- Add real industry statistics
- Include actual client success stories

### Contact Page (`app/contact/page.tsx`)
- Update all contact information
- Replace office addresses
- Add real phone numbers and emails
- Integrate contact form backend

## 🔌 Integrations Needed

### Contact Form Backend
The form currently shows an alert. Integrate with:
- FormSpree
- SendGrid
- Custom API endpoint
- Netlify Forms

### Google Maps
Replace map placeholder in contact page:
```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="400"
  loading="lazy"
/>
```

### Analytics
Add to `app/layout.tsx`:
```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

## 🐛 Common Issues & Solutions

### Issue: Animations not working
**Solution**: Ensure Framer Motion is properly imported and components are client components ('use client')

### Issue: Smooth scroll not smooth
**Solution**: Check Lenis configuration and ensure no conflicting CSS

### Issue: Build errors
**Solution**: Run `npm install` again and check for TypeScript errors

### Issue: Images not loading
**Solution**: Use Next.js Image component and place images in /public

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lenis Smooth Scroll](https://github.com/studio-freight/lenis)

## 💡 Tips for Best Results

1. **Performance**: Use Next.js Image component for all images
2. **SEO**: Add proper meta tags and descriptions
3. **Accessibility**: Ensure good color contrast and keyboard navigation
4. **Mobile First**: Test mobile experience thoroughly
5. **Content**: Keep text concise and scannable
6. **CTAs**: Make call-to-actions prominent and clear

## 📞 Support

For issues or questions about this project, refer to:
- Next.js GitHub Issues
- Tailwind CSS Community
- Framer Motion Documentation

---

**Ready to launch?** Follow the pre-launch checklist and deploy with confidence! 🚀
