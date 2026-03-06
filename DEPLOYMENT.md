# M & S Windows & Conservatories Website - Deployment Guide

## Deployment Platforms

This Next.js website is production-ready and can be deployed to various platforms:

### Recommended: Vercel (Official Next.js Hosting)

**Easiest deployment option with best performance**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/mandswindows.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure settings:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: `.next`

3. **Add Environment Variables** (if any)
   - Project Settings → Environment Variables
   - Add your variables here

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://mandswindows.vercel.app`

5. **Custom Domain**
   - Domains → Add Domain
   - Enter `mandswindows.co.uk`
   - Update DNS records with Vercel's nameservers

### Alternative: Netlify

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy

### Alternative: AWS Amplify

1. Connect your Git repository
2. Select Next.js framework
3. Build settings will auto-configure
4. Deploy and connect custom domain

### Alternative: DigitalOcean, Heroku, or Docker

**Docker Deployment (works on any server)**

```dockerfile
# Create Dockerfile in project root
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY .next ./
COPY public ./public

EXPOSE 3000
CMD ["npm", "start"]
```

Then build and deploy:
```bash
docker build -t mandswindows .
docker run -p 3000:3000 mandswindows
```

## Pre-Deployment Checklist

### Content Updates
- [ ] Replace placeholder images in `/public/images/gallery`
- [ ] Update contact email: `info@mandswindows.co.uk`
- [ ] Add Google Analytics tracking ID
- [ ] Verify all phone numbers: `0161 286 8256`
- [ ] Update business address if needed

### SEO Configuration
- [ ] Update `alternates.canonical` in `app/layout.tsx`
- [ ] Verify `metadataBase` URL
- [ ] Test sitemap at `/sitemap.xml`
- [ ] Test robots.txt at `/robots.txt`
- [ ] Update Google Search Console
- [ ] Add Google Analytics
- [ ] Verify structured data (Schema.org)

### Performance
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Optimize images (WebP format)
- [ ] Test on mobile devices
- [ ] Test email forms (set up backend)
- [ ] Test Google Maps integration

### Security
- [ ] Enable HTTPS (automatic on Vercel/Netlify)
- [ ] Set security headers in `next.config.js`
- [ ] Review auth if needed
- [ ] Test CORS settings
- [ ] Enable CSP headers

### Contact Form
The current contact form is a placeholder. For production:

1. **Option A: Third-party Service**
   - Formspree: `https://formspree.io`
   - Basin: `https://usebasin.com`
   - SendGrid Forms

2. **Option B: Backend API**
   - Create `app/api/contact/route.ts`:
   ```typescript
   import { NextRequest, NextResponse } from 'next/server';
   import nodemailer from 'nodemailer';

   export async function POST(request: NextRequest) {
     const { name, email, phone, message } = await request.json();

     // Send email using nodemailer or your mail service
     // Implementation here

     return NextResponse.json({ success: true });
   }
   ```

3. **Option C: Email Service Integration**
   - Resend
   - SendGrid
   - Mailgun

## Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://mandswindows.co.uk
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
EMAIL_SERVICE_API_KEY=your_api_key
```

## Post-Deployment Testing

1. **Check Core Web Vitals**
   - Mobile-friendly test
   - PageSpeed Insights
   - Lighthouse audit

2. **SEO Verification**
   - Google Search Console
   - Bing Webmaster Tools
   - Schema validation

3. **Functionality Testing**
   - Navigation links
   - Contact form submission
   - Phone call links (tel:)
   - Map display
   - Image gallery filters

4. **Analytics**
   - Google Analytics tracking
   - Conversion tracking
   - Search console coverage

## Monitoring & Maintenance

### Weekly Tasks
- Check Google Search Console for errors
- Monitor PageSpeed Insights scores
- Review Analytics data

### Monthly Tasks
- Update content/gallery images
- Check for broken links
- Review mobile experience
- Update security patches

### Quarterly Tasks
- Full Lighthouse audit
- SEO review
- Competitor analysis
- User experience review

## Performance Optimization Tips

1. **Image Optimization**
   - Use WebP format
   - Compress before uploading
   - Use appropriate dimensions
   - Lazy load below-the-fold images

2. **Caching**
   - Leverage browser caching
   - Use CDN (Vercel provides this)
   - Cache static content

3. **Code Splitting**
   - Already implemented with Next.js
   - Monitor bundle size

4. **Database/API**
   - If adding a database, use PostgreSQL or MongoDB
   - Implement proper indexing
   - Cache API responses

## Troubleshooting

### Build Fails
```bash
# Clear build cache
rm -rf .next
npm run build
```

### Performance Issues
1. Check Lighthouse report
2. Analyze bundle size: `npm run build`
3. Optimize images
4. Enable caching headers

### SEO Not Progressing
1. Verify robots.txt allows crawling
2. Submit sitemap to Google Search Console
3. Check for crawl errors
4. Build quality backlinks

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com
- **React Icons**: https://react-icons.github.io/react-icons
- **Framer Motion**: https://www.framer.com/motion

## Contact for Help

For questions or deployment issues:
- Email: info@mandswindows.co.uk
- Phone: 0161 286 8256
- Address: 243 Barlow Moor Road, Chorlton, Manchester M21 7QL
