import { type ClassValue, clsx } from 'clsx';

/**
 * Utility function for combining class names
 * Uses clsx for conditional classes and merging
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format time for display
 */
export function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

/**
 * Format date for display
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format duration in minutes to human readable format
 */
export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours} hr`;
  }
  
  return `${hours} hr ${remainingMinutes} min`;
}

/**
 * Get time window from date
 */
export function getTimeWindow(date: Date): 'Morning' | 'Midday' | 'Afternoon' | 'Evening' {
  const hour = date.getHours();
  
  if (hour >= 6 && hour < 11) return 'Morning';
  if (hour >= 11 && hour < 15) return 'Midday';
  if (hour >= 15 && hour < 18) return 'Afternoon';
  return 'Evening';
}
