// User types based on Firestore schema
export interface User {
  id: string;
  created_at: Date;
  last_active_at: Date;
  email?: string;
  primary_wellness_goal: WellnessGoal;
  secondary_wellness_goals?: WellnessGoal[];
  preferred_time_windows: TimeWindow[];
  nudge_frequency_per_day: 1 | 2 | 3;
  baseline_mood: number; // 1-5 scale
  baseline_energy: number; // 1-5 scale
  calendar_integration_status: 'connected' | 'disconnected' | 'pending';
  calendar_provider?: 'GoogleCalendar' | 'OutlookCalendar' | 'AppleCalendar';
  last_calendar_sync_at?: Date;
  notification_style: 'banner' | 'subtle' | 'none';
  total_prompts_completed: number;
  current_streak_days: number;
  onboarding_complete: boolean;
}

// Wellness goal types
export type WellnessGoal = 'Sleep' | 'Energy' | 'Focus' | 'Stress' | 'Body';

// Time window types
export type TimeWindow = 'Morning' | 'Midday' | 'Afternoon' | 'Evening';

// Calendar availability types
export interface CalendarAvailability {
  user_id: string;
  last_synced_at: Date;
  availability_data: Record<string, TimeSlot[]>; // YYYY-MM-DD -> time slots
  expires_at: Date;
}

export interface TimeSlot {
  start_time: Date;
  end_time: Date;
}
