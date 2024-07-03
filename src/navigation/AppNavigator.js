import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './DrawerNavigation/DrawerNavigator'

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})