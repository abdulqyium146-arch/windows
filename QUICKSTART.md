# Quick Start Guide - M & S Windows & Conservatories Website

## 🚀 Getting Started (5 Minutes)

### 1. **Start Development Server**
```bash
npm run dev
```
Visit http://localhost:3000 in your browser

### 2. **Make Changes**
- Edit components in `/components`
- Update styles in Tailwind classes
- Changes reload automatically

### 3. **Build for Production**
```bash
npm run build
npm start
```

## 📋 Common Tasks

### Add Gallery Images
1. Place images in `/public/images/gallery`
2. Edit `components/Gallery.tsx`
3. Add new items to `galleryItems` array:
```typescript
{ id: 9, category: 'Windows', title: 'Your Image Title' }
```

### Update Business Info
Find and replace:
- **Phone**: `0161 286 8256`
- **Email**: `info@mandswindows.co.uk`
- **Address**: `243 Barlow Moor Road, Chorlton, Manchester M21 7QL`
- **Website**: `https://mandswindows.co.uk`

### Add Contact Form Handler
In `components/Contact.tsx`, update `handleSubmit`:
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData),
});
```

Create `/app/api/contact/route.ts`:
```typescript
export async function POST(request: Request) {
  const data = await request.json();
  // Add your email service here
  return Response.json({ success: true });
}
```

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#003366',    // Deep Blue
  cta: '#FF8C00',        // Orange
  // Add more colors
}
```

### Add New Section
1. Create new component in `/components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add to JSX in the `<main>` tag

## 🎨 Customization

### Typography
- Font defined in `tailwind.config.js`
- Currently: Segoe UI, Roboto, Helvetica, Arial
- Change in theme → fontFamily

### Animations
- Powered by Framer Motion
- Edit in individual components
- Key props: `initial`, `animate`, `exit`, `transition`

### Responsive Design
Test breakpoints:
- Mobile (< 640px): `sm:`
- Tablet (< 1024px): `md:`
- Desktop (< 1280px): `lg:`
- Large (< 1536px): `xl:`

## 🔍 SEO Optimization

### Update Metadata
Edit `app/layout.tsx`:
- Title, description, keywords
- OpenGraph tags
- Twitter cards
- Canonical URL

### Update Sitemap
Edit `/public/sitemap.xml` with your pages

### Check SEO Performance
- Use Google PageSpeed Insights
- Run Lighthouse audit (DevTools)
- Test with Lighthouse CLI:
```bash
npm install -g lighthouse
lighthouse https://mandswindows.co.uk
```

## 📱 Testing

### Mobile Testing
```bash
npm run dev
# Visit http://localhost:3000 on mobile device or use browser DevTools (F12)
```

### Lighthouse Audit
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run audit
4. Target: 90+ on all categories

### Desktop Testing
Test in:
- Chrome
- Firefox
- Safari
- Edge

## 🚢 Deployment

### One-Click Deploy (Vercel)
```bash
npm install -g vercel
vercel
```

### Deployment Steps
1. Push to GitHub
2. Go to https://vercel.com
3. Import project
4. Add custom domain
5. Deploy!

[See DEPLOYMENT.md for detailed instructions]

## 🛠️ Troubleshooting

### Server Not Starting?
```bash
# Try clearing cache
rm -rf .next
npm install
npm run dev
```

### Images Not Loading?
- Ensure images are in `/public`
- Use relative paths: `/images/gallery/image.jpg`
- Check image dimensions and format

### Styles Not Applied?
- Check class names spelling
- Verify Tailwind config includes file
- Use `npm run build` to rebuild CSS

### Port Already in Use?
```bash
npm run dev -- -p 3001  # Use different port
```

## 📞 Support

**Business Contact:**
- Phone: 0161 286 8256
- Email: info@mandswindows.co.uk
- Address: 243 Barlow Moor Road, Chorlton, Manchester M21 7QL

**Development Help:**
- Check `README.md` for overview
- Read `STRUCTURE.md` for architecture
- Check `DEPLOYMENT.md` for deployment

## 📚 Documentation

Full documentation available:
- **README.md** - Project overview
- **STRUCTURE.md** - Technical architecture
- **DEPLOYMENT.md** - Deployment guide
- **QUICKSTART.md** - This file

## ✅ Pre-Launch Checklist

- [ ] Update all business information
- [ ] Add real gallery images
- [ ] Set up contact form (remove placeholder)
- [ ] Add Google Analytics
- [ ] Test all links and forms
- [ ] Run Lighthouse audit (90+)
- [ ] Test on mobile devices
- [ ] Submit sitemap to Google Search Console
- [ ] Set up domain and SSL
- [ ] Enable CDN/caching
- [ ] Monitor performance

## 🎯 Next Steps

1. **Replace Images**
   - Add gallery photos to `/public/images/gallery`
   - Update Hero image placeholder

2. **Setup Contact Form**
   - Configure email service (FormSpree, SendGrid, etc.)
   - Test form submission

3. **Add Analytics**
   - Get Google Analytics tracking ID
   - Add to environment variables

4. **Deploy**
   - Choose hosting (Vercel recommended)
   - Configure custom domain
   - Launch!

5. **Monitor**
   - Check Analytics
   - Monitor SEO rankings
   - Track conversions

---

**Happy coding! 🎉**

For detailed help, refer to the full documentation files.
