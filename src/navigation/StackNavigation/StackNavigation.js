import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../../screens/DetailsScreen/DetailsScreen';
const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="React Navigation Docs" 
        component={HomeScreen}
        options={{
          headerShown:true,
          headerStyle:{
            backgroundColor: `rgba(90,90,250,0.8)`,
          },
          headerTintColor:"#fff",
        }}
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
