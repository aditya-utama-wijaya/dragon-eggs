# Quick Start - Mobile App

Get Dragon Eggs running on your phone in 5 minutes!

## 🚀 Fastest Way: PWA (Progressive Web App)

**No app store needed! No build tools required!**

### Android (Chrome/Edge)
1. Open Chrome on your Android device
2. Visit your deployed app URL (e.g., `https://your-app.vercel.app`)
3. Tap menu (⋮) → "Add to Home screen"
4. Done! App icon on home screen

### iOS (Safari)
1. Open Safari on your iPhone/iPad
2. Visit your deployed app URL
3. Tap Share (□↑) → "Add to Home Screen"
4. Done! App icon on home screen

## 📱 Native Apps (Android & iOS)

Want to publish to app stores? Follow these steps:

### Prerequisites Installation

**Install Node.js:**
- Download from [nodejs.org](https://nodejs.org/)
- Verify: `node --version` (should show v18+)

**For Android:**
```bash
# 1. Download Android Studio from:
#    https://developer.android.com/studio

# 2. Install Android SDK (via Android Studio setup wizard)
```

**For iOS (Mac only):**
```bash
# 1. Install Xcode from Mac App Store

# 2. Install Xcode Command Line Tools
xcode-select --install

# 3. Install CocoaPods
sudo gem install cocoapods
```

### Build Steps

```bash
# 1. Navigate to project
cd chinese-learning-app

# 2. Install dependencies
npm install

# 3. Build the web app
npm run build

# 4. Add Android platform
npx cap add android

# 5. Open in Android Studio
npm run cap:android

# 6. In Android Studio:
#    - Click green "Run" button ▶️
#    - Select your connected device or emulator
#    - App installs and runs!
```

### For iOS (Mac only)

```bash
# After step 3 above:

# 4. Add iOS platform
npx cap add ios

# 5. Open in Xcode
npm run cap:ios

# 6. In Xcode:
#    - Select your device/simulator
#    - Click Run button ▶️
#    - App installs and runs!
```

## 🔄 Making Changes

After editing code:

```bash
# 1. Rebuild
npm run build

# 2. Sync to mobile projects
npx cap sync

# 3. Reopen in Android Studio or Xcode and run again
```

## 🎯 Testing Without Building

Use the web version during development:

```bash
npm run dev
# Open http://localhost:3000 in your browser
```

Test on your phone by visiting your computer's local IP:
```bash
# Find your IP
ipconfig  # Windows
ifconfig  # Mac/Linux

# Access from phone's browser
http://192.168.x.x:3000
```

## 📦 First Time Setup Checklist

- [ ] Node.js installed
- [ ] Run `npm install` in project folder
- [ ] Run `npm run build` successfully
- [ ] For Android: Android Studio installed
- [ ] For iOS: Xcode installed (Mac only)
- [ ] Icons generated (icon-192.png, icon-512.png)

## 🆘 Quick Troubleshooting

**"npx: command not found"**
- Install Node.js from nodejs.org

**"Build failed"**
```bash
# Clear and rebuild
rm -rf node_modules .next out
npm install
npm run build
```

**"Android build errors"**
- Update Android SDK in Android Studio
- File → Settings → Appearance & Behavior → System Settings → Android SDK
- Click "SDK Update"

**"iOS signing errors"**
- In Xcode: Select project → Signing & Capabilities
- Enable "Automatically manage signing"
- Select your Team

**Changes not showing**
```bash
npm run build && npx cap sync
# Then rerun in Android Studio/Xcode
```

## 📖 Detailed Documentation

For complete instructions, see:
- [MOBILE_BUILD.md](./MOBILE_BUILD.md) - Full build & deployment guide
- [README.md](./README.md) - App features & architecture

## 🎉 Success!

Once running, you should see:
- ✅ Dragon Eggs home screen with lesson map
- ✅ Tap lessons to start learning
- ✅ Earn stars and dragon eggs
- ✅ Progress automatically saves

Happy learning! 🐉
