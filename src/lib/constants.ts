// Constants for the Formé application
export const APP_NAME = 'Formé';
export const APP_DESCRIPTION = 'Wellness for your busy life';

// Onboarding constants
export const ONBOARDING_STEPS = {
  WELCOME: 0,
  GOAL_SELECTION: 1,
  DAILY_RHYTHM: 2,
  ENERGY_MOOD_CALIBRATION: 3,
  CALENDAR_SYNC: 4,
} as const;

export const TOTAL_ONBOARDING_STEPS = 5;

// API endpoints
export const API_ENDPOINTS = {
  USER: '/api/user',
  USER_ONBOARDING: '/api/user/onboarding',
  CALENDAR_SYNC: '/api/calendar/sync',
  PROMPTS: '/api/prompts',
  INTERACTIONS: '/api/interactions',
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  ONBOARDING_DATA: 'forme_onboarding_data',
  USER_PREFERENCES: 'forme_user_preferences',
} as const;

// Default values
export const DEFAULTS = {
  NUDGE_FREQUENCY: 2,
  NOTIFICATION_STYLE: 'banner' as const,
  TIME_WINDOWS: ['Morning', 'Afternoon'] as const,
} as const;

// Calendar integration scopes
export const GOOGLE_CALENDAR_SCOPES = [
  'https://www.googleapis.com/auth/calendar.readonly',
] as const;

// Wellness content categories
export const PROMPT_CATEGORIES = [
  'Breathwork',
  'Micro-stretching',
  'Mindfulness',
  'Posture resets',
  'Mood shifts', 
  'Movement snacks',
  'Mental hygiene',
  'Wind-downs',
] as const;
