# Production Deployment Guide - M & S Windows & Conservatory Ltd

## 📋 Pre-Deployment Checklist

### Code Quality
- [x] TypeScript strict mode
- [x] ESLint configuration
- [x] Production build optimization
- [x] Dynamic imports for performance
- [x] Security headers configured
- [x] Structured data (Schema.org)
- [x] Sitemap generation
- [x] Robots.txt configuration

### SEO & Metadata
- [x] Comprehensive meta tags
- [x] OpenGraph tags for social sharing
- [x] Twitter Card optimization
- [x] Canonical URLs
- [x] LocalBusiness schema
- [x] Organization schema
- [x] BreadcrumbList schema
- [x] Keywords optimization

### Performance
- [x] Image optimization (WebP, AVIF)
- [x] Dynamic component loading
- [x] CSS/JS minification
- [x] Lazy loading enabled
- [x] Cache control configured
- [x] GZip compression enabled

### Security
- [x] Content Security Policy
- [x] X-Frame-Options
- [x] Strict-Transport-Security
- [x] X-XSS-Protection
- [x] X-Content-Type-Options

---

## 🚀 Step-by-Step Deployment

### Step 1: Prepare GitHub Repository

```bash
# Initialize git if not already done
cd /path/to/mandswindows
git init

# Create .gitignore (already exists)
# Check: .gitignore includes .env, node_modules, .next, etc.

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: M & S Windows & Conservatory website"

# Add remote (replace with your GitHub repo)
git remote add origin https://github.com/abdulqyium146-arch/windows.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Create Vercel Account & Deploy

**Option A: CLI Deployment (Fastest)**
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod

# Follow prompts:
# - Framework: Next.js
# - Project name: mandswindows
# - Root directory: ./
```

**Option B: Web Dashboard Deployment (Recommended)**

1. **Go to https://vercel.com**
2. **Sign up** with GitHub account
3. **Click "New Project"**
4. **Import your GitHub repository**
   - Select: `abdulqyium146-arch/windows`
5. **Configure Project:**
   - **Framework Preset:** Next.js
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`

6. **Add Environment Variables:**
   ```
   NEXT_PUBLIC_SITE_URL = https://mandswindows.co.uk
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID = (from Google Analytics)
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION = (from Google Search Console)
   ```

7. **Click "Deploy"**

### Step 3: Connect Custom Domain

1. **Go to Project Settings → Domains**
2. **Click "Add Domain"**
3. **Enter:** `mandswindows.co.uk`
4. **Choose your domain registrar:**

**If Domain is at Namecheap:**
- Copy Vercel's nameserver addresses
- Go to Namecheap → Manage Domain
- Update nameservers to Vercel's
- Wait 24-48 hours for DNS propagation

**If Domain is at GoDaddy:**
- Same process, point nameservers to Vercel

**If Domain is at Another Registrar:**
- Follow registrar's DNS settings
- Point to Vercel's nameservers OR
- Add CNAME records as Vercel suggests

### Step 4: Enable Auto-Deployment

Vercel automatically deploys when you push to GitHub:

```bash
# Any push triggers automatic deployment
git add .
git commit -m "Update content"
git push origin main

# Check deployment status at vercel.com dashboard
```

### Step 5: SSL/TLS Certificate

Vercel **automatically** provides free SSL certificate via Let's Encrypt:
- ✅ Enabled automatically
- ✅ Auto-renews
- ✅ Covers all subdomains

---

## 🔍 Post-Deployment Verification

### Test Website
```bash
# Visit: https://mandswindows.co.uk
# Verify:
- [ ] Homepage loads
- [ ] All navigation links work
- [ ] Images load
- [ ] Contact form interactive
- [ ] Mobile responsive
- [ ] Maps display correctly
```

### Check Lighthouse Score
```bash
# Install lighthouse CLI
npm install -g lighthouse

# Test performance
lighthouse https://mandswindows.co.uk --chrome-flags="--headless"

# Target scores:
# - Performance: 90+
# - Accessibility: 90+
# - Best Practices: 90+
# - SEO: 95+
```

### Verify Security Headers
```bash
# Check if all security headers are present
curl -I https://mandswindows.co.uk | grep -E "Strict-Transport|X-Frame|Content-Security"
```

---

## 📊 SEO Setup

### Google Search Console

1. **Go to:** https://search.google.com/search-console/
2. **Click "Add Property"**
3. **Enter:** `https://mandswindows.co.uk`
4. **Verify domain using:**
   - Option 1: DNS CNAME (fastest)
   - Option 2: HTML file upload
   - Option 3: Meta tag

5. **Add Sitemap:**
   - Go to Sitemaps section
   - Add: `https://mandswindows.co.uk/sitemap.xml`
   - Click "Submit"

6. **Request Indexing:**
   - Go to "URL Inspection"
   - Enter: `https://mandswindows.co.uk`
   - Click "Request indexing"

### Bing Webmaster Tools

1. **Go to:** https://www.bing.com/webmasters
2. **Add:** `https://mandswindows.co.uk`
3. **Verify via:**
   - Google Search Console (auto-sync)
   - Or manual verification
4. **Submit Sitemap**

### Google Analytics

1. **Go to:** https://analytics.google.com
2. **Create new Property**
3. **Get Track ID:** G-XXXXXXXXXX
4. **Add to environment:**
   ```
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   ```
5. **Redeploy via Vercel**

### Local Business Schema Validation

1. **Go to:** https://schema.org/validator/
2. **Paste:** `https://mandswindows.co.uk`
3. **Verify all schemas validate**

---

## 📱 Mobile Verification

### Test Mobile Responsiveness
```bash
# Use Chrome DevTools (F12)
# Test on different screen sizes:
- 375px (iPhone SE)
- 414px (iPhone 12)
- 768px (iPad)
- 1024px (iPad Pro)
```

### Check Mobile Performance
1. **Go to:** https://pagespeed.web.dev/
2. **Enter:** `https://mandswindows.co.uk`
3. **Check Mobile score (target: 90+)**
4. **Check Desktop score (target: 95+)**

---

## 🔒 Security Hardening

### Enable HSTS
- ✅ Already configured in next.config.js
- ✅ Vercel enforces HTTPS

### Content Security Policy
- ✅ Configured for Google Maps, Analytics, ads

### Regular Security Checks
```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Update packages
npm update
```

---

## 📈 Performance Optimization

### Image Optimization
1. **All images converted to WebP**
2. **Lazy loading enabled**
3. **Responsive images configured**
4. **Cache control: 1 year**

### Bundle Size
```bash
# Check bundle size
npm run build

# Should see output like:
# ✓ Compiled successfully
# Route Size (KB)
# ┌ ○ / 52.9
```

### Cache Strategy
- **Static assets:** 31,536,000 seconds (1 year)
- **HTML pages:** 3,600 seconds (1 hour)
- **API routes:** 3,600 seconds (1 hour)
- **Sitemap:** 3,600 seconds (1 hour)

---

## 🛠️ Maintenance & Updates

### Weekly Tasks
- [ ] Check Vercel deployment logs
- [ ] Monitor Google Search Console
- [ ] Check PageSpeed Insights

### Monthly Tasks
- [ ] Review Analytics data
- [ ] Check for broken links
- [ ] Update content if needed
- [ ] Verify all forms working

### Quarterly Tasks
- [ ] Run full SEO audit
- [ ] Check mobile performance
- [ ] Review security logs
- [ ] Update dependencies

---

## 📞 Monitoring & Alerts

### Enable Vercel Alerts
1. **Go to Project Settings**
2. **Enable "Slack notifications"**
3. **Get alerted on failures**

### Monitor Performance
1. **Vercel Analytics**
   - Real User Monitoring (RUM)
   - Core Web Vitals tracking
   - Edge function metrics

2. **Google Analytics**
   - Traffic sources
   - User behavior
   - Conversion tracking

---

## 🆘 Troubleshooting

### Domain Not Showing Website
- [ ] Check DNS propagation: https://dnschecker.org/
- [ ] Verify nameservers at Vercel
- [ ] Wait 24-48 hours for full propagation

### Lighthouse Score Low
- [ ] Check Vercel Analytics for slow queries
- [ ] Optimize images further
- [ ] Enable caching headers
- [ ] Minify CSS/JS (automatic)

### Google Not Indexing Pages
- [ ] Submit sitemap to Google Search Console
- [ ] Use URL inspection tool
- [ ] Check robots.txt allows crawling
- [ ] Fix any indexing issues reported

### Contact Form Not Working
- [ ] Verify email service configured
- [ ] Check spam folder
- [ ] Test form submission
- [ ] Review server logs

---

## 🎯 Key Performance Indicators (KPIs)

### Target Metrics
| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Performance | 90+ | - |
| Lighthouse SEO | 95+ | - |
| Core Web Vitals (LCP) | <2.5s | - |
| Core Web Vitals (FID) | <100ms | - |
| Core Web Vitals (CLS) | <0.1 | - |
| Page Load Time | <3s | - |
| Mobile Friendly | Yes | - |
| SSL Certificate | Valid | - |

---

## ✅ Deployment Completion Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Domain connected
- [ ] SSL/TLS enabled
- [ ] Environment variables set
- [ ] Sitemap created and submitting
- [ ] Robots.txt configured
- [ ] Google Search Console verified
- [ ] Bing Webmaster verified
- [ ] Analytics tracking implemented
- [ ] Lighthouse score 90+
- [ ] Mobile test passed
- [ ] Security headers verified
- [ ] Contact form tested
- [ ] Links validated
- [ ] Images optimized

---

## 📚 Additional Resources

- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Vercel Docs:** https://vercel.com/docs
- **Google Search Central:** https://developers.google.com/search
- **Core Web Vitals:** https://web.dev/vitals
- **Schema.org:** https://schema.org

---

## 🎉 Congratulations!

Your website is now **live at https://mandswindows.co.uk**

### Next Steps:
1. Monitor analytics daily
2. Respond to customer inquiries
3. Update gallery with new projects
4. Maintain regular content updates
5. Build backlinks for better SEO

---

**For support or questions, contact: info@mandswindows.co.uk | 0161 286 8256**
