import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigation from '../StackNavigation/StackNavigation';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';

const BottomTab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={StackNavigation} />
      <BottomTab.Screen name="Settings" component={SettingsScreen} />
    </BottomTab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
