# App Store Deployment Checklist

Use this checklist to ensure you have everything ready before submitting to app stores.

## 📱 Pre-Deployment Preparation

### App Readiness
- [ ] App fully tested on multiple devices
- [ ] All features working correctly
- [ ] No crashes or critical bugs
- [ ] Loading times acceptable
- [ ] Audio files working (if implemented)
- [ ] Offline functionality tested
- [ ] Progress saves/loads correctly
- [ ] All lessons accessible and completable

### Developer Accounts
- [ ] Google Play Developer account created and verified ($25 one-time)
- [ ] Apple Developer Program membership active ($99/year)
- [ ] Payment methods added to both accounts
- [ ] Tax information completed
- [ ] Developer agreements accepted

### Legal Requirements
- [ ] Privacy policy written and hosted
- [ ] Privacy policy URL accessible
- [ ] Terms of service (if needed)
- [ ] Copyright information prepared
- [ ] Content rights verified
- [ ] COPPA compliance reviewed (if targeting kids)

---

## 🎨 Assets Creation

### App Icons
- [ ] **1024x1024** PNG (no transparency) - Required for both stores
- [ ] **512x512** PNG - Google Play store icon
- [ ] **192x192** PNG - PWA icon
- [ ] All iOS icon sizes generated (20x20 to 1024x1024)
- [ ] All Android icon sizes generated (various densities)
- [ ] Icons follow platform guidelines (no transparency, proper margins)

### Screenshots
**Google Play:**
- [ ] Phone screenshots (1080x1920) - minimum 2
- [ ] 7" tablet screenshots (1920x1200) - minimum 2
- [ ] 10" tablet screenshots (2560x1600) - minimum 2
- [ ] Feature graphic (1024x500) - required

**Apple App Store:**
- [ ] iPhone 6.7" screenshots (1290x2796) - minimum 3
- [ ] iPhone 6.5" screenshots (1284x2778) - minimum 3
- [ ] iPad Pro 12.9" screenshots (2048x2732) - minimum 3

**Screenshot Content:**
- [ ] Home/map screen
- [ ] Flashcard activity
- [ ] Quiz activity
- [ ] Completion screen
- [ ] Settings/profile (if applicable)

### Optional Assets
- [ ] App preview video (15-30 seconds) - highly recommended
- [ ] Promotional graphics for marketing
- [ ] Social media banners

---

## 🤖 Android / Google Play

### Build Preparation
- [ ] `versionCode` incremented in `build.gradle`
- [ ] `versionName` set correctly (e.g., "1.0.0")
- [ ] `applicationId` set to `com.dragoneggs.chinese`
- [ ] App name configured in `strings.xml`
- [ ] Permissions minimized and justified
- [ ] ProGuard rules configured (if using minification)

### Signing
- [ ] Release keystore generated
- [ ] Keystore backed up securely (CRITICAL!)
- [ ] Keystore password saved in password manager
- [ ] Key alias and password saved
- [ ] `key.properties` file created
- [ ] Signing configured in `build.gradle`
- [ ] Release build successful

### Build Artifacts
- [ ] AAB (Android App Bundle) generated successfully
- [ ] AAB tested with internal testing track (optional but recommended)
- [ ] File size reasonable (<150MB preferred)

### Play Console Setup
- [ ] App created in Google Play Console
- [ ] App name set
- [ ] Default language selected
- [ ] Free/paid status set

### Store Listing
- [ ] Short description (80 chars)
- [ ] Full description (up to 4000 chars)
- [ ] App icon (512x512)
- [ ] Feature graphic (1024x500)
- [ ] Phone screenshots uploaded
- [ ] Tablet screenshots uploaded
- [ ] App category selected
- [ ] Contact email added
- [ ] Privacy policy URL added

### Content Rating
- [ ] Content rating questionnaire completed
- [ ] Rating certificate obtained
- [ ] Should be "Everyone" or "Everyone 10+"

### App Content
- [ ] Privacy policy questionnaire completed
- [ ] Target audience selected
- [ ] Ads declaration set (No ads)
- [ ] Data safety form completed
- [ ] Store listing tested with "View in test store"

### Pricing & Distribution
- [ ] Countries/regions selected
- [ ] Free app confirmed
- [ ] No in-app purchases (for v1.0)

### Release
- [ ] Production release created
- [ ] AAB uploaded
- [ ] Release name set (e.g., "1.0.0")
- [ ] Release notes written
- [ ] All required sections completed
- [ ] No errors or warnings in Console
- [ ] Ready to submit

### Final Steps
- [ ] Reviewed all information
- [ ] Clicked "Send to review"
- [ ] Email confirmation received
- [ ] Review status monitored

**Expected Review Time:** 1-7 days

---

## 🍎 iOS / Apple App Store

### Xcode Project Setup
- [ ] Project built successfully
- [ ] No errors or warnings
- [ ] Bundle identifier set to `com.dragoneggs.chinese`
- [ ] Display name set to "Dragon Eggs"
- [ ] Version set to "1.0.0"
- [ ] Build number set to "1"
- [ ] Deployment target set (iOS 13.0+)
- [ ] Team selected for signing

### App Icons
- [ ] All required icon sizes added to Assets.xcassets
- [ ] 1024x1024 App Store icon included
- [ ] Icons have no transparency
- [ ] Icons have no rounded corners (iOS adds them)

### Signing & Capabilities
- [ ] Automatic signing enabled
- [ ] Provisioning profile created
- [ ] Development certificate active
- [ ] Distribution certificate created
- [ ] Team membership verified

### Build & Archive
- [ ] Archive created successfully
- [ ] Archive shows no errors in Organizer
- [ ] Archive validated successfully
- [ ] Archive uploaded to App Store Connect

### App Store Connect Setup
- [ ] App created in App Store Connect
- [ ] Bundle ID matches Xcode
- [ ] SKU set (unique identifier)
- [ ] Apple ID set

### App Information
- [ ] App name: "Dragon Eggs - Learn Chinese"
- [ ] Subtitle (30 chars)
- [ ] Primary category: Education
- [ ] Secondary category selected
- [ ] Privacy policy URL added
- [ ] Support URL added
- [ ] Marketing URL added (optional)
- [ ] Copyright information added

### Pricing & Availability
- [ ] Price set to Free ($0)
- [ ] Countries/regions selected
- [ ] Pre-orders configured (if applicable)

### App Privacy
- [ ] Privacy questionnaire completed
- [ ] Data collection accurately described
- [ ] "No data collected" if applicable

### Prepare for Submission
- [ ] Build selected from dropdown
- [ ] Version number matches build
- [ ] What's New text written
- [ ] Promotional text added (170 chars)
- [ ] Description added (up to 4000 chars)
- [ ] Keywords added (100 chars)
- [ ] Screenshots uploaded for all device sizes
- [ ] App Review Information completed
  - [ ] Contact information
  - [ ] Demo account (if needed)
  - [ ] Notes for reviewer
- [ ] Version Release set (Automatic/Manual)

### Age Rating
- [ ] Age rating questionnaire completed
- [ ] Should be "4+" for Dragon Eggs
- [ ] Made For Kids designation set

### App Review
- [ ] Export compliance: No encryption
- [ ] Advertising Identifier: No (if not using ads)
- [ ] Content Rights: Appropriate selection
- [ ] Ready to submit checkbox

### Final Steps
- [ ] All sections show green checkmarks
- [ ] No warnings or errors
- [ ] "Submit for Review" clicked
- [ ] Confirmation email received
- [ ] Review status monitored in App Store Connect

**Expected Review Time:** 24-48 hours (up to 7 days)

---

## 📊 Post-Submission

### Monitoring
- [ ] Check email for any rejection reasons
- [ ] Monitor App Store Connect / Play Console status
- [ ] Set up alerts for status changes
- [ ] Check daily for first week

### If Rejected
- [ ] Read rejection reason carefully
- [ ] Fix all issues mentioned
- [ ] Increment build number
- [ ] Resubmit with explanation

### Upon Approval
- [ ] Verify app appears in stores
- [ ] Test download and installation
- [ ] Check all screenshots display correctly
- [ ] Verify description and details correct
- [ ] Share app store links with friends/family

### Marketing Prep
- [ ] Prepare app store links
  - Google Play: `https://play.google.com/store/apps/details?id=com.dragoneggs.chinese`
  - Apple: Will be provided after approval
- [ ] Create QR codes for app stores
- [ ] Prepare social media posts
- [ ] Create website/landing page
- [ ] Set up analytics (if desired)

---

## 🐛 Common Issues & Solutions

### Android Build Issues
**Problem:** "Signing key not found"
- Solution: Check `key.properties` path and passwords

**Problem:** "AAPT: error: resource not found"
- Solution: Clean and rebuild project

**Problem:** "Build failed: minSdkVersion too low"
- Solution: Update minSdkVersion in build.gradle

### iOS Build Issues
**Problem:** "No signing certificate"
- Solution: Enable automatic signing or manually create certificates

**Problem:** "Archive failed"
- Solution: Clean build folder (Cmd+Shift+K), then rebuild

**Problem:** "Missing required icon"
- Solution: Add all icon sizes in Assets.xcassets

### Submission Issues
**Problem:** "Privacy policy not accessible"
- Solution: Ensure URL is public and loads quickly

**Problem:** "Missing content rating"
- Solution: Complete content rating questionnaire

**Problem:** "Screenshots don't match"
- Solution: Take screenshots from actual build at correct resolutions

---

## 📧 Support Email Template

Set up an email for app support. Template for responses:

```
Subject: Dragon Eggs Support - [User's Issue]

Hi [Name],

Thank you for contacting Dragon Eggs support!

[Personalized response to their issue]

If you continue to experience issues:
1. Try restarting the app
2. Check for updates in the app store
3. Reinstall the app (your progress may be lost)

For bug reports, please include:
• Device model and OS version
• Steps to reproduce the issue
• Screenshots if applicable

We appreciate your feedback and hope you enjoy learning Chinese!

Best regards,
The Dragon Eggs Team 🐉

---
Dragon Eggs - Learn Chinese
Website: [Your URL]
Support: [Your Email]
```

---

## 🎉 Launch Day Checklist

- [ ] App live on Google Play Store
- [ ] App live on Apple App Store
- [ ] Both links tested and working
- [ ] Downloaded and tested on multiple devices
- [ ] Social media announcement posted
- [ ] Friends and family notified
- [ ] App store links added to website
- [ ] QR codes generated
- [ ] Press release sent (if applicable)
- [ ] Monitoring reviews and ratings
- [ ] Responding to user feedback

---

## 📈 Post-Launch

### Week 1
- [ ] Monitor crash reports daily
- [ ] Respond to all reviews
- [ ] Track download numbers
- [ ] Fix any critical bugs immediately

### Month 1
- [ ] Analyze user retention
- [ ] Gather feature requests
- [ ] Plan version 1.1 updates
- [ ] Optimize app store listing based on data

### Ongoing
- [ ] Regular updates (monthly or quarterly)
- [ ] Keep content fresh (new lessons)
- [ ] Respond to reviews within 48 hours
- [ ] Monitor competitor apps
- [ ] Update screenshots with new features
- [ ] Consider paid advertising if budget allows

---

## 🆘 Emergency Contacts

**Apple Developer Support:**
- Developer website: https://developer.apple.com/contact/
- Phone: 1-800-633-2152 (US)

**Google Play Support:**
- Help Center: https://support.google.com/googleplay/android-developer
- Policy questions: Through Play Console

**Community Help:**
- Stack Overflow: Tag with [android], [ios], [capacitor]
- GitHub Issues: Check Capacitor repository
- Reddit: r/androiddev, r/iOSProgramming

---

## ✅ Final Verification

Before clicking "Submit":

1. **Triple-check app name** is correct in all places
2. **Verify privacy policy** URL loads properly
3. **Test all screenshots** display correctly
4. **Review description** for typos
5. **Confirm pricing** is set correctly (FREE)
6. **Check countries** are selected
7. **Verify contact email** is monitored
8. **Ensure build** is latest version
9. **Read submission one more time**
10. **Take a deep breath** and submit! 🚀

---

Good luck with your launch! 🐉✨
