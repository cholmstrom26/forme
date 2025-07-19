import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card } from '@/components/ui';
import { useOnboardingStore } from '@/hooks/useOnboarding';

const moodEmojis = ['😩', '😐', '😌', '😍'];
const energyLabels = ['Very Low', 'Low', 'Moderate', 'High', 'Very High'];

export const EnergyMoodCalibrationScreen: React.FC = () => {
  const { data, updateData, nextStep, prevStep } = useOnboardingStore();

  const handleMoodSelect = (moodIndex: number) => {
    updateData({ baseline_mood: moodIndex + 1 });
  };

  const handleEnergySelect = (energyLevel: number) => {
    updateData({ baseline_energy: energyLevel });
  };

  const canProceed = data.baseline_mood && data.baseline_energy;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-sand flex items-center justify-center p-6"
    >
      <Card className="max-w-lg">
        <h1 className="text-2xl font-medium text-gray-800 mb-2 text-center">
          Let's calibrate your baseline.
        </h1>
        <p className="text-gray-600 text-center mb-8 text-extra-generous">
          This helps us understand your starting point and tailor prompts to your current state.
        </p>
        
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-4">
            How's your mood right now?
          </h2>
          <div className="flex justify-center space-x-4">
            {moodEmojis.map((emoji, index) => (
              <motion.button
                key={index}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleMoodSelect(index)}
                className={`
                  w-16 h-16 rounded-full text-2xl transition-all duration-200
                  ${data.baseline_mood === index + 1 
                    ? 'bg-lavender scale-110' 
                    : 'bg-sand-light hover:bg-sand-dark'
                  }
                `}
              >
                {emoji}
              </motion.button>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-4">
            What's your energy level?
          </h2>
          <div className="space-y-2">
            {energyLabels.map((label, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleEnergySelect(index + 1)}
                className={`
                  w-full p-3 rounded-forme text-left transition-all duration-200
                  ${data.baseline_energy === index + 1
                    ? 'bg-lavender text-gray-800'
                    : 'bg-sand-light hover:bg-sand-dark text-gray-700'
                  }
                `}
              >
                <span className="mr-3">{index + 1}</span>
                {label}
              </motion.button>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-4">
          <Button
            variant="outline"
            onClick={prevStep}
            className="flex-1"
          >
            Back
          </Button>
          <Button
            onClick={nextStep}
            disabled={!canProceed}
            className="flex-1"
          >
            Continue
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};
