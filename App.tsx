

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(){
  return(
    <View>
      <Text style={styles.heading}>Hello There</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  heading:{
      marginTop:20,
      textAlign:"center",
      fontSize:15,
      fontWeight:"900"
  }
});

export default App;
