# Dragon Eggs - Chinese Learning App

A gamified, interactive web-based Chinese learning application inspired by Reading Eggs. This app helps beginners learn Mandarin Chinese through fun activities, vibrant visuals, and a progressive lesson map.

## Features

### Core Functionality
- **Interactive Map Dashboard**: Progress through lessons displayed as colorful nodes on a scrolling map
- **User Progress Tracking**: Earn stars (1-3 per lesson) and collect Dragon Eggs as currency
- **Multiple Activity Types**:
  - **Flashcards**: Learn characters, pinyin, and meanings with audio support
  - **Multiple Choice Quizzes**: Test comprehension and vocabulary
  - **Tone Tracer**: Visualize and learn the 4 Mandarin tones
  - **Sentence Builder**: Practice sentence structure with drag-and-drop words
- **Gamification**: Unlock lessons by earning stars, celebrate completions with animations
- **Local Storage**: Progress is automatically saved to localStorage

### Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS with CSS Modules
- **Icons**: Lucide React
- **Data**: Local JSON files

## Project Structure

```
chinese-learning-app/
├── app/
│   ├── lesson/
│   │   └── [id]/
│   │       ├── page.tsx          # Dynamic lesson page
│   │       └── page.module.css
│   ├── layout.tsx                # Root layout with context provider
│   ├── page.tsx                  # Main dashboard/map
│   ├── page.module.css
│   └── globals.css               # Global styles & Dragon Eggs theme
├── components/
│   ├── Lesson/
│   │   ├── ActivityShell.tsx     # Lesson wrapper with progress bar
│   │   ├── Flashcard.tsx         # Flashcard activity component
│   │   ├── Quiz.tsx              # Multiple choice quiz component
│   │   ├── ToneTracer.tsx        # Tone visualization component
│   │   └── SentenceBuilder.tsx   # Sentence building activity
│   ├── Map/
│   │   └── LevelNode.tsx         # Individual lesson node on map
│   └── UI/
│       ├── Button.tsx            # Reusable button component
│       └── ProgressBar.tsx       # Progress indicator
├── context/
│   └── UserProgressContext.tsx   # Global state management
├── data/
│   └── lessons.json              # Lesson content and activities
└── public/
    └── assets/                   # Audio files and images

```

## Getting Started

### Web Version (Quick Start)

#### Prerequisites
- Node.js 18+ and npm

#### Installation

1. Navigate to the project directory:
```bash
cd chinese-learning-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### 📱 Mobile Apps (Android & iOS)

The app can be installed on mobile devices in two ways:

#### Option 1: Progressive Web App (PWA) - Easiest!
No build tools or app stores needed:
- **Android**: Visit app URL in Chrome → Menu → "Add to Home Screen"
- **iOS**: Visit app URL in Safari → Share → "Add to Home Screen"

#### Option 2: Native Apps
Build and deploy to app stores:
- **Quick Start**: See [QUICK_START_MOBILE.md](./QUICK_START_MOBILE.md)
- **Full Guide**: See [MOBILE_BUILD.md](./MOBILE_BUILD.md)

**Requirements:**
- For Android: Android Studio
- For iOS: Xcode (Mac only)

## How It Works

### Lesson Progression
1. Start with Lesson 1 (requires 0 stars)
2. Complete activities to earn stars (1-3 based on accuracy)
3. Unlock new lessons by accumulating stars
4. Each correct answer earns 10 Dragon Eggs
5. Completing lessons earns bonus Dragon Eggs based on stars

### Activity Flow
- Each lesson contains multiple activities
- Progress through activities sequentially
- Flashcards and Tone Tracers can be advanced immediately
- Quizzes and Sentence Builders require answering before proceeding
- View lesson summary and stars earned upon completion

### Data Structure
Lessons are defined in `data/lessons.json`:
```json
{
  "id": "1",
  "title": "Greetings",
  "description": "Learn basic Chinese greetings",
  "requiredStars": 0,
  "activities": [
    {
      "type": "flashcard",
      "content": {
        "character": "你好",
        "pinyin": "nǐ hǎo",
        "meaning": "Hello",
        "tone": [3, 3]
      }
    }
  ]
}
```

## Customization

### Adding New Lessons
Edit `data/lessons.json` and add new lesson objects with appropriate activities.

### Modifying Theme Colors
Update CSS variables in `app/globals.css`:
```css
:root {
  --dragon-red: #e63946;
  --dragon-orange: #f77f00;
  --dragon-gold: #fcbf49;
  /* etc. */
}
```

### Creating New Activity Types
1. Create a new component in `components/Lesson/`
2. Add the activity type to the lesson engine in `app/lesson/[id]/page.tsx`
3. Define the activity structure in your lesson JSON

## Future Enhancements
- Audio recording and playback for pronunciation practice
- Achievements and badges system
- Character stroke order animations
- Spaced repetition system
- User accounts and cloud sync
- More activity types (matching games, listening comprehension)
- Offline mode support
- Push notifications for daily practice reminders

## License
MIT

## Acknowledgments
Inspired by Reading Eggs and designed to make learning Chinese fun and engaging!
