import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';

const BottomTab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: '#850F8D',
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#212121',
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'cog' : 'cog-outline';
          }

          return (
            <MaterialCommunityIcons name={iconName} size={35} color={color} />
          );
        },
      })}>
      <BottomTab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
