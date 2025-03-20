import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'my-app',
  slug: 'my-app',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  assetBundlePatterns: [
    '**/*'
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.yourcompany.myapp'
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/icon.png',
      backgroundColor: '#ffffff'
    },
    package: 'com.yourcompany.myapp'
  },
  extra: {
    apiUrl: process.env.EXPO_PUBLIC_API_URL,
    apiTimeout: process.env.EXPO_PUBLIC_API_TIMEOUT,
    "eas": {
      "projectId": "6a99334c-4293-4c19-8682-5483c93d2c32"
    }
  }
}); 