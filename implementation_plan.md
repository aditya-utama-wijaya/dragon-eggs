# Implementation Plan - Dragon Eggs (Chinese Learning App)

## Goal Description
Create a web-based, gamified Chinese learning application inspired by Reading Eggs. The app will focus on teaching Mandarin Chinese (Pinyin, Characters, Tones) to beginners through interactive activities, vibrant visuals, and a progression map.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (with CSS Modules or global variables for theming)
- **Icons**: Lucide React
- **Data**: Local JSON files (Modules/Lessons)

## Core Features

### 1. Dashboard (The Map)
- A scrolling map view showing numbered lessons (Eggs/Stones).
- Locked/Unlocked states.
- User stats top bar (Stars, Eggs count).
- **File**: `app/page.tsx`, `components/Map/LevelNode.tsx`

### 2. Lesson Engine
- A unified wrapper that takes a JSON lesson definition and renders steps.
- **File**: `app/lesson/[id]/page.tsx`
- **Activity Types**:
    - **Flashcard**: View visual + Audio.
    - **Multiple Choice**: Select correct character/pinyin.
    - **Tone Tracer**: Visual representation of the 4 tones.
    - **Sentence Builder**: Drag and drop words to form sentences.

### 3. Gamification
- **Rewards**: Earn 1-3 stars per lesson based on accuracy.
- **Currency**: "Dragon Eggs" collected during lessons.
- **Celebration**: Confetti and animations upon completion.
- **State**: `context/UserProgressContext.tsx`

## Project Structure
```
/app
  /lesson
    /[id]
      page.tsx
  layout.tsx
  page.tsx (Map)
/components
  /Lesson
    ActivityShell.tsx
    Flashcard.tsx
    Quiz.tsx
  /UI
    Button.tsx
    ProgressBar.tsx
/data
  lessons.json
/public
  /assets
```

## Next Steps for Claude Code
1.  Initialize the Next.js app in this directory.
2.  Set up the global CSS with the "Dragon Eggs" color palette.
3.  Create the `lessons.json` mock data.
4.  Scaffold the `LessonContainer` component.
