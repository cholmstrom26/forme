import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card } from '@/components/ui';
import { useOnboardingStore } from '@/hooks/useOnboarding';
import { Calendar, Shield, Clock } from 'lucide-react';

export const CalendarSyncRequestScreen: React.FC = () => {
  const { nextStep, prevStep, completeOnboarding } = useOnboardingStore();

  const handleConnectCalendar = async () => {
    // TODO: Implement Google Calendar OAuth flow
    console.log('Initiating calendar connection...');
    
    // For now, just complete onboarding
    // In real implementation, this would:
    // 1. Trigger OAuth flow with Google Calendar
    // 2. Request minimal permissions (calendar.readonly)
    // 3. Store access token securely
    // 4. Update user integration status
    
    completeOnboarding();
  };

  const handleSkipForNow = () => {
    // Allow users to skip calendar integration during onboarding
    // They can connect it later in settings
    completeOnboarding();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-sand flex items-center justify-center p-6"
    >
      <Card className="max-w-lg text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-lavender rounded-full mx-auto mb-4 flex items-center justify-center">
            <Calendar className="w-10 h-10 text-gray-700" />
          </div>
        </div>
        
        <h1 className="text-2xl font-medium text-gray-800 mb-4 text-generous">
          To recommend perfectly timed wellness prompts, we need to understand when you're busy — and when you're free.
        </h1>
        
        <div className="bg-lavender-light p-4 rounded-forme mb-6">
          <div className="flex items-center justify-center mb-2">
            <Shield className="w-5 h-5 text-gray-600 mr-2" />
            <span className="font-medium text-gray-800">Privacy First</span>
          </div>
          <p className="text-gray-700 text-sm">
            ✨ We don't look at what your events are — just your available time. ✨
          </p>
        </div>
        
        <div className="space-y-3 mb-8 text-left">
          <div className="flex items-start">
            <Clock className="w-5 h-5 text-sage mt-1 mr-3 flex-shrink-0" />
            <div>
              <p className="font-medium text-gray-800">Smart Timing</p>
              <p className="text-sm text-gray-600">We detect gaps in your schedule to suggest the perfect moments for wellness</p>
            </div>
          </div>
          <div className="flex items-start">
            <Shield className="w-5 h-5 text-sage mt-1 mr-3 flex-shrink-0" />
            <div>
              <p className="font-medium text-gray-800">Data Minimization</p>
              <p className="text-sm text-gray-600">Only start/end times are accessed. Never event details, titles, or attendees</p>
            </div>
          </div>
        </div>
        
        <p className="text-xs text-gray-500 mb-6">
          We will never store or share your event details. You can revoke access at any time.
        </p>
        
        <div className="space-y-3">
          <Button
            onClick={handleConnectCalendar}
            className="w-full"
            size="lg"
          >
            Connect My Calendar
          </Button>
          
          <Button
            variant="text"
            onClick={handleSkipForNow}
            className="w-full"
          >
            Skip for now (connect later in settings)
          </Button>
        </div>
        
        <div className="mt-6">
          <Button
            variant="outline"
            onClick={prevStep}
            size="sm"
          >
            Back
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};
