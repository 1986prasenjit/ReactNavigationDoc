import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigation from '../StackNavigation/StackNavigation';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';

const BottomTab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen 
      name="Home" 
      component={StackNavigation} 
      options={{headerShown:false}}
      />
      <BottomTab.Screen 
      name="Settings" 
      component={SettingsScreen} 
      options={{headerShown:false}}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
