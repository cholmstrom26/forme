import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card } from '@/components/ui';
import { useOnboardingStore } from '@/hooks/useOnboarding';

export const WelcomeScreen: React.FC = () => {
  const { nextStep } = useOnboardingStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-sand flex items-center justify-center p-6"
    >
      <Card className="max-w-md text-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-lavender rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-3xl">🌸</span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-medium text-gray-800 mb-4 text-generous"
        >
          We help you take care of yourself — even on your busiest days.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-600 mb-8 text-extra-generous"
        >
          You'll get 1–3 wellness prompts per day — perfectly timed for your schedule and goals.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Button
            onClick={nextStep}
            className="w-full"
            size="lg"
          >
            Let's Get Started
          </Button>
        </motion.div>
      </Card>
    </motion.div>
  );
};
