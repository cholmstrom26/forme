import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import { formatDate } from '@/lib/utils';
import { Sparkles, Calendar, TrendingUp } from 'lucide-react';

interface ProgressSummaryProps {
  totalCompleted: number;
  currentStreak: number;
  weeklyGoal?: number;
}

export const ProgressSummary: React.FC<ProgressSummaryProps> = ({
  totalCompleted,
  currentStreak,
  weeklyGoal = 7,
}) => {
  const streakText = currentStreak === 1 ? 'day' : 'days';
  const progressPercentage = weeklyGoal > 0 ? Math.min((totalCompleted / weeklyGoal) * 100, 100) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Streak Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="text-center">
          <div className="mb-3">
            <div className="w-12 h-12 bg-lavender rounded-full mx-auto flex items-center justify-center mb-2">
              <Sparkles className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="font-medium text-gray-800">Current Streak</h3>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">
            {currentStreak}
          </div>
          <p className="text-sm text-gray-600">
            {streakText} in a row
          </p>
        </Card>
      </motion.div>

      {/* Total Completed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="text-center">
          <div className="mb-3">
            <div className="w-12 h-12 bg-sage rounded-full mx-auto flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="font-medium text-gray-800">Total Completed</h3>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">
            {totalCompleted}
          </div>
          <p className="text-sm text-gray-600">
            wellness moments
          </p>
        </Card>
      </motion.div>

      {/* Weekly Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="text-center">
          <div className="mb-3">
            <div className="w-12 h-12 bg-sand-dark rounded-full mx-auto flex items-center justify-center mb-2">
              <Calendar className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="font-medium text-gray-800">This Week</h3>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">
            {Math.round(progressPercentage)}%
          </div>
          <p className="text-sm text-gray-600">
            of weekly goal
          </p>
          
          {/* Progress Bar */}
          <div className="mt-3 w-full bg-sand-light rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-sage h-2 rounded-full"
            />
          </div>
        </Card>
      </motion.div>
    </div>
  );
};
