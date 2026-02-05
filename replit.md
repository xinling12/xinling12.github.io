# Protecher - IT Consulting Company Website

## Overview

This is a corporate website for "Protecher," an IT consulting company based in Brisbane, Australia. The application is a full-stack TypeScript project featuring a React frontend with a modern component library and an Express.js backend serving mock API data. The site showcases services, portfolio projects, and provides a contact form for client inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state and data fetching
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming (corporate blue/white palette)
- **Animations**: Framer Motion for page transitions and scroll animations
- **Forms**: React Hook Form with Zod validation schemas
- **Build Tool**: Vite with hot module replacement

The frontend follows a pages-based architecture with shared components. Pages include Home, Services, Portfolio, About, and Contact. Custom hooks in `client/src/hooks/` abstract data fetching logic.

### Backend Architecture
- **Framework**: Express.js 5 with TypeScript
- **API Design**: RESTful endpoints serving JSON responses
- **Data**: Currently uses mock/hardcoded data in `server/routes.ts`
- **Static Serving**: Production builds served via Express static middleware
- **Development**: Vite middleware integration for HMR during development

API endpoints:
- `GET /api/services` - List of IT services offered
- `GET /api/projects` - Portfolio of completed projects
- `POST /api/inquiries` - Contact form submissions

### Shared Code
The `shared/` directory contains:
- **Schema definitions** (`schema.ts`): Zod schemas for type validation and TypeScript types
- **Route definitions** (`routes.ts`): API contract definitions with input/output schemas

### Build System
- Development: `tsx` runs TypeScript directly with Vite dev server
- Production: Custom build script using esbuild for server bundling and Vite for client

## External Dependencies

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts`
- **Migrations**: Output to `./migrations` directory
- **Connection**: Requires `DATABASE_URL` environment variable
- **Note**: Database is configured but currently the app uses mock data; schema push available via `npm run db:push`

### Key Libraries
- **@tanstack/react-query**: Async state management and caching
- **framer-motion**: Animation library for smooth transitions
- **react-hook-form + zod**: Form handling with schema validation
- **Radix UI**: Accessible UI primitives (dialogs, dropdowns, tooltips, etc.)
- **class-variance-authority + clsx + tailwind-merge**: Utility-first CSS composition

### Fonts
- Inter (body text)
- Outfit (display/headings)
- Loaded via Google Fonts CDN

### Development Tools
- Replit-specific Vite plugins for error overlays and dev banners
- TypeScript with strict mode and path aliases (`@/` for client, `@shared/` for shared)