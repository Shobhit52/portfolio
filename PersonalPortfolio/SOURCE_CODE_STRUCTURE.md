# Portfolio Website - Source Code Structure

## Project Overview
This is a modern full-stack portfolio website built with React, TypeScript, Express.js, and Tailwind CSS. The application features a clean, professional design with smooth animations and responsive layout.

## How to Get the Complete Source Code

### Option 1: Download Archive
The complete source code has been packaged into: `portfolio-source-code.tar.gz`

To extract:
```bash
tar -xzf portfolio-source-code.tar.gz
```

### Option 2: Individual File Access
All source files are available in the Replit environment. Key files include:

## File Structure

```
portfolio-website/
├── client/                     # Frontend React application
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── ui/            # Reusable UI components (shadcn/ui)
│   │   │   ├── navigation.tsx  # Navigation header
│   │   │   ├── hero.tsx       # Hero section
│   │   │   ├── about.tsx      # About section
│   │   │   ├── skills.tsx     # Skills showcase
│   │   │   ├── projects.tsx   # Projects portfolio
│   │   │   ├── contact.tsx    # Contact form
│   │   │   └── footer.tsx     # Footer component
│   │   ├── pages/
│   │   │   ├── home.tsx       # Main homepage
│   │   │   └── not-found.tsx  # 404 page
│   │   ├── lib/
│   │   │   ├── queryClient.ts # TanStack Query setup
│   │   │   └── utils.ts       # Utility functions
│   │   ├── hooks/             # Custom React hooks
│   │   ├── App.tsx           # Main app component
│   │   ├── main.tsx          # React entry point
│   │   └── index.css         # Global styles
│   └── index.html            # HTML template
├── server/                    # Backend Express server
│   ├── index.ts              # Server entry point
│   ├── routes.ts             # API routes
│   ├── storage.ts            # Data storage interface
│   └── vite.ts               # Vite integration
├── shared/                    # Shared TypeScript types
│   └── schema.ts             # Database schema & types
├── package.json              # Dependencies & scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS config
├── vite.config.ts            # Vite build configuration
└── components.json           # shadcn/ui configuration
```

## Key Technologies Used

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **shadcn/ui** component library
- **TanStack Query** for state management
- **Wouter** for routing

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **PostgreSQL** database support
- **Session management** ready

### Development Tools
- **Vite** for fast development
- **ESBuild** for server bundling
- **TypeScript** strict mode
- **Replit** deployment ready

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Mode**
   ```bash
   npm run dev
   ```

3. **Production Build**
   ```bash
   npm run build
   npm run start
   ```

## Features Implemented

✅ **Responsive Design** - Mobile-first approach
✅ **Smooth Scrolling Navigation** - Between sections
✅ **Hero Section** - Professional introduction
✅ **About Section** - Background and statistics
✅ **Skills Display** - Technical expertise with visual indicators
✅ **Project Portfolio** - 6 featured projects with technology tags
✅ **Contact Form** - Functional with validation
✅ **Social Links** - GitHub, LinkedIn, Twitter integration
✅ **Professional Styling** - Clean, modern design
✅ **Animation Effects** - Smooth transitions and hover states
✅ **SEO Optimized** - Meta tags and proper structure

## Customization Guide

### Personal Information
- Update `client/src/components/hero.tsx` for personal details
- Modify `client/src/components/about.tsx` for background info
- Edit `client/src/components/skills.tsx` for technical skills
- Update `client/src/components/projects.tsx` for your projects
- Change contact details in `client/src/components/contact.tsx`

### Styling
- Colors: Modify CSS variables in `client/src/index.css`
- Components: Update Tailwind classes throughout components
- Fonts: Change Google Fonts imports in `index.css`

### Content
- Images: Replace Unsplash URLs with your own images
- Social Links: Update URLs in navigation, hero, and footer
- Project Data: Replace with your actual projects

## Deployment
The application is ready for deployment on Replit or any modern hosting platform that supports Node.js applications.