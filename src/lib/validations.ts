// Validation schemas using Zod
import { z } from 'zod';

// Wellness goal schema
export const WellnessGoalSchema = z.enum(['Sleep', 'Energy', 'Focus', 'Stress', 'Body']);

// Time window schema
export const TimeWindowSchema = z.enum(['Morning', 'Midday', 'Afternoon', 'Evening']);

// Onboarding data schema
export const OnboardingDataSchema = z.object({
  step: z.number().min(0).max(5),
  primary_wellness_goal: WellnessGoalSchema.optional(),
  secondary_wellness_goals: z.array(WellnessGoalSchema).optional(),
  preferred_time_windows: z.array(TimeWindowSchema).optional(),
  nudge_frequency_per_day: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
  baseline_mood: z.number().min(1).max(5).optional(),
  baseline_energy: z.number().min(1).max(5).optional(),
  energy_drainers: z.array(z.string()).optional(),
});

// User creation/update schema
export const UserUpdateSchema = z.object({
  primary_wellness_goal: WellnessGoalSchema.optional(),
  secondary_wellness_goals: z.array(WellnessGoalSchema).optional(),
  preferred_time_windows: z.array(TimeWindowSchema).optional(),
  nudge_frequency_per_day: z.union([z.literal(1), z.literal(2), z.literal(3)]).optional(),
  baseline_mood: z.number().min(1).max(5).optional(),
  baseline_energy: z.number().min(1).max(5).optional(),
  notification_style: z.enum(['banner', 'subtle', 'none']).optional(),
  onboarding_complete: z.boolean().optional(),
});

// Prompt interaction schema
export const PromptInteractionSchema = z.object({
  prompt_id: z.string(),
  action_taken: z.enum(['shown', 'skipped', 'completed', 'approved_pre_schedule', 'declined_pre_schedule', 'ignored_notification']),
  user_current_mood_when_shown: z.number().min(1).max(5).optional(),
  user_current_energy_when_shown: z.number().min(1).max(5).optional(),
  feedback_rating: z.number().min(1).max(5).optional(),
  would_do_again: z.boolean().optional(),
  better_for_am_pm_suggestion: z.enum(['AM', 'PM', 'Neutral']).optional(),
});

// Export types from schemas
export type OnboardingDataInput = z.infer<typeof OnboardingDataSchema>;
export type UserUpdateInput = z.infer<typeof UserUpdateSchema>;
export type PromptInteractionInput = z.infer<typeof PromptInteractionSchema>;
