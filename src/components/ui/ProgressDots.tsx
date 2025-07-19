import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressDotsProps {
  total: number;
  current: number;
  className?: string;
}

export const ProgressDots: React.FC<ProgressDotsProps> = ({ 
  total, 
  current, 
  className 
}) => {
  return (
    <div className={cn('flex space-x-2 justify-center', className)}>
      {Array.from({ length: total }, (_, index) => (
        <div
          key={index}
          className={cn(
            'progress-dot',
            index < current && 'progress-dot-completed',
            index === current && 'progress-dot-active'
          )}
        />
      ))}
    </div>
  );
};
