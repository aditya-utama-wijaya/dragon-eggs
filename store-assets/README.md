# Store Assets & Deployment Resources

This folder contains all the resources you need to deploy Dragon Eggs to Google Play Store and Apple App Store.

## 📚 Documentation Files

### [APP_STORE_DEPLOYMENT.md](APP_STORE_DEPLOYMENT.md)
**Complete step-by-step deployment guide** for both Google Play Store and Apple App Store. This is your main reference document.

**Covers:**
- Creating developer accounts
- Generating signing keys
- Building release versions
- Store listing setup
- Submission process
- Review guidelines

### [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)
**Interactive checklist** to ensure you don't miss any steps. Print this out or keep it open while deploying.

**Includes:**
- Pre-deployment preparation
- Assets creation checklist
- Platform-specific checklists
- Post-submission monitoring
- Common issues and solutions

### [store-listings.md](store-listings.md)
**Ready-to-use store listing content** including:
- App descriptions (short and full)
- Keywords and tags
- Release notes
- Category selections
- Content rating responses
- Screenshot ideas

### [privacy-policy.md](privacy-policy.md)
**Complete privacy policy** ready to host. Required for both app stores.

**Action items:**
1. Fill in your contact information
2. Host on GitHub Pages, Google Sites, or your website
3. Update the URL in app store listings

## 🛠️ Tools

### [generate-icons.js](generate-icons.js)
**Automated icon generator** to create all required app icon sizes.

**Usage:**
```bash
# Install dependencies first
npm install sharp

# Generate icons from your source image
node generate-icons.js path/to/your-icon.png

# Icons will be created in ./generated-icons/
```

**Creates:**
- PWA icons (192x192, 512x512)
- Android icons (all required sizes)
- iOS icons (all required sizes including 1024x1024)

## 🚀 Quick Start

### Option 1: Follow the Full Guide

1. Read [APP_STORE_DEPLOYMENT.md](APP_STORE_DEPLOYMENT.md) start to finish
2. Use [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) to track progress
3. Copy content from [store-listings.md](store-listings.md) as needed

### Option 2: Step-by-Step

**For Google Play Store:**

1. **Create developer account** ($25 one-time)
   - Go to: https://play.google.com/console/signup

2. **Generate app icons**
   ```bash
   cd store-assets
   npm install sharp
   node generate-icons.js ../public/icon.svg
   ```

3. **Host privacy policy**
   - Use [privacy-policy.md](privacy-policy.md)
   - Host on GitHub Pages or Google Sites
   - Get the URL

4. **Build release APK/AAB**
   ```bash
   # From project root
   npm run build
   npx cap sync android
   npx cap open android
   # Then in Android Studio: Build > Generate Signed Bundle
   ```

5. **Create app in Play Console**
   - Use content from [store-listings.md](store-listings.md)
   - Follow [APP_STORE_DEPLOYMENT.md](APP_STORE_DEPLOYMENT.md) Section 1

6. **Submit for review**

**For Apple App Store:**

1. **Create developer account** ($99/year)
   - Go to: https://developer.apple.com/programs/

2. **Generate app icons** (same as above)

3. **Build and archive**
   ```bash
   npm run build
   npx cap sync ios
   npx cap open ios
   # Then in Xcode: Product > Archive
   ```

4. **Create app in App Store Connect**
   - Use content from [store-listings.md](store-listings.md)
   - Follow [APP_STORE_DEPLOYMENT.md](APP_STORE_DEPLOYMENT.md) Section 2

5. **Submit for review**

## 📸 Screenshots Needed

You'll need to take screenshots of your app for the stores:

### Google Play Requirements:
- Phone: 1080x1920 (min 2)
- 7" Tablet: 1920x1200 (min 2)
- 10" Tablet: 2560x1600 (min 2)
- Feature Graphic: 1024x500 (required)

### Apple App Store Requirements:
- iPhone 6.7": 1290x2796 (min 3)
- iPhone 6.5": 1284x2778 (min 3)
- iPad Pro 12.9": 2048x2732 (min 3)

**How to take screenshots:**
```bash
# Run app locally
npm run dev

# Open browser DevTools (F12)
# Set device dimensions to match requirements above
# Navigate to different screens and screenshot:
# - Home/map screen
# - Flashcard activity
# - Quiz activity
# - Completion screen
```

## ✅ Pre-Deployment Checklist

Before starting the deployment process:

- [ ] App fully tested and working
- [ ] No crashes or critical bugs
- [ ] Privacy policy written and hosted
- [ ] App icons created (1024x1024 minimum)
- [ ] Screenshots prepared
- [ ] Developer accounts created
- [ ] Payment methods added to accounts
- [ ] Read through [APP_STORE_DEPLOYMENT.md](APP_STORE_DEPLOYMENT.md)

## 📧 Need Help?

**Common Issues:**
- See "Troubleshooting" section in [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)
- Check [APP_STORE_DEPLOYMENT.md](APP_STORE_DEPLOYMENT.md) for detailed explanations

**Resources:**
- Google Play Console Help: https://support.google.com/googleplay/android-developer
- Apple Developer Support: https://developer.apple.com/support/
- Capacitor Docs: https://capacitorjs.com/docs

## 📅 Timeline Estimate

**Google Play Store:**
- Account setup: 24-48 hours
- Build preparation: 2-4 hours
- Store listing creation: 1-2 hours
- Review time: 1-7 days
- **Total: ~3-10 days**

**Apple App Store:**
- Account setup: 24-48 hours
- Build preparation: 2-4 hours
- Store listing creation: 1-2 hours
- Review time: 24-48 hours (up to 7 days)
- **Total: ~2-10 days**

## 💰 Costs

**One-Time:**
- Google Play Developer: $25
- App icon design (if hiring): $50-200

**Annual:**
- Apple Developer Program: $99/year

**Optional:**
- Domain for privacy policy: $10-15/year
- Professional app icon design: $100-500
- App store optimization tools: $0-50/month
- Marketing/advertising: Variable

## 🎯 Success Metrics

After launch, track:
- Downloads/installs
- Active users
- User ratings (aim for 4.0+)
- Reviews (respond within 48 hours)
- Crash rate (aim for <1%)
- User retention (1-day, 7-day, 30-day)

---

## 🚀 Ready to Deploy?

1. **Start with [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - Check off items as you go
2. **Follow [APP_STORE_DEPLOYMENT.md](APP_STORE_DEPLOYMENT.md)** - Detailed instructions
3. **Use [store-listings.md](store-listings.md)** - Copy-paste ready content
4. **Host [privacy-policy.md](privacy-policy.md)** - Required for submission

Good luck with your app store launch! 🐉✨

---

**Questions or stuck?**
- Double-check the [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)
- Review the specific section in [APP_STORE_DEPLOYMENT.md](APP_STORE_DEPLOYMENT.md)
- Search for similar issues on Stack Overflow or GitHub
- Contact platform support (Google Play or Apple)
