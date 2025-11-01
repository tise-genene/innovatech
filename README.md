# Innova Tech - Premium Digital Agency Website 🚀

A world-class, production-ready digital agency website built with **Next.js 16** and **Tailwind CSS 4**. Features beautiful dark/light themes, smooth animations, and a modern glassmorphism design.

![Innova Tech](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Production Ready](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)

## ✨ Features

### 🎨 Design & User Experience
- **Dark/Light Theme** - Seamless theme switching with localStorage persistence
- **Glassmorphism UI** - Modern frosted-glass effects throughout
- **Smooth Animations** - Scroll-based animations using Intersection Observer
- **Responsive Design** - Mobile-first, works perfectly on all devices
- **Beautiful Gradients** - Dynamic background gradients in both themes
- **Professional Typography** - Inter font family for clarity
- **Custom Scrollbar** - Branded scrollbar design

### 📄 Complete Pages
- **Home** - Hero with code mockup, services grid, value propositions, testimonials, CTA
- **About** - Mission/vision, 6-member team showcase, company timeline
- **Services** - 9 detailed service offerings with features and process workflow  
- **Portfolio** - Filterable showcase (9 projects across 5 categories)
- **Blog** - Featured article + grid layout with newsletter signup
- **Contact** - Form with validation, contact cards, map, social links

### 🧩 Components
- **Fixed Navbar** - Glassmorphism with theme toggle, mobile responsive
- **Footer** - Theme-aware, comprehensive links, social media
- **Infinite Carousels** - Tech stack and client type scrollers
- **Service Cards** - Glassmorphism with hover effects
- **Testimonials Slider** - Client reviews with navigation
- **Contact Form** - Full validation, ready for backend integration

### 🚀 Technical Excellence
- ⚡ **Next.js 16** - Latest App Router, React Server Components
- 💅 **Tailwind CSS 4** - Modern utility-first styling
- 🎯 **TypeScript** - Full type safety
- 🔍 **SEO Optimized** - Meta tags, sitemap.xml, robots.txt, structured data
- ♿ **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- 📦 **Zero Build Errors** - Production-ready build
- 🎪 **Theme System** - Context API for dark/light mode
- 📱 **Responsive Padding** - Adaptive spacing (24px → 96px)

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0
- **Styling**: Tailwind CSS 4.0
- **Language**: TypeScript 5.x
- **Font**: Inter (Google Fonts)
- **Icons**: SVG (inline)

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd innova
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 🏗️ Project Structure

```
innova/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── CTA.tsx
│   │   ├── about/
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── blog/
│   │   └── contact/
│   └── hooks/
│       └── useInView.ts
├── public/
│   └── robots.txt
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Color Palette

- **Primary Dark**: `#1A1A1A` - Main dark color
- **Primary Blue**: `#00AEEF` - Brand accent color
- **Primary White**: `#FFFFFF` - White
- **Primary Gray**: `#F2F2F2` - Light gray background

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Services Offered

1. **Web & App Development** - Custom websites and mobile applications
2. **AI Apps & Integration** - Intelligent solutions with AI
3. **Product Design** - User-centered design
4. **Branding & Logo Design** - Brand identity creation
5. **AI & Machine Learning** - Advanced AI solutions
6. **Video & Animation** - Engaging video content
7. **Graphic, Editorial & Presentation Design** - Professional designs
8. **Digital Marketing** - Data-driven marketing strategies
9. **Social Media Management** - Community building

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Build for Production
```bash
npm run build
npm start
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Customization

### Changing Colors
Edit `src/app/globals.css`:
```css
:root {
  --primary-dark: #1A1A1A;
  --primary-blue: #00AEEF;
  --primary-white: #FFFFFF;
  --primary-gray: #F2F2F2;
}
```

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add `page.tsx` with your content
3. Update navigation in `src/components/Navbar.tsx`

### Modifying Services
Edit the services array in `src/components/home/Services.tsx`

## 📧 Contact Form Integration

The contact form is ready for backend integration. To connect it:

1. Set up an API route in `src/app/api/contact/route.ts`
2. Integrate with email service (SendGrid, Resend, etc.)
3. Update form submission handler in `ContactForm.tsx`

Example API route:
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // Send email using your preferred service
  return NextResponse.json({ success: true });
}
```

## 🎯 SEO Features

- Meta tags for all pages
- Open Graph tags
- Sitemap.xml
- Robots.txt
- Semantic HTML structure
- Fast loading times
- Mobile responsive

## 📄 License

© 2024 Innova Tech. All rights reserved.

## 🤝 Support

For support, email info@innovatech.et or visit our website.

---

**Built with ❤️ by Innova Tech Team**
