# Dr. Mitesh Nemade — Premium Medical Portfolio Website

> A modern, mobile-first, conversion-focused portfolio website for Dr. Mitesh Nemade, Robotic & Minimally Invasive Surgeon based in Glasgow, UK.

---

## 🩺 Project Overview

This is a premium medical portfolio website designed to establish trust, showcase expertise, and drive appointment bookings. The design is inspired by leading healthcare brands like Apollo, Fortis, and international medical platforms.

**Doctor Profile:**
- **Name:** Dr. Mitesh Nemade
- **Qualifications:** MBBS, MS, Fellowship in Robotic Surgery
- **Specialization:** Robotic Surgery, Laparoscopic Surgery, Minimally Invasive Surgery
- **Experience:** 14+ years
- **Location:** Glasgow, United Kingdom
- **Hospital:** Sanvi Multi Speciality Hospital
- **Consultation Modes:** In-person + Online Video
- **Languages:** English, Hindi, Marathi

---

## ✅ Completed Features

### 1. Hero Section
- Professional doctor image with gradient glow effect
- Trust-building headline with gradient text
- Animated statistics counter (14+ years, 5,000+ surgeries, 98% success rate)
- 5-star rating display (4.9/5 from 500+ reviews)
- CTA buttons: "Book Appointment" + "Call Now"
- Experience badge with floating animation
- Hospital & online consultation badges
- Wave SVG divider

### 2. Trust Bar
- 4-column trust indicator strip
- Qualifications, Fellowship, Location, Languages
- Hover animations on each item

### 3. About Section
- Professional dual-column layout (image + content)
- Doctor's philosophy quote card
- 5 certification/affiliation bullet points
- Overlay card on image ("Board Certified Robotic Surgeon")
- CTA button to schedule consultation

### 4. Services Section (6 Services)
- Robotic Surgery
- Laparoscopic Surgery
- Surgical Consultation
- Preventive Surgical Care
- Post-Operative Care
- Emergency Surgery
- Each with icon, description, hover animation, and "Learn More" link
- Gradient top-border animation on hover

### 5. Why Choose Dr. Nemade
- 5 compelling reasons with icons
- Each with detailed description
- Image + stat cards on the right
- Hover animations

### 6. Patient Testimonials (5 Reviews)
- Swiper.js carousel with autoplay
- Star ratings
- Patient initials avatar
- Responsive 1-2 slides per view
- Navigation arrows + pagination dots

### 7. Surgical Excellence Gallery (Before/After Alternative)
- Incision size comparison (Traditional vs Robotic)
- Animated outcome statistics bars
- Recovery timeline visualization
- Educational and conversion-focused approach

### 8. Appointment Booking Section
- Full form: Name, Phone, Email, Date, Time, Type, Message
- Date picker with min-date validation (today)
- Consultation type selector (In-person / Online)
- Form submission with loading state
- Success message with reset option
- Emergency call highlight (24/7)
- WhatsApp integration button
- Data saved to `appointments` table via REST API

### 9. Blog / Health Tips (3 Articles)
- Article cards with images, categories, and meta info
- "Read More" links
- Responsive grid layout

### 10. FAQ Section (8 Questions)
- Accordion-style expand/collapse
- First FAQ open by default
- Smooth animation transitions
- Covers: robotic surgery basics, safety, conditions, recovery, online consultations, languages, booking, emergencies

### 11. Newsletter Subscription
- Email input with subscribe button
- Success feedback animation
- Data saved to `newsletter` table via REST API

### 12. Contact Section
- Clinic address, phone, email, hours
- Social media icons (Facebook, Instagram, LinkedIn, X/Twitter, YouTube)
- Google Maps embed (Glasgow, UK)

### 13. Footer
- 4-column layout: Brand, Quick Links, Services, Contact
- Social media links
- Copyright + legal links (Privacy, Terms, Disclaimer)

### 14. Bonus Features
- ✅ **Sticky Header** with transparent-to-white transition
- ✅ **Floating CTA Buttons** (Book Appointment + WhatsApp)
- ✅ **Back to Top Button** with smooth scroll
- ✅ **Preloader** with heartbeat animation
- ✅ **Mobile Hamburger Menu** with overlay
- ✅ **Active Navigation Highlighting** on scroll
- ✅ **AOS Scroll Animations** (fade-in, fade-up, etc.)
- ✅ **Counter Animation** on scroll intersection
- ✅ **Parallax Effect** on hero image
- ✅ **Form Validation** with visual feedback
- ✅ **SEO Structured Schema Markup** (JSON-LD for Physician)
- ✅ **Accessibility** (ARIA labels, focus-visible, reduced-motion support)
- ✅ **Custom Scrollbar** styling

---

## 📂 File Structure

```
/
├── index.html          # Main HTML (all sections)
├── css/
│   └── style.css       # Complete stylesheet (responsive)
├── js/
│   └── main.js         # All JavaScript functionality
└── README.md           # This documentation
```

---

## 🎨 Design System

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#0A7AFF` | CTAs, links, highlights |
| Primary Dark | `#0862CC` | Hover states |
| Primary Light | `#E8F2FF` | Backgrounds, labels |
| Secondary Green | `#00C9A7` | Success, accents |
| Accent Purple | `#6C63FF` | Special elements |
| Dark Navy | `#0F172A` | Headings, footer |
| Text Slate | `#334155` | Body text |
| Text Light | `#64748B` | Secondary text |
| Light BG | `#F0F7FF` | Section backgrounds |
| Star Gold | `#FFC107` | Ratings |
| WhatsApp | `#25D366` | WhatsApp buttons |
| Danger Red | `#EF4444` | Emergency, alerts |

### Typography
| Font | Weight | Usage |
|------|--------|-------|
| Playfair Display | 400–700 | Headings, titles, quotes |
| Inter | 300–700 | Body text, paragraphs |
| DM Sans | 400–700 | UI elements, buttons, labels |

### Button Styles
- **Primary:** Gradient blue with white text
- **Outline:** Transparent with blue border
- **WhatsApp:** Green with white text
- **Large (btn-lg):** Increased padding for hero CTAs
- **Full Width (btn-full):** 100% width for form submit

---

## 🔗 Functional URIs

| Path | Description |
|------|-------------|
| `index.html` | Main website (single-page) |
| `index.html#home` | Hero section |
| `index.html#about` | About the doctor |
| `index.html#services` | Services section |
| `index.html#why-choose` | Why choose section |
| `index.html#testimonials` | Patient testimonials |
| `index.html#gallery` | Surgical excellence gallery |
| `index.html#appointment` | Appointment booking form |
| `index.html#blog` | Health tips & blog |
| `index.html#faq` | Frequently asked questions |
| `index.html#contact` | Contact & map |

---

## 🗄️ Data Models

### `appointments` Table
| Field | Type | Description |
|-------|------|-------------|
| id | text | Auto-generated UUID |
| name | text | Patient full name |
| phone | text | Patient phone number |
| email | text | Patient email address |
| date | text | Preferred appointment date |
| time | text | Preferred appointment time |
| type | text | Consultation type (in-person/online) |
| message | rich_text | Patient message or symptoms |

### `newsletter` Table
| Field | Type | Description |
|-------|------|-------------|
| id | text | Auto-generated UUID |
| email | text | Subscriber email address |

---

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| > 1024px | Desktop (full layout) |
| 768–1024px | Tablet (stacked grids) |
| 481–768px | Mobile (single column, hamburger menu) |
| ≤ 480px | Small Mobile (compact layout) |

---

## 🔧 External Libraries (CDN)

- **Font Awesome 6.5.1** — Icons
- **AOS 2.3.4** — Scroll animations
- **Swiper 11** — Testimonial carousel
- **Google Fonts** — Playfair Display, Inter, DM Sans

---

## 🚀 CTA Text Variations

### Primary CTAs
1. "Book Appointment"
2. "Schedule a Consultation"
3. "Submit Appointment Request"

### Secondary CTAs
1. "Call Now"
2. "Chat on WhatsApp"
3. "Learn More"
4. "Read More"
5. "Subscribe"

---

## 📝 Sample Blog Titles
1. "5 Key Benefits of Robotic Surgery Over Traditional Methods"
2. "How to Prepare for Your First Surgical Consultation"
3. "Post-Surgery Recovery: Essential Tips for a Smooth Healing Journey"
4. "Understanding Minimally Invasive Surgery: What Every Patient Should Know"
5. "The Future of Robotic Surgery: Trends and Innovations in 2026"
6. "Hernia Repair: Why Robotic Surgery Is the Gold Standard"

---

## 🔍 SEO Implementation

- **Meta Title:** Dr. Mitesh Nemade — Robotic & Minimally Invasive Surgeon | Glasgow, UK
- **Meta Description:** Expert robotic surgeon with 14+ years of experience. Advanced minimally invasive procedures at Sanvi Multi Speciality Hospital, Glasgow.
- **Open Graph Tags:** Title, description, type, image
- **Twitter Card:** summary_large_image
- **Schema Markup:** JSON-LD Physician schema with services, address, languages
- **Semantic HTML:** Proper heading hierarchy (H1–H4), article/section tags
- **Alt Text:** On all images
- **ARIA Labels:** On interactive elements

---

## 🛠️ Recommended Next Steps

1. **Replace placeholder images** with actual photos of Dr. Nemade
2. **Update phone numbers and email** with real contact details
3. **Update Google Maps embed** with exact hospital location
4. **Add actual social media profile URLs**
5. **Implement email notification** for form submissions (e.g., EmailJS)
6. **Add individual blog post pages** with full articles
7. **Add Google Analytics** for traffic tracking
8. **Implement cookie consent** banner for GDPR compliance
9. **Add patient portal** link if available
10. **Consider adding a video introduction** of Dr. Nemade
11. **Add insurance/payment information** section
12. **Implement real-time appointment availability** checker

---

## 📄 License

© 2026 Dr. Mitesh Nemade. All Rights Reserved.