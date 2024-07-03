import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../../screens/DetailsScreen/DetailsScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator headerTitle="">
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{headerShown:false}}
        />
      <Stack.Screen 
        name="DetailsScreen" 
        component={DetailsScreen} 
        options={{headerShown:false}}
        />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
