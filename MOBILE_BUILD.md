# Mobile App Build Guide - Dragon Eggs

This guide will help you build and deploy the Dragon Eggs app to Android and iOS devices.

## Overview

The app uses **Capacitor** to wrap the Next.js web app as native Android and iOS applications. The app can also be installed as a Progressive Web App (PWA) directly from the browser.

## Prerequisites

### For Both Platforms
- Node.js 18+ and npm
- Basic understanding of mobile app development

### For Android
- [Android Studio](https://developer.android.com/studio) installed
- Java Development Kit (JDK) 11 or higher
- Android SDK installed via Android Studio

### For iOS (Mac only)
- macOS computer
- [Xcode](https://developer.apple.com/xcode/) 14+ installed
- Xcode Command Line Tools
- CocoaPods: `sudo gem install cocoapods`
- Apple Developer Account (for deploying to App Store)

## Initial Setup

### 1. Install Dependencies

```bash
cd chinese-learning-app
npm install
```

### 2. Initialize Capacitor

```bash
# Initialize Capacitor platforms
npx cap add android
npx cap add ios
```

This creates `android/` and `ios/` folders with native project files.

### 3. Generate App Icons

You need to create PNG icons from the SVG icon:

**Required icon sizes:**
- `public/icon-192.png` (192x192px)
- `public/icon-512.png` (512x512px)
- `public/favicon.ico`

You can use online tools like:
- [Favicon.io](https://favicon.io/favicon-converter/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

Or use ImageMagick:
```bash
# Convert SVG to PNG
convert public/icon.svg -resize 192x192 public/icon-192.png
convert public/icon.svg -resize 512x512 public/icon-512.png
```

## Building for Android

### Step 1: Build the Web App

```bash
npm run build
```

This creates an optimized production build in the `out/` directory.

### Step 2: Sync with Capacitor

```bash
npx cap sync android
```

This copies the web assets to the Android project.

### Step 3: Open in Android Studio

```bash
npm run cap:android
```

Or manually:
```bash
npx cap open android
```

### Step 4: Configure App Details

In Android Studio, update:

1. **App Name**: `android/app/src/main/res/values/strings.xml`
   ```xml
   <string name="app_name">Dragon Eggs</string>
   ```

2. **Package Name**: `android/app/build.gradle`
   ```gradle
   applicationId "com.dragoneggs.chinese"
   ```

3. **Version**: `android/app/build.gradle`
   ```gradle
   versionCode 1
   versionName "1.0.0"
   ```

### Step 5: Build APK/AAB

**For Testing (APK):**
1. In Android Studio: `Build > Build Bundle(s) / APK(s) > Build APK(s)`
2. APK location: `android/app/build/outputs/apk/debug/app-debug.apk`
3. Install on device: `adb install app-debug.apk`

**For Production (AAB):**
1. Generate signing key:
   ```bash
   keytool -genkey -v -keystore dragon-eggs-key.keystore -alias dragon-eggs -keyalg RSA -keysize 2048 -validity 10000
   ```

2. Configure signing in `android/app/build.gradle`:
   ```gradle
   signingConfigs {
       release {
           storeFile file('path/to/dragon-eggs-key.keystore')
           storePassword 'your-password'
           keyAlias 'dragon-eggs'
           keyPassword 'your-password'
       }
   }
   ```

3. Build: `Build > Generate Signed Bundle / APK`
4. Upload to Google Play Console

### Step 6: Test on Device

```bash
# Run on connected device
npx cap run android
```

## Building for iOS

### Step 1: Build the Web App

```bash
npm run build
```

### Step 2: Sync with Capacitor

```bash
npx cap sync ios
```

### Step 3: Open in Xcode

```bash
npm run cap:ios
```

Or manually:
```bash
npx cap open ios
```

### Step 4: Configure App Details

In Xcode:

1. **Bundle Identifier**: Select project > General > Bundle Identifier
   - Set to: `com.dragoneggs.chinese`

2. **Display Name**: General > Display Name
   - Set to: `Dragon Eggs`

3. **Version**: General > Version
   - Set to: `1.0.0`

4. **Team**: General > Signing & Capabilities
   - Select your Apple Developer Team

5. **App Icons**:
   - Add icons to `ios/App/App/Assets.xcassets/AppIcon.appiconset/`
   - Or use [App Icon Generator](https://appicon.co/)

### Step 5: Configure Signing

1. In Xcode: Select project > Signing & Capabilities
2. Enable "Automatically manage signing"
3. Select your Team
4. Xcode will automatically create provisioning profiles

### Step 6: Build and Run

**For Testing (Simulator):**
1. Select simulator: Product > Destination > Choose Simulator
2. Run: Product > Run (Cmd+R)

**For Testing (Device):**
1. Connect iOS device via USB
2. Select device: Product > Destination > Your Device
3. Trust developer certificate on device
4. Run: Product > Run (Cmd+R)

**For Production (App Store):**
1. Archive: Product > Archive
2. Window > Organizer > Archives
3. Click "Distribute App"
4. Follow App Store Connect upload process
5. Submit for review in App Store Connect

### Step 7: Test on Device

```bash
# List available devices
npx cap run ios --list

# Run on specific device
npx cap run ios --target="iPhone-15"
```

## Progressive Web App (PWA) Installation

Users can install the app directly from their browser without app stores:

### Android (Chrome/Edge)
1. Visit the app URL in Chrome
2. Tap the menu (3 dots)
3. Select "Add to Home Screen"
4. App icon appears on home screen

### iOS (Safari)
1. Visit the app URL in Safari
2. Tap the Share button
3. Select "Add to Home Screen"
4. App icon appears on home screen

## Updating the App

When you make changes to the code:

```bash
# 1. Rebuild the web app
npm run build

# 2. Sync changes to native projects
npx cap sync

# 3. Open in respective IDE and rebuild
npm run cap:android  # or cap:ios
```

## Common Commands

```bash
# Development
npm run dev                    # Run Next.js dev server

# Build
npm run build                  # Build Next.js app for production
npm run export                 # Same as build (creates static export)

# Capacitor
npm run cap:sync               # Sync web assets to native projects
npm run cap:android            # Open Android Studio
npm run cap:ios                # Open Xcode
npx cap sync                   # Sync without rebuild
npx cap sync android           # Sync Android only
npx cap sync ios               # Sync iOS only

# Running on devices
npx cap run android            # Build and run on Android device
npx cap run ios                # Build and run on iOS device
```

## Troubleshooting

### Android Issues

**Build fails:**
- Update Android SDK in Android Studio
- Check Java version: `java -version`
- Clean project: `Build > Clean Project`

**App crashes on startup:**
- Check `capacitor.config.ts` has correct `webDir: 'out'`
- Verify `out/` folder exists after build
- Check Android Logcat for errors

**White screen:**
- Ensure `npm run build` completed successfully
- Check browser console in Android Studio's device inspector

### iOS Issues

**Signing errors:**
- Verify Apple Developer account is active
- Check Bundle Identifier matches provisioning profile
- Try "Automatically manage signing"

**App crashes:**
- Check Xcode console for errors
- Verify `webDir: 'out'` in `capacitor.config.ts`
- Clean build folder: Product > Clean Build Folder

**CocoaPods errors:**
```bash
cd ios/App
pod install --repo-update
```

### General Issues

**Changes not appearing:**
```bash
# Full rebuild
npm run build
npx cap copy
npx cap sync
```

**Clear Capacitor cache:**
```bash
rm -rf android ios .capacitor
npx cap add android
npx cap add ios
npm run cap:sync
```

## Publishing to App Stores

### Google Play Store

1. Create app in [Google Play Console](https://play.google.com/console)
2. Fill out store listing (description, screenshots, etc.)
3. Upload signed AAB file
4. Submit for review
5. Publishing time: Few hours to 1-2 days

**Requirements:**
- App icon (512x512px)
- Feature graphic (1024x500px)
- Screenshots (minimum 2)
- Privacy policy URL
- Content rating questionnaire

### Apple App Store

1. Create app in [App Store Connect](https://appstoreconnect.apple.com/)
2. Fill out app information
3. Upload build via Xcode Organizer
4. Submit for review
5. Publishing time: 1-3 days

**Requirements:**
- App icon (1024x1024px)
- Screenshots for all device sizes
- Privacy policy URL
- App Store description
- Keywords and categories

## Resources

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Android Developer Guide](https://developer.android.com/guide)
- [iOS Developer Guide](https://developer.apple.com/ios/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

## Support

For issues with:
- **Capacitor**: Check [Capacitor GitHub Issues](https://github.com/ionic-team/capacitor/issues)
- **Next.js**: Check [Next.js Documentation](https://nextjs.org/docs)
- **Dragon Eggs App**: Create an issue in your repository
