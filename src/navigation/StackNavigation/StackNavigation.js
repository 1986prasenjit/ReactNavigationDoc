import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../../screens/DetailsScreen/DetailsScreen';
import InstallationListScreen from '../../screens/InstallationListScreen/InstallationListScreen';
import TabNavigation from '../TabNavigation/TabNavigation';
import DrawerDocsListScreen from '../../screens/DrawerDocsListScreen/DrawerDocsListScreen';
import NavigationInformationScreen from '../../screens/NavigationInformationScreen/NavigationInformationScreen';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';
import StackDocsListScreen from '../../screens/StackDocsListScreen/StackDocsListScreen';
import TabDocsListScreen from '../../screens/TabDocsListScreen/TabDocsListScreen';
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
          name='SpalshScreen'
          component={SplashScreen}
          options={{
            headerShown:false
          }}
        />
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
        name="DrawerDocsListScreen"
        component={DrawerDocsListScreen}
        options={{
          headerTitle: 'Drawer Installation Screen',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name='StackDocsListScreen'
        component={StackDocsListScreen}
        options={{
          headerShown:true,
          headerTitle:"Stack Installation Screen"
        }}
      />
      <Stack.Screen
        name='TabDocsListScreen'
        component={TabDocsListScreen}
        options={{
          headerShown:true,
          headerTitle:"Tab List Screen"
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
      <Stack.Screen
        name='NavigationInformationScreen'
        component={NavigationInformationScreen}
        options={{
          headerShown:true,
          headerTitle:"React Navigation History"
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
