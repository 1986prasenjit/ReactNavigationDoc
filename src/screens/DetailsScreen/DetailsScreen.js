import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>DetailsScreen</Text>
    </View>
  )
}

export default DetailsScreen

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