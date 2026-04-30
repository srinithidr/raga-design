# RagaDesigns - Project Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Technology Stack](#technology-stack)
5. [Key Features](#key-features)
6. [Components Guide](#components-guide)
7. [Pages Guide](#pages-guide)
8. [Styling & Design](#styling--design)
9. [Development Workflow](#development-workflow)
10. [Build & Deployment](#build--deployment)
11. [Configuration Files](#configuration-files)
12. [Contributing Guidelines](#contributing-guidelines)

---

## Project Overview

**Project Name:** RagaDesigns  
**Type:** Business/Consulting Portfolio Website  
**Purpose:** Showcase design and consulting services including graphic design, web design, and business consulting  
**Built With:** React + Vite  
**Package Version:** 0.0.0  

### Project Goals
- Present professional design and consulting services
- Showcase portfolio and expertise
- Provide seamless user experience with animations
- Enable client inquiries through contact section
- Demonstrate modern web design practices

---

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn package manager

### Installation

```bash
# Navigate to project directory
cd RagaDesigns

# Install dependencies
npm install

# Start development server
npm run dev

# Access application
# Open browser and navigate to http://localhost:5173
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server with hot module replacement (HMR) |
| `npm run build` | Build optimized production bundle |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview production build locally |

---

## Project Structure

```
RagaDesigns/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── about/           # About section component
│   │   ├── contact/         # Contact form section
│   │   ├── footer/          # Site footer component
│   │   ├── hero/            # Hero carousel component
│   │   ├── navbar/          # Navigation bar with mega menu
│   │   ├── services/        # Services showcase section
│   │   ├── stats/           # Statistics counter section
│   │   ├── testimonials/    # Testimonials section
│   │   └── ui/              # Reusable UI components (button, carousel, navigation-menu)
│   ├── pages/               # Page components
│   │   ├── Home/            # Homepage layout
│   │   └── NotFound.jsx     # 404 error page
│   ├── lib/                 # Utility and helper files
│   │   ├── animations.js    # Framer Motion animation presets
│   │   └── utils.js         # Helper utilities (className merger)
│   ├── assets/              # Static images and resources
│   │   ├── about/           # About section images
│   │   ├── hero/            # Hero carousel images
│   │   └── services/        # Services section images
│   ├── App.jsx              # Main app component with routing
│   ├── App.css              # Global app styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static files served as-is
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── jsconfig.json            # JavaScript configuration
├── components.json          # Component library configuration
├── tailwind.config.js       # Tailwind CSS configuration (if exists)
└── README.md               # Default project README
```

---

## Technology Stack

### Core Framework
- **React** (v19.2.5) - UI library for building components
- **React Router DOM** (v7.14.2) - Client-side routing
- **Vite** (v8.0.10) - Fast build tool and dev server

### Styling & Animation
- **Tailwind CSS** (v4.2.4) - Utility-first CSS framework
- **@tailwindcss/vite** (v4.2.4) - Tailwind CSS Vite plugin
- **Framer Motion** (v12.38.0) - Animation library for React
- **class-variance-authority** (v0.7.1) - Component variant management
- **clsx** (v2.1.1) - Conditional className utility
- **tailwind-merge** (v3.5.0) - Merge Tailwind CSS classes intelligently
- **tw-animate-css** (v1.4.0) - Additional CSS animations

### UI Components & Icons
- **Radix UI** (v1.4.3) - Unstyled, accessible component primitives
- **Lucide React** (v1.12.0) - Icon library
- **shadcn** (v4.6.0) - Component collection built on Radix UI
- **embla-carousel-react** (v8.6.0) - Carousel/slider component

### Design System
- **@fontsource-variable/geist** (v5.2.8) - Geist font family

### Development Tools
- **ESLint** (v10.2.1) - Code quality and style checking
- **@vitejs/plugin-react** (v6.0.1) - React plugin for Vite with Oxc
- **TypeScript types** - For React and ReactDOM

---

## Key Features

### 1. **Responsive Hero Carousel**
- Auto-rotating image carousel
- Manual navigation with arrow buttons
- Smooth transitions between slides
- Each slide contains headline, description, and image

### 2. **Mega Menu Navigation**
- Multi-category dropdown menu system
- Service categories:
  - Graphic Designing (Logo, ID Card, Business Cards, Brochures, etc.)
  - Website Designing (Responsive, CMS, UI/UX, etc.)
  - Digital Marketing
  - Mobile App Development
  - Cloud Infrastructure
  - And more...
- Mobile responsive with hamburger menu
- Icon-based navigation items

### 3. **Multi-Section Homepage**
- Hero Carousel
- About Section with team information
- Services Showcase
- Statistics Counter
- Testimonials Section
- Contact Form

### 4. **Smooth Animations**
- Page entrance animations (fade-up effects)
- Scroll-triggered animations
- Staggered card animations
- Transitions managed by Framer Motion

### 5. **Modern UI/UX**
- Clean, professional design
- Consistent spacing and typography
- Interactive buttons and links
- Accessible navigation

### 6. **Responsive Design**
- Mobile-first approach
- Tailwind CSS responsive utilities
- Mobile hamburger menu
- Touch-friendly interface

---

## Components Guide

### Layout Components

#### **Navbar** (`components/navbar/Navbar.jsx`)
**Purpose:** Main navigation bar with mega menu  
**Features:**
- Logo and branding
- Multi-level dropdown menus with service categories
- Mobile responsive hamburger menu
- Smooth transitions
- Icon integration from Lucide React

**Key Props:** None (uses internal state)

**Dependencies:**
- lucide-react icons
- Radix UI navigation components
- React hooks (useState)

---

#### **SiteFooter** (`components/footer/SiteFooter.jsx`)
**Purpose:** Footer section with site information  
**Features:**
- Company information
- Links section
- Contact information
- Copyright notice
- Responsive layout

**Styling:** `SiteFooter.css`

---

### Hero Section

#### **HeroCarousel** (`components/hero/HeroCarousel.jsx`)
**Purpose:** Full-width carousel displaying featured content  
**Features:**
- Auto-rotating slides (5-second interval)
- Manual navigation arrows
- Slide indicators
- Responsive image display
- Descriptive content for each slide

**Slides Include:**
1. Signature Residences - Luxury interior design
2. Creative Studios - Bold architecture
3. Brand-Driven Design - Elegant spaces

**Technologies:** Framer Motion, Lucide React, Custom Carousel Component

---

### Content Sections

#### **AboutSection** (`components/about/AboutSection.jsx`)
**Purpose:** Showcase company expertise and team highlights  
**Features:**
- Heading and description
- Team images
- Feature cards highlighting achievements
- Responsive image layout with frames

**Key Content:**
- Smart Consulting for Ambitious Companies
- Award Winning Team
- Highest Success Rates

**Styling:** `pages/About.css`

---

#### **ServicesSection** (`components/services/ServicesSection.jsx`)
**Purpose:** Display service offerings  
**Features:**
- Grid layout for service cards
- Service icons and descriptions
- Highlighted service card with image overlay
- Call-to-action buttons

**Services Displayed:**
1. Growth & Expansion Consulting
2. Digital Transformation Consulting
3. Risk Management & Compliance
4. Growth & Expansion Consulting (repeated)

**Styling:** `components/services/ServicesSection.css`

---

#### **StatsCounterSection** (`components/stats/StatsCounterSection.jsx`)
**Purpose:** Display impressive statistics  
**Features:**
- Counter animations
- Key metrics showcase
- Grid layout

**Styling:** `components/stats/StatsCounterSection.css`

---

#### **TestimonialsSection** (`components/testimonials/TestimonialsSection.jsx`)
**Purpose:** Showcase client testimonials  
**Features:**
- Client quotes and reviews
- Animated transitions
- Responsive grid

**Styling:** `components/testimonials/TestimonialsSection.css`

---

#### **ContactSection** (`components/contact/ContactSection.jsx`)
**Purpose:** Contact form for client inquiries  
**Features:**
- Form fields for user information
- Message input
- Submit functionality
- Validation (if implemented)

**Styling:** `components/contact/ContactSection.css`

---

### UI Components (`components/ui/`)

#### **Button** (`components/ui/button.jsx`)
**Purpose:** Reusable button component  
**Features:**
- Multiple variants (primary, secondary, outline, etc.)
- Size options
- Disabled state
- Built with class-variance-authority

---

#### **Carousel** (`components/ui/carousel.jsx`)
**Purpose:** Generic carousel/slider component  
**Features:**
- Viewport management
- Slide container
- Navigation controls
- Built with embla-carousel-react

**Sub-components:**
- CarouselViewport
- CarouselSlide

---

#### **NavigationMenu** (`components/ui/navigation-menu.jsx`)
**Purpose:** Accessible navigation menu component  
**Features:**
- Built on Radix UI
- Dropdown support
- Keyboard navigation
- Accessible by default

**Sub-components:**
- NavigationMenu
- NavigationMenuList
- NavigationMenuItem
- NavigationMenuTrigger
- NavigationMenuContent

---

## Pages Guide

### **Home Page** (`pages/Home/Home.jsx`)
**Purpose:** Main landing page  

**Structure:**
1. Hero Carousel - Eye-catching introduction
2. About Section - Company overview
3. Services Section - Offerings
4. Stats Section - Impressive metrics
5. Testimonials Section - Client feedback
6. Contact Section - Lead generation

**Features:**
- Scroll-triggered animations on each section
- Staggered animation effects
- Responsive layout
- Comprehensive information flow

**Animation:** Uses Framer Motion with fadeUp animation preset and smooth transitions

---

### **NotFound Page** (`pages/NotFound.jsx`)
**Purpose:** 404 error page  
**Features:**
- Error message display
- Navigation back to home
- Professional error handling

**Styling:** `pages/NotFound.css`

---

## Styling & Design

### Design System

#### **Tailwind CSS**
- Utility-first CSS framework
- Version: 4.2.4
- Configured for rapid UI development
- Responsive breakpoints (mobile-first)

#### **Color Palette**
- Defined through Tailwind configuration
- Consistent throughout the application
- Professional, modern aesthetic

#### **Typography**
- **Font:** Geist (via @fontsource-variable/geist)
- **Responsive:** Font sizes scale across breakpoints
- **Weight Variations:** Multiple font weights available

### Animation System

#### **Framer Motion Presets** (`lib/animations.js`)

**fadeUp Animation:**
```javascript
{
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
}
```
- Fade in while sliding up
- Used for section transitions

**smoothTransition:**
```javascript
{
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1]
}
```
- Smooth cubic-bezier easing curve
- 600ms duration

**staggerContainer:**
- Staggered animation for child elements
- Delay between each child: 0.1s

**cardSlide:**
- Opacity, Y-axis, and scale animation
- Used for card entrance animations

### Utility Functions

#### **cn() Function** (`lib/utils.js`)
```javascript
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```
- Merges classNames intelligently
- Prevents Tailwind CSS class conflicts
- Essential for component styling

---

## Development Workflow

### Code Organization

1. **Components:** Organized by feature/section
2. **Pages:** Page-level components using React Router
3. **Utils:** Shared utilities and helpers
4. **Assets:** Static images and resources
5. **Styles:** CSS modules and Tailwind

### ESLint Configuration
- Enforces code quality standards
- React-specific rules
- React Hooks best practices
- JavaScript standard rules

### Hot Module Replacement (HMR)
- Instant updates during development
- No manual refresh needed
- Fast feedback loop

---

## Build & Deployment

### Development Build
```bash
npm run dev
```
- Starts Vite dev server
- HMR enabled
- Source maps available

### Production Build
```bash
npm run build
```
- Optimized bundle
- Minified code
- Tree-shaking enabled
- Output to `dist/` directory

### Preview Production Build
```bash
npm run preview
```
- Serves built application locally
- Tests production build before deployment

### Deployment
The built `dist/` folder can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

---

## Configuration Files

### **vite.config.js**
Vite configuration with:
- React plugin integration
- Tailwind CSS plugin
- Path aliases (@/ points to src/)

### **jsconfig.json**
JavaScript configuration with:
- Path aliases for imports
- Module resolution settings

### **eslint.config.js**
ESLint rules configuration:
- React component linting
- React Hooks rules
- ESLint standard rules

### **components.json**
UI component library configuration (for shadcn)

### **tailwind.config.js**
Tailwind CSS customization (if created)

---

## Contributing Guidelines

### Code Style
- Use functional components with hooks
- Follow React best practices
- Use Tailwind CSS for styling
- Maintain component modularity

### Naming Conventions
- Components: PascalCase (e.g., HeroCarousel.jsx)
- Functions: camelCase (e.g., fadeUp, smoothTransition)
- CSS Classes: kebab-case (e.g., hero-carousel)
- Files: Follow component name or descriptive name

### Component Structure
```jsx
// 1. Imports
// 2. Constants/Data
// 3. Component definition
// 4. Export
```

### Creating New Components
1. Create folder in appropriate section
2. Create component file (PascalCase)
3. Create accompanying CSS if needed
4. Export from parent or main component
5. Add documentation

### Git Workflow
1. Create feature branch
2. Make changes
3. Run `npm run lint` to check quality
4. Test thoroughly
5. Commit with clear messages
6. Push and create pull request

---

## Performance Optimization

### Current Optimizations
- **Lazy Loading:** Sections animate on scroll
- **Code Splitting:** React Router enables automatic splitting
- **Asset Optimization:** Tailwind purges unused CSS
- **HMR:** Fast development feedback

### Potential Improvements
- Image lazy loading
- Component code splitting
- Service Worker for offline support
- CDN for static assets

---

## SEO Considerations

### Current Status
- Semantic HTML structure
- Proper heading hierarchy
- Meta tags (add in index.html)
- Responsive design

### Recommendations
- Add Open Graph meta tags
- Implement structured data (JSON-LD)
- Optimize images with alt text
- Add canonical tags

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- JavaScript enabled required
- ES6+ JavaScript support

---

## Troubleshooting

### Development Issues

**Port Already in Use:**
```bash
npm run dev -- --port 3000
```

**Module Not Found:**
- Check path alias in vite.config.js
- Verify file exists
- Clear node_modules and reinstall

**HMR Not Working:**
- Check browser console for errors
- Restart dev server
- Clear browser cache

### Build Issues

**Build Fails:**
```bash
npm run build -- --debug
```

**Large Bundle:**
- Analyze with `npm run build -- --analyze`
- Remove unused dependencies
- Check for duplicate packages

---

## Resources & Links

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://radix-ui.com)
- [ESLint](https://eslint.org)

---

## Support & Contact

For questions or issues:
1. Check existing documentation
2. Review component examples
3. Check ESLint/console errors
4. Review git history for similar changes

---

**Last Updated:** April 2026  
**Project Version:** 0.0.0
