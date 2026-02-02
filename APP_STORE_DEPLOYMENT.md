# App Store Deployment Guide - Dragon Eggs

Complete step-by-step guide to publish Dragon Eggs on Google Play Store and Apple App Store.

## 📋 Prerequisites Checklist

### Both Platforms
- [ ] App fully tested and working
- [ ] App icons in all required sizes
- [ ] App screenshots for various device sizes
- [ ] Privacy policy URL (required for both stores)
- [ ] App description and keywords
- [ ] Feature graphic/promotional images

### Google Play Store
- [ ] Google Play Developer account ($25 one-time fee)
- [ ] Android Studio installed
- [ ] App signed with release key

### Apple App Store
- [ ] Apple Developer Program membership ($99/year)
- [ ] Mac with Xcode installed
- [ ] App signed with distribution certificate

---

## 🤖 PART 1: Google Play Store Deployment

### Step 1: Create Google Play Developer Account

1. Go to [Google Play Console](https://play.google.com/console/signup)
2. Sign in with your Google account
3. Pay the $25 one-time registration fee
4. Complete the account details
5. Accept the Developer Agreement

**Account setup takes 24-48 hours for review**

### Step 2: Prepare App for Release

#### 2.1 Update App Version

Edit `android/app/build.gradle`:

```gradle
android {
    defaultConfig {
        applicationId "com.dragoneggs.chinese"
        minSdkVersion 22
        targetSdkVersion 34
        versionCode 1          // Increment for each release
        versionName "1.0.0"    // User-visible version
    }
}
```

#### 2.2 Generate Signing Key

```bash
cd chinese-learning-app

# Generate keystore (one-time setup)
keytool -genkey -v -keystore dragon-eggs-release.keystore \
  -alias dragon-eggs \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000

# You'll be prompted for:
# - Keystore password (SAVE THIS!)
# - Key password (SAVE THIS!)
# - Your name and organization details
```

**⚠️ CRITICAL: Back up this keystore file! If you lose it, you can never update your app!**

Store securely:
- Copy to safe location
- Keep passwords in password manager
- Don't commit to git (already in .gitignore)

#### 2.3 Configure Signing in Android

Create/edit `android/key.properties`:

```properties
storePassword=YOUR_KEYSTORE_PASSWORD
keyPassword=YOUR_KEY_PASSWORD
keyAlias=dragon-eggs
storeFile=../dragon-eggs-release.keystore
```

Edit `android/app/build.gradle`, add before `android {`:

```gradle
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

android {
    ...
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
            storePassword keystoreProperties['storePassword']
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            shrinkResources true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}
```

### Step 3: Build Release AAB

```bash
# 1. Build the web app
cd chinese-learning-app
npm run build

# 2. Sync to Android
npx cap sync android

# 3. Open in Android Studio
npx cap open android

# 4. In Android Studio:
#    Build > Generate Signed Bundle / APK
#    Select "Android App Bundle"
#    Choose your keystore
#    Select "release" build variant
#    Click "Create"
```

**Output location:** `android/app/build/outputs/bundle/release/app-release.aab`

### Step 4: Create App in Play Console

1. Go to [Google Play Console](https://play.google.com/console)
2. Click "Create app"
3. Fill in:
   - **App name**: Dragon Eggs - Learn Chinese
   - **Default language**: English (United States)
   - **App or game**: App
   - **Free or paid**: Free
   - Check declarations and click "Create app"

### Step 5: Set Up Store Listing

#### 5.1 Main Store Listing

Navigate to: **Grow > Store presence > Main store listing**

**App name:**
```
Dragon Eggs - Learn Chinese
```

**Short description** (80 chars max):
```
Fun, gamified Chinese learning for beginners. Learn Mandarin through games!
```

**Full description** (4000 chars max):
```
🐉 Learn Chinese the Fun Way!

Dragon Eggs is a gamified Chinese learning app designed for complete beginners. Inspired by Reading Eggs, our app makes learning Mandarin Chinese engaging, interactive, and rewarding!

✨ FEATURES

🎮 Gamified Learning
• Progress through lessons on an interactive map
• Earn stars for completing activities
• Collect Dragon Eggs as you learn
• Unlock new lessons as you advance

📚 Comprehensive Activities
• Flashcards: Master characters, pinyin, and meanings
• Quizzes: Test your comprehension
• Tone Trainer: Visualize and learn the 4 Mandarin tones
• Sentence Builder: Practice sentence structure

🎯 Perfect for Beginners
• Start from zero Chinese knowledge
• Learn greetings, numbers, colors, and more
• Audio support for proper pronunciation
• Visual learning with engaging graphics

⭐ Key Benefits
• Self-paced learning
• Immediate feedback
• Progress tracking
• Beautiful, intuitive interface
• Offline support
• No ads

🎓 What You'll Learn
• Basic greetings and phrases
• Numbers and counting
• Family members
• Colors
• Common expressions
• Proper pronunciation with tones

Whether you're planning to travel to China, interested in Chinese culture, or just want to learn a new language, Dragon Eggs makes it fun and accessible!

Start your Chinese learning journey today! 🚀
```

**App icon**: 512x512 PNG (will create below)

**Feature graphic**: 1024x500 PNG (will create below)

**Phone screenshots**: Minimum 2, maximum 8
- Recommended: 1080x1920 (portrait)

**7-inch tablet screenshots**: At least 2

**10-inch tablet screenshots**: At least 2

**Category**: Education

**Tags**: education, language learning, chinese, mandarin

#### 5.2 Create Required Graphics

I'll create scripts to help generate these:

**Privacy Policy** (Required):
You need to host a privacy policy. Here's a template:

```markdown
# Privacy Policy for Dragon Eggs

Last updated: [DATE]

## Data Collection
Dragon Eggs stores your learning progress locally on your device using localStorage. We do not collect, transmit, or store any personal data on our servers.

## What We Store Locally
- Lesson completion status
- Stars earned
- Dragon Eggs collected

## Third-Party Services
Dragon Eggs does not use any third-party analytics or advertising services.

## Children's Privacy
Our app is suitable for children. We do not knowingly collect any personal information from children under 13.

## Changes to This Policy
We may update this policy from time to time. We will notify you of any changes by posting the new policy on this page.

## Contact Us
If you have questions about this Privacy Policy, contact us at: [YOUR EMAIL]
```

Host this on:
- GitHub Pages (free)
- Your website
- Google Sites (free)

### Step 6: App Content & Rating

1. Navigate to: **Policy > App content**

2. Complete all questionnaires:
   - **Privacy policy**: Enter your privacy policy URL
   - **App access**: "All functionality available without restrictions"
   - **Ads**: "No, my app doesn't contain ads"
   - **Content rating**: Complete questionnaire
     - Select "Educational" category
     - Answer questions (no violence, no scary content, etc.)
     - Should receive "Everyone" rating
   - **Target audience**: Check "Ages 5 & under" and "Ages 6-8"
   - **News app**: No
   - **COVID-19 contact tracing**: No
   - **Data safety**: Complete form
     - "No data collected" or describe local storage
     - Check "Data is not shared with third parties"

### Step 7: Select Countries

Navigate to: **Grow > Store presence > Countries/regions**

- Select "Add countries/regions"
- Choose "Available" to publish worldwide
- Or select specific countries

### Step 8: Set Pricing

Navigate to: **Grow > Monetize > In-app products**

- Free app: Already set
- No in-app purchases initially

### Step 9: Create Release

1. Navigate to: **Release > Production**
2. Click "Create new release"
3. Upload your AAB file (`app-release.aab`)
4. Enter release name: `1.0.0 - Initial Release`
5. Release notes (English):
```
🐉 Welcome to Dragon Eggs!

Initial release features:
• Interactive lesson map
• Multiple activity types (flashcards, quizzes, tone trainer, sentence builder)
• 5 beginner lessons covering greetings, numbers, family, colors, and phrases
• Progress tracking with stars and dragon eggs
• Beautiful, kid-friendly interface

Start your Chinese learning journey today!
```

6. Click "Save"

### Step 10: Review and Publish

1. Review all sections (Play Console will show checklist)
2. Fix any warnings or errors
3. Once all checks pass, click "Send to review"
4. Review typically takes **1-7 days**

---

## 🍎 PART 2: Apple App Store Deployment

### Step 1: Create Apple Developer Account

1. Go to [Apple Developer Program](https://developer.apple.com/programs/)
2. Sign in with Apple ID
3. Enroll in program ($99/year)
4. Complete agreement and payment
5. Wait for approval (24-48 hours)

### Step 2: Create App ID

1. Go to [Apple Developer Console](https://developer.apple.com/account/)
2. Navigate to: **Certificates, Identifiers & Profiles**
3. Click **Identifiers** > **+** button
4. Select **App IDs** > Continue
5. Fill in:
   - **Description**: Dragon Eggs Chinese Learning
   - **Bundle ID**: Explicit > `com.dragoneggs.chinese`
   - **Capabilities**: Default capabilities are fine
6. Click **Continue** > **Register**

### Step 3: Configure Xcode Project

```bash
# 1. Build web app
cd chinese-learning-app
npm run build

# 2. Sync to iOS
npx cap sync ios

# 3. Open in Xcode
npx cap open ios
```

In Xcode:

1. Select **App** project (blue icon)
2. Select **App** target
3. **General** tab:
   - **Display Name**: Dragon Eggs
   - **Bundle Identifier**: com.dragoneggs.chinese
   - **Version**: 1.0.0
   - **Build**: 1

4. **Signing & Capabilities**:
   - Check "Automatically manage signing"
   - Select your Team
   - Xcode will create provisioning profiles

### Step 4: Add App Icons

Required sizes for iOS:
- 1024x1024 (App Store)
- 180x180, 167x167, 152x152, 120x120, 76x76, 60x60, 58x58, 40x40, 29x29, 20x20

Use tools like:
- [AppIcon.co](https://appicon.co/)
- [MakeAppIcon](https://makeappicon.com/)

1. Generate all sizes from your 1024x1024 icon
2. In Xcode: **App** > **Assets** > **AppIcon**
3. Drag icons into appropriate slots

### Step 5: Create App in App Store Connect

1. Go to [App Store Connect](https://appstoreconnect.apple.com/)
2. Click **My Apps** > **+** > **New App**
3. Fill in:
   - **Platforms**: iOS
   - **Name**: Dragon Eggs - Learn Chinese
   - **Primary Language**: English (U.S.)
   - **Bundle ID**: com.dragoneggs.chinese
   - **SKU**: dragoneggs-chinese (unique identifier)
   - **User Access**: Full Access
4. Click **Create**

### Step 6: Build and Archive

In Xcode:

1. Select **Any iOS Device (arm64)** as target
2. **Product** > **Archive**
3. Wait for build to complete (5-10 minutes)
4. **Window** > **Organizer** opens
5. Select your archive
6. Click **Distribute App**
7. Select **App Store Connect**
8. Click **Upload**
9. Wait for processing (30-60 minutes)

### Step 7: Complete App Information

In App Store Connect:

#### 7.1 App Information

Navigate to: **App Information**

- **Subtitle** (30 chars): `Learn Mandarin Through Games`
- **Category**: Education > Primary: Reference, Secondary: Education
- **Content Rights**: Check if contains third-party content

#### 7.2 Pricing and Availability

- **Price**: Free
- **Availability**: All countries

#### 7.3 App Privacy

Navigate to: **App Privacy**

1. Click **Get Started**
2. Select **No, we do not collect data from this app**
3. Or if using local storage:
   - **User Content**: "Other User Content"
   - Check "Data is used for app functionality"
   - Check "Data is not linked to user identity"

#### 7.4 Prepare for Submission

Navigate to: **1.0 Prepare for Submission**

**Screenshots** (Required for all devices):
- iPhone 6.7" (1290 x 2796): 3-10 screenshots
- iPhone 6.5" (1284 x 2778): 3-10 screenshots
- iPad Pro 12.9" (2048 x 2732): 3-10 screenshots

**Promotional Text** (170 chars, updatable without review):
```
🐉 Learn Chinese the fun way! Master Mandarin through interactive games, earn stars, and collect Dragon Eggs as you progress!
```

**Description** (4000 chars max):
```
Learn Chinese the Fun Way with Dragon Eggs!

Dragon Eggs is a gamified Chinese learning app designed for complete beginners. Inspired by Reading Eggs, our app makes learning Mandarin Chinese engaging, interactive, and rewarding for all ages!

✨ FEATURES

🎮 Gamified Learning Experience
• Progress through lessons on a colorful, interactive map
• Earn 1-3 stars for completing each lesson
• Collect Dragon Eggs currency as you learn
• Unlock new lessons as you advance through your journey

📚 Diverse Learning Activities
• Flashcards: Master Chinese characters, pinyin, and meanings with audio
• Multiple Choice Quizzes: Test your comprehension and vocabulary
• Tone Trainer: Visualize and learn the 4 essential Mandarin tones
• Sentence Builder: Practice constructing Chinese sentences with drag-and-drop

🎯 Perfect for Beginners
• Start with zero Chinese knowledge required
• Learn practical topics: greetings, numbers, colors, family, and more
• Audio support for proper pronunciation
• Visual learning with beautiful, engaging graphics
• Kid-friendly interface suitable for all ages

⭐ Key Benefits
• Self-paced learning - progress at your own speed
• Immediate feedback on answers
• Comprehensive progress tracking
• Beautiful, intuitive user interface
• Works offline after initial download
• No advertisements or distractions
• Safe for children

🎓 What You'll Learn
Lesson 1: Basic Greetings (Hello, Goodbye)
Lesson 2: Numbers 1-5
Lesson 3: Family Members (Mother, Father)
Lesson 4: Colors (Red, Blue, Yellow)
Lesson 5: Common Phrases (Thank you, Sorry)

Each lesson includes multiple activities to reinforce learning through repetition and variety. The gamification system keeps learners motivated and engaged.

🌟 Why Dragon Eggs?
Unlike traditional language learning apps, Dragon Eggs combines education with gaming elements to create an enjoyable learning experience. The progressive difficulty ensures steady advancement while the reward system (stars and Dragon Eggs) provides constant motivation.

Whether you're a child starting to explore languages, a student preparing for a trip to China, or an adult interested in Chinese culture, Dragon Eggs makes learning Mandarin fun and accessible!

Download now and start your Chinese learning adventure! 🚀

More lessons and features coming soon!
```

**Keywords** (100 chars, comma-separated):
```
chinese,mandarin,learn,language,education,kids,beginner,pinyin,characters,study
```

**Support URL**: Your website or GitHub repo

**Marketing URL**: Optional

**Version**: 1.0.0

**Copyright**: `© 2026 [Your Name/Company]`

**Sign-In Required**: No

**App Rating**:
- Complete the questionnaire
- Should receive "4+" rating

**What's New in This Version**:
```
🐉 Welcome to Dragon Eggs!

Initial release featuring:
• Interactive lesson map with progressive difficulty
• 5 comprehensive beginner lessons
• Multiple activity types: flashcards, quizzes, tone trainer, and sentence builder
• Beautiful graphics and kid-friendly interface
• Progress tracking with stars and Dragon Eggs
• Audio pronunciation support

Start your Chinese learning journey today!
```

### Step 8: Submit for Review

1. Select build from **Build** dropdown (uploaded archive)
2. Fill in **Export Compliance**: "No" (app doesn't use encryption beyond standard)
3. Fill in **Advertising Identifier**: "No" if not using ads
4. Click **Add for Review**
5. Click **Submit for Review**

**Review time**: Typically 24-48 hours, can be up to 7 days

---

## 📸 Creating Screenshots

I'll create a helper script:

### Option 1: Use Browser Dev Tools

```bash
# 1. Run app locally
npm run dev

# 2. Open in browser: http://localhost:3000
# 3. Open DevTools (F12)
# 4. Toggle device toolbar (Ctrl+Shift+M)
# 5. Set dimensions:
#    Android: 1080x1920
#    iPhone: 1290x2796
# 6. Take screenshots of:
#    - Home screen with lesson map
#    - A flashcard activity
#    - A quiz activity
#    - Completion screen with stars
```

### Option 2: Use Simulator/Emulator

**Android:**
```bash
# Run on emulator
npx cap run android

# Take screenshot: Camera icon in emulator controls
```

**iOS:**
```bash
# Run on simulator
npx cap run ios

# Take screenshot: Cmd+S or File > Screenshot
```

---

## 🎨 Creating App Icons

I'll create a simple script to generate proper icons:

