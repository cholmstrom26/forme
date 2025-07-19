# Formé

An app that integrates your calendar to give you 1-3 prompts a day to move you toward a health/wellness goal.

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Quick Setup

Run the setup script to get started quickly:

```bash
chmod +x setup.sh
./setup.sh
```

## Environment Variables

Create a `.env.local` file in the root directory. See `env-template.txt` for the required variables:

### Required for Basic Development:
- `NEXTAUTH_SECRET` - Generate with: `openssl rand -base64 32`
- `NEXTAUTH_URL` - Set to `http://localhost:3000` for development

### For Google Calendar Integration:
- `GOOGLE_CLIENT_ID` - From Google Cloud Console OAuth 2.0 credentials
- `GOOGLE_CLIENT_SECRET` - From Google Cloud Console OAuth 2.0 credentials

### For Firebase (User Data & Push Notifications):
- `NEXT_PUBLIC_FIREBASE_API_KEY` - From Firebase project settings
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID` - Your Firebase project ID
- (Additional Firebase config variables)

### For Supabase (Structured Data):
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon/public key

## Project Structure

- `/src/app` - Next.js App Router pages and layouts
- `/src/components` - Reusable UI components
- `/src/lib` - Utility functions and configurations
- `/src/types` - TypeScript type definitions
- `/src/hooks` - Custom React hooks
- `/src/styles` - Global styles and theme configuration

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js with Google OAuth
- **Database**: Supabase (PostgreSQL) + Firebase Firestore
- **State Management**: Zustand
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion

## Features

- Calendar-aware smart timing
- Goal-based personalization
- Push notifications (planned)
- Pre-scheduling & time blocking
- Progress tracking and reflection
