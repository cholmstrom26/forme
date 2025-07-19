import React from 'react';
import { motion } from 'framer-motion';
import { Card, Button } from '@/components/ui';
import { DailyTask } from '@/types';
import { formatTime, formatDuration } from '@/lib/utils';
import { Clock, Calendar, CheckCircle } from 'lucide-react';

interface TodayTaskCardProps {
  task: DailyTask;
  onAccept: () => void;
  onDecline: () => void;
  onComplete: () => void;
  onSuggestAnother: () => void;
}

export const TodayTaskCard: React.FC<TodayTaskCardProps> = ({
  task,
  onAccept,
  onDecline,
  onComplete,
  onSuggestAnother,
}) => {
  const { prompt, available_time_slot, context } = task;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto"
    >
      <Card className="text-center">
        {/* Header with context */}
        <div className="mb-6">
          <h1 className="text-2xl font-medium text-gray-800 mb-2">
            Your Moment to {prompt.tone === 'Calming' ? 'Reset' : 
                           prompt.tone === 'Energizing' ? 'Recharge' : 'Refocus'}
          </h1>
          
          <div className="flex items-center justify-center text-sm text-gray-600 space-x-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {formatTime(available_time_slot.start_time)}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {formatDuration(context.duration_minutes)} available
            </div>
          </div>
        </div>

        {/* Task Details */}
        <div className="mb-8">
          <h2 className="text-xl font-medium text-gray-800 mb-3">
            {prompt.title}
          </h2>
          
          <p className="text-gray-600 text-generous mb-4">
            {prompt.content}
          </p>
          
          <div className="inline-flex items-center px-3 py-1 bg-sage-light rounded-forme-pill text-sm text-gray-700">
            <Clock className="w-3 h-3 mr-1" />
            {formatDuration(prompt.duration_minutes)}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <div className="flex space-x-3">
            <Button
              onClick={onAccept}
              className="flex-1"
            >
              Do Now
            </Button>
            <Button
              variant="outline"
              onClick={onDecline}
              className="flex-1"
            >
              Later
            </Button>
          </div>
          
          <Button
            variant="text"
            onClick={onSuggestAnother}
            size="sm"
          >
            Suggest Another
          </Button>
        </div>

        {/* Completion Option (shown after acceptance) */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-6 pt-6 border-t border-sand-dark"
        >
          <p className="text-sm text-gray-600 mb-3">
            Ready to mark this complete?
          </p>
          <Button
            onClick={onComplete}
            variant="secondary"
            className="w-full"
            size="sm"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark Complete
          </Button>
        </motion.div>
      </Card>
    </motion.div>
  );
};
