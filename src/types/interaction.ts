// User prompt interaction types based on Supabase schema
export interface UserPromptInteraction {
  interaction_id: string;
  user_id: string;
  prompt_id: string;
  timestamp_shown: Date;
  time_of_day_category_when_shown: TimeWindow;
  scheduled_duration_minutes_when_shown: number;
  user_current_mood_when_shown?: number; // 1-5
  user_current_energy_when_shown?: number; // 1-5
  action_taken: InteractionAction;
  completed_at?: Date;
  feedback_rating?: number; // 1-5
  would_do_again?: boolean;
  better_for_am_pm_suggestion?: 'AM' | 'PM' | 'Neutral';
  created_at: Date;
  updated_at: Date;
}

export type InteractionAction = 
  | 'shown'
  | 'skipped'
  | 'completed'
  | 'approved_pre_schedule'
  | 'declined_pre_schedule'
  | 'ignored_notification';

// Integration types
export interface UserIntegration {
  integration_id: string;
  user_id: string;
  integration_type: IntegrationType;
  status: IntegrationStatus;
  last_successful_sync_at?: Date;
  auth_token_encrypted: string;
  scopes_granted: string[];
  access_revoked_at?: Date;
  created_at: Date;
  updated_at: Date;
}

export type IntegrationType = 
  | 'Whoop'
  | 'AppleHealthKit'
  | 'Spotify'
  | 'Calm'
  | 'Headspace'
  | 'GoogleCalendar'
  | 'OutlookCalendar';

export type IntegrationStatus = 
  | 'connected'
  | 'disconnected'
  | 'error'
  | 'pending_auth';

// Import types
import { TimeWindow } from './user';
