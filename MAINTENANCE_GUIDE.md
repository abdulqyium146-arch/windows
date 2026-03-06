# Website Maintenance & Support Guide

## 📞 Customer Inquiry Management

### Contact Form Setup

#### Form Functionality
The contact form includes:
- **Name** (text input, required)
- **Email** (email input, required)
- **Phone** (tel input, optional)
- **Subject** (text input, required)
- **Message** (textarea, required)
- **Newsletter Opt-in** (checkbox, optional)
- **Submit Button** (CTA)

#### Current Status
✅ **Form Built:** Complete and functional
⏳ **Backend Integration:** Requires email service setup

### Email Service Integration (REQUIRED)

Select one of these email services:

#### Option 1: Sendgrid (Recommended)
**Cost:** Free tier (100/day), then $10-25/month
**Setup Time:** 5-10 minutes

```typescript
// lib/sendgrid.ts
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function sendContactForm(data) {
  await sgMail.send({
    to: 'info@mandswindows.co.uk',
    from: 'noreply@mandswindows.co.uk',
    subject: `New Contact: ${data.subject}`,
    html: `...`
  })
}
```

#### Option 2: Brevo (Formerly Sendinblue)
**Cost:** Free tier (300/day), then €20/month
**Setup Time:** 5-10 minutes

#### Option 3: Mailgun
**Cost:** $35/month
**Setup Time:** 10-15 minutes

#### Option 4: AWS SES
**Cost:** $0.10-1 per 1,000 emails
**Setup Time:** 20-30 minutes

#### Option 5: Nodemailer + Gmail
**Cost:** Free (limited)
**Setup Time:** 5 minutes
**⚠️ Not recommended for high volume**

### Recommended Setup: Sendgrid

**Step 1: Create Sendgrid Account**
1. Go to https://sendgrid.com
2. Sign up for free account
3. Complete email verification
4. Add sender email: info@mandswindows.co.uk

**Step 2: Get API Key**
1. Go to Settings → API Keys
2. Create new API key (full access)
3. Copy the key

**Step 3: Add to Environment**
```
SENDGRID_API_KEY=your_api_key_here
SENDGRID_EMAIL=info@mandswindows.co.uk
```

**Step 4: Create API Route**
```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    await sgMail.send({
      to: 'info@mandswindows.co.uk',
      from: process.env.SENDGRID_EMAIL!,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
```

**Step 5: Connect Form**
```typescript
// components/Contact.tsx
const handleSubmit = async (e) => {
  e.preventDefault()
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  })
  if (response.ok) {
    toast.success('Message sent successfully!')
    resetForm()
  }
}
```

---

## 📧 Email Templates

### Inquiry Received Email (To Customer)

```html
Subject: We've Received Your Inquiry - M & S Windows

Hi [Name],

Thank you for contacting M & S Windows & Conservatory Ltd!

We've received your message about [Subject] and will get back to you within 24 hours during business hours (Monday-Friday, 9am-5pm).

Your Message:
[Message preview]

Contact Details on File:
Email: [Email]
Phone: [Phone]

If your inquiry is urgent, please call us directly at:
📞 0161 286 8256

Best regards,
M & S Windows Team
243 Barlow Moor Road, Chorlton, Manchester M21 7QL
```

### Response Template (To Business)

```html
From: [Customer Name] <[Customer Email]>
Phone: [Customer Phone]
Subject: [Customer Subject]

Message:
[Full Message Text]

---

Quick Links:
- Call: 0161 286 8256
- Email: [Customer Email]
- Site Info: Contact received at [timestamp] from IP [IP address]
```

---

## 📅 Business Response Procedures

### Response Time Targets
- **Weekday:** Within 2 hours (9am-5pm)
- **After Hours:** Within 24 hours next business day
- **Weekends:** Within 48 hours

### Response Checklist
- [ ] Acknowledge receipt of inquiry
- [ ] Confirm understanding of needs
- [ ] Provide timeline for next steps
- [ ] Include phone number for urgent matters
- [ ] Ask clarifying questions if needed
- [ ] Offer specific solution/next steps

### Sample Response Email

```
Subject: RE: [Original Subject]

Hi [Name],

Thank you for choosing M & S Windows! We appreciate your interest in [service mentioned].

Your specific request about [detail from message] is exactly what we specialize in. Based on what you've shared, here's what we recommend:

[Specific recommendation with details]

Next Steps:
1. We'd love to schedule a free site survey at your property
2. This allows us to provide an accurate quote
3. Our team can visit at your convenience

Available Times:
- Monday-Friday: 9am-5pm
- Saturday: 9am-1pm

Please reply with your preferred appointment time, or call us at 0161 286 8256 to book directly.

Looking forward to helping you!

Best regards,
[Your Name]
M & S Windows & Conservatory Ltd
📞 0161 286 8256
📧 info@mandswindows.co.uk
🏢 243 Barlow Moor Road, Chorlton, Manchester M21 7QL
```

---

## 🛠️ Website Maintenance Tasks

### Daily Tasks (5 minutes)
- [ ] Check for new contact inquiries
- [ ] Respond to urgent inquiries
- [ ] Monitor website uptime
- [ ] Check for server errors

### Weekly Tasks (20 minutes)
- [ ] Review analytics traffic
- [ ] Check Google Search Console for issues
- [ ] Verify all links work
- [ ] Check form submissions
- [ ] Review customer feedback
- [ ] Check competitive landscape

### Monthly Tasks (1-2 hours)
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Review SEO keywords ranking
- [ ] Update testimonials/results (if available)
- [ ] Check for broken images
- [ ] Update content if needed
- [ ] Review and organize analytics
- [ ] Create monthly report

### Quarterly Tasks (2-3 hours)
- [ ] Comprehensive SEO audit
- [ ] Update Google My Business
- [ ] Review and update service offerings
- [ ] Check social media presence
- [ ] Plan content calendar
- [ ] Review competitor sites
- [ ] Update pricing/promotions if needed
- [ ] Create quarterly report

### Annual Tasks (Half day)
- [ ] Full website audit
- [ ] Technology stack review
- [ ] Security assessment
- [ ] Performance optimization
- [ ] Design refresh evaluation
- [ ] Update business information
- [ ] Plan for next year improvements
- [ ] Comprehensive competitor analysis

---

## 📊 Success Metrics & KPIs

### Track These Monthly

| KPI | Target | Current | Notes |
|-----|--------|---------|-------|
| Organic Traffic | 200+ visits | TBD | From SEO |
| Form Submissions | 5-10/month | TBD | Qualified leads |
| Phone Inquiries | 10-20/month | TBD | Call tracking needed |
| Click-Through Rate | > 3% | TBD | From SERP |
| Bounce Rate | < 40% | TBD | Engagement metric |
| Avg Session Duration | > 2 min | TBD | Content engagement |
| Google Ranking | Top 3 for keywords | TBD | Local SEO |
| Page Speed | > 90 | TBD | Lighthouse score |
| Mobile Traffic | > 60% | TBD | Mobile optimization |

---

## 🔐 Security Maintenance

### Weekly Security Checks
- [ ] Monitor for suspicious activity
- [ ] Check error logs
- [ ] Verify HTTPS working
- [ ] Check security headers

### Monthly Security Tasks
- [ ] Update dependencies
- [ ] Run security audit
- [ ] Review firewall logs
- [ ] Check for vulnerabilities

### Annual Security Review
- [ ] Full penetration test
- [ ] Update security policy
- [ ] Review access controls
- [ ] Plan security improvements

---

## 📱 Content Updates

### When to Update Content
1. **Service Changes:** Immediately
2. **Seasonal Updates:** Quarterly
3. **Special Offers:** As needed
4. **Testimonials:** Add quarterly
5. **Portfolio/Gallery:** Monthly
6. **Blog Posts:** Weekly (if applicable)

### Easy Update Locations
- Service descriptions: Components/Services.tsx
- About information: Components/About.tsx
- Contact details: Throughout site
- Phone number: Search & replace in all files
- Email: components/Footer.tsx, Contact.tsx
- Address: Multiple locations

---

## 🔗 Important Links & Resources

### Hosting & Deployments
- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repository:** https://github.com/abdulqyium146-arch/windows
- **Production Domain:** https://mandswindows.co.uk

### SEO & Analytics
- **Google Search Console:** https://search.google.com/search-console
- **Google Analytics 4:** https://analytics.google.com
- **Google My Business:** https://www.google.com/business
- **PageSpeed Insights:** https://pagespeed.web.dev

### Business Tools
- **Email Service:** https://sendgrid.com (setup recommended)
- **Domain Registrar:** [Your domain provider]
- **SSL Certificate:** Auto-renewed by Vercel
- **Contact Forms:** Integrated into website

### Developer Tools
- **VS Code:** IDE for editing
- **Node.js:** JavaScript runtime
- **npm:** Package manager
- **git:** Version control

---

## 🆘 Troubleshooting Guide

### Website Down
**Check:**
1. Go to Vercel dashboard
2. Verify deployment status
3. Check error logs
4. Review recent changes
5. Contact Vercel support if needed

### Forms Not Submitting
**Check:**
1. Verify email service is running (Sendgrid)
2. Check API key in environment variables
3. Review browser console for errors
4. Check server logs
5. Verify form validation passing

### Poor Rankings
**Check:**
1. Verify in Google Search Console
2. Check indexation status
3. Review keyword targeting
4. Analyze competitor content
5. Ensure regular content updates

### Slow Website
**Check:**
1. Run Lighthouse audit
2. Check image sizes
3. Review bundle size
4. Monitor Core Web Vitals
5. Optimize images and code

---

## 📞 Support Contacts

### Your Technical Support
- **Vercel Support:** https://vercel.com/support
- **GitHub Support:** https://github.com/support
- **Node.js Docs:** https://nodejs.org/docs/

### Customer Support Template
**Business Email:** info@mandswindows.co.uk
**Business Phone:** 0161 286 8256
**Business Hours:** Monday-Friday 9am-5pm, Saturday 9am-1pm

---

## 📝 Templates & Checklists

### Launch Checklist
- [ ] Domain connected
- [ ] SSL working
- [ ] All links tested
- [ ] Forms working
- [ ] Analytics installed
- [ ] Google Search Console verified
- [ ] Google My Business updated
- [ ] Lighthouse 90+
- [ ] Mobile tested
- [ ] Final QA passed

### Monthly Report Template
```markdown
# Monthly Website Report - [Month/Year]

## Traffic
- Organic visitors: [X]
- Direct visitors: [X]
- Referral visitors: [X]
- Total sessions: [X]

## Inquiries
- Form submissions: [X]
- Phone calls: [X]
- Email inquiries: [X]

## SEO
- Top keywords: [List top 5]
- Keyword rankings: [Summary]
- Indexation: [Count]
- Search impressions: [X]

## Performance
- Lighthouse score: [X]
- Core Web Vitals: [Status]
- Page load time: [X ms]

## Actions Taken
- [List updates/changes made]

## Next Month Focus
- [Planned improvements]
```

---

**Last Updated:** March 5, 2026
**Status:** ✅ Production Ready
**Next Review:** Weekly post-launch
