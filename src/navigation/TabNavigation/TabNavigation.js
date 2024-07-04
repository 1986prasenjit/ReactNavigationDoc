import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigation from '../StackNavigation/StackNavigation';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={StackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return (
              <MaterialCommunityIcons
                name="cog"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
