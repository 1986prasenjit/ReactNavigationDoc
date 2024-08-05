import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CardComponent from '../../components/CardComponent/CardComponent';

const DATA = [
  {
    id: 1,
    title: 'Stack Installation Information',
    screen: 'DetailsScreen',
    htmlData: `<h1 style="font-size:2.5rem; color:#212121">Steps to follow:-</h1>
            <h2 style="color:#2E236C">1. Install Dependencies:</h2>
            <h3 style="color:#2E236C">Expo managed projects:</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">npx expo install react-native-screens react-native-safe-area-context</code>
            <h3 style="color:#2E236C">Bare React Native Projects:</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">npm install react-native-screens react-native-safe-area-context</code>
            <h2 style="color:#2E236C">or</h2>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">yarn add react-native-screens react-native-safe-area-context</code>
            <h2 style="color:#2E236C">2.Link Dependencies(Bare React Native only):</h2>
            <h3 style="color:#2E236C">Automatic linking is usually sufficient for newer React Native version(>=0.60).</h3>
            <h3 style="color:#2E236C">For Older version,manually link:</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">react-native link react-native-screens</code>
            <h2 style="color:#2E236C">and</h2>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">react-native link react-native-safe-area-context</code>
            <h2 style="color:#2E236C">3.Install Pods(IOS only):</h2>
            <h3 style="color:#2E236C">Navigate to your IOS project directory:</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">cd ios</code>
            <h3 style="color:#2E236C">Install pods:</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">pod install</code>
            <h3 style="color:#2E236C">Navigate back to your project root:</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">cd ..</code>
            <h2 style="color:#2E236C">4. Import Gesture Handler <span style="color:#F5004F">*(IMPORTANT):</span></h2>
            <h3 style="color:#2E236C">Import react-native-gesture-handler at the top of your entry file (e.g. index.js or App.js)</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">import 'react-native-gesture-handler</code>
            <h2 style="color:#2E236C">5. Install Additional Dependencies (Optional):</h2>
            <p style="font-size:1.5rem; font-weight:500;color:#352F44; text-align:justified">
              Depending on your navigation needs, you might install additional packages like react-native-gesture-handler, react-native-reanimated,and others. Please Refer to other Screens of this App for more and specific information
            </p>
    `,
  },
  {
    id: 2,
    title: 'Reaquired Info for Stack',
    screen: 'DetailsScreen',
    htmlData: `<h1 style="font-size:2.5rem; color:#212121">Steps to follow:-</h1>
            <h2 style="color:#2E236C">1. Install Dependencies:</h2>
            <h3 style="color:#2E236C">Expo managed projects:</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">npx expo install react-native-screens react-native-safe-area-context</code>
            <h3 style="color:#2E236C">Bare React Native Projects:</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">npm install react-native-screens react-native-safe-area-context</code>
            <h2 style="color:#2E236C">or</h2>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">yarn add react-native-screens react-native-safe-area-context</code>
            <h2 style="color:#2E236C">2.Link Dependencies(Bare React Native only):</h2>
            <h3 style="color:#2E236C">Automatic linking is usually sufficient for newer React Native version(>=0.60).</h3>
            <h3 style="color:#2E236C">For Older version,manually link:</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">react-native link react-native-screens</code>
            <h2 style="color:#2E236C">and</h2>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">react-native link react-native-safe-area-context</code>
            <h2 style="color:#2E236C">3.Install Pods(IOS only):</h2>
            <h3 style="color:#2E236C">Navigate to your IOS project directory:</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">cd ios</code>
            <h3 style="color:#2E236C">Install pods:</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">pod install</code>
            <h3 style="color:#2E236C">Navigate back to your project root:</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">cd ..</code>
            <h2 style="color:#2E236C">4. Import Gesture Handler <span style="color:#F5004F">*(IMPORTANT):</span></h2>
            <h3 style="color:#2E236C">Import react-native-gesture-handler at the top of your entry file (e.g. index.js or App.js)</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">import 'react-native-gesture-handler</code>
            <h2 style="color:#2E236C">5. Install Additional Dependencies (Optional):</h2>
            <p style="font-size:1.5rem; font-weight:500;color:#352F44; text-align:justified">
              Depending on your navigation needs, you might install additional packages like react-native-gesture-handler, react-native-reanimated,and others. Please Refer to other Screens of this App for more and specific information
            </p>
    `,
  },
  {
    id: 3,
    title: 'Stack Installation Docs',
    screen: 'DetailsScreen',
    htmlData: `<h1 style="font-size:2.5rem; color:#212121">Steps to follow:-</h1>
            <h2 style="color:#2E236C">1. Install Dependencies:</h2>
            <h3 style="color:#2E236C">Expo managed projects:</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">npx expo install react-native-screens react-native-safe-area-context</code>
            <h3 style="color:#2E236C">Bare React Native Projects:</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">npm install react-native-screens react-native-safe-area-context</code>
            <h2 style="color:#2E236C">or</h2>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">yarn add react-native-screens react-native-safe-area-context</code>
            <h2 style="color:#2E236C">2.Link Dependencies(Bare React Native only):</h2>
            <h3 style="color:#2E236C">Automatic linking is usually sufficient for newer React Native version(>=0.60).</h3>
            <h3 style="color:#2E236C">For Older version,manually link:</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">react-native link react-native-screens</code>
            <h2 style="color:#2E236C">and</h2>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">react-native link react-native-safe-area-context</code>
            <h2 style="color:#2E236C">3.Install Pods(IOS only):</h2>
            <h3 style="color:#2E236C">Navigate to your IOS project directory:</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">cd ios</code>
            <h3 style="color:#2E236C">Install pods:</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">pod install</code>
            <h3 style="color:#2E236C">Navigate back to your project root:</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">cd ..</code>
            <h2 style="color:#2E236C">4. Import Gesture Handler <span style="color:#F5004F">*(IMPORTANT):</span></h2>
            <h3 style="color:#2E236C">Import react-native-gesture-handler at the top of your entry file (e.g. index.js or App.js)</h3>
            <code style="font-size:15px;color:#352F44; font-weight:600;border:1px solid #E2DAD6;padding:2%;">import 'react-native-gesture-handler</code>
            <h2 style="color:#2E236C">5. Install Additional Dependencies (Optional):</h2>
            <p style="font-size:1.5rem; font-weight:500;color:#352F44; text-align:justified">
              Depending on your navigation needs, you might install additional packages like react-native-gesture-handler, react-native-reanimated,and others. Please Refer to other Screens of this App for more and specific information
            </p>
    `,
  },
];

const StackDocsListScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <CardComponent
      title={item.title}
      onPress={() =>
        navigation.navigate(item.screen, {
          id: item.id,
          title: item.title,
          htmlData: item.htmlData,
          data: {DATA},
        })
      }
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#212121',
  },
});
export default StackDocsListScreen;
