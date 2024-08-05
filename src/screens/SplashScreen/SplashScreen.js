import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import HomeScreen from '../HomeScreen/HomeScreen';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("HomeStack");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={"#850F8D"}/>
      <Image
        source={require('../../assets/images/react-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>React Navigation App</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#850F8D',
  },
  logo:{
    width:"70%",
    height:"30%"
  },
  text: {
    fontSize: 25,
    color: '#fff',
    fontFamily: 'Mukta-Bold',
    fontWeight:"800"
  },
});
export default SplashScreen;
