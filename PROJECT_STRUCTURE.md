# Formé Project Structure

This document outlines the current project structure for the Formé webapp.

## Root Directory
```
/forme/
├── .env.example              # Environment variables template
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore rules
├── env-template.txt         # Quick setup environment template
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── README.md                # Project documentation
├── setup.sh                 # Quick setup script
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── content/                 # Content library
└── src/                     # Source code
```

## Source Code Structure (`/src/`)
```
src/
├── app/                     # Next.js App Router
│   ├── api/                 # API routes
│   │   ├── user/           # User-related endpoints
│   │   └── calendar/       # Calendar integration endpoints
│   ├── onboarding/         # Onboarding page
│   ├── globals.css         # Global styles import
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── ui/                 # Basic UI components (Button, Card, etc.)
│   ├── onboarding/         # Onboarding flow components
│   └── features/           # Feature-specific components
├── hooks/                  # Custom React hooks & state management
├── lib/                    # Utility functions and configurations
│   ├── constants.ts        # App constants
│   ├── firebase.ts         # Firebase configuration
│   ├── supabase.ts         # Supabase configuration
│   ├── theme.ts            # Design system theme
│   ├── utils.ts            # Utility functions
│   └── validations.ts      # Zod schemas
├── styles/                 # Styling
│   └── globals.css         # Global CSS with Tailwind
└── types/                  # TypeScript type definitions
    ├── user.ts             # User-related types
    ├── prompt.ts           # Prompt-related types
    ├── interaction.ts      # Interaction tracking types
    └── index.ts            # Type exports
```

## Content Library (`/content/`)
```
content/
├── README.md               # Content documentation
└── sample-prompts.json     # Sample wellness prompts
```

## Key Features Implemented

### ✅ Core Infrastructure
- Next.js 15 with App Router
- TypeScript configuration
- Tailwind CSS with custom design system
- ESLint setup

### ✅ Design System
- Custom color palette (sand, lavender, sage)
- Typography with generous line heights
- Rounded corners and soft shadows
- Component library (Button, Card, Chip, etc.)

### ✅ Onboarding Flow
- 5-step onboarding process
- Progress indication
- Goal selection
- Time preference configuration
- Mood/energy calibration
- Calendar sync request

### ✅ State Management
- Zustand for client state
- Onboarding state management
- User state management

### ✅ Type Safety
- Comprehensive TypeScript types
- Zod validation schemas
- API response types

### ✅ Backend Structure
- API routes for user management
- Database configuration (Firebase + Supabase)
- Environment variable setup

## TODO: Implementation Needed

### 🔄 Authentication
- NextAuth.js setup with Google OAuth
- Firebase Auth integration
- Protected routes

### 🔄 Database Integration
- Firebase Firestore for user data
- Supabase for structured data
- Data migration scripts

### 🔄 Calendar Integration
- Google Calendar API integration
- OAuth 2.0 flow
- Calendar parsing logic

### 🔄 Prompt Engine
- Smart timing algorithm
- Personalization logic
- Feedback loop implementation

### 🔄 Push Notifications
- Firebase Cloud Messaging setup
- Notification scheduling
- User preferences

### 🔄 Additional Pages
- Progress/reflection page
- Settings page
- Profile management

## Getting Started

1. Clone the repository
2. Run `chmod +x setup.sh && ./setup.sh`
3. Fill in your API keys in `.env.local`
4. Run `npm run dev`

The app follows the design guidelines and architecture outlined in the original documentation, providing a solid foundation for the Formé wellness application.
