import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const IOSInstallScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>IOSInstallScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        color:"#212121"
    }
})
export default IOSInstallScreen