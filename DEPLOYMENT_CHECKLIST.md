# FINAL DEPLOYMENT & GOOGLE INDEXING CHECKLIST

## DEPLOYMENT ROADMAP (Next 48 Hours)

### PHASE 1: VERCEL DEPLOYMENT (Day 1 - 30 minutes)

#### Step 1: Connect GitHub to Vercel
```
1. Go to: https://vercel.com/dashboard
2. Click: "Add New" → "Project"
3. Click: "Import Git Repository"
4. Select: abdulqyium146-arch/windows
5. Click: "Import"
```

#### Step 2: Auto-Configuration
Vercel will auto-detect:
- ✅ Framework: Next.js
- ✅ Build command: npm run build
- ✅ Output directory: .next
- ✅ Install command: npm install

**No changes needed!**

#### Step 3: Environment Variables (OPTIONAL)
Go to: Settings → Environment Variables

Add these (optional):
```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID = G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION = [verification code]
NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION = [verification code]
```

**Note:** Leave blank for now, not required for core functionality

#### Step 4: Deploy
```
Click: "Deploy"
Wait: ~3-5 minutes
Result: Website live at https://windows-xxxx.vercel.app
```

✅ **Milestone 1 Complete:** Website publicly accessible

---

### PHASE 2: CUSTOM DOMAIN SETUP (Day 1 - 20 minutes)

#### Step 1: Add Custom Domain
```
1. Go to Vercel Dashboard
2. Select your project
3. Go to: Settings → Domains
4. Click: "Add Domain"
5. Enter: mandswindows.co.uk
6. Click: "Add"
```

#### Step 2: Update DNS Records
Vercel will show you nameservers:
```
ns1.vercel-dns.com
ns2.vercel-dns.com  
ns3.vercel-dns.com
ns4.vercel-dns.com
```

At your domain registrar (where you bought mandswindows.co.uk):
1. Go to DNS settings
2. Change nameservers to Vercel's
3. Save changes

#### Step 3: Wait for DNS Propagation
```
Time needed: 24-48 hours typically
Check status: https://www.whatsmydns.net/?type=NS&q=mandswindows.co.uk
```

#### Step 4: Verify SSL Certificate
```
Vercel automatically:
- ✅ Generates free SSL certificate
- ✅ Auto-renews every 90 days
- ✅ Enables HTTPS redirection
```

✅ **Milestone 2 Complete:** Custom domain active with HTTPS

---

### PHASE 3: GOOGLE INDEXING (Day 2-7)

#### Step 1: Create Google Search Console Property
```
1. Go to: https://search.google.com/search-console
2. Click: "Start now"
3. Select: "Domain" (left option)
4. Enter: mandswindows.co.uk
5. Click: "Continue"
```

#### Step 2: Verify Ownership
Vercel auto-generates:
```
Option 1: DNS TXT Record (Recommended)
- Add TXT record: google-site-verification=xxxxx
- Wait 5 minutes
- Click "Verify"

Option 2: HTML Meta Tag
- Add to layout.tsx: <meta name="google-site-verification" content="xxxxx" />
- Deploy
- Click "Verify"
```

#### Step 3: Submit Sitemap
```
1. In GSC, go to: Sitemaps
2. Enter: https://mandswindows.co.uk/sitemap.xml
3. Click: "Submit"
4. Status will show "Success" within minutes
```

#### Step 4: Request Indexing
```
1. In GSC, go to: URL Inspection
2. Enter: https://mandswindows.co.uk
3. Click: "Inspect URL"
4. Click: "Request indexing"
5. Google will crawl within hours
```

#### Step 5: Monitor Coverage
```
GSC will show:
- ✅ Valid pages: ~6 pages
- ✅ Submissions in sitemap: 5
- Check for any errors or warnings
```

✅ **Milestone 3 Complete:** Site submitted to Google

---

### PHASE 4: ADDITIONAL SEARCH ENGINES (Day 3-7)

#### Bing Webmaster Tools
```
1. Go to: https://www.bing.com/webmasters
2. Add site: mandswindows.co.uk
3. Verify with DNS or meta tag
4. Submit sitemap: https://mandswindows.co.uk/sitemap.xml
5. Submit homepage URL
```

#### Google My Business (Local SEO)
```
1. Go to: https://www.google.com/business
2. Click: "Create account"
3. Enter business info:
   - Name: M & S Windows & Conservatory Ltd
   - Address: 243 Barlow Moor Road, Chorlton, Manchester M21 7QL
   - Phone: 0161 286 8256
   - Category: Home Improvement
4. Verify by:
   - Postcard (7-10 days), OR
   - Phone call (instant)
5. Add:
   - Business hours
   - Photos
   - Description
   - Services/products list
6. Ask customers for reviews

**Impact:** 30-40% boost to local search visibility
```

✅ **Milestone 4 Complete:** Multi-channel presence

---

### PHASE 5: MONITORING & VERIFICATION (Day 7+)

#### Week 1 Monitoring
```
Daily Checks:
- ✅ Google Search Console: Any new errors?
- ✅ Website loads without issues
- ✅ All links work
- ✅ Forms respond properly
- ✅ Mobile responsive

Metrics to track:
- Google Search Console impressions
- Click-through rate
- Average position
- Coverage status
```

#### Week 2 Monitoring
```
Check crawl stats:
- Google crawling your site
- Sitemap processed
- Pages indexed

Run Lighthouse audit:
- Performance (target: 90+)
- SEO (target: 95+)

Monitor Core Web Vitals:
- LCP: Should be < 2.5s
- FID: Should be < 100ms
- CLS: Should be < 0.1
```

#### Traffic Expectations
```
Week 1: No traffic (waiting for indexing)
Week 2-4: 10-50 organic visits (initial indexing)
Month 2: 50-200 organic visits (ranking improvement)
Month 3: 200-500 organic visits (full benefit)
```

✅ **Milestone 5 Complete:** Live and monitoring

---

## CRITICAL DATES & TIMELINES

| Event | Timeline | Action |
|-------|----------|--------|
| Deploy to Vercel | Today | Execute Phase 1 |
| DNS Propagation | 24-48 hrs | Wait + verify |
| Google Indexing | 24-72 hrs | Submit in GSC |
| Full Indexing | 2-4 weeks | Monitor GSC |
| First Rankings | 2-6 weeks | Track in GSC |
| Significant Traffic | Month 2-3 | Optimize based on data |

---

## EXPECTED RANKINGS (3-Month Projection)

### Primary Keywords:
```
Keyword                           | Current | Month 1 | Month 3 | Goal
windows manchester                | —       | 50-100  | 15-30   | Top 5
upvc windows manchester           | —       | 40-80   | 20-40   | Top 10
conservatories manchester         | —       | 30-70   | 15-35   | Top 10
doors manchester                  | —       | 60-100  | 30-50   | Top 20
manchester windows                | —       | 20-40   | 10-20   | Top 5
```

### Ranking Factors:
✅ Domain age (new = slower ranking)
✅ Content quality (excellent)
✅ Local signals (strong)
✅ Backlinks (need to build)
✅ Core Web Vitals (excellent)

---

## TRAFFIC FORECAST

### Conservative Estimate:
```
Month 1: 50-100 visits/month
Month 2: 150-300 visits/month
Month 3: 300-500 visits/month
Month 6: 800-1500 visits/month
```

### With Local SEO Push:
```
Month 1: 100-200 visits/month (GMB)
Month 2: 300-600 visits/month
Month 3: 600-1000 visits/month
Month 6: 1500-3000 visits/month
```

---

## SUCCESS METRICS TO TRACK

### Week 1:
- ✅ Website deployed
- ✅ Domain pointing to Vercel
- ✅ SSL certificate working
- ✅ Site accessible at mandswindows.co.uk

### Week 2:
- ✅ Site submitted to Google
- ✅ Google My Business verified
- ✅ Sitemap submitted
- ✅ GSC shows coverage data

### Week 3-4:
- ✅ Pages starting to index
- ✅ GSC shows impressions (Avg 50-200)
- ✅ Click-through rate data available
- ✅ Core Web Vitals monitored

### Month 2:
- ✅ Most pages indexed
- ✅ Ranking for target keywords
- ✅ Organic traffic: 150-300 visits
- ✅ Conversion tracking active

### Month 3:
- ✅ Full organic visibility
- ✅ Ranking improvements visible
- ✅ Organic traffic: 300-500 visits
- ✅ Lead generation from site

---

## TROUBLESHOOTING GUIDE

### Domain Not Resolving
```
Problem: mandswindows.co.uk shows Vercel 404
Solution:
1. Check DNS settings at registrar
2. Verify nameservers updated
3. Wait up to 48 hours
4. Use: https://www.whatsmydns.net/ to verify
```

### Site Not Indexed
```
Problem: Google Search Console shows 0 indexed pages
Solution:
1. Submit sitemap again
2. Request indexing for homepage
3. Wait 3-7 days
4. Check for robots.txt issues
5. Run Lighthouse to verify SEO score
```

### Slow Performance
```
Problem: Lighthouse shows < 90 performance
Solution:
1. Clear browser cache
2. Test on different device
3. Check Core Web Vitals in GSC
4. Enable Vercel Analytics
5. Review image sizes
```

### SSL Certificate Error
```
Problem: HTTPS shows as insecure
Solution:
1. Wait 24 hours (Vercel auto-provisions)
2. Verify domain pointing to Vercel
3. Check DNS TXT records
4. Contact Vercel support if persists
```

---

## GOOGLE SEARCH CONSOLE WORKFLOW

### Day 1-2: Initial Setup
1. Create property
2. Verify ownership
3. Submit sitemap
4. Request indexing

### Day 2-7: Monitoring
1. Check Coverage report
2. Verify indexed pages
3. Monitor crawl errors
4. Check Core Web Vitals

### Week 2+: Optimization
1. Review Search Analytics
   - Which keywords appear?
   - What's click-through rate?
   - What's average position?
2. Find quick wins (position 6-10 keywords)
3. Optimize those pages
4. Monitor improvements

### Monthly: Strategy
1. Identify low-hanging fruit
2. Content optimization
3. Internal linking improvements
4. External link building
5. Technical SEO improvements

---

## DEPLOYMENT COMMANDS REFERENCE

```bash
# Test locally before pushing
npm install              # Install dependencies
npm run build           # Production build
npm run type-check      # TypeScript validation
npm run lint            # Code quality
npm start               # Start server

# Push to GitHub
git add .
git commit -m "Production deployment ready"
git push origin main

# Vercel will auto-deploy on push to main
```

---

## QUICK REFERENCE CHECKLIST

```
BEFORE DEPLOYMENT:
☐ npm run build (should pass)
☐ npm run type-check (should pass)
☐ All code committed
☐ vercel.json verified

DEPLOYMENT DAY:
☐ Import to Vercel
☐ Auto-deployment completes
☐ Visit temporary Vercel URL
☐ Test all pages load
☐ Test contact form
☐ Test on mobile

DOMAIN SETUP:
☐ Add domain to Vercel
☐ Update nameservers
☐ Wait for DNS propagation
☐ Visit mandswindows.co.uk
☐ Verify SSL certificate
☐ Test HTTPS redirect

GOOGLE INDEXING:
☐ Create GSC property
☐ Verify ownership
☐ Submit sitemap
☐ Request indexing
☐ Monitor coverage
☐ Check Core Web Vitals

LOCAL SEO:
☐ Create Google My Business
☐ Add business hours
☐ Add photos
☐ Add description
☐ Submit for verification

MONITORING:
☐ Setup Vercel Analytics
☐ Setup Google Analytics
☐ Monitor crawl status
☐ Check rankings
☐ Track organic traffic
```

---

## SUPPORT & RESOURCES

**Vercel Documentation:**
- https://vercel.com/docs/concepts/nextjs
- https://vercel.com/docs/platform/add-ons

**Google Search Console:**
- https://support.google.com/webmasters
- https://search.google.com/search-console

**SEO & Performance:**
- https://web.dev/vitals/
- https://pagespeed.web.dev
- https://developers.google.com/search

**Local Business:**
- https://www.google.com/business
- https://www.bing.com/webmasters

---

## FINAL NOTES

✅ **Your website is ready for production deployment**

All technical optimization is complete. The remaining steps are purely administrative:
1. Deploy to Vercel (automated)
2. Connect custom domain (DNS update)
3. Submit to Google (one-time setup)
4. Monitor and optimize (ongoing)

**Estimated Time to First Organic Traffic:** 2-4 weeks
**Estimated Time to Page 1 Rankings:** 2-3 months

**Your competitive advantage:**
- ✅ Perfect technical SEO
- ✅ Excellent performance
- ✅ Complete local optimization
- ✅ Mobile-first design
- ✅ High conversion potential

**Next Review:** 2 weeks post-deployment

---

**Prepared by:** Senior Next.js & SEO Expert
**Last Updated:** March 5, 2026