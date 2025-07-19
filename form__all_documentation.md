# Formé

## Project Description
Core idea: an app that integrates your calendar to give you 1-3 prompts a day to move you toward a health/wellness goal 

ICP: Women who work/are busy 

Functionality goal 1: give people daily tasks to move towards a wellness goal
Functionality goal 2: integrate these tasks with their schedule

Pitch:
Most health platforms don’t bridge the gap between data and action 
This is a decision layer that fits into a person’s day 
Apple might tell you to “close your rings.”
Whoop might tell you you’re under-recovered.
You say: “You’ve got 18 minutes free between meetings. Here’s a breathwork prompt to reduce cortisol - right now.”
Wearables and health apps full of data and interfaces that people don’t care about for themselves. Different people have different goals. Too much complexity. 
→ personalization is our niche
Moat over time:
You’ll build defensibility via:
A growing library of time-matched actions and outcomes
A feedback loop: as users rate/check off prompts, the system learns what works best
Integration with personal context: preferred time windows, goals, mood, energy patterns

App features:
Push notifications to reduce friction (people won’t open an app everyday)
Non-generic, specific prompts (not just “drink more water today”)
Build trust early so people feel comfortable sharing their calendars
Need to have great execution: reduce friction, build trust. Comes down to the product itself
Color palate: lavender, sage green, sand
Screens:
Today’s Task
Progress / Reflections → gamification/streak
Settings / Goal Adjustments

Functional Features: 
Calendar-Aware Smart Timing (Core)
Detect gaps in user’s calendar
Match that time to the task’s duration
Don’t overwhelm - show 1–3 nudges per day, only during open slots
Goal-Based Personalization
During onboarding, ask:
“What’s your current wellness priority?”
Sleep / Energy / Focus / Stress / Body
Tailor prompts by type and tone accordingly
Pre-Scheduling & Time Blocking
Let users approve or decline a task slot each day:
“You have a 25-min opening at 4:30. Want to reserve it for a wellness reset?”
Accepted tasks get added to their calendar




## Product Requirements Document
Product Requirements Document: Formé

1. Introduction

1.1. Project Name
Formé

1.2. Version
1.0 (Minimum Viable Product - MVP)

1.3. Date
[Current Date]

1.4. Purpose
This document outlines the product requirements for Formé, an innovative mobile application designed to bridge the gap between wellness data and actionable steps. Formé integrates with a user's calendar to provide 1-3 highly personalized and context-aware prompts daily, guiding them toward specific health and wellness goals. The primary aim is to empower busy women to prioritize self-care by seamlessly fitting wellness activities into their existing schedules, without adding to decision fatigue or a burgeoning to-do list.

1.5. Core Idea & Pitch
Most health platforms excel at collecting data (e.g., Apple telling you to "close your rings," Whoop indicating under-recovery) but fail to translate this data into actionable, context-aware advice that fits into a person's real-world schedule. Formé acts as a "decision layer" that understands a user's availability and delivers hyper-relevant wellness nudges. Instead of generic advice, Formé might say: "You've got 18 minutes free between meetings. Here's a breathwork prompt to reduce cortisol - right now."

1.6. Strategic Moat (Defensibility)
Over time, Formé will build defensibility through:
*   A growing, curated library of time-matched actions and outcomes.
*   A robust feedback loop: as users rate/check off prompts, the system learns what works best for them.
*   Deep integration with personal context: preferred time windows, specific wellness goals, current mood, and energy patterns.

2. Target Audience

2.1. Ideal Customer Profile (ICP)
Women who work and are busy.
*   **Demographics:** Aged 28-45, knowledge workers, founders, mid-level professionals, consultants, creatives. Located in urban/suburban areas (e.g., NYC, LA, Austin, SF, Chicago). Middle to upper-middle income.
*   **Device Usage:** Primarily iPhone users, Google Calendar, sometimes integrated with wearables like Whoop, Fitbit, or Apple Watch.
*   **Values & Behaviors:**
    *   Values intentionality: Wants to live a life aligned with values, not just productivity.
    *   Health-aware: Follows wellness trends (e.g., Huberman, hot girl walks, magnesium).
    *   Time-starved: Wellness is important but constantly deprioritized due to perceived lack of time.
    *   Decision fatigued: Overwhelmed by choices, wants prescriptive guidance rather than more options.
    *   Burnout-adjacent: High-functioning but close to exhaustion; needs permission to pause, not more pressure.
    *   Self-improvement inclined: Enjoys optimization, self-tracking, and reflection, but overwhelmed by data overload from current tools.

2.2. Daily Context & Mental/Physical State
*   **7:30–9 AM:** Morning scramble, rushed workout. State: Slightly anxious, tired.
*   **9–12 PM:** Back-to-back work calls. State: Alert, focused, mentally taxed.
*   **12–1 PM:** Scrolls, eats at desk, maybe a walk. State: Physically still, mentally overloaded.
*   **1–5 PM:** Zoom fatigue, deep work attempt. State: Focus dips by 3 PM.
*   **5–7 PM:** Errands, home obligations. State: Tired, emotionally "off".
*   **7–10 PM:** Wants to unwind but ends up on phone/Netflix. State: Mixed feelings: guilt, stress, distraction.

2.3. Barriers to Wellness Goals
*   **No time (or perception of it):** Even 10-15 minutes feels unclaimable.
*   **Mental fatigue:** Doesn't want to decide between 20 wellness options.
*   **Disjointed tools:** Calendar, wearable, meditation, journaling app – all separate.
*   **Accountability fatigue:** Doesn't want to log things in 3 different places.
*   **Lack of context-aware help:** Most apps don't care when or where she is, or how she's feeling.

2.4. Formé's Differentiator (User Perspective)
"It gives me one small thing I can actually do - right now, in a break that already exists in my day."
*   It doesn't add to the to-do list; it fits into the to-do list.
*   It provides permission to take care of herself.
*   It connects time, intention, and action in a calming, non-judgmental way.
*   It acts like a gentle coach that knows when she's free and helps her make the most of it.

3. Goals

3.1. Functionality Goals
*   **Goal 1:** Give users daily tasks (1-3 prompts) to move towards a specific wellness goal.
*   **Goal 2:** Integrate these tasks seamlessly with their existing schedule.

3.2. Business Goals (MVP Focus)
*   Validate core value proposition: "Context-aware wellness nudges increase user engagement and well-being."
*   Achieve high prompt engagement rates (e.g., >50% acceptance for relevant prompts).
*   Demonstrate strong early retention (e.g., >30% D30 retention) among beta users.
*   Build a foundational user base for future growth and monetization.

4. Key Features (High-Level)

*   **Calendar-Aware Smart Timing:** Detects free slots in a user's calendar and matches them with appropriate wellness prompts.
*   **Goal-Based Personalization:** Tailors prompts based on user's primary wellness focus (e.g., Sleep, Energy, Focus, Stress, Body).
*   **Push Notifications:** Delivers timely, low-friction prompts.
*   **Non-Generic, Specific Prompts:** Actionable and tailored, not vague advice.
*   **Pre-Scheduling & Time Blocking:** Allows users to approve/decline task slots, adding accepted tasks to their calendar.
*   **Progress & Reflection:** Basic tracking of completed tasks and a simple streak/gamification element.
*   **Trust Building:** Clear communication around calendar data usage and privacy.
*   **Intuitive UI/UX:** Calming aesthetic and minimal friction.

5. Detailed Functional Requirements

5.1. Core Feature: Calendar-Aware Smart Timing

**FR1.1: Free Time Detection**
*   **Description:** The system must connect to the user's external calendar(s) and identify blocks of "free" time.
*   **Details:**
    *   Detect gaps based on existing calendar events (busy/free status).
    *   Minimum gap duration to be considered for a prompt: 1 minute.
    *   Support for recurring events and all-day events should accurately reflect busy periods.
*   **Priority:** Critical (Core Functionality)

**FR1.2: Task-Time Matching**
*   **Description:** The system must match the duration of a recommended wellness task with the detected free time slot.
*   **Details:**
    *   Prompts should have associated duration tags (e.g., 2-5 min, 5-10 min, 10-20 min).
    *   Only suggest prompts whose duration fits within the available calendar gap.
    *   If multiple prompts fit, prioritization logic (see Personalization) will apply.
*   **Priority:** Critical

**FR1.3: Daily Prompt Cadence Control**
*   **Description:** The system must limit the number of prompts delivered per day to avoid overwhelming the user.
*   **Details:**
    *   Deliver 1-3 nudges per day, based on user preference set during onboarding.
    *   Prompts should only be delivered during open slots within the user's preferred time windows.
    *   If no suitable slots or sufficient gaps are found, a prompt may not be delivered, or a generic "check-in later" type notification may be sent (TBD).
*   **Priority:** High

**FR1.4: Pre-Scheduling & Calendar Blocking**
*   **Description:** Users should be able to approve a suggested task, which then gets added to their personal calendar.
*   **Details:**
    *   When a prompt is suggested, the user receives an option: "You have a [X]-min opening at [Time]. Want to reserve it for a [Wellness Task Category]?"
    *   Options: "Accept" (adds to calendar), "Decline" (dismisses prompt for now), "Snooze" (re-suggests later if time allows, TBD for MVP).
    *   Accepted tasks are added to the user's calendar as a private event (e.g., "Formé: Wellness Reset") with the specified duration.
*   **Priority:** High

5.2. Goal-Based Personalization

**FR2.1: Wellness Priority Selection (Onboarding)**
*   **Description:** During onboarding, users must select their primary wellness focus.
*   **Details:**
    *   Options: Sleep, Energy, Focus, Stress, Body (mobility/strength).
    *   Allow selection of one primary goal, with optional secondary goals (MVP focus on primary).
    *   This selection will heavily influence the type and tone of prompts received.
*   **Priority:** Critical (Onboarding)

**FR2.2: Prompt Tailoring**
*   **Description:** Prompt content and tone must adapt based on the user's selected wellness priority.
*   **Details:**
    *   "Stress" goal users receive more breathwork, calming mindfulness prompts.
    *   "Energy" goal users receive more movement snacks, posture resets.
    *   "Sleep" goal users receive more wind-down, pre-bed stretch prompts (especially in evening time window).
*   **Priority:** High

5.3. User Onboarding Flow

**FR3.1: Warm Welcome (Step 1)**
*   **Goal:** Establish emotional relevance and trust.
*   **Screen:** "We help you take care of yourself — even on your busiest days."
*   **Subtitle:** "You’ll get 1–3 wellness prompts per day — perfectly timed for your schedule and goals."
*   **CTA:** "Let’s Get Started"
*   **Visuals:** Calming illustration or soft animation (optional for MVP).

**FR3.2: Choose Your Wellness Focus (Step 2)**
*   **Goal:** Personalize prompts around user-defined need.
*   **Prompt:** "What’s your main wellness focus right now?"
*   **Options (visual chips/cards):** 💤 Sleep, ⚡️ Energy, 💭 Focus, 😌 Stress, 💪 Body (mobility/strength).
*   **Selection:** Allow for one primary choice (MVP).

**FR3.3: Daily Rhythm & Preferences (Step 3)**
*   **Goal:** Understand time window and tolerance for prompts.
*   **Sub-step A: Time Preference**
    *   **Prompt:** "When would you like to be nudged?"
    *   **Sliders/Toggles:** Morning (6–11am), Midday (11am–3pm), Afternoon (3–6pm), Evening (6–9pm).
*   **Sub-step B: Frequency Preference**
    *   **Prompt:** "How many wellness nudges per day feels right?"
    *   **Options:** 1 / 2 / 3.

**FR3.4: Initial Energy + Mood Calibration (Step 4)**
*   **Goal:** Collect soft baseline data for early personalization.
*   **Prompt:** "Let’s calibrate your baseline."
*   **Inputs:**
    *   Mood check-in (emoji scale: 😩 😐 😌 😍).
    *   Energy level (1–5 slider or icons).
    *   Optional: "What tends to drain your energy most days?" (select: meetings, social stuff, sleep, phone use) - TBD for MVP.

**FR3.5: Calendar Sync Request (Step 5)**
*   **Goal:** Build trust before asking for calendar permissions.
*   **Prompt:** "To recommend perfectly timed wellness prompts, we need to understand when you’re busy — and when you’re free."
*   **Key Trust Message:** "✨ We don’t look at what your events are — just your available time. ✨"
*   **Button:** "Connect My Calendar"
*   **Disclosure:** "We will never store or share your event details. You can revoke access at any time."

**FR3.6: Final Onboarding Screen (Optional for MVP)**
*   **Prompt:** "You’re all set. Your wellness assistant will send your first prompt when the timing is just right."
*   **Options:** Option to preview example prompt, Option to set notification style (banner, subtle, none).

5.4. Prompt Delivery & Content

**FR4.1: Push Notifications**
*   **Description:** Prompts should be delivered primarily via push notifications to reduce app opening friction.
*   **Details:**
    *   Notifications should be concise and actionable, leveraging rich notification features where possible (e.g., action buttons for "Accept"/"Decline").
    *   Must be delivered at the precise time a calendar gap is identified and a suitable prompt is matched.
*   **Priority:** Critical

**FR4.2: Non-Generic, Specific Prompts**
*   **Description:** Prompt content must be specific, actionable, and not vague.
*   **Details:** Avoid "drink more water today." Instead, "You have 5 mins now, try 4-7-8 breathing to calm your nervous system."
*   **Content Categories (Prioritized for MVP):**
    *   **Breathwork:** 4-7-8 breathing, box breathing, parasympathetic reset (2–10 min)
    *   **Micro-stretching:** Neck rolls, wrist openers, hip loosening, spine twist (3–7 min)
    *   **Mindfulness:** Sensory scans, gratitude prompts, mindful walking (3–15 min)
    *   **Posture resets:** "Unshrug" shoulders, wall angels, standing openers (2–5 min)
    *   **Mood shifts:** "Stand and look out a window," smile activation (1–3 min)
    *   **Movement snacks:** Light squats, shoulder rolls, 3-min desk yoga (3–10 min)
    *   **Mental hygiene:** 1-line journal prompt, intentional breath with mantra (2–5 min)
    *   **Wind-downs:** "Pre-bed stretch," "blue light pause," herbal wind-down (10–20 min - PM only)
*   **Initial Content Library:** Start with a manually curated library of ~50-100 prompts, tagged by duration, category, and tone.

**FR4.3: Feedback Loop & Personalization Engine (Phase 1: Rule-Based)**
*   **Description:** The system must learn from user interactions to refine future prompt suggestions.
*   **Data Collected per Prompt (Stored):**
    *   `user_id` (string)
    *   `task_id` (string)
    *   `timestamp_shown` (datetime)
    *   `completed` (boolean)
    *   `feedback_rating` (1–5 or emoji) - if user provides
    *   `time_of_day` (category: morning, midday, afternoon, evening)
    *   `mood_before` (optional)
    *   `mood_after` (optional)
*   **Passive Feedback (Interaction-Based Metrics):**
    *   Time of interaction: Detect circadian rhythm patterns / peak activity.
    *   Duration available: Helps filter prompt types (5 vs 30 min activities).
    *   Prompt skipped: Signals aversion to content type or format.
    *   Prompt completed: Reinforces category relevance.
    *   Time of completion: Used for session timing trends.
*   **Explicit Feedback (Optional, Post-Prompt):**
    *   "Did you do this?" (Binary Yes/No).
    *   "How did it feel?" (Emoji scale 😌 😐 😫).
    *   "Would you do this again?" (Yes / No).
    *   "Better for morning/evening?" (AM/PM toggle).
*   **Rule-Based Adaptation Logic (MVP):**
    *   If user skips more than X breathwork tasks, suppress that category for that user for Y period.
    *   Favor tasks between 5–10 mins if 90% of completions are in that range for a user.
    *   Adjust future prompt surfacing: Favor successful categories and durations; Avoid repeating dismissed or failed prompts at the same time.
*   **Priority:** High

5.5. Progress / Reflections (MVP)

**FR5.1: Basic Task Logging**
*   **Description:** Users should be able to see a simple log of completed tasks.
*   **Details:** A "Progress" or "Reflections" screen showing a chronological list of tasks completed.
*   **Priority:** Medium

**FR5.2: Simple Streak/Gamification**
*   **Description:** Provide a basic visual indicator of consistent engagement.
*   **Details:** Display a "streak" count for consecutive days a task was completed.
*   **Priority:** Low (for MVP)

5.6. Settings / Goal Adjustments (MVP)

**FR6.1: Goal Re-selection**
*   **Description:** Users should be able to change their primary wellness goal.
*   **Details:** A section within settings to update the "What's your main wellness focus?" selection.
*   **Priority:** Medium

**FR6.2: Notification & Frequency Preferences**
*   **Description:** Users should be able to adjust their preferred time windows and daily prompt frequency.
*   **Details:** Access to the preferences set during onboarding (Section 3.3).
*   **Priority:** Medium

**FR6.3: Calendar Connection Management**
*   **Description:** Users must be able to manage or revoke calendar access.
*   **Details:** Clear options to disconnect their calendar and understand implications.
*   **Priority:** High

6. Technical Requirements & Architecture

6.1. Calendar Integration

**TR1.1: Essential Calendar APIs (MVP)**
*   **Provider:** Google Calendar (Google Calendar API).
*   **Priority:** ⭐⭐⭐⭐ (Most widely used, great docs, strong OAuth2 support).
*   **Future:** Outlook/Office 365 (Microsoft Graph API). Apple Calendar (Requires workarounds via CalDAV + local sync, not direct API).

**TR1.2: Authentication**
*   **Method:** OAuth 2.0 for user authentication with Google.
*   **Permissions (Scopes):** Minimal necessary permissions: `https://www.googleapis.com/auth/calendar.readonly`. This will provide event start/end times and availability data (busy/free blocks), NOT full event details.
*   **Rationale:** To maximize user trust and willingness to grant access.

**TR1.3: Data Handling Principles**
*   **Data Minimization (What You Pull):**
    *   Only pull event metadata (start, end, recurrence).
    *   DO NOT store event titles, descriptions, invitees, or locations.
    *   Focus solely on temporal availability to map free gaps.
*   **Data Storage (Where You Store It):**
    *   Store minimal derived data: Free/busy blocks for the day, time of last sync.
    *   Store in the database (e.g., Firestore or Supabase) only after encryption.
*   **Data Expiry & Deletion:**
    *   Set expiration for calendar-derived data (e.g., auto-delete after 48 hours).
    *   Allow users to revoke calendar access and delete all associated stored data.
    *   Provide an endpoint for data export/deletion (GDPR compliance).

**TR1.4: Compliance & Privacy**
*   **Data Minimization:** Only access and store data explicitly needed for time-matching.
*   **User Control:** Allow opt-in/opt-out at any time; easy data removal.
*   **GDPR / CCPA:** Transparent policy, data export/deletion endpoint, encrypted storage.
*   **OAuth Token Storage:** Use secure encrypted storage + refresh token management.

6.2. Backend & Database

**TR2.1: Backend (MVP)**
*   **Architecture:** Serverless First.
*   **Preferred:** Firebase Functions (JavaScript/TypeScript) for low ops and real-time integrations.
*   **Alternative:** Vercel/Next.js API routes if using React frontend.
*   **Rationale:** Ideal for early-stage development due to fast deployment, scalability, and minimal infrastructure overhead.

**TR2.2: Database (Hybrid)**
*   **User Data & Preferences:** NoSQL database (e.g., Firestore or MongoDB Atlas) for fast reads/writes and schemaless storage for evolving user feedback data.
*   **Task Library + Scheduling Rules:** Relational DB (e.g., Postgres via Supabase) for queryable structures: tasks by goal, time required, tone, category, historical completions, and ratings.
*   **Rationale:** Combines the flexibility of NoSQL for user-specific evolving data with the structured querying power of a relational database for content and rules.

**TR2.3: Feedback Loop & Personalization Engine (Phase 1: Rule-Based Implementation)**
*   **Data Collection:** Implement data capture for all fields outlined in Section 5.4 (Interaction-Based Metrics and Explicit Feedback).
*   **Rule Engine:** Develop a simple rules engine (e.g., Node/TypeScript functions with cron logic) to implement the rule-based adaptation (e.g., suppression of disliked categories, favoring completed durations).

6.3. Push Notifications

**TR3.1: Push Notification Service**
*   **Service:** Firebase Cloud Messaging (FCM) or equivalent.
*   **Requirements:**
    *   Reliable delivery with high success rates (>=95%).
    *   Support for timely, immediate delivery when a calendar gap is identified.
    *   Ability to include action buttons for "Accept"/"Decline" directly in the notification.
    *   Retry logic for failed deliveries.

6.4. Scalability Considerations (MVP Focus)

**TR4.1: User Growth Projections**
*   **Beta (0–3 months):** ~250–500 active users. Focus on testing core engagement, early feedback, and iteration.
*   **1-Year Target:** ~10,000–25,000 monthly active users (MAU). Growth via social sharing, influencer partnerships, app store. Retention goal: >30% D30 retention.
*   **3-Year Target:** ~500,000+ MAU / 1M+ downloads. Achievable with organic growth + deeper integrations + community building.

**TR4.2: Key Performance Expectations (for MVP & Beyond)**
*   **Prompt Delivery Latency:** Near real-time (sub-1s). Users should receive timely suggestions when a calendar gap is identified. Delays degrade trust.
*   **Daily Prompt Personalization:** >=90% relevancy match rate. Prompts should feel tailored based on time available, user’s mood patterns, and wellness goal.
*   **System Responsiveness:** <200ms UI latency. In-app actions should feel instantaneous to keep friction low.
*   **Uptime:** >=99.9%. Critical for push-based guidance; downtime during peak hours hurts trust.
*   **Push Notification Delivery:** >=95% success rate within 5 minutes of intended time. Time-sensitivity is critical.

7. User Experience (UX) & Design

7.1. Overall UX Mood & Tone of Voice
*   **Mood:** "Supportive, Light, Grounded."
*   **Tone of Voice:** "Soft-spoken, wise, and reassuring — like your favorite yoga teacher who also knows your schedule."
*   **Verbal Elements:** Affirming, human, unpressured language. Focus on enablement and permission.

7.2. Visual Aesthetic
*   **Typography:** Soft but legible (e.g., Inter, Work Sans, or Nunito) with generous line height.
*   **Color Usage:** Mostly off-whites and sand tones, with judicious use of lavender and sage green accents. Colors should be calming and not overwhelming.
*   **UI Density:** Minimalist design, emphasizing one primary task at a time. Ample whitespace and "breathing room" around elements.
*   **Components:** Rounded corners (12–16px radius), pill-shaped buttons, soft drop shadows.
*   **Icons:** Outlined or pastel-hued, playful but not childish.
*   **Illustration:** Optional minimal spot art – nature-inspired, flowing shapes, or abstract calm visuals.

7.3. Screens (MVP)
*   **Today's Task:** The primary screen, displaying the current prompt (if any), options to accept/decline, and possibly context (e.g., "You have X minutes free").
*   **Progress / Reflections:** A simple screen for viewing past completed tasks and the basic streak count.
*   **Settings / Goal Adjustments:** A screen for managing user preferences, wellness goals, and calendar connections.

8. Future Enhancements (Beyond MVP)

8.1. Lightweight ML Personalization (Phase 2)
*   Transition from rule-based to a lightweight ML model for prompt ranking.
*   Utilize collected feedback logs to train models (e.g., Logistic Regression or XGBoost, or Collaborative filtering).
*   Potential tools: Vertex AI (Google) for model deployment, HuggingFace Embeddings for prompt similarity, Pinecone/Weaviate for vector embeddings.

8.2. Deeper Integrations
*   **Physiological Inputs:**
    *   **Apple HealthKit (High Priority):** Pull sleep quality, activity trends, HRV for adjusting tone, task intensity, frequency.
    *   **Whoop API (High Priority):** Leverage recovery and strain scores to tailor prompts (e.g., downregulate on low recovery days).
    *   **Oura Ring API (Medium Priority):** Align suggestions with menstrual phases or sleep debt.
    *   Google Fit, Fitbit API (Lower Priority for MVP, higher for parity).
*   **Actuation Tools (Reduce Friction):**
    *   **Spotify / Calm / Headspace APIs (Medium Priority):** Allow one-tap launch of embedded audio (e.g., "Start a 4-minute calming track now?").
*   **Productivity Tools (Optional):** Notion / Apple Reminders / Todoist for syncing completed tasks (lower priority).

8.3. Advanced Gamification & Reflection
*   More sophisticated streak mechanics, badges, or challenges.
*   Guided reflection prompts tied to completed tasks.

8.4. Community Features
*   Sharing completed tasks with friends (optional).
*   Group challenges.

9. Timeline & Resources (MVP)

9.1. Desired MVP Timeline
*   **Discovery & Scoping:** July 2025 (Finalize core features, tech stack, integrations, prioritize wellness goals).
*   **MVP Build:** Aug–Oct 2025 (3 months).
    *   Build core features: calendar integration, time-gap detection, smart prompt delivery.
    *   Simple onboarding with goal selection.
    *   Push notification logic.
    *   Basic logging + user feedback loop.
*   **Private Beta:** Nov 2025 (Onboard 50–100 target users, observe engagement, bug reports, friction).
*   **Public Beta / Soft Launch:** Jan 2026 (Launch to waitlist + targeted ICP groups, begin building early retention data).
*   **Total MVP Window:** 6 months (July 2025 – Jan 2026).

9.2. Team & Resource Constraints
*   **Team Composition:** 4 people, part-time (~10–15 hrs/person/week). Ideally: 1 technical lead (backend/full-stack), 1 frontend/UI, 1 PM/operations, 1 content/wellness expert (could overlap roles).
*   **Working Hours:** ~160–240 team-hours/month.
*   **Tech Assets:**
    *   Leverage serverless (e.g., Firebase, Supabase).
    *   Utilize prebuilt calendar APIs (e.g., Google Calendar API directly).
    *   For content, start with manually curated prompt library (Google Sheets/Notion) tagged by duration, category, tone.
*   **Design:** Lean, Figma-based prototyping. Consider component libraries like Tailwind UI or shadcn/ui for faster implementation.

## Technology Stack
TECHSTACK DOCUMENT: Formé

1.  OVERALL ARCHITECTURE PHILOSOPHY

    Our foundational approach for Formé is "serverless-first" to ensure rapid development, inherent scalability, and minimal operational overhead, especially for an early-stage project with a part-time team. This strategy prioritizes leveraging managed services and off-the-shelf components to focus engineering effort on core product innovation rather than infrastructure management. We aim for a lean, iterative build process, with an emphasis on a tightly scoped MVP that delivers core value quickly.

2.  FRONTEND STACK

    Technology: React (with Next.js for web/API routes) or Glide (for rapid mobile app prototyping)
    Justification:
    *   React/Next.js: Provides a robust, performant, and flexible framework for building cross-platform mobile applications (via React Native if chosen for native app development later) and a potential web interface. Next.js offers server-side rendering capabilities and integrated API routes which can simplify backend interactions for simpler logic.
    *   Glide: For initial rapid prototyping and MVP, Glide could offer an extremely fast way to validate core concepts with minimal coding, aligning with the "lean" approach. If Glide is used, the backend will primarily consist of Firebase Functions/Supabase.
    *   UI Libraries: To accelerate UI development and maintain a consistent, calming aesthetic (lavender, sage green, sand, rounded corners), we will leverage pre-built UI component libraries like Tailwind UI or shadcn/ui.

3.  BACKEND STACK

    Technology: Firebase Functions (JavaScript/TypeScript) or Vercel/Next.js API Routes
    Justification:
    *   Firebase Functions: Offers a fully managed, event-driven serverless compute platform. It integrates seamlessly with Firebase's other services (Firestore, Authentication, Cloud Messaging) and is ideal for low-ops real-time interactions, push notification triggers, and handling calendar webhooks.
    *   Vercel/Next.js API Routes: If a Next.js frontend is chosen, its integrated API routes can serve as a lightweight backend, especially for initial data fetching and simpler logic, reducing the need for a separate backend deployment.
    *   Supabase (Optional): While Firebase is preferred for general serverless backend, Supabase (with Postgres) would be considered if more complex relational queries, advanced authentication features beyond basic Firebase Auth, or real-time database capabilities with a PostgreSQL foundation are deemed necessary later.

4.  DATABASE STRATEGY

    We will employ a hybrid database approach to leverage the strengths of different database types for specific data needs:

    A. User Data & Preferences (NoSQL)
    Technology: Firestore (part of Firebase) or MongoDB Atlas
    Justification:
    *   Fast Reads/Writes: Ideal for frequently accessed user preferences, dynamic mood/energy calibration data, and evolving user feedback loops.
    *   Schemaless Storage: Provides flexibility for storing diverse and evolving user data and interaction patterns without rigid schema constraints, accommodating future personalization features.

    B. Task Library + Scheduling Rules (Relational)
    Technology: Postgres (via Supabase)
    Justification:
    *   Structured Queries: Essential for managing the curated library of wellness prompts, their categories, durations, tones, and the complex rules engine for scheduling. A relational database allows for robust querying, filtering, and joining of task metadata with historical completion rates and user preferences.
    *   Integrity: Ensures data integrity for the core content library and rule sets.

    Combined Justification: The Firestore + Supabase combo provides the agility of NoSQL for user-centric, evolving data, alongside the power of a relational database for structured content and sophisticated personalization rules.

5.  CALENDAR INTEGRATION

    Core API: Google Calendar API (MVP Priority)
    Secondary API (Future): Microsoft Graph API (Outlook/Office 365)
    Justification:
    *   Google Calendar: It is the most widely used calendar service among the target ICP, offers excellent documentation, and robust OAuth 2.0 support, making it the clear choice for the MVP to ensure broad initial compatibility and ease of integration.
    *   Microsoft Graph API: Essential for future expansion, especially to reach corporate users who often rely on Outlook/Office 365. Apple Calendar has no direct API, requiring more complex workarounds via CalDAV and local sync, which is deprioritized for MVP.

    Technical Approach:
    *   Authentication: OAuth 2.0 will be used for secure user authentication with Google and Microsoft.
    *   Permissions (Scopes): We will request the most minimal necessary permissions: "https://www.googleapis.com/auth/calendar.readonly". This limits access to event start/end times and availability data (busy/free blocks), crucial for building user trust by explicitly stating "We don’t look at what your events are — just your available time."
    *   Data Handling Principles:
        *   Data Minimization: Only event metadata (start, end, recurrence) will be pulled. We will NOT store event titles, descriptions, invitees, or locations. The focus is solely on temporal availability to map free gaps.
        *   Storage: Minimal derived data (free/busy blocks for the day, time of last sync) will be stored in our database (Firestore/Supabase) only after encryption.
        *   Expiry & Deletion: Calendar-derived data will have an expiration (e.g., auto-delete after 48 hours). Users will have clear options to revoke calendar access and delete all stored data.

6.  PERSONALIZATION ENGINE

    The personalization engine is core to Formé"s value proposition, evolving from rule-based logic to lightweight machine learning.

    A. Phase 1: Rule-Based Adaptation (MVP)
    *   Approach: Simple heuristics will be implemented using Node.js/TypeScript and cron-like logic within Firebase Functions.
    *   Examples: "If user skips more than 2 breathwork tasks, suppress that category for a period.", "Favor tasks between 5–10 minutes if 90% of completions fall in that range.", "Adjust prompt delivery based on user's selected time windows and frequency preference."

    B. Phase 2: Lightweight ML Personalization (Post-MVP)
    *   Approach: Collected user feedback and interaction logs will be used to train a prompt ranking model.
    *   Inputs: User metadata (goals, preferences), time of day, user mood/energy (from explicit check-ins), and task metadata (category, duration, tone).
    *   Output: A probability of completion or positive rating for a given prompt, allowing the system to recommend the most relevant and engaging tasks.
    *   Models: Initial models will likely include Logistic Regression or XGBoost for structured data. As user volume grows, collaborative filtering or matrix factorization could be explored for Spotify-style recommendations.
    *   ML Tools to Consider: Google's Vertex AI for model deployment, HuggingFace Embeddings for prompt similarity, Pinecone/Weaviate for storing vector embeddings of tasks (for richer semantic search), and potentially LangChain for dynamic prompt generation or rephrasing with personalized tone.

    C. Data Collection for Personalization:
    *   Passive Interaction-Based Metrics: Timestamp of interaction, duration available, prompt skipped/completed, time of completion. This helps detect circadian rhythm patterns, preferred activity durations, and content aversion.
    *   Light Explicit Feedback: Optional, frictionless post-prompt questions like "Did you do this?" (binary), "How did it feel?" (emoji scale), "Would you do this again?" (Yes/No), and "Better for morning/evening?" (AM/PM toggle). These calibrate tone, timing, and individual preferences.
    *   Stored Data Points per Prompt: `user_id`, `task_id`, `timestamp_shown`, `completed` (boolean), `feedback_rating` (1-5 or emoji), `time_of_day`, `mood_before` (optional), `mood_after` (optional).

    Feedback Loop Mechanics: The system will match available time + user goal + past behavior to select a prompt, log the interaction, weight the response based on context (time, mood, energy, category), and then adjust future prompt surfacing to favor successful categories and durations, while avoiding repeated dismissed or failed prompts.

7.  PUSH NOTIFICATION SYSTEM

    Technology: Firebase Cloud Messaging (FCM)
    Justification:
    *   Reliability: FCM is Google's robust cross-platform messaging solution, ensuring timely delivery of time-sensitive prompts ("You’ve got 18 minutes free… Here’s a breathwork prompt…").
    *   Integration: Seamlessly integrates with Firebase Functions for triggering notifications based on calendar gaps and personalization logic.
    *   Control: Allows for granular control over notification styles (banner, subtle, none) based on user preferences.
    *   Goal: Achieve ≥95% push notification success rate within 5 minutes of the intended time, as time-sensitivity is critical for core functionality.

8.  FUTURE INTEGRATIONS (Beyond MVP)

    These integrations will enhance the "decision layer" by adding physiological inputs, behavioral insights, and actuation tools:
    *   Health/Wearable Data: Apple HealthKit, Google Fit, Whoop API, Oura Ring API, Fitbit API. These will provide context on sleep quality, recovery, activity levels, and readiness to tailor prompt intensity and type.
    *   Content/Actuation Tools: Spotify API, Calm API, Headspace API. These allow for one-tap actions (e.g., "Start a 4-minute calming track now?"), significantly reducing friction for users to act on prompts.
    *   Productivity Tools: Notion, Apple Reminders, Todoist. Optional syncing of completed tasks for productivity-inclined users, boosting satisfaction.

9.  DEVELOPMENT & SUPPORTING TOOLS

    *   Design: Figma for prototyping and design system management.
    *   Content Management: Initially, a manually curated prompt library (~50–100 prompts) managed in Google Sheets or Notion, tagged by duration, category, and tone. A dedicated CMS will be considered as the library grows.
    *   Code Version Control: Git (with GitHub/GitLab).
    *   Collaboration: Slack, Notion, or similar tools for team communication and project management.

10. SECURITY & PRIVACY CONSIDERATIONS

    Privacy and trust are paramount for Formé, especially given the sensitive nature of calendar and wellness data. Our approach includes:
    *   Data Minimization: Only accessing and storing the bare minimum data required for time-matching and personalization.
    *   User Control: Clear mechanisms for users to opt-in/opt-out of calendar access and data collection at any time, with easy data removal.
    *   Transparency: Explicit disclosures about data usage (e.g., "We don’t look at what your events are — just your available time.").
    *   Compliance: Adherence to GDPR and CCPA principles, including transparent privacy policies and endpoints for data export/deletion.
    *   Encryption: All user data, including derived calendar data and feedback logs, will be encrypted both in transit and at rest.
    *   Pseudonymization: Use of pseudonymized IDs for analytics where possible to protect user identity.
    *   OAuth Token Storage: Secure encrypted storage and robust refresh token management for all third-party API authentications.

11. PERFORMANCE & SCALABILITY GOALS

    The chosen stack inherently supports high scalability and performance, critical for growth to 500,000+ MAU.
    *   Prompt Delivery Latency: Target sub-1 second for detection of calendar gaps and delivery of timely suggestions via background polling or push-to-client updates.
    *   Daily Prompt Personalization: Achieve ≥90% relevancy match rate, continuously improving through the feedback loop.
    *   System Responsiveness: <200ms UI latency for in-app actions, leveraging client-side caching and efficient API calls.
    *   Uptime: ≥99.9% uptime for core services, especially push notification delivery, to ensure prompts are sent when needed.
    *   Push Notification Delivery: ≥95% success rate within 5 minutes of intended time to maintain the time-sensitive value proposition.

## Project Structure
PROJECTSTRUCTURE

This document outlines the file and folder organization for the "Formé" project. It details the logical separation of concerns across frontend, backend, content, and infrastructure, aligning with our "serverless-first" and "privacy-by-design" principles. The structure aims to facilitate modular development, maintainability, and scalability.

**1. Top-Level Project Structure**

```
/Forme/
├── .github/
├── .vscode/
├── docs/
├── frontend/
├── backend/
├── content/
├── infrastructure/
├── scripts/
├── .gitignore
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── package.json
├── pnpm-workspace.yaml
```

*   **`/Forme/`**: The root directory of the entire project.
*   **`.github/`**: Contains GitHub-specific configurations, including Continuous Integration/Continuous Deployment (CI/CD) workflows (e.g., for automated testing and deployment) and issue/pull request templates.
    *   `workflows/`: Automated scripts for builds, tests, and deployments (`ci.yml`, `deploy.yml`).
*   **`.vscode/`**: Stores configurations specific to Visual Studio Code for consistent development environment settings across the team.
*   **`docs/`**: Comprehensive project documentation. This is where detailed architectural diagrams, API specifications, security policies, and deployment guides reside. This document (`project_structure.md`) is located here.
    *   `architecture/`: High-level system architecture and data flow diagrams.
    *   `API_specifications.md`: Details of the API endpoints for frontend-backend communication and external integrations.
    *   `security_privacy.md`: Documentation on data minimization, user consent, GDPR/CCPA compliance, and OAuth token handling.
    *   `deployment_guide.md`: Instructions for deploying the application components.
    *   `maintenance_guide.md`: Procedures for ongoing maintenance and support.
*   **`frontend/`**: Contains the source code for the user-facing application (e.g., built with React for web or React Native for mobile).
*   **`backend/`**: Contains the source code for the serverless functions and API logic that power the application.
*   **`content/`**: Houses the curated library of wellness prompts, static text, and related metadata.
*   **`infrastructure/`**: Holds configurations for cloud services and Infrastructure as Code (IaC).
*   **`scripts/`**: Miscellaneous utility scripts for development, data management, and operational tasks.
*   **`.gitignore`**: Specifies intentionally untracked files that Git should ignore.
*   **`README.md`**: Provides a high-level overview of the project, setup instructions, and quick start guides.
*   **`LICENSE`**: The project's licensing information.
*   **`CONTRIBUTING.md`**: Guidelines for potential contributors on how to set up the project, submit changes, and follow coding standards.
*   **`package.json`**: Defines project-wide dependencies, scripts, and metadata. In a monorepo setup, it might also define workspaces.
*   **`pnpm-workspace.yaml`**: (Optional) If using pnpm for monorepo management, this file defines the workspaces.

**2. Frontend Application Structure (`/Forme/frontend/`)**

This directory contains the client-side application, responsible for the user interface and interaction.

```
/Forme/frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   └── features/
│   ├── screens/
│   │   ├── Onboarding/
│   │   ├── TodayTaskScreen.tsx
│   │   ├── ProgressReflectionScreen.tsx
│   │   └── SettingsGoalAdjustmentsScreen.tsx
│   ├── hooks/
│   ├── contexts/
│   ├── utils/
│   ├── api/
│   │   ├── auth.ts
│   │   ├── calendar.ts
│   │   └── prompts.ts
│   ├── styles/
│   │   ├── theme.ts
│   │   └── global.css
│   ├── navigation/
│   ├── types/
│   ├── App.tsx
│   └── index.tsx
├── __tests__/
├── .env
├── package.json
└── tsconfig.json
```

*   **`public/`**: (For web apps) Contains static assets that are served directly, like `index.html` or favicon.
*   **`src/`**: The main source code for the frontend application.
    *   **`assets/`**: Stores static media resources used in the UI.
        *   `images/`: Brand logos, decorative images.
        *   `icons/`: SVG or image-based icons.
        *   `fonts/`: Custom fonts.
    *   **`components/`**: Reusable UI components.
        *   `common/`: Generic, application-agnostic components (e.g., `Button.tsx`, `Modal.tsx`, `Card.tsx`).
        *   `features/`: Components specific to certain features or screens (e.g., `TaskCard.tsx`, `GoalSelector.tsx`).
    *   **`screens/`**: Represents major views or pages of the application.
        *   **`Onboarding/`**: Contains the individual screens for the user onboarding flow, following the 5-step process outlined:
            *   `WelcomeScreen.tsx`: "Warm Welcome" - Establishes emotional relevance.
            *   `GoalSelectionScreen.tsx`: "Choose Your Wellness Focus" - Allows users to pick primary/secondary goals (Sleep, Energy, Focus, Stress, Body).
            *   `DailyRhythmScreen.tsx`: "Daily Rhythm & Preferences" - Manages time window and frequency preferences (1/2/3 nudges, Morning/Midday/Afternoon/Evening).
            *   `EnergyMoodCalibrationScreen.tsx`: "Initial Energy + Mood Calibration" - Collects baseline mood and energy data.
            *   `CalendarSyncRequestScreen.tsx`: "Calendar Sync Request" - Manages calendar integration permissions with clear privacy disclosures.
        *   `TodayTaskScreen.tsx`: Displays the daily task(s) and allows user interaction (accept/decline, complete).
        *   `ProgressReflectionScreen.tsx`: Shows progress, streaks, and reflection prompts (gamification elements).
        *   `SettingsGoalAdjustmentsScreen.tsx`: Manages user settings, goal adjustments, and calendar integration preferences.
    *   **`hooks/`**: Custom React Hooks for encapsulating reusable logic and stateful behavior.
    *   **`contexts/`**: React Context API providers for global state management (e.g., `AuthContext`, `UserPreferencesContext`).
    *   **`utils/`**: Collection of pure helper functions, formatters, validators, and common utilities not tied to UI components.
    *   **`api/`**: Client-side modules for interacting with the backend API.
        *   `auth.ts`: Handles user authentication flows.
        *   `calendar.ts`: Manages requests related to calendar data (e.g., triggering sync).
        *   `prompts.ts`: Handles fetching prompts and sending user feedback.
    *   **`styles/`**: Defines global styles, themes, and utility classes.
        *   `theme.ts`: Color palette (lavender, sage green, sand), typography, spacing, and component-level styles.
        *   `global.css` (or `.scss`): Overall application styles, resets.
    *   **`navigation/`**: Manages routing and navigation logic within the application (e.g., React Navigation for React Native, React Router for web).
    *   **`types/`**: TypeScript type and interface definitions specific to the frontend, ensuring data consistency.
    *   **`App.tsx`**: The root component of the application, typically responsible for setting up providers, routing, and initial data loading.
    *   **`index.tsx`**: The entry point of the React application.
*   **`__tests__/`**: Unit and integration tests for frontend components and logic.
*   **`.env`**: Environment variables specific to the frontend build process (e.g., API base URLs).
*   **`package.json`**: Frontend-specific dependencies and scripts.
*   **`tsconfig.json`**: TypeScript configuration for the frontend.

**3. Backend Application Structure (`/Forme/backend/`)**

This directory contains the serverless functions and backend logic, primarily built with Firebase Functions/Vercel and interacting with Firestore/Supabase.

```
/Forme/backend/
├── src/
│   ├── functions/
│   │   ├── auth/
│   │   ├── calendar/
│   │   ├── prompts/
│   │   ├── user/
│   │   └── notifications/
│   ├── services/
│   │   ├── calendarService.ts
│   │   ├── promptService.ts
│   │   ├── notificationService.ts
│   │   └── mlService.ts
│   ├── database/
│   │   ├── firestore.ts
│   │   ├── supabase.ts
│   │   └── repositories/
│   │       ├── userRepository.ts
│   │       ├── promptRepository.ts
│   │       └── userCalendarRepository.ts
│   ├── utils/
│   ├── config/
│   ├── types/
│   └── index.ts
├── __tests__/
├── .env
├── package.json
└── tsconfig.json
```

*   **`src/`**: The main source code for the backend.
    *   **`functions/`**: Contains individual serverless functions, each corresponding to an API endpoint or a scheduled background task.
        *   `auth/`: Functions for user authentication (e.g., `googleAuth.ts` for OAuth 2.0 flow, `refreshTokens.ts`).
        *   `calendar/`: Core calendar integration logic.
            *   `syncCalendar.ts`: Function to pull busy/free blocks from connected calendars, adhering to data minimization principles (only event start/end times, no details).
            *   `scheduleTasks.ts`: Matches detected time gaps with appropriate wellness prompts and schedules notifications.
        *   `prompts/`: Logic for prompt delivery and feedback.
            *   `getDailyPrompts.ts`: Selects 1-3 personalized prompts for the user based on calendar gaps, goals, and preferences.
            *   `feedback.ts`: Endpoint to receive and process user feedback on prompts (completion, rating, mood).
        *   `user/`: Functions for user profile management.
            *   `createUser.ts`: Handles initial user setup.
            *   `updateUserPreferences.ts`: Updates user settings and goals.
        *   `notifications/`: Functions responsible for sending push notifications.
            *   `sendNotification.ts`: Triggers push notifications via FCM or similar services.
    *   **`services/`**: Encapsulates business logic and abstracts interactions with external APIs.
        *   `calendarService.ts`: Handles communication with Google Calendar API, Microsoft Graph API, and manages CalDAV workarounds for Apple Calendar. Ensures minimal data extraction (`calendar.readonly` scope).
        *   `promptService.ts`: Implements the rule-based adaptation engine for prompt selection (Phase 1) and will integrate with the lightweight ML personalization (Phase 2).
        *   `notificationService.ts`: Integrates with push notification platforms (e.g., Firebase Cloud Messaging).
        *   `mlService.ts`: (Future) Interface for interacting with ML models for prompt ranking and personalization (e.g., Vertex AI, HuggingFace embeddings).
    *   **`database/`**: Contains the data access layer.
        *   `firestore.ts`: Client setup and utility functions for interacting with Firestore (used for user data, real-time feedback).
        *   `supabase.ts`: Client setup and utility functions for interacting with Supabase (used for the structured task library, historical completions, and rules).
        *   `repositories/`: Data Access Objects (DAOs) for specific data entities, providing an abstraction layer over raw database queries.
            *   `userRepository.ts`: Manages user profiles and preferences.
            *   `promptRepository.ts`: Manages the prompt library and its metadata.
            *   `userCalendarRepository.ts`: Stores ephemeral, anonymized calendar availability data.
    *   **`utils/`**: Backend-specific utility functions, helper libraries, and common shared logic (e.g., date/time calculations, encryption helpers).
    *   **`config/`**: Configuration files for API keys, environment variables, and external service settings.
    *   **`types/`**: TypeScript type and interface definitions specific to the backend (e.g., data structures for users, prompts, calendar events).
    *   **`index.ts`**: The main entry point for deploying serverless functions (e.g., Firebase Functions `index.ts` or Vercel API routes).
*   **`__tests__/`**: Unit and integration tests for backend functions and services.
*   **`.env`**: Environment variables for backend services (e.g., API keys, database connection strings).
*   **`package.json`**: Backend-specific dependencies and scripts.
*   **`tsconfig.json`**: TypeScript configuration for the backend.

**4. Content Structure (`/Forme/content/`)**

This directory is dedicated to the application's wellness prompt library and static text content.

```
/Forme/content/
├── prompts/
│   ├── breathwork.json
│   ├── micro_stretching.json
│   ├── mindfulness.json
│   ├── posture_resets.json
│   ├── mood_shifts.json
│   ├── movement_snacks.json
│   ├── mental_hygiene.json
│   └── wind_downs.json
├── tags.json
├── static_text/
│   ├── onboarding.json
│   └── app_messages.json
└── illustrations/
```

*   **`prompts/`**: Categorized JSON files containing the actual wellness prompts. Each JSON file lists prompts for a specific category, along with their duration, suggested tone, and other relevant metadata. This forms the "growing library of time-matched actions."
    *   `breathwork.json`: Contains breathwork prompts (e.g., "4-7-8 breathing", "box breathing").
    *   `micro_stretching.json`: Micro-stretching prompts (e.g., "neck rolls", "wrist openers").
    *   `mindfulness.json`: Mindfulness exercises (e.g., "sensory scans", "gratitude prompts").
    *   `posture_resets.json`: Prompts for posture correction.
    *   `mood_shifts.json`: Quick actions to shift mood.
    *   `movement_snacks.json`: Short movement prompts.
    *   `mental_hygiene.json`: Prompts for mental clarity.
    *   `wind_downs.json`: Evening wind-down routines.
*   **`tags.json`**: A master JSON file defining all possible tags and metadata for prompts (e.g., `duration_ranges` (2-10 min), `wellness_goals` (Sleep, Energy, Focus, Stress, Body), `tone` (calming, energizing, reflective)). This helps the personalization engine match prompts.
*   **`static_text/`**: Contains static text content used throughout the application.
    *   `onboarding.json`: All textual content for the onboarding flow screens.
    *   `app_messages.json`: General application messages, empty states, error messages.
*   **`illustrations/`**: Stores design assets like calming illustrations, nature-inspired visuals, or abstract shapes that contribute to the "Supportive, Light, Grounded" UX mood.

**5. Infrastructure Structure (`/Forme/infrastructure/`)**

This directory holds configuration and deployment files for cloud services.

```
/Forme/infrastructure/
├── firebase/
├── supabase/
├── cloud_functions/
└── terraform/
```

*   **`firebase/`**: Firebase project configuration files, security rules for Firestore/Realtime Database, and indexes definitions.
*   **`supabase/`**: Supabase schema definitions, Row Level Security (RLS) policies, and database migration scripts.
*   **`cloud_functions/`**: Specific deployment configurations for individual cloud functions if they require specialized settings beyond standard backend deployments.
*   **`terraform/`**: (Optional) Infrastructure as Code (IaC) scripts using Terraform to manage and provision cloud resources beyond Firebase/Supabase (e.g., specific networking, monitoring tools).

**6. Scripts Structure (`/Forme/scripts/`)**

This directory contains various utility scripts for common development, data management, and operational tasks.

```
/Forme/scripts/
├── seed_prompts.ts
├── clean_old_data.ts
└── deploy.sh
```

*   **`seed_prompts.ts`**: A TypeScript script to programmatically upload the initial curated prompt library from `/Forme/content/prompts/` to the Supabase database.
*   **`clean_old_data.ts`**: A script for data maintenance, e.g., to automatically delete old calendar-derived data after 48 hours, adhering to privacy principles.
*   **`deploy.sh`**: A shell script for automating the deployment process of both frontend and backend components.

This detailed project structure provides a clear roadmap for Formé's development, ensuring that each component serves a distinct purpose and aligns with the overall vision of a personalized, friction-reducing wellness application.

## Database Schema Design
I. Database Strategy Overview
Formé will employ a hybrid database strategy to leverage the strengths of both NoSQL and relational paradigms.
1.  **Firestore (NoSQL):** Ideal for flexible, high-volume user-centric data such as user profiles, preferences, and ephemeral, quickly evolving data like derived calendar availability and summarized health metrics. Its schemaless nature allows for rapid iteration on user features.
2.  **Supabase (PostgreSQL - Relational):** Best suited for structured data like the core wellness prompt library, and for detailed, queryable interaction logs and feedback, which are critical for the personalization engine and analytics. PostgreSQL provides strong consistency, ACID compliance, and robust querying capabilities.

II. Core Data Models

A. Firestore Collections (NoSQL)

1.  "users" Collection
    *   Purpose: Stores core user profiles, onboarding preferences, and top-level integration statuses.
    *   Document ID: "user_id" (string, unique identifier, typically generated by authentication service)
    *   Fields:
        *   "created_at": timestamp (UTC, initial user creation time)
        *   "last_active_at": timestamp (UTC, timestamp of last user interaction)
        *   "email": string (optional, for communication or direct login via email)
        *   "primary_wellness_goal": string (e.g., "Stress", "Energy", "Sleep", "Focus", "Body")
        *   "secondary_wellness_goals": array<string> (optional, e.g., ["Sleep", "Focus"])
        *   "preferred_time_windows": array<string> (e.g., ["Morning", "Midday", "Afternoon", "Evening"], based on user input)
        *   "nudge_frequency_per_day": integer (1, 2, or 3, user-selected cadence)
        *   "baseline_mood": integer (1-5 scale, initial self-reported mood)
        *   "baseline_energy": integer (1-5 scale, initial self-reported energy)
        *   "calendar_integration_status": string ("connected", "disconnected", "pending")
        *   "calendar_provider": string ("GoogleCalendar", "OutlookCalendar", "AppleCalendar", null)
        *   "last_calendar_sync_at": timestamp (UTC, timestamp of last successful calendar data pull)
        *   "notification_style": string ("banner", "subtle", "none")
        *   "total_prompts_completed": integer (gamification metric, count of completed prompts)
        *   "current_streak_days": integer (gamification metric, consecutive days of prompt completion)
        *   "onboarding_complete": boolean (TRUE if onboarding flow is finished)

2.  "user_calendar_availability" Collection (Ephemeral)
    *   Purpose: Stores derived free/busy blocks from user calendars. Designed for strict ephemerality, as per privacy requirements.
    *   Document ID: "user_id" (string, unique identifier, same as "users" document ID)
    *   Fields:
        *   "last_synced_at": timestamp (UTC, time of last successful calendar data pull for this user)
        *   "availability_data": map (key: YYYY-MM-DD string, value: array<map<"start_time": timestamp, "end_time": timestamp>>)
            *   Example: {"2025-08-10": [{"start_time": "...", "end_time": "..."}, ...]}
            *   Stores identified free time blocks for the upcoming 24-48 hours.
        *   "expires_at": timestamp (UTC, timestamp when this record should be automatically deleted or invalidated, e.g., 48 hours after "last_synced_at")
    *   Data Handling: This collection only stores temporal availability (busy/free blocks). It explicitly does NOT store event titles, descriptions, attendees, or locations. Automated processes ensure data expiration and deletion.

3.  "user_health_metrics" Collection (Derived, Ephemeral/Summarized)
    *   Purpose: Stores summarized, derived health data from integrated wearables and health apps (e.g., Apple HealthKit, Whoop). This data represents processed, aggregated insights rather than raw physiological streams.
    *   Document ID: "user_id" (string, unique identifier, same as "users" document ID)
    *   Fields:
        *   "last_updated_at": timestamp (UTC, time of last data update from an integration)
        *   "daily_sleep_duration_hours": float (e.g., 7.5, summarized from health data)
        *   "daily_recovery_score": float (e.g., 0.85 or a 1-100 scale value, from Whoop or similar)
        *   "daily_strain_score": float (e.g., 15.2, from Whoop or similar)
        *   "mindfulness_minutes_today": integer (total minutes logged today)
        *   "activity_level_today": string/integer (e.g., "Low", "Moderate", "High", or 1-5 scale)
        *   "expires_at": timestamp (UTC, optional, for daily data freshness/deletion, e.g., 24 hours after "last_updated_at")
    *   Data Handling: Focuses on non-identifiable, aggregated summaries. Users must explicitly consent to these integrations.

B. Supabase Tables (PostgreSQL)

1.  "prompts" Table
    *   Purpose: Centralized, curated library of all available wellness prompts.
    *   Fields:
        *   "prompt_id": UUID (Primary Key, unique identifier for each prompt)
        *   "title": VARCHAR(255) (Concise title, e.g., "5-Minute Box Breathing")
        *   "content": TEXT (The full text/instructions of the wellness prompt)
        *   "category": VARCHAR(50) (e.g., "Breathwork", "Micro-stretching", "Mindfulness", "Movement snacks", "Mood shifts", "Mental hygiene", "Wind-downs")
        *   "duration_minutes": INTEGER (Expected duration in minutes, e.g., 2, 5, 10, 15)
        *   "tone": VARCHAR(50) (e.g., "Calming", "Energizing", "Focus-oriented", "Gentle", "Reflective", "Assertive")
        *   "applies_to_goals": TEXT[] (Array of wellness goals this prompt is suitable for, e.g., `["Stress", "Energy"]`)
        *   "time_of_day_suitability": TEXT[] (Array of suitable time windows, e.g., `["Morning", "Midday", "Afternoon", "Evening", "PM Only"]`)
        *   "min_energy_level_required": INTEGER (1-5, NULL if not applicable, lower bound for user energy)
        *   "max_energy_level_required": INTEGER (1-5, NULL if not applicable, upper bound for user energy)
        *   "min_mood_level_required": INTEGER (1-5, NULL if not applicable, lower bound for user mood)
        *   "max_mood_level_required": INTEGER (1-5, NULL if not applicable, upper bound for user mood)
        *   "is_active": BOOLEAN (Default: TRUE, flag to enable/disable prompts from being surfaced)
        *   "created_at": TIMESTAMP WITH TIME ZONE (Automatically set on record creation)
        *   "updated_at": TIMESTAMP WITH TIME ZONE (Automatically updated on record modification)
        *   "avg_rating": NUMERIC(2,1) (Cached average user rating for this prompt, 1.0-5.0)
        *   "completion_rate": NUMERIC(3,2) (Cached completion rate for this prompt, 0.00-1.00)
        *   "times_shown": INTEGER (Count of how many times this prompt has been surfaced to users)

2.  "user_prompt_interactions" Table
    *   Purpose: Logs every instance a prompt is shown to or interacted with by a user. This table is the core of the feedback loop and personalization engine's data source.
    *   Fields:
        *   "interaction_id": UUID (Primary Key)
        *   "user_id": TEXT (Foreign Key reference to "users.user_id" in Firestore. If Supabase handles user auth, then UUID and FK to "auth.users.id")
        *   "prompt_id": UUID (Foreign Key to "prompts.prompt_id")
        *   "timestamp_shown": TIMESTAMP WITH TIME ZONE (UTC, when the prompt was delivered or displayed)
        *   "time_of_day_category_when_shown": VARCHAR(50) (e.g., "Morning", "Midday", based on user's local time context at the moment of display)
        *   "scheduled_duration_minutes_when_shown": INTEGER (The duration of the free slot for which this prompt was offered)
        *   "user_current_mood_when_shown": INTEGER (1-5, optional, capturing user's mood at interaction time)
        *   "user_current_energy_when_shown": INTEGER (1-5, optional, capturing user's energy at interaction time)
        *   "action_taken": VARCHAR(50) (e.g., "shown", "skipped", "completed", "approved_pre_schedule", "declined_pre_schedule", "ignored_notification")
        *   "completed_at": TIMESTAMP WITH TIME ZONE (UTC, NULL if not completed, records actual completion time)
        *   "feedback_rating": INTEGER (1-5, NULL if not provided, direct user rating)
        *   "would_do_again": BOOLEAN (NULL if not provided, user preference for recurrence)
        *   "better_for_am_pm_suggestion": VARCHAR(10) ("AM", "PM", "Neutral", NULL if not provided, user suggestion for timing)
        *   "created_at": TIMESTAMP WITH TIME ZONE (Automatically set)
        *   "updated_at": TIMESTAMP WITH TIME ZONE (Automatically updated)

3.  "user_integrations" Table
    *   Purpose: Tracks the status and details of third-party integrations (beyond calendar) connected by each user.
    *   Fields:
        *   "integration_id": UUID (Primary Key)
        *   "user_id": TEXT (Foreign Key reference to "users.user_id")
        *   "integration_type": VARCHAR(50) (e.g., "Whoop", "AppleHealthKit", "Spotify", "Calm", "Headspace")
        *   "status": VARCHAR(50) ("connected", "disconnected", "error", "pending_auth")
        *   "last_successful_sync_at": TIMESTAMP WITH TIME ZONE (UTC, time of last data sync from this integration)
        *   "auth_token_encrypted": TEXT (Encrypted OAuth/API token; handled securely by backend, never directly exposed)
        *   "scopes_granted": TEXT[] (Array of permissions/scopes granted by the user for this integration)
        *   "access_revoked_at": TIMESTAMP WITH TIME ZONE (UTC, NULL if active, timestamp if user revoked access)
        *   "created_at": TIMESTAMP WITH TIME ZONE
        *   "updated_at": TIMESTAMP WITH TIME ZONE

III. Relationships & Data Flow

*   **"users" <-> "user_calendar_availability"**: One-to-one (one Firestore document per user storing their current derived availability). Data is updated by the calendar sync service.
*   **"users" <-> "user_health_metrics"**: One-to-one (one Firestore document per user storing their latest summarized health metrics). Data is updated by health integration services.
*   **"users" <-> "user_integrations"**: One-to-many (a user can have multiple connected integrations).
*   **"users" <-> "user_prompt_interactions"**: One-to-many (a user will generate many interaction logs in the PostgreSQL table).
*   **"prompts" <-> "user_prompt_interactions"**: One-to-many (a single prompt from the library can be part of many user interactions).

*   **Data Flow Summary:**
    *   User onboarding (Steps 1-4) populates the "users" collection.
    *   Calendar sync (Step 5) populates/updates "user_calendar_availability" and "users.calendar_integration_status".
    *   Health/wearable integration services populate/update "user_health_metrics" and "user_integrations".
    *   The core "Formé" engine reads user preferences from "users", available time from "user_calendar_availability", and context from "user_health_metrics" to query the "prompts" table for suitable recommendations.
    *   Every time a prompt is delivered or interacted with, a record is inserted into "user_prompt_interactions".
    *   The "user_prompt_interactions" data drives updates to cached metrics ("avg_rating", "completion_rate", "times_shown") on the "prompts" table and serves as the primary input for the personalization engine.

IV. Data Handling, Privacy & Security

*   **Data Minimization**: Adhering strictly to the principle of "collecting only what's needed". Calendar event details (titles, descriptions, invitees, locations) are explicitly NOT stored. Only derived busy/free blocks are. Raw physiological data from wearables is NOT stored; only pre-processed, summarized, non-identifiable metrics.
*   **Encryption**: All sensitive data (e.g., OAuth/API tokens, any personal identifiers beyond user_id) will be encrypted at rest (database encryption) and in transit (SSL/TLS).
*   **Ephemeral Data Policies**: The "user_calendar_availability" and "user_health_metrics" collections are designed for short-term retention (e.g., max 48 hours), with automated deletion policies to minimize privacy risk.
*   **User Control**: Robust mechanisms will be implemented to ensure users have full control over their data:
    *   Easy revocation of calendar and other integration access (triggers immediate deletion of associated ephemeral data and status updates).
    *   A clear process for account deletion, ensuring all associated user data is permanently removed.
    *   Transparency via accessible privacy policies detailing data collection, usage, and retention.
*   **Pseudonymization/Anonymization**: For analytics, machine learning model training, and aggregated reporting, user IDs will be pseudonymized or anonymized where feasible to protect individual privacy while retaining data utility.
*   **Access Control**: Strict role-based access control (RBAC) will be enforced to ensure that only authorized backend services and personnel can access specific data types.

V. Scalability Considerations

*   **Firestore Scalability**: Firestore is highly scalable for handling a large number of users and rapid read/write operations on user-specific documents. Its automatic sharding and real-time updates are well-suited for the dynamic "users", "user_calendar_availability", and "user_health_metrics" collections.
*   **PostgreSQL (Supabase) Scalability**: PostgreSQL, managed by Supabase, provides robust vertical and horizontal scaling options. Proper indexing on "prompts" (e.g., on "category", "duration_minutes", "applies_to_goals") and "user_prompt_interactions" (e.g., on "user_id", "prompt_id", "timestamp_shown") will be crucial for efficient query performance for the recommendation engine and analytics.
*   **Cached Aggregates**: Pre-calculating and storing aggregated metrics (like "avg_rating", "completion_rate", "times_shown") directly on the "prompts" table reduces the need for computationally expensive queries on the "user_prompt_interactions" table during prompt selection. These aggregates can be updated via database triggers or background jobs.
*   **High Volume Interaction Logs**: The "user_prompt_interactions" table is expected to grow rapidly. It will be optimized for high-volume inserts. If extreme scale is reached, strategies like table partitioning based on time or user ranges could be considered for performance.
*   **Ephemeral Data Management**: The automated expiry and deletion of data in "user_calendar_availability" and "user_health_metrics" collections prevents unbounded growth of temporary data, contributing to overall system health and reducing storage costs.

## User Flow
I. Introduction

The "USERFLOW" section outlines the primary user journeys within Formé, detailing the sequence of screens, user interactions, and system responses. It serves as a blueprint for the user experience, ensuring the app seamlessly integrates into busy schedules to foster consistent wellness habits. Our focus is on creating a supportive, intuitive, and highly personalized experience that builds trust and reduces friction.

II. Core User Journeys

A. User Journey 1: First-Time User Onboarding & Personalization

User Goal: To set up Formé, personalize initial preferences, and connect their calendar to receive tailored wellness prompts.
Trigger: First launch of the Formé app.
Flow Overview: A guided 5-step process designed to establish emotional connection, understand user needs, and securely integrate with their calendar.

Detailed Steps & Screen Descriptions:

1.  Screen: Warm Welcome
    *   Description: A calming, visually appealing screen with soft colors (lavender, sage green, sand tones) and ample white space. Features the app's tagline prominently.
        *   Headline: "We help you take care of yourself — even on your busiest days."
        *   Subtitle: "You'll get 1–3 wellness prompts per day — perfectly timed for your schedule and goals."
        *   Optional: Subtle background illustration (nature-inspired or abstract calm).
    *   User Action: Taps the primary Call to Action (CTA) button.
    *   System Response: Proceeds to the next onboarding step.
    *   Interaction Pattern: Full-width, pill-shaped CTA button with clear, inviting text: "Let's Get Started".
    *   Data Implications: No direct data collection on this screen, but sets the stage for data transparency.

2.  Screen: Choose Your Wellness Focus
    *   Description: A clear prompt asking the user's primary wellness priority. Options are presented as visually distinct, rounded chips/cards, encouraging quick selection.
        *   Prompt: "What's your main wellness focus right now?"
        *   Options: "💤 Sleep", "⚡️ Energy", "💭 Focus", "😌 Stress", "💪 Body (mobility/strength)".
    *   User Action: Taps on one primary wellness focus card. Optional: May tap a secondary focus if enabled.
    *   System Response: Highlights the selected focus(es) and enables progression to the next step.
    *   Interaction Pattern: Tap-to-select chips/cards. Selected card changes visual state (e.g., border, background fill).
    *   Data Implications: Collects `primary_goal` and potentially `secondary_goal`. Used to tailor prompt categories.

3.  Screen: Daily Rhythm & Preferences
    *   Description: Divided into two sub-sections to capture timing and frequency preferences, giving the user control over how Formé integrates into their day.
        *   Sub-step A: Time Preference
            *   Prompt: "When would you like to be nudged?"
            *   Options: Sliders or toggle blocks for "Morning (6–11am)", "Midday (11am–3pm)", "Afternoon (3–6pm)", "Evening (6–9pm)".
        *   Sub-step B: Frequency Preference
            *   Prompt: "How many wellness nudges per day feels right?"
            *   Options: Segmented control or radio buttons for "1", "2", "3".
    *   User Action: Adjusts toggles/sliders for preferred time windows and selects a daily frequency.
    *   System Response: Stores preferences and prepares for the next step.
    *   Interaction Pattern: Toggle switches or segmented controls for time windows. Single-selection radio buttons or segmented control for frequency.
    *   Data Implications: Collects `time_windows` (e.g., [morning, afternoon]) and `nudge_frequency` (e.g., 2). These filter when prompts are delivered and set the scheduling cadence.

4.  Screen: Initial Energy + Mood Calibration
    *   Description: An introspective screen designed to gather a soft baseline of the user's current state, presented in a non-extractive, friendly manner.
        *   Headline: "Let's calibrate your baseline."
        *   Mood check-in: An emoji scale (😩 😐 😌 😍) for current mood.
        *   Energy level: A 1–5 slider or icon selection for current energy.
        *   Optional: A multi-select prompt: "What tends to drain your energy most days?" (e.g., "meetings", "social stuff", "sleep", "phone use").
    *   User Action: Selects emojis/sliders to reflect mood and energy, optionally selecting energy drainers.
    *   System Response: Stores baseline data, which will influence the initial tone and depth of suggestions.
    *   Interaction Pattern: Emoji selection, horizontal slider, multi-select checkboxes/chips.
    *   Data Implications: Collects `mood_baseline` (emoji value), `energy_baseline` (1-5 value), and `energy_drainers` (array of selected strings). Used for early personalization and prompt tone adjustment.

5.  Screen: Calendar Sync Request
    *   Description: A critical trust-building screen that clearly explains *why* calendar access is needed and what data is *not* collected, prioritizing user comfort and control.
        *   Headline: "To recommend perfectly timed wellness prompts, we need to understand when you're busy — and when you're free."
        *   Key Trust Statement: "✨ We don't look at what your events are — just your available time. ✨" (Prominently displayed, possibly bold or distinct color).
        *   Disclosure: "We will never store or share your event details. You can revoke access at any time." (Smaller, greyed text).
    *   User Action: Taps "Connect My Calendar". This initiates the OAuth 2.0 flow with their chosen calendar provider (e.g., Google Calendar for MVP).
    *   System Response: Redirects to the chosen calendar provider's authentication screen. Upon successful authentication, the app receives read-only access to event start/end times and availability data. The app then processes this to detect free blocks.
    *   Interaction Pattern: Prominent "Connect My Calendar" button. Standard OAuth 2.0 redirection flow handled by the device's browser/system.
    *   Data Implications: Initiates `calendar_integration`. Only event metadata (start, end, recurrence) is pulled; titles, descriptions, etc., are explicitly excluded. `free_busy_blocks` for the day and `time_of_last_sync` are stored (anonymized/ephemeral).

6.  Screen (Optional): All Set / First Prompt Preview
    *   Description: A confirmation screen acknowledging successful setup, with an option to preview what a prompt looks like.
        *   Message: "You're all set. Your wellness assistant will send your first prompt when the timing is just right."
        *   Optional elements: "Preview example prompt" button, "Set notification style" option (banner, subtle, none).
    *   User Action: May tap to preview a prompt or adjust notification settings.
    *   System Response: Displays an example prompt, or navigates to system notification settings. The system now monitors the calendar for free slots and prepares to send the first personalized prompt.
    *   Interaction Pattern: Button for preview, toggle for notification style.
    *   Data Implications: Notification style preference collected.

B. User Journey 2: Daily Wellness Engagement

User Goal: To receive and act on perfectly timed wellness prompts that fit their schedule and goals, thereby integrating small moments of self-care into their busy day.
Trigger: A detected free slot in the user's calendar, matching their preferred time windows and frequency settings.
Flow Overview: From a subtle notification to viewing and acting on a prompt, followed by optional feedback.

Detailed Steps & Screen Descriptions:

1.  System Action: Calendar Gap Detection & Prompt Selection
    *   Description: Formé's core "Calendar-Aware Smart Timing" engine continuously monitors the user's synced calendar. When a free block is detected that aligns with user `time_windows` and is sufficient for a chosen `prompt_duration`, the personalization engine (using `primary_goal`, `mood_baseline`, `energy_baseline`, and `feedback_loop_data`) selects the most relevant prompt from the curated library.
        *   Example Logic: If user has 18 mins free between 4:30 PM and 5:00 PM (an "afternoon" window), and their goal is "Stress," the system might select a 10-min "Breathwork" prompt focused on cortisol reduction.
    *   Interaction Pattern: Entirely backend-driven. No direct user interaction yet.
    *   Data Implications: Real-time processing of calendar data. `prompt_id`, `timestamp_shown`, `time_of_day`, `duration_available` are prepared for logging upon delivery.

2.  System Action: Push Notification Delivery
    *   Description: A non-intrusive yet attention-grabbing push notification is sent to the user's device. The tone is supportive and unpressured.
        *   Example Notification Title: "Your Formé Moment Awaits"
        *   Example Notification Body: "You've got 18 minutes free between meetings. Here's a breathwork prompt to reduce cortisol — right now."
        *   The notification explicitly states the available time and suggests a specific, non-generic action.
    *   User Action: Taps the push notification.
    *   System Response: Opens the Formé app, directly navigating to the "Today's Task" screen with the suggested prompt.
    *   Interaction Pattern: Standard OS push notification.
    *   Data Implications: Logs `timestamp_shown` for the prompt.

3.  Screen: Today's Task
    *   Description: This is the core daily interaction screen. It's clean, minimal, and focuses on the single, actionable prompt. Soft colors and rounded elements create a calming aesthetic.
        *   Headline: "Your Moment to..." (e.g., "Reset", "Recharge", "Refocus")
        *   Prompt Title: (e.g., "Cortisol-Reducing Breathwork")
        *   Prompt Description: Concise instructions or a brief explanation of the benefit (e.g., "A 4-7-8 breathing exercise to calm your nervous system in 10 minutes.").
        *   Estimated Duration: Clearly displayed (e.g., "10 min").
        *   Time Context: (e.g., "You have a 25-min opening at 4:30 PM.").
    *   User Action:
        *   Option A (Accept): Taps "Accept Task" or "Do Now".
        *   Option B (Decline/Reschedule): Taps "Later" or "Not Now", or "Suggest Another".
        *   Option C (Complete): After performing the task (either in-app guided or real-world action), taps "Done" or "Mark Complete".
    *   System Response (Option A - Accept):
        *   If task is in-app (e.g., guided meditation), launches the task interface.
        *   If task is external (e.g., "Go for a mindful walk"), confirmation message ("Great! Enjoy your walk.") and option to add to calendar.
        *   Pre-Scheduling & Time Blocking: If accepted, the app offers to add a block to the user's calendar: "Want to reserve it for a wellness reset?" If accepted, a private event titled "Formé Wellness Reset" (or similar) is added to their calendar for the specified duration.
    *   System Response (Option B - Decline/Reschedule):
        *   "Later": Hides the current prompt, may resurface later if another suitable slot appears.
        *   "Not Now": Logs dismissal, considers this prompt less relevant for current context.
        *   "Suggest Another": Fetches a new, relevant prompt (within the same constraints).
    *   System Response (Option C - Complete):
        *   Transitions to a brief feedback screen.
    *   Interaction Pattern: Two prominent, rounded buttons ("Accept Task" / "Do Now" and "Later" / "Not Now"). Optional "Suggest Another" icon/button. A "Done" or "Mark Complete" button appears after task initiation.
    *   Data Implications: `prompt_skipped`, `prompt_accepted`, `task_added_to_calendar` (boolean) logged.

4.  Screen: Post-Task Feedback (Optional)
    *   Description: A quick, low-friction screen designed to gather immediate feedback after a task is marked complete.
        *   Prompt: "How did that feel?" or "Would you do this again?"
        *   Options: Emoji scale (😌 😐 😫), or simple "Yes / No" buttons.
        *   Optional: "Better for morning/evening?" toggle.
    *   User Action: Taps an emoji or button to provide feedback. Can dismiss the screen without action.
    *   System Response: Stores feedback, which is crucial for the personalization engine. Returns to the main "Today's Task" screen (now empty, awaiting next prompt) or a general home screen.
    *   Interaction Pattern: Emoji selection, binary buttons. Designed for one-tap input.
    *   Data Implications: Collects `feedback_rating` (1-5 or emoji), `mood_after` (optional), `completed` (boolean), and `would_do_again` (boolean). These feed into the `feedback_loop` to refine future prompt selection, timing, and tone.

C. User Journey 3: Reviewing Progress & Reflection

User Goal: To visualize their wellness journey, track consistency, and engage in deeper self-reflection.
Trigger: User taps on the "Progress / Reflections" tab in the navigation.
Flow Overview: Displays visual progress, streaks, and provides opportunities for review and journaling.

Detailed Steps & Screen Descriptions:

1.  Screen: Progress / Reflections Dashboard
    *   Description: A dashboard-style screen that visually represents consistency and achievement. Utilizes Formé's calming color palette.
        *   Top Section: Highlights a prominent streak (e.g., "5-day streak!").
        *   Mid-Section: Visual representation of daily task completion (e.g., a simple calendar view with completed days highlighted, or a bar chart showing completion rate).
        *   Reflection Prompts: A section dedicated to journaling or reflection, possibly with new prompts daily or weekly.
        *   Historical Tasks: A scrollable list of past completed tasks.
    *   User Action:
        *   Views progress.
        *   Taps on specific days/tasks for more detail.
        *   Taps on a "Reflect" or "Journal" button to open a text input.
    *   System Response: Displays relevant data. Opens a new screen or modal for journaling.
    *   Interaction Pattern: Scrollable content. Interactive charts/calendars. Buttons to initiate reflection.
    *   Data Implications: Displays `completed` tasks and `streak_data`. Journal entries (if implemented) are stored privately.

2.  Screen: Reflection / Journal Entry (Optional)
    *   Description: A simple, distraction-free screen with a text input area.
        *   Prompt (Optional): "What's one thing you're grateful for today?" or "How did your energy shift?"
        *   Text Area: Multi-line input for free-form journaling.
    *   User Action: Types in their reflection. Taps "Save" or "Done".
    *   System Response: Stores the journal entry. Returns to the Progress dashboard.
    *   Interaction Pattern: Text input field, "Save" button.
    *   Data Implications: Stores journal entry text linked to the user ID and timestamp.

D. User Journey 4: Adjusting Goals & Settings

User Goal: To modify their wellness goals, preferences, or manage app permissions.
Trigger: User taps on the "Settings / Goal Adjustments" tab in the navigation.
Flow Overview: Provides access to various app configuration options, including personalization settings and privacy controls.

Detailed Steps & Screen Descriptions:

1.  Screen: Settings / Goal Adjustments
    *   Description: A clear, organized list of settings categories.
        *   Sections: "My Wellness Goals", "Daily Preferences", "Calendar Integration", "Notifications", "Privacy & Data", "About".
    *   User Action: Taps on a specific setting category.
    *   System Response: Navigates to the corresponding sub-screen.
    *   Interaction Pattern: List of tappable rows, clearly labeled.
    *   Data Implications: N/A (navigation only).

2.  Sub-Screen: My Wellness Goals
    *   Description: Allows the user to change their primary and secondary wellness focus, mirroring the onboarding screen.
        *   Headline: "Edit Your Wellness Focus"
        *   Options: Chips/cards for "💤 Sleep", "⚡️ Energy", "💭 Focus", "😌 Stress", "💪 Body".
    *   User Action: Selects new primary/secondary goals. Taps "Save".
    *   System Response: Updates `primary_goal` and `secondary_goal`. The personalization engine immediately begins adapting future prompt selection.
    *   Interaction Pattern: Tap-to-select chips/cards, "Save" button.
    *   Data Implications: Updates `primary_goal`, potentially triggering recalculations for prompt weighting.

3.  Sub-Screen: Daily Preferences
    *   Description: Allows adjustment of time windows and daily frequency, similar to onboarding.
        *   Headline: "Adjust Daily Nudge Preferences"
        *   Time Preference: Toggles/sliders for "Morning", "Midday", "Afternoon", "Evening".
        *   Frequency: Options "1", "2", "3".
    *   User Action: Modifies preferences. Taps "Save".
    *   System Response: Updates `time_windows` and `nudge_frequency`. Future prompt scheduling adapts.
    *   Interaction Pattern: Toggle switches, segmented controls, "Save" button.
    *   Data Implications: Updates `time_windows` and `nudge_frequency`.

4.  Sub-Screen: Calendar Integration
    *   Description: Manages the connection to the user's calendar, emphasizing transparency and control.
        *   Headline: "Manage Calendar Connection"
        *   Status: "Connected to Google Calendar" (or "Not Connected").
        *   Action: "Reconnect Calendar" or "Disconnect Calendar".
        *   Disclosure: "We only access busy/free times, never event details. You can revoke access at any time."
    *   User Action: Taps "Disconnect Calendar" or "Reconnect Calendar".
    *   System Response:
        *   "Disconnect": Revokes OAuth token, stops calendar polling. App functionality (smart timing) is severely limited.
        *   "Reconnect": Initiates OAuth 2.0 flow again.
    *   Interaction Pattern: Button for disconnect/reconnect.
    *   Data Implications: Manages `calendar_integration` status and `OAuth_token`. Deletes ephemeral `free_busy_blocks` upon disconnect.

5.  Sub-Screen: Privacy & Data
    *   Description: Provides options related to user data, fulfilling privacy compliance.
        *   Headline: "Your Data & Privacy"
        *   Options: "View My Data", "Delete All My Data", "Privacy Policy" link.
    *   User Action: Taps on an option.
    *   System Response:
        *   "View My Data": Generates/displays a summary of stored user preferences and interaction data.
        *   "Delete All My Data": Prompts for confirmation, then initiates a full data deletion from the system.
        *   "Privacy Policy": Opens a web view or external link to the full privacy policy.
    *   Interaction Pattern: Tappable list items. Confirmation dialog for deletion.
    *   Data Implications: Handles `data_deletion` and `data_export` requests.

III. Interaction Patterns & Design Principles

A. Overall UX Mood: "Supportive, Light, Grounded"
*   Visual Aesthetic:
    *   Typography: Soft but legible fonts (e.g., Inter, Work Sans, Nunito) with generous line height for readability.
    *   Color Usage: Predominantly off-whites and sand tones, with strategic accents of lavender and sage green. Colors are used to highlight key information or actions without overwhelming.
    *   UI Density: Minimalist design with ample white space, ensuring a single primary focus per screen to reduce cognitive load. Prompts are presented one at a time.
    *   Components: Consistent use of rounded corners (12–16px radius), pill-shaped buttons for CTAs, and subtle soft drop shadows to give a sense of depth without harshness.
    *   Icons: Outlined or pastel-hued icons that are playful yet clear and intuitive.
    *   Illustration: Optional, minimal spot art – nature-inspired, flowing shapes, or abstract calming visuals that reinforce the wellness theme.

*   Tone of Voice: "Affirming, Human, Unpressured"
    *   App copy uses empathetic language, encouraging self-care without judgment or pressure.
    *   Phrasing is gentle, conversational, and direct (e.g., "You've got 18 minutes free...", "Let's calibrate your baseline.").
    *   Emphasis on permission and agency ("feels right," "want to reserve it?").

B. Key Interaction Patterns:
*   Push Notifications: Primary driver of daily engagement. Designed to be timely, specific, and actionable, reducing friction by bringing the prompt to the user, rather than requiring them to open the app. Critical for the "decision layer" functionality.
*   Single-Focus Screens: Most daily interaction screens present one primary piece of information or one main action at a time, preventing overwhelm for busy users.
*   Clear Call to Actions (CTAs): Primary actions are highlighted with prominent, easy-to-tap buttons (e.g., "Let's Get Started", "Accept Task", "Connect My Calendar").
*   Frictionless Feedback: Post-task feedback is kept extremely brief (e.g., emoji scales, binary choices) to encourage participation without adding to decision fatigue. This is crucial for the learning `feedback_loop`.
*   Transparency & Control: For sensitive actions like calendar integration, the app clearly communicates *why* data is needed, *what* is accessed, and that the user retains `user_control` (e.g., "We don't look at what your events are — just your available time.").
*   Dynamic Content Display: Prompts are personalized based on multiple inputs (`time_available`, `user_goal`, `mood_baseline`, `past_behavior`), ensuring relevancy and adapting over time.
*   Calendar Integration Visuals: While not directly shown to the user in complex ways, the seamless integration of Formé's tasks into the user's native calendar (if accepted via "Time Blocking") provides a tangible benefit and reinforces the app's utility.
*   Progress Visualization: Simple yet motivating visual elements (streaks, completion charts) on the "Progress / Reflections" screen provide positive reinforcement and gamification without being overly complex or data-heavy.

## Styling Guidelines
STYLING: Formé Design Guidelines

1. Design Philosophy

Our design philosophy for Formé is centered on providing a "Supportive, Light, and Grounded" experience. We aim for a visual and interactive aesthetic that feels soft-spoken, wise, and reassuring – like your favorite yoga teacher who also knows your schedule. This approach directly addresses our ICP of busy, often decision-fatigued women who need permission to pause and care for themselves without added pressure or complexity.

Key principles guiding our design:
*   **Permission, Not Pressure**: The app should feel like a gentle guide, not another taskmaster.
*   **Effortless Integration**: Design choices should minimize friction and seamlessly integrate into a user's day.
*   **Calm & Clarity**: Visuals should promote a sense of calm, providing clear, actionable information without overwhelm.
*   **Trust & Transparency**: The interface must build trust, especially when requesting sensitive information like calendar access.

2. Color Palette

Our primary color palette is inspired by natural, calming tones that evoke a sense of peace and groundedness. These colors will be used thoughtfully, primarily as accents against softer backgrounds to maintain a light and airy feel.

*   **Sand**: #F5F0E1 (Primary Background/Neutral)
    *   A warm, muted off-white that serves as our foundational background color. It's gentle on the eyes and provides a clean canvas for content.
*   **Lavender**: #DCD0FF (Accent/Highlight)
    *   A soft, calming purple used for primary calls-to-action, key notifications, and elements that require gentle emphasis. It signifies tranquility and well-being.
*   **Sage Green**: #B0C9AE (Accent/Secondary)
    *   A muted, earthy green used for secondary actions, progress indicators, or elements related to growth and vitality. It brings a natural, grounded feel.

Usage Guidelines:
*   Mostly off-whites and sand tones will dominate the UI.
*   Lavender and sage will be used sparingly as accents, ensuring the interface remains calm and uncluttered.
*   Avoid highly saturated or jarring colors.

3. Typography

Our typography choices prioritize legibility, warmth, and an approachable feel. We aim for a clean, modern aesthetic that supports our "soft-spoken" tone.

*   **Primary Fonts**: Inter, Work Sans, or Nunito
    *   These sans-serif typefaces are chosen for their excellent legibility across various screen sizes and their friendly, welcoming character.
*   **Line Height**: Generous line height (e.g., 1.5x) will be applied to all body text to improve readability and provide sufficient "breathing room" between lines, contributing to the overall calm UI density.
*   **Font Weights**: Use a limited range of weights (e.g., Regular, Medium, Semi-Bold) to maintain visual hierarchy without introducing visual noise.
*   **Scaling**: Implement a clear type scale for headings (H1, H2, H3), body text, and captions to ensure consistency and readability.

4. UI/UX Principles (Visual Aesthetic & Interaction)

**Visual Aesthetic**:
*   **UI Density**: Minimalist and spacious. The core principle is to present "1 primary task at a time," ensuring that users are never overwhelmed by choices or information overload. Elements will have ample white space around them.
*   **Components**:
    *   **Rounded Corners**: All UI elements (buttons, cards, input fields) will feature generous rounded corners (e.g., 12–16px radius) to convey softness and approachability.
    *   **Pill-Shaped Buttons**: Primary action buttons will often adopt a pill shape for a distinct yet soft appearance.
    *   **Soft Drop Shadows**: Subtle, diffused drop shadows (very low opacity, high blur) can be used selectively on elevated components (e.g., cards, modal overlays) to add depth without feeling heavy.
*   **Icons**:
    *   **Style**: Outlined or pastel-hued icons are preferred. They should be clean, clear, and illustrative, conveying meaning quickly without being overly complex or childish.
    *   **Consistency**: A consistent icon style set will be used throughout the application.
*   **Illustration**:
    *   **Usage**: Optional, minimal spot art can be incorporated to enhance the mood.
    *   **Style**: Nature-inspired, flowing shapes, or abstract calm visuals are preferred. Illustrations should be harmonious with the color palette and overall tone, adding to the gentle and supportive atmosphere.

**Interaction Design & User Experience**:
*   **Reduced Friction**: Every interaction is designed to be as seamless and effortless as possible.
    *   **Push Notifications**: Crucial for prompt delivery, reducing the need for users to actively open the app. Notifications will be clear, actionable, and timely.
    *   **One-Tap Actions**: Where possible, allow users to act directly from notifications or with a single tap within the app (e.g., "Accept Task").
    *   **Pre-Scheduling & Time Blocking**: The system suggests and allows for easy acceptance/declination of tasks within detected free slots. Accepted tasks can be added to the user's calendar with minimal effort.
*   **Building Trust**:
    *   **Transparency**: Especially important for calendar sync. Explicitly state "We don't look at what your events are – just your available time," and provide clear disclosures about data handling.
    *   **Control**: Users should feel empowered to revoke calendar access, adjust preferences, or delete data at any time.
    *   **Personalization**: The onboarding flow is designed to feel introspective and helpful, gathering user preferences to immediately align the app with their intentions.
*   **System Responsiveness**:
    *   **Low Latency**: UI interactions (e.g., tapping "Accept Task," navigating between screens) must feel instantaneous (<200ms latency) to maintain a feeling of efficiency and smoothness.
    *   **Prompt Delivery**: Calendar-aware smart timing requires near real-time (sub-1s) delivery of relevant suggestions when a calendar gap is identified.
*   **Feedback & Learning**:
    *   **Light Explicit Feedback**: Post-prompt feedback (e.g., "Did you do this?", "How did it feel?") is designed to be optional, fast, and frictionless to encourage participation and refine personalization.
    *   **Passive Learning**: The system silently learns from user interactions (skips, completions, interaction times) to continuously improve prompt relevance, tone, and timing without explicit input every time.

5. Tone of Voice

Our tone of voice is "Affirming, Human, and Unpressured." This is reflected in all user-facing copy, from onboarding to daily prompts and notifications.

*   **Supportive & Encouraging**: The language should empower users, giving them "permission to take care of herself." Example: "We help you take care of yourself — even on your busiest days."
*   **Human & Relatable**: Avoid robotic or overly formal language. Use empathetic and understanding phrasing that resonates with a busy professional. Example: "You've got 18 minutes free between meetings. Here's a breathwork prompt to reduce cortisol - right now."
*   **Non-Judgmental**: The app is a gentle coach, not a strict taskmaster. There's no guilt if a prompt is skipped.
*   **Transparent & Clear**: Especially when discussing data or permissions. Example: "To recommend perfectly timed wellness prompts, we need to understand when you're busy — and when you're free. ✨ We don't look at what your events are — just your available time. ✨"
*   **Actionable & Specific**: Prompts are non-generic and provide a clear, small step. Example: "Here's a breathwork prompt to reduce cortisol - right now," instead of "Drink more water today."

By adhering to these styling guidelines, Formé will provide a cohesive, calming, and truly supportive experience that integrates seamlessly into the lives of busy women.
