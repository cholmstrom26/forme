import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, Chip } from '@/components/ui';
import { useOnboardingStore } from '@/hooks/useOnboarding';
import { TimeWindow } from '@/types';
import { timeWindowLabels } from '@/lib/theme';

const timeWindows: TimeWindow[] = ['Morning', 'Midday', 'Afternoon', 'Evening'];
const frequencies = [1, 2, 3] as const;

export const DailyRhythmScreen: React.FC = () => {
  const { data, updateData, nextStep, prevStep } = useOnboardingStore();

  const handleTimeWindowToggle = (window: TimeWindow) => {
    const current = data.preferred_time_windows || [];
    const updated = current.includes(window)
      ? current.filter(w => w !== window)
      : [...current, window];
    updateData({ preferred_time_windows: updated });
  };

  const handleFrequencySelect = (frequency: 1 | 2 | 3) => {
    updateData({ nudge_frequency_per_day: frequency });
  };

  const canProceed = (data.preferred_time_windows?.length || 0) > 0 && data.nudge_frequency_per_day;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-sand flex items-center justify-center p-6"
    >
      <Card className="max-w-lg">
        <h1 className="text-2xl font-medium text-gray-800 mb-8 text-center">
          Daily Rhythm & Preferences
        </h1>
        
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-4">
            When would you like to be nudged?
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {timeWindows.map((window, index) => (
              <motion.div
                key={window}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Chip
                  selected={data.preferred_time_windows?.includes(window) || false}
                  onClick={() => handleTimeWindowToggle(window)}
                  className="w-full text-left justify-start"
                >
                  {timeWindowLabels[window]}
                </Chip>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-4">
            How many wellness nudges per day feels right?
          </h2>
          <div className="flex justify-center space-x-4">
            {frequencies.map((freq) => (
              <Chip
                key={freq}
                selected={data.nudge_frequency_per_day === freq}
                onClick={() => handleFrequencySelect(freq)}
                className="min-w-16 justify-center"
              >
                {freq}
              </Chip>
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
