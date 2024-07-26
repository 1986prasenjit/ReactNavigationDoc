import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DrawerInstallationInformation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Drawer Installation Information</Text>
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
        fontSize:24,
        fontWeight:"bold",
        color:"#212121"
    }
})


export default DrawerInstallationInformation