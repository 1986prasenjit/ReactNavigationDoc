import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../../screens/DetailsScreen/DetailsScreen';
import InstallationListScreen from '../../screens/InstallationListScreen/InstallationListScreen';
import IOSInstallScreen from '../../screens/IOSInstallScreen/IOSInstallScreen';
import AndroidInstallScreen from '../../screens/AndroidInstallScreen/AndroidInstallScreen';
const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen
          name='InstallationListScreen'
          component={InstallationListScreen}
          options={{
            headerTintColor:'#850F8D',
          }}
        />
        <Stack.Screen
          name='IOSInstallScreen'
          component={IOSInstallScreen}
          options={{
            headerTintColor:"#850F8D"
          }}
        />
        <Stack.Screen
          name='AndroidInstallScreen'
          component={AndroidInstallScreen}
          options={{
            headerTintColor:"#850F8D"
          }}
        />
      <Stack.Screen 
        name="DetailsScreen" 
        component={DetailsScreen}
        />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
