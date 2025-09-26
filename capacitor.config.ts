import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vflix.vflix',
  appName: 'VFlix',
  webDir: 'dist',
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
