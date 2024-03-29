import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'weather-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    allowNavigation: ['']
  }
};

export default config;
