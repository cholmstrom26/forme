import React from 'react';
import { cn } from '@/lib/utils';

interface ChipProps {
  children: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({ 
  children, 
  selected = false, 
  onClick, 
  className,
  icon 
}) => {
  return (
    <button
      className={cn(
        'chip',
        selected && 'chip-selected',
        onClick && 'hover:bg-sand hover:border-sage-light',
        className
      )}
      onClick={onClick}
      type="button"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
