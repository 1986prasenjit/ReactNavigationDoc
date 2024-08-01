import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import InstallationComponent from '../../components/InstallationalComponent/InstallationComponent';

const IOSInstallScreen = () => {
  const text =
  'React Navigation offers cross-platform navigation capabilities.However, setting it up for IOS presents unique challenges. Xcode configuration, including manual linking and build settings,requires carefull attention.Additionally,performance can vary between simulators and physical devices.To achive a native-like experience,optimizing for IOS-specific gesture and design patterns is essential';
  const IOSsteps = [
    {
      title: '1. Install Dependencies:',
      content: `
        Expo managed projects:
        \`npx expo install react-native-screens react-native-safe-area-context\`
        Bare React Native projects:
        \`npm install react-native-screens react-native-safe-area-context\`
        or
        \`yarn add react-native-screens react-native-safe-area-context\`

      `,
    },
    {
      title: '2.Link Dependencies(Bare React Native only):',
      content: `
        Automatic linking is usaually sufficient for newer React Native version(>=0.60).
        For Older version,manually link:
        \`react-native link react-native-screens\`
        \`react-native link react-native-safe-area-context\`
      `,
    },
    {
      title: '3.Install Pods(IOS only)',
      content: `
        Navigate to your IOS project directory:
          \`cd ios\`
        Install pods:
          \`pod install\`
        Navigate back to your project root:
          \`cd ..\`
      `,
    },
    {
      title: '4. Improt Gesture Handler (IMPORTANT):',
      content: `
        Import react-native-gesture-handler at the top of your entry file (e.g. index.js or App.js)
        \`import 'react-native-gesture-handler';\`
      `,
    },
    {
      title: '5. Install Additional Dependencies (Optional):',
      content: `
        Depending on your navigation needs, you might install additional packages like react-native-gesture-handler, react-native-reanumated, and others. Please Refer to other Screens of this App for more and specific information 
      `,
    },
  ];
  return (
    <ScrollView>
      <InstallationComponent data={[text]} />
      <InstallationComponent data={IOSsteps} />
    </ScrollView>
  );
};
export default IOSInstallScreen;
