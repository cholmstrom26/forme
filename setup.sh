#!/bin/bash

# Formé Setup Script
# This script helps set up the development environment

echo "🌸 Setting up Formé development environment..."

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local from template..."
    cp env-template.txt .env.local
    echo "✅ .env.local created! Please fill in your API keys and secrets."
else
    echo "✅ .env.local already exists."
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check for required environment variables
echo "🔍 Checking environment setup..."

if [ -z "$NEXTAUTH_SECRET" ]; then
    echo "⚠️  NEXTAUTH_SECRET is not set. Generate one with: openssl rand -base64 32"
fi

echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Fill in your API keys in .env.local"
echo "2. Set up Firebase project and get configuration"
echo "3. Set up Supabase project and get configuration"
echo "4. Run 'npm run dev' to start development server"
echo ""
echo "📚 See README.md for detailed setup instructions."
