import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dragoneggs.chinese',
  appName: 'Dragon Eggs',
  webDir: 'out',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#fef9f3',
      showSpinner: false,
    },
    StatusBar: {
      style: 'light',
      backgroundColor: '#e63946',
    },
  },
};

export default config;
