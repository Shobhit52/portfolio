# Portfolio Application

## Overview

This is a modern full-stack portfolio application built with React and Express.js. The application showcases a personal portfolio website with a clean, professional design featuring sections for hero, about, skills, projects, and contact information. The project uses a TypeScript-first approach with modern tooling and deployment-ready configuration.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Express sessions with PostgreSQL storage (connect-pg-simple)
- **Development**: Hot reloading with tsx for TypeScript execution

### Project Structure
- **Monorepo Layout**: Client and server code organized in separate directories
- **Shared Schema**: Common TypeScript types and database schema in `/shared`
- **Asset Management**: Static assets served through Express with Vite integration

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: User authentication schema with username/password fields
- **Migrations**: Database migrations managed through drizzle-kit
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

### Authentication System
- **User Model**: Basic user authentication with username and password
- **Storage Layer**: Interface-based design allowing for easy database switching
- **Session Management**: Ready for session-based authentication implementation

### UI Components
- **Design System**: Complete shadcn/ui component library
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: Radix UI primitives ensure WCAG compliance
- **Form Handling**: React Hook Form with Zod validation integration

### Development Tools
- **Type Safety**: Full TypeScript coverage across client, server, and shared code
- **Code Quality**: ESLint and TypeScript strict mode enabled
- **Hot Reloading**: Vite HMR for client-side and tsx for server-side development
- **Path Aliases**: Configured import aliases for clean import statements

## Data Flow

### Client-Server Communication
1. Client makes API requests to `/api/*` endpoints
2. Express server handles routing and business logic
3. Drizzle ORM manages database operations
4. Responses sent back as JSON with proper error handling

### State Management
1. TanStack React Query handles server state caching and synchronization
2. Local component state managed with React hooks
3. Form state managed with React Hook Form
4. Toast notifications for user feedback

### Asset Pipeline
1. Vite handles client-side asset bundling and optimization
2. Express serves static assets in production
3. Hot reloading in development environment
4. Optimized builds with tree shaking and code splitting

## External Dependencies

### Core Libraries
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Components**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod schema validation with Drizzle integration
- **Animation**: Framer Motion for smooth transitions

### Development Tools
- **Build Tools**: Vite, ESBuild for server bundling
- **TypeScript**: Full type safety with strict configuration
- **Replit Integration**: Cartographer plugin and runtime error overlay

### Production Dependencies
- **Server**: Express.js with middleware for JSON parsing and static files
- **Database**: PostgreSQL with connection pooling
- **Session Storage**: PostgreSQL-backed session management

## Deployment Strategy

### Build Process
1. **Client Build**: Vite bundles React application to `dist/public`
2. **Server Build**: ESBuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied to PostgreSQL instance

### Environment Configuration
- **Development**: Local development with hot reloading
- **Production**: Optimized builds with environment variable configuration
- **Database**: Environment-based DATABASE_URL configuration

### Replit Deployment
- **Platform**: Replit autoscale deployment target
- **Port Configuration**: Express server runs on port 5000, exposed on port 80
- **Build Command**: `npm run build` for production assets
- **Start Command**: `npm run start` for production server

### Database Setup
- **Provider**: PostgreSQL 16 module enabled in Replit
- **Schema Management**: Drizzle migrations in `/migrations` directory
- **Connection**: Serverless-compatible Neon Database driver

## Changelog
- June 22, 2025. Initial setup
- June 22, 2025. Added PostgreSQL database with contact form storage and admin panel
- June 22, 2025. Enhanced with interactive visual elements including particle systems, floating animations, mouse-responsive effects, and 3D tech stack visualization

## User Preferences

Preferred communication style: Simple, everyday language.
Interactive Design: User requested interactive visual elements similar to benrogers.dev reference site for enhanced engagement.