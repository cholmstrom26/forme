// Re-export all types from individual files
export * from './user';
export * from './prompt';
export * from './interaction';

// Additional utility types
export interface OnboardingData {
  step: number;
  primary_wellness_goal?: WellnessGoal;
  secondary_wellness_goals?: WellnessGoal[];
  preferred_time_windows?: TimeWindow[];
  nudge_frequency_per_day?: 1 | 2 | 3;
  baseline_mood?: number;
  baseline_energy?: number;
  energy_drainers?: string[];
}

export interface DailyTask {
  prompt: Prompt;
  available_time_slot: TimeSlot;
  context: {
    time_of_day: TimeWindow;
    duration_minutes: number;
    user_mood?: number;
    user_energy?: number;
  };
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Import types
import { WellnessGoal, TimeWindow, TimeSlot } from './user';
import { Prompt } from './prompt';
