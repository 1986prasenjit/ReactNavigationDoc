import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

function App() {
  <View>
    <Text style={styles.heading}>React Navigation Docs</Text>
  </View>;
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '900',
  },
});

export default App;
