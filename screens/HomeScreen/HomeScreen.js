import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>HomeScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center"
  },
  headingText:{
      fontSize:20,
      fontWeight:"bold",
      color:"#000"
  }
})

export default HomeScreen