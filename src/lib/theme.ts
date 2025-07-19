/**
 * Theme configuration based on Formé design guidelines
 */

export const colors = {
  sand: '#F5F0E1',
  lavender: '#DCD0FF',
  sage: '#B0C9AE',
  'sand-light': '#F8F5EE',
  'sand-dark': '#EDE6D4',
  'lavender-light': '#E8DFFF',
  'lavender-dark': '#C8B5FF',
  'sage-light': '#C4D4C2',
  'sage-dark': '#9BB89A',
} as const;

export const fonts = {
  primary: ['Inter', 'Work Sans', 'Nunito', 'system-ui', 'sans-serif'],
} as const;

export const borderRadius = {
  forme: '12px',
  'forme-lg': '16px',
  'forme-pill': '50px',
} as const;

export const lineHeight = {
  generous: 1.5,
  'extra-generous': 1.6,
} as const;

export const shadows = {
  soft: '0 4px 20px rgba(0, 0, 0, 0.05)',
  forme: '0 8px 25px rgba(0, 0, 0, 0.08)',
} as const;

// Wellness goal emoji mappings
export const wellnessGoalEmojis = {
  Sleep: '💤',
  Energy: '⚡️',
  Focus: '💭',
  Stress: '😌',
  Body: '💪',
} as const;

// Time window display names
export const timeWindowLabels = {
  Morning: 'Morning (6–11am)',
  Midday: 'Midday (11am–3pm)', 
  Afternoon: 'Afternoon (3–6pm)',
  Evening: 'Evening (6–9pm)',
} as const;
