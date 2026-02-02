#!/usr/bin/env node

/**
 * Icon Generator Script for Dragon Eggs
 *
 * This script helps create app icons in all required sizes.
 *
 * Requirements:
 * - Node.js 14+
 * - sharp: npm install sharp
 * - A source icon at least 1024x1024 pixels
 *
 * Usage:
 *   node generate-icons.js path/to/source-icon.png
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('❌ Error: sharp is not installed.');
  console.log('\n📦 Install sharp with: npm install sharp');
  console.log('   Or: npm install sharp --save-dev\n');
  process.exit(1);
}

// Icon sizes for different platforms
const ICON_SIZES = {
  // PWA / Web
  pwa: [
    { size: 192, name: 'icon-192.png' },
    { size: 512, name: 'icon-512.png' },
  ],

  // Google Play Store
  android: [
    { size: 512, name: 'playstore-icon.png' },
    { size: 192, name: 'android-icon-192.png' },
    { size: 144, name: 'android-icon-144.png' },
    { size: 96, name: 'android-icon-96.png' },
    { size: 72, name: 'android-icon-72.png' },
    { size: 48, name: 'android-icon-48.png' },
  ],

  // Apple App Store / iOS
  ios: [
    { size: 1024, name: 'ios-icon-1024.png' }, // App Store
    { size: 180, name: 'ios-icon-180.png' },   // iPhone @3x
    { size: 167, name: 'ios-icon-167.png' },   // iPad Pro
    { size: 152, name: 'ios-icon-152.png' },   // iPad @2x
    { size: 120, name: 'ios-icon-120.png' },   // iPhone @2x
    { size: 87, name: 'ios-icon-87.png' },     // iPhone @3x
    { size: 80, name: 'ios-icon-80.png' },     // iPad @2x
    { size: 76, name: 'ios-icon-76.png' },     // iPad
    { size: 60, name: 'ios-icon-60.png' },     // iPhone
    { size: 58, name: 'ios-icon-58.png' },     // iPad @2x
    { size: 40, name: 'ios-icon-40.png' },     // iPad
    { size: 29, name: 'ios-icon-29.png' },     // Settings
    { size: 20, name: 'ios-icon-20.png' },     // Notification
  ],
};

async function generateIcons(sourcePath, outputDir = './generated-icons') {
  console.log('🎨 Dragon Eggs Icon Generator\n');

  // Check if source file exists
  if (!fs.existsSync(sourcePath)) {
    console.error(`❌ Error: Source file not found: ${sourcePath}`);
    process.exit(1);
  }

  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`📁 Created output directory: ${outputDir}\n`);
  }

  // Get source image info
  const image = sharp(sourcePath);
  const metadata = await image.metadata();

  console.log(`📸 Source image: ${metadata.width}x${metadata.height}\n`);

  if (metadata.width < 1024 || metadata.height < 1024) {
    console.warn('⚠️  Warning: Source image should be at least 1024x1024 for best quality\n');
  }

  // Generate icons for each platform
  for (const [platform, sizes] of Object.entries(ICON_SIZES)) {
    console.log(`\n🔨 Generating ${platform.toUpperCase()} icons...`);

    for (const { size, name } of sizes) {
      const outputPath = path.join(outputDir, platform, name);
      const outputDirPath = path.dirname(outputPath);

      // Create platform directory if it doesn't exist
      if (!fs.existsSync(outputDirPath)) {
        fs.mkdirSync(outputDirPath, { recursive: true });
      }

      try {
        await sharp(sourcePath)
          .resize(size, size, {
            fit: 'contain',
            background: { r: 254, g: 249, b: 243, alpha: 1 } // --bg-primary color
          })
          .png()
          .toFile(outputPath);

        console.log(`  ✅ ${name} (${size}x${size})`);
      } catch (error) {
        console.error(`  ❌ Failed to generate ${name}: ${error.message}`);
      }
    }
  }

  // Copy some files to public directory for easy access
  console.log('\n📋 Copying key files to public directory...');

  const publicIcons = [
    { src: path.join(outputDir, 'pwa', 'icon-192.png'), dest: '../public/icon-192.png' },
    { src: path.join(outputDir, 'pwa', 'icon-512.png'), dest: '../public/icon-512.png' },
    { src: path.join(outputDir, 'android', 'playstore-icon.png'), dest: '../public/android-icon-512.png' },
  ];

  for (const { src, dest } of publicIcons) {
    const destPath = path.join(__dirname, dest);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, destPath);
      console.log(`  ✅ Copied ${path.basename(src)} to public/`);
    }
  }

  console.log('\n✨ Icon generation complete!\n');
  console.log('📁 Generated icons saved to:', path.resolve(outputDir));
  console.log('\n📝 Next steps:');
  console.log('   1. Review generated icons in:', outputDir);
  console.log('   2. Copy Android icons to: android/app/src/main/res/');
  console.log('   3. Copy iOS icons to: ios/App/App/Assets.xcassets/AppIcon.appiconset/');
  console.log('   4. Use playstore-icon.png for Google Play Console');
  console.log('   5. Use ios-icon-1024.png for App Store Connect\n');
}

// Command line interface
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('🎨 Dragon Eggs Icon Generator\n');
  console.log('Usage:');
  console.log('  node generate-icons.js <source-icon-path> [output-directory]\n');
  console.log('Example:');
  console.log('  node generate-icons.js ../public/icon.svg');
  console.log('  node generate-icons.js my-icon.png ./icons\n');
  console.log('Requirements:');
  console.log('  • Source image should be at least 1024x1024 pixels');
  console.log('  • Source can be PNG, SVG, or other image format');
  console.log('  • Square aspect ratio (1:1) required\n');
  process.exit(0);
}

const sourcePath = args[0];
const outputDir = args[1] || './generated-icons';

generateIcons(sourcePath, outputDir).catch(error => {
  console.error('\n❌ Error:', error.message);
  process.exit(1);
});
