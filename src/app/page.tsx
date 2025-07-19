'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/hooks/useUser';
import { OnboardingFlow } from '@/components/onboarding';

export default function HomePage() {
  const router = useRouter();
  const { user, isLoading } = useUserStore();
  
  useEffect(() => {
    // Check if user is authenticated and has completed onboarding
    if (!isLoading) {
      if (!user) {
        // No user found, redirect to onboarding
        router.push('/onboarding');
      } else if (!user.onboarding_complete) {
        // User exists but hasn't completed onboarding
        router.push('/onboarding');
      }
      // If user exists and onboarding is complete, stay on home page
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-sand flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-lavender border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your wellness journey...</p>
        </div>
      </div>
    );
  }

  if (!user || !user.onboarding_complete) {
    return null; // Router will handle redirect
  }

  return (
    <div className="min-h-screen bg-sand pb-20">
      <div className="max-w-md mx-auto p-6">
        <header className="text-center mb-8">
          <h1 className="text-2xl font-medium text-gray-800 mb-2">
            Good {getTimeOfDayGreeting()}, {user.email?.split('@')[0] || 'there'}
          </h1>
          <p className="text-gray-600">
            Ready for your wellness moment?
          </p>
        </header>

        {/* Today's Task Section */}
        <main>
          {/* TODO: Replace with actual TodayTaskCard when we have real data */}
          <div className="bg-white rounded-forme-lg shadow-soft p-6 text-center">
            <div className="w-16 h-16 bg-lavender rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🌸</span>
            </div>
            <h2 className="text-xl font-medium text-gray-800 mb-2">
              Your wellness assistant is getting ready
            </h2>
            <p className="text-gray-600 mb-4">
              We're analyzing your calendar to find the perfect moments for wellness prompts.
            </p>
            <div className="text-sm text-gray-500">
              Check back soon for your personalized recommendations!
            </div>
          </div>
        </main>
      </div>
      
      {/* TODO: Add BottomNavigation component */}
    </div>
  );
}

function getTimeOfDayGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'morning';
  if (hour < 17) return 'afternoon';
  return 'evening';
}
