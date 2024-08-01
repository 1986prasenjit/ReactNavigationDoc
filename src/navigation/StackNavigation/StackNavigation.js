import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../../screens/DetailsScreen/DetailsScreen';
import InstallationListScreen from '../../screens/InstallationListScreen/InstallationListScreen';
import IOSInstallScreen from '../../screens/IOSInstallScreen/IOSInstallScreen';
import AndroidInstallScreen from '../../screens/AndroidInstallScreen/AndroidInstallScreen';
import TabNavigation from '../TabNavigation/TabNavigation';
import DrawerDocsListScreen from '../../screens/DrawerDocsListScreen/DrawerDocsListScreen';
import DrawerInstallationInformation from '../../screens/DrawerInstallationInformation/DrawerInstallationInformation';
import ReanimatedInstallationDocs from '../../screens/ReanimatedInstallationDocs/ReanimatedInstallationDocs';
import DrawerInstallationDocs from '../../screens/DrawerInstallationDocs/DrawerInstallationDocs';
const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      headerStyle:{
        backgroundColor:"#850F8D",
      },
      headerTintColor:"#fff"
      }}>
      <Stack.Screen
        name="HomeStack"
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="InstallationListScreen"
        component={InstallationListScreen}
        options={{
          headerShown: true,
          headerTitle: 'Installation List Screen',
        }}
      />
      <Stack.Screen
        name="IOSInstallScreen"
        component={IOSInstallScreen}
        options={{
          headerShown: true,
          headerTitle: 'IOS Install Screen',
        }}
      />
      <Stack.Screen
        name="AndroidInstallScreen"
        component={AndroidInstallScreen}
        options={{
          headerTitle: 'Android Install Screen',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="DrawerDocsListScreen"
        component={DrawerDocsListScreen}
        options={{
          headerTitle: 'Drawer Installation Guide',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="DrawerInstallationInformation"
        component={DrawerInstallationInformation}
        options={{
          headerTitle: 'Drawer Installation Details',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="ReanimatedInstallationDocs"
        component={ReanimatedInstallationDocs}
        options={{
          headerTitle: 'Reanimated Installation Details',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="DrawerInstallationDocs"
        component={DrawerInstallationDocs}
        options={{
          headerTitle: 'Drawer Installation Procees',
          headerShown: true,
        }}
      />
      <Stack.Screen 
        name="DetailsScreen" 
        component={DetailsScreen} 
        options={{
          headerTitle:"Details Screen",
          headerShown:true
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
