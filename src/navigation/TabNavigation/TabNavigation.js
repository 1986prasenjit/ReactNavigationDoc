import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';

const BottomTab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown:false}}>
      <BottomTab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
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
