import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, Chip } from '@/components/ui';
import { useOnboardingStore } from '@/hooks/useOnboarding';
import { WellnessGoal } from '@/types';
import { wellnessGoalEmojis } from '@/lib/theme';

const wellnessGoals: WellnessGoal[] = ['Sleep', 'Energy', 'Focus', 'Stress', 'Body'];

export const GoalSelectionScreen: React.FC = () => {
  const { data, updateData, nextStep, prevStep } = useOnboardingStore();

  const handleGoalSelect = (goal: WellnessGoal) => {
    updateData({ primary_wellness_goal: goal });
  };

  const canProceed = !!data.primary_wellness_goal;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-sand flex items-center justify-center p-6"
    >
      <Card className="max-w-lg text-center">
        <h1 className="text-2xl font-medium text-gray-800 mb-8">
          What's your main wellness focus right now?
        </h1>
        
        <div className="grid grid-cols-1 gap-4 mb-8">
          {wellnessGoals.map((goal) => (
            <motion.div
              key={goal}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: wellnessGoals.indexOf(goal) * 0.1 }}
            >
              <Chip
                selected={data.primary_wellness_goal === goal}
                onClick={() => handleGoalSelect(goal)}
                className="w-full text-left justify-start py-4"
                icon={<span className="text-xl">{wellnessGoalEmojis[goal]}</span>}
              >
                {goal === 'Body' ? 'Body (mobility/strength)' : goal}
              </Chip>
            </motion.div>
          ))}
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
