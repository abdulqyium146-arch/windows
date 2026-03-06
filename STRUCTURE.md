# Project Structure & Architecture

## Directory Layout

```
mandswindows/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata & SEO
│   ├── page.tsx                 # Home page (main entry point)
│   ├── globals.css              # Global styles & Tailwind imports
│   └── favicon.ico              # Website favicon
│
├── components/                   # React Components
│   ├── Navbar.tsx               # Navigation bar (sticky, responsive)
│   ├── Hero.tsx                 # Hero section with CTA buttons
│   ├── Services.tsx             # Services grid (6 services)
│   ├── Features.tsx             # Features/Benefits section
│   ├── About.tsx                # Company story & team info
│   ├── Gallery.tsx              # Photo gallery with filtering & lightbox
│   ├── WhyChooseUs.tsx          # Competitive advantages
│   ├── Contact.tsx              # Contact form & location
│   └── Footer.tsx               # Footer with links & info
│
├── public/                       # Static assets
│   ├── sitemap.xml             # SEO sitemap
│   ├── robots.txt              # Search engine rules
│   ├── manifest.json           # PWA manifest
│   ├── favicon.svg             # Favicon SVG
│   ├── og-image.jpg            # OpenGraph social image
│   └── images/
│       └── gallery/            # Gallery images (add here)
│
├── Configuration Files
│   ├── package.json            # Dependencies & scripts
│   ├── tsconfig.json           # TypeScript configuration
│   ├── tailwind.config.js      # Tailwind CSS customization
│   ├── postcss.config.js       # PostCSS configuration
│   ├── next.config.js          # Next.js configuration
│   └── .eslintrc.json          # ESLint rules
│
├── Documentation
│   ├── README.md               # Project overview
│   ├── DEPLOYMENT.md           # Deployment guide
│   └── STRUCTURE.md            # This file
│
└── Other Files
    ├── .gitignore              # Git ignore patterns
    ├── .env.example            # Environment variables template
    └── package-lock.json       # Dependency lock file
```

## Component Architecture

### Component Hierarchy

```
Layout (Root)
├── Navbar
│   └── Mobile menu (conditional)
├── Main Content
│   ├── Hero
│   ├── Services
│   ├── Features
│   ├── About
│   ├── Gallery
│   │   └── Lightbox (modal)
│   ├── WhyChooseUs
│   └── Contact
│       └── Google Maps Embed
└── Footer
```

## Technology Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Components**: Custom built with React

### Backend/Deployment
- **Hosting**: Vercel (recommended)
- **Database**: None (static site)
- **API**: Built-in Next.js API routes (when needed)

### DevTools
- **Build**: SWC (Next.js built-in)
- **Linting**: ESLint
- **Type Checking**: TypeScript

## Key Features

### Performance
✅ Server-side rendering (SSR)
✅ Static generation (SSG)
✅ Image optimization (WebP, lazy loading)
✅ Code splitting
✅ Minimal JavaScript bundle
✅ Target: Lighthouse 90+

### SEO
✅ Meta tags (title, description, keywords)
✅ OpenGraph social media support
✅ Twitter Card support
✅ LocalBusiness schema markup
✅ Sitemap generation
✅ Robots.txt configuration
✅ Canonical URLs
✅ Mobile-friendly design

### UX/UI
✅ Responsive design (mobile-first)
✅ Smooth scrolling
✅ Micro animations (Framer Motion)
✅ Sticky navigation
✅ Click-to-call phone numbers
✅ Interactive gallery with filters
✅ Contact form
✅ Google Maps embed

### Accessibility
✅ Semantic HTML
✅ ARIA labels
✅ Focus management
✅ Keyboard navigation
✅ Color contrast compliance
✅ Alt text for images

## Development Workflow

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

### Code Standards
- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Use Framer Motion for animations
- Maintain responsive design
- Test on mobile devices

## File Naming Conventions

- **Components**: PascalCase (e.g., `Hero.tsx`, `Navbar.tsx`)
- **Styles**: CSS modules or Tailwind classes
- **Images**: kebab-case (e.g., `logo-dark.png`)
- **Routes**: kebab-case (e.g., `/api/contact`)
- **Constants**: UPPER_SNAKE_CASE (if in separate file)

## Component Documentation

### Navbar.tsx
- Sticky navigation bar
- Mobile hamburger menu
- Call Now button (CTA)
- Smooth scroll links
- Props: None (standalone)

### Hero.tsx
- Eye-catching headline
- Subheading with value proposition
- Two CTA buttons
- Trust indicators (experience, projects, satisfaction)
- Animated background elements

### Services.tsx
- 6-service grid layout
- Icon + title + description
- Hover effects
- Responsive grid (1 col mobile, 3 cols desktop)

### Features.tsx
- 6 feature cards
- Icon + title + description
- Hover animations
- Border styling

### About.tsx
- Company story (left side)
- Image placeholder (right side)
- Three key points (icons + text)
- Owner information
- Responsive two-column layout

### Gallery.tsx
- Responsive image grid
- Category filter buttons
- Lightbox modal
- 8 sample images (placeholder)
- Smooth layout transitions

### WhyChooseUs.tsx
- 6 competitive advantages
- Icon + title + description
- Hover color transitions
- Trust badge (ratings)
- Grid layout

### Contact.tsx
- Contact form (name, phone, email, message)
- Form validation & submission feedback
- Three contact methods (call, address, email)
- Google Maps embed
- Two-column layout (form + info)

### Footer.tsx
- Four-column layout
- Brand info + social links
- Quicklinks
- Services list
- Contact information
- Copyright

## Styling Architecture

### Tailwind Classes
All styling uses Tailwind CSS utility classes. Key custom classes:

```css
.btn-cta              /* Orange CTA button */
.btn-secondary        /* Secondary button with border */
.container-custom     /* Max-width container */
.section-padding      /* Standard section padding */
.gradient-text        /* Blue gradient text */
.card-shadow          /* Card shadow styling */
```

### Color Palette
- **Primary**: #003366 (Deep Blue)
- **Secondary**: #FFFFFF (White)
- **Accent**: #E8E8E8 (Light Grey)
- **CTA**: #FF8C00 (Orange)
- **Light**: #f5f5f5
- **Dark**: #1a1a1a

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Tailwind classes: `sm:`, `md:`, `lg:`, `xl:`

## State Management

**No state management library needed** - components use:
- `useState` for local component state
- `useEffect` for side effects
- Context API if needed (not implemented)
- Form state in Contact component

## Performance Metrics

**Target Scores**:
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 95+

**Core Web Vitals**:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## Analytics & Tracking

To add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to environment variables: `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`
3. Implement in `app/layout.tsx`

To add contact form tracking:

1. Implement in Contact component
2. Send events to Google Analytics
3. Track form submissions and conversions

## SEO Implementation

### Meta Tags
Configured in `app/layout.tsx`:
- Title, description
- Keywords
- Author
- OpenGraph tags
- Twitter cards
- Canonical URL

### Schema Markup
LocalBusiness schema included in `app/layout.tsx`:
- Business name, address
- Phone, website
- Type of business
- Services offered

### Sitemap
Static sitemap at `/public/sitemap.xml`
Includes:
- Home page (priority 1.0)
- Services section (priority 0.9)
- Gallery (priority 0.8)
- About & Contact (priority 0.8)

### Robots.txt
Allows all crawlers, points to sitemap

## Future Enhancements

Potential additions:
1. Blog/News section
2. Customer testimonials/reviews
3. Video tutorials
4. Appointment booking system
5. WhatsApp integration
6. Live chat support
7. Multilingual support
8. Product comparison tool
9. Virtual tours
10. Before/after gallery

## Maintenance Notes

- Update gallery images regularly
- Monitor Analytics data
- Check SEO performance
- Update business information as needed
- Review and update testimonials
- Keep dependencies updated

## Resources & References

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
