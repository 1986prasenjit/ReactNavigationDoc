

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigation/DrawerNavigator';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(){
  return(
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  heading:{
      marginTop:20,
      textAlign:"center",
      fontSize:15,
      fontWeight:"900"
  }
});

export default App;
