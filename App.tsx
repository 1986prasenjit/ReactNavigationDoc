

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigation/DrawerNavigator';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(){
    <View>
      <Text style={styles.heading}>Drawer Menu</Text>
    </View>
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
