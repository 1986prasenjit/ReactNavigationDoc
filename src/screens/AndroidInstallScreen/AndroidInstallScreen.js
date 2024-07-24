import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AndroidInstallScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Android Install Screen</Text>
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
export default AndroidInstallScreen