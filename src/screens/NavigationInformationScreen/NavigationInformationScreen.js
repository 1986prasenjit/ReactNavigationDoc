import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import RenderHTML from 'react-native-render-html';

const source = {
  html: `<p style="font-size:25px;text-align:justify;color:#212121, font-weight:500">
            React Navigation is a Popular Libary for Routing and Navigation in React Native applications both for IOS & Android.It Provides a Comprehensive and fexible way to navigate between the screens and manage the navigation state within your application.React Navigation is widely used due to its ease of use, entensive documentation, and active community support.
          </p>`,
};

const NavigationInformationScreen = () => {
  return (
    <View style={styles.container}>
      <RenderHTML contentWidth={useWindowDimensions().width} source={source} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    marginRight: 8,
    width: '95%',
  },
});
export default NavigationInformationScreen;
