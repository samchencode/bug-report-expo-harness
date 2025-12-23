import {
  applePlatform,
  appleSimulator,
} from '@react-native-harness/platform-apple';

const config = {
  entryPoint: './index.js',
  appRegistryComponentName: 'main',

  runners: [
    applePlatform({
      name: 'ios',
      device: appleSimulator('i6.7', '26.1'), // Your iOS simulator name and version
      bundleId: 'com.anonymous.fiddle-expo-blank', // Your iOS bundle ID
    }),
  ],
};

export default config;