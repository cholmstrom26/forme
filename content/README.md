# Formé Content Library

This directory contains the curated wellness prompt library and content for the Formé application.

## Structure

- `sample-prompts.json` - Sample wellness prompts for development and testing
- `tags.json` - Master file defining all prompt metadata and tags (TODO)
- `static-text/` - Static text content for the application (TODO)
- `illustrations/` - Design assets and illustrations (TODO)

## Prompt Categories

The wellness prompts are organized into these categories:

1. **Breathwork** - Breathing exercises for stress relief and focus (2-10 min)
2. **Micro-stretching** - Quick stretches for physical relief (2-7 min)  
3. **Mindfulness** - Present-moment awareness exercises (3-15 min)
4. **Posture resets** - Quick posture improvements (2-5 min)
5. **Mood shifts** - Brief activities to shift emotional state (1-3 min)
6. **Movement snacks** - Short movement breaks (3-10 min)
7. **Mental hygiene** - Mental clarity and reflection prompts (2-5 min)
8. **Wind-downs** - Evening relaxation activities (10-20 min)

## Prompt Structure

Each prompt includes:
- `prompt_id`: Unique identifier
- `title`: Concise, actionable title
- `content`: Step-by-step instructions
- `category`: One of the categories above
- `duration_minutes`: Expected time to complete
- `tone`: Calming, Energizing, Focus-oriented, Gentle, Reflective, or Assertive
- `applies_to_goals`: Which wellness goals this supports (Sleep, Energy, Focus, Stress, Body)
- `time_of_day_suitability`: When this prompt works best

## Usage

The sample prompts are used for:
- Development and testing
- Initial content seeding for the database
- Reference for content creators

In production, prompts will be stored in Supabase and managed through a content management system.
