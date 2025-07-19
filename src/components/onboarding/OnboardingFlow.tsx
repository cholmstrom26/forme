import React from 'react';
import { ProgressDots } from '@/components/ui';
import { useOnboardingStore } from '@/hooks/useOnboarding';
import { WelcomeScreen } from './WelcomeScreen';
import { GoalSelectionScreen } from './GoalSelectionScreen';
import { DailyRhythmScreen } from './DailyRhythmScreen';
import { EnergyMoodCalibrationScreen } from './EnergyMoodCalibrationScreen';
import { CalendarSyncRequestScreen } from './CalendarSyncRequestScreen';

const screens = [
  WelcomeScreen,
  GoalSelectionScreen,
  DailyRhythmScreen,
  EnergyMoodCalibrationScreen,
  CalendarSyncRequestScreen,
];

export const OnboardingFlow: React.FC = () => {
  const { currentStep } = useOnboardingStore();
  
  const CurrentScreen = screens[currentStep] || WelcomeScreen;
  
  return (
    <div className="relative">
      {currentStep > 0 && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-10">
          <ProgressDots
            total={screens.length}
            current={currentStep}
            className="bg-white bg-opacity-80 backdrop-blur-sm px-4 py-2 rounded-forme-pill"
          />
        </div>
      )}
      
      <CurrentScreen />
    </div>
  );
};
