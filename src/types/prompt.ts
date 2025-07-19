// Prompt types based on Supabase schema
export interface Prompt {
  prompt_id: string;
  title: string;
  content: string;
  category: PromptCategory;
  duration_minutes: number;
  tone: PromptTone;
  applies_to_goals: WellnessGoal[];
  time_of_day_suitability: (TimeWindow | 'PM Only')[];
  min_energy_level_required?: number; // 1-5
  max_energy_level_required?: number; // 1-5
  min_mood_level_required?: number; // 1-5
  max_mood_level_required?: number; // 1-5
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  avg_rating?: number; // 1.0-5.0
  completion_rate?: number; // 0.00-1.00
  times_shown: number;
}

export type PromptCategory = 
  | 'Breathwork'
  | 'Micro-stretching' 
  | 'Mindfulness'
  | 'Posture resets'
  | 'Mood shifts'
  | 'Movement snacks'
  | 'Mental hygiene'
  | 'Wind-downs';

export type PromptTone = 
  | 'Calming'
  | 'Energizing'
  | 'Focus-oriented'
  | 'Gentle'
  | 'Reflective'
  | 'Assertive';

// Import types from user.ts
import { WellnessGoal, TimeWindow } from './user';
