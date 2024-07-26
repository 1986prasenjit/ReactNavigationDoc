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
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen 
        name="HomeScreen" 
        component={TabNavigation}
        />
        <Stack.Screen
          name='InstallationListScreen'
          component={InstallationListScreen}
          options={{
            headerTintColor:'#850F8D',
            headerShown:true,
            headerTitle: "Installation List Screen"
          }}
        />
        <Stack.Screen
          name='IOSInstallScreen'
          component={IOSInstallScreen}
          options={{
            headerTintColor:"#850F8D",
            headerShown:true,
            headerTitle:"IOS Install Screen"
          }}
        />
        <Stack.Screen
          name='AndroidInstallScreen'
          component={AndroidInstallScreen}
          options={{
            headerTintColor:"#850F8D",
            headerTitle:"Android Install Screen",
            headerShown:true
          }}
        />
        <Stack.Screen
          name='DrawerDocsListScreen'
          component={DrawerDocsListScreen}
          options={{
            headerTintColor:"#850F8D",
            headerTitle:"Drawer Installation Guide",
            headerShown:true
          }}
        />
        <Stack.Screen
          name='DrawerInstallationInformation'
          component={DrawerInstallationInformation}
          options={{
            headerTintColor:"#850F8D",
            headerTitle:"Drawer Installation Details",
            headerShown:true
          }}
        />
        <Stack.Screen
          name='ReanimatedInstallationDocs'
          component={ReanimatedInstallationDocs}
          options={{
            headerTintColor:"#850F8D",
            headerTitle:"Reanimated Installation Details",
            headerShown:true
          }}
        />
        <Stack.Screen 
          name='DrawerInstallationDocs'
          component={DrawerInstallationDocs}
          options={{
            headerTintColor:"#850F8D",
            headerTitle:"Drawer Installation Procees",
            headerShown:true
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
