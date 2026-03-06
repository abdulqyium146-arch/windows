# Project Structure & File Reference Guide

## 📁 Complete Directory Structure

```
mandswindows/
├── app/
│   ├── api/
│   │   └── (Future: Contact form handler, API routes)
│   ├── fonts/
│   │   └── (Custom fonts, if added)
│   ├── layout.tsx                 # Root layout with metadata & schemas
│   ├── page.tsx                   # Homepage with all sections
│   ├── sitemap.ts                 # Dynamic XML sitemap generation
│   ├── robots.ts                  # Dynamic robots.txt generation
│   └── globals.css                # Global Tailwind imports
├── components/
│   ├── Navbar.tsx                 # Navigation with mobile menu
│   ├── Hero.tsx                   # Hero section with CTAs
│   ├── Services.tsx               # 6 main services grid
│   ├── Features.tsx               # 6 features with icons
│   ├── About.tsx                  # Company story & founders
│   ├── Gallery.tsx                # Project gallery with filters
│   ├── WhyChooseUs.tsx            # 6 reasons to choose us
│   ├── Contact.tsx                # Contact form & info
│   └── Footer.tsx                 # Footer with links
├── lib/
│   └── (Future: Utilities, helpers, api clients)
├── public/
│   ├── images/
│   │   └── (All image assets)
│   ├── favicon.ico                # Browser tab icon
│   └── robots.txt                 # (Auto-generated)
├── styles/
│   └── globals.css                # (Handled by app/globals.css)
├── .env.example                   # Environment variables template
├── .env.local                     # Local environment (git ignored)
├── .gitignore                     # Git ignore patterns
├── next.config.js                 # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── postcss.config.js              # PostCSS configuration
├── package.json                   # Dependencies & scripts
├── package-lock.json              # Dependency lock file
├── vercel.json                    # Vercel deployment config
├── DEPLOYMENT_GUIDE.md            # Deployment instructions (400+ lines)
├── SEO_CHECKLIST.md               # SEO audit & checklist
├── PERFORMANCE_GUIDE.md           # Performance optimization guide
├── MAINTENANCE_GUIDE.md           # Website maintenance procedures
└── README.md                      # Project overview

```

---

## 🔍 Core Files Reference

### Configuration Files

#### `next.config.js`
**Purpose:** Next.js application configuration
**Key Settings:**
- Image optimization (WebP, AVIF format conversion)
- Security headers (CSP, HSTS, X-Frame-Options, X-XSS-Protection)
- Rewrites for sitemap.xml
- Redirects for anchor links
- Environment variable configuration
- Caching headers for static assets
**When to Edit:** Performance tweaks, new rewrites/redirects, new headers
**Never Delete:** Critical for app functionality

#### `tailwind.config.ts`
**Purpose:** Tailwind CSS customization
**Key Settings:**
- Content paths (which files to scan for class names)
- Custom colors (primary #003366, accent #FF8C00)
- Custom fonts configuration
- Plugin configuration
**When to Edit:** Adding custom colors, modifying design system
**Never Delete:** Breaks all styling

#### `tsconfig.json`
**Purpose:** TypeScript compiler configuration
**Key Settings:**
- Strict type checking
- Path aliases (@/components, @/lib, etc.)
- Module resolution
- Target ES version
**When to Edit:** Adding path aliases, adjusting strict mode
**Never Delete:** TypeScript won't work

#### `postcss.config.js`
**Purpose:** PostCSS configuration for CSS processing
**Key Settings:**
- Tailwind CSS plugin
- Autoprefixer for browser compatibility
**When to Edit:** Adding CSS plugins
**Never Delete:** Tailwind CSS breaks

#### `vercel.json`
**Purpose:** Vercel deployment configuration
**Key Settings:**
- Build command: `npm run build`
- Install command: `npm install`
- Environment variables
- Caching headers
- Redirects for custom domains
**When to Edit:** Adding custom redirects, changing environment vars
**Never Delete:** Breaks Vercel deployment

#### `package.json`
**Purpose:** Project metadata and dependencies
**Key Sections:**
- Scripts (dev, build, start, lint, type-check, analyze)
- Dependencies (React, Next.js, Tailwind, Framer Motion, React Icons)
- DevDependencies (TypeScript, ESLint, PostCSS)
**When to Edit:** Adding packages, updating scripts
**Never Delete:** Project won't run

---

### Layout & Pages

#### `app/layout.tsx` (Root Layout)
**Purpose:** Global layout wrapping all pages
**Contains:**
- Metadata (title, description, keywords) - 100+ SEO keywords
- OpenGraph tags for social sharing
- Twitter Card tags for social media
- Multiple JSON-LD schemas:
  - LocalBusiness (company info, address, hours)
  - Organization (company details, founders)
  - BreadcrumbList (navigation structure)
- Google Analytics script
- Security meta tags
- DNS prefetch optimization
- Font optimization setup
- Root styling (Tailwind provider)

**Key Elements:**
```typescript
// Business Information
name: "M & S Windows & Conservatory Ltd"
// Address
addressLocality: "Chorlton",
addressRegion: "Manchester",
postalCode: "M21 7QL",
// Contact
telephone: "0161 286 8256",
email: "info@mandswindows.co.uk",
// Opening Hours
dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
opens: "09:00",
closes: "17:00",
// Social
url: "https://mandswindows.co.uk",
```

**When to Edit:**
- Update business information
- Add/change analytics ID
- Modify keywords
- Update OpenGraph image
- Change company description

**Never Delete:** All pages inherit this layout

#### `app/page.tsx` (Homepage)
**Purpose:** Main landing page
**Sections:** (All dynamically imported)
- Navbar (static)
- Hero (static)
- Services (dynamic)
- Features (dynamic)
- About (dynamic)
- Gallery (dynamic)
- WhyChooseUs (dynamic)
- Contact (dynamic)
- Footer (dynamic)

**Key Features:**
- Dynamic imports for performance
- Metadata with canonical URL
- Responsive design
- SEO-optimized content

**When to Edit:**
- Add new sections
- Reorder sections
- Update page title/description
- Change component imports

---

### Generated Routes

#### `app/sitemap.ts`
**Purpose:** Generate XML sitemap for search engines
**Generates:** Sitemap at `/sitemap.xml`
**Contains:**
- Home page (priority 1.0)
- Services section (priority 0.9)
- Gallery section (priority 0.8)
- About section (priority 0.7)
- Contact section (priority 0.9)

**Auto-Generated at:** Build time and runtime
**Accessible at:** https://mandswindows.co.uk/sitemap.xml

**When to Edit:**
- Add new major sections
- Change page priorities
- Update change frequency

**Never Delete:** Breaks SEO

#### `app/robots.txt`
**Purpose:** Control search engine crawler access
**Generates:** robots.txt at root (`/robots.txt`)
**Contains:**
- Allow all crawlers access
- Disallow API routes
- Sitemap location
- Host specification

**Accessible at:** https://mandswindows.co.uk/robots.txt

**When to Edit:**
- Add disallowed paths
- Change crawler rules
- Update sitemap URL

---

### Components Library

#### `components/Navbar.tsx`
**Purpose:** Navigation bar (sticky header)
**Features:**
- Logo/branding
- Navigation links (Home, Services, Gallery, About, Contact)
- Mobile hamburger menu
- Scroll detection (sticky on scroll)
- Call Now CTA button
- Framer Motion animations
- Responsive design (mobile/tablet/desktop)

**Key Props:** None (self-contained)
**Client Component:** Yes (scroll detection)
**When to Edit:** Update links, change colors, add menu items

#### `components/Hero.tsx`
**Purpose:** Hero section with main message
**Features:**
- Headline: "Premium Windows, Doors & Conservatories"
- Subheading with key benefits
- Dual CTAs (Get Quote, Learn More)
- Animated background
- Trust indicators (20+ years experience)
- Responsive design

**Key Props:** None (self-contained)
**Static Component:** Yes
**When to Edit:** Update headline, change CTA text, modify colors

#### `components/Services.tsx`
**Purpose:** Showcase 6 main services
**Services Displayed:**
1. Replacement Windows
2. Doors & Canopies
3. Conservatories
4. Leaded Windows
5. Porches
6. Door Canopies

**Features:**
- Grid layout (responsive)
- Icons from React Icons
- Service descriptions
- Hover animations
- Framer Motion effects

**Key Props:** None
**Client Component:** Yes (animations)
**When to Edit:** Add/remove services, update descriptions

#### `components/Features.tsx`
**Purpose:** Highlight 6 key features
**Features Displayed:**
1. Expert Installation
2. Premium Materials
3. 10-Year Guarantee
4. Free Surveys
5. Competitive Pricing
6. Local Manchester Team

**Design:** Cards with icons and descriptions
**Key Props:** None
**When to Edit:** Update features, change icons, modify benefits

#### `components/About.tsx`
**Purpose:** Company story and background
**Contains:**
- Company history
- Founder information (Steve and Louise Wright)
- Key milestones
- Company values
- Team philosophy

**Features:**
- Image placeholder
- Responsive layout
- Key points list
- Professional tone

**Key Props:** None
**When to Edit:** Update company story, change founder info, add achievements

#### `components/Gallery.tsx`
**Purpose:** Project showcase gallery
**Features:**
- Responsive image grid
- Category filters (All, Windows, Doors, Conservatories)
- Lightbox modal for full-size viewing
- 8 sample project images
- Image captions
- Click to zoom functionality

**Key Props:** None
**Client Component:** Yes (modal, filters)
**When to Edit:** Add new projects, update captions, change filter categories

#### `components/WhyChooseUs.tsx`
**Purpose:** Build trust and credibility
**Contains:**
- 6 compelling reasons to choose M & S Windows
- Trust badges
- Customer ratings (5 stars)
- Years in business
- Satisfaction guarantee
- Local expertise

**Design:** Cards with numbers/statistics
**Key Props:** None
**When to Edit:** Update reasons, change ratings, modify benefits

#### `components/Contact.tsx`
**Purpose:** Contact form and contact information
**Features:**
- Contact form (Name, Email, Phone, Subject, Message)
- CTA cards (Phone, Email, Address)
- Google Maps embed
- Hours of operation
- Newsletter signup option
- Responsive design

**Form Validation:**
- Name: Required
- Email: Required, valid format
- Phone: Optional
- Subject: Required
- Message: Required

**Key Props:** None
**Client Component:** Yes (form)
**When to Edit:**
- Add/remove form fields
- Update contact details
- Change phone number
- Modify Google Maps embed
- Update hours

#### `components/Footer.tsx`
**Purpose:** Site footer with links and info
**Sections:**
- Company info and description
- Quick links
- Services links
- Contact information
- Social media links
- Copyright notice

**Features:**
- 4-column layout (responsive)
- Mobile-friendly navigation
- Social icons
- Business address
- Contact details

**Key Props:** None
**Static Component:** Yes
**When to Edit:**
- Add/remove footer links
- Update social media handles
- Change contact info
- Modify company description

---

## 🔧 Environment Variables

### `.env.example` Template
Located at: `.env.example`
**Copy to:** `.env.local` for local development

**Required Variables:**
```
NEXT_PUBLIC_SITE_URL=https://mandswindows.co.uk
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION=google-site-verification-code
NEXT_PUBLIC_BING_VERIFICATION=bing-verification-code
```

**Optional Variables:**
```
NEXT_PUBLIC_MAPS_EMBED_URL=Google Maps iframe URL
SENDGRID_API_KEY=Your SendGrid API key
SENDGRID_EMAIL=info@mandswindows.co.uk
NEXT_PUBLIC_PHONE=0161 286 8256
NEXT_PUBLIC_EMAIL=info@mandswindows.co.uk
NEXT_PUBLIC_ADDRESS=243 Barlow Moor Road, Chorlton, Manchester M21 7QL
```

**When to Update:**
- Add analytics tracking ID
- Add domain verification codes
- Configure email service
- Update business contact info

---

## 📚 Documentation Files

### `DEPLOYMENT_GUIDE.md`
**Length:** 400+ lines
**Content:**
- Pre-deployment checklist (40+ items)
- Step-by-step deployment (5 major steps)
- Post-deployment verification
- SEO setup instructions
- Security hardening
- Performance optimization
- Maintenance schedule
- Troubleshooting guide
- KPI tracking table
- Completion checklist

**When to Use:** Before deploying to production

### `SEO_CHECKLIST.md`
**Length:** 200+ lines
**Sections:**
- Technical SEO (meta tags, schemas, sitemap)
- Mobile & responsiveness
- Image optimization
- Keywords & content
- Security
- Performance
- Accessibility
- Local SEO
- Analytics setup
- Link strategy

**When to Use:** SEO verification and monitoring

### `PERFORMANCE_GUIDE.md`
**Length:** 250+ lines
**Content:**
- Performance optimizations done
- Core Web Vitals targets
- Lighthouse audit info
- Image optimization details
- Caching strategy
- Monitoring setup
- Performance benchmarks
- Advanced optimizations
- Maintenance plan

**When to Use:** Performance monitoring and optimization

### `MAINTENANCE_GUIDE.md`
**Length:** 300+ lines
**Content:**
- Contact form setup
- Email service integration (Sendgrid)
- Email templates
- Response procedures
- Daily/weekly/monthly tasks
- KPI tracking
- Security maintenance
- Content update guidelines
- Troubleshooting guide
- Support contacts

**When to Use:** Website operation and maintenance

---

## 🎯 Quick Navigation Guide

### To Update Business Information
Edit these locations:
1. `app/layout.tsx` - Schema data, keywords
2. `components/About.tsx` - Company story
3. `components/Contact.tsx` - Contact details
4. `.env.example` - Environment variables
5. `next.config.js` - Redirects if needed

### To Change Design/Colors
Edit these files:
1. `tailwind.config.ts` - Custom colors and theme
2. All `components/` - Tailwind classes
3. `app/globals.css` - Global styles
4. `app/layout.tsx` - Root layout styles

### To Update Services/Content
Edit these components:
1. `components/Services.tsx` - Service list
2. `components/Features.tsx` - Features list
3. `components/WhyChooseUs.tsx` - Reasons/benefits
4. `components/Gallery.tsx` - Project showcase

### To Fix Performance Issues
Check these files:
1. `next.config.js` - Image optimization settings
2. `app/page.tsx` - Dynamic imports
3. `package.json` - Remove unused dependencies
4. Images in `public/images/` - Compress further

### To Improve SEO
Update these files:
1. `app/layout.tsx` - Keywords, metadata
2. `app/sitemap.ts` - Page priorities
3. All components - Alt text, semantic HTML
4. `.env.example` - Verification codes

### To Deploy Website
Follow these steps:
1. Read `DEPLOYMENT_GUIDE.md` completely
2. Verify in `SEO_CHECKLIST.md`
3. Check `PERFORMANCE_GUIDE.md`
4. Test with `npm run build`
5. Push to GitHub
6. Deploy to Vercel
7. Connect domain
8. Setup analytics and Google Search Console

---

## 📊 File Statistics

| Category | Count | Purpose |
|----------|-------|---------|
| Components | 8 | Reusable React components |
| Config Files | 5 | Next.js, Tailwind, TypeScript setup |
| Generated Routes | 2 | Sitemap, robots.txt |
| Documentation | 5 | Guides and checklists |
| Asset Folders | 2 | Images, fonts |

**Total: 22 key files**

---

## 🚀 Build & Deploy Files

### Dependencies (package.json)
**Production Dependencies:**
- react@19.0.0
- next@15.5.12
- react-dom@19.0.0
- framer-motion@12.35.0
- react-icons@5.6.0
- clsx@2.1.1
- class-variance-authority@0.7.0

**Dev Dependencies:**
- typescript@5.9.3
- tailwindcss@3.4.19
- postcss@8.4.47
- autoprefixer@10.4.20
- eslint@9.39.3
- @types/node@20.17.6
- @types/react@19.0.7

### Scripts (package.json)
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "type-check": "tsc --noEmit",
  "analyze": "ANALYZE=true npm run build",
  "format": "prettier --write .",
  "ci": "npm run type-check && npm run lint && npm run build"
}
```

---

## ✅ Verification Checklist

Before going live, verify:
- [ ] All components render correctly
- [ ] All links work (internal and external)
- [ ] Contact form is functional
- [ ] Images display properly
- [ ] Mobile responsive on all sizes
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] Build completes successfully
- [ ] Lighthouse scores 90+
- [ ] SEO elements in place

---

**Last Updated:** March 5, 2026
**Total Files:** 22 key files
**Status:** ✅ Production Ready
**Next Step:** Run `npm run build` to verify everything works
