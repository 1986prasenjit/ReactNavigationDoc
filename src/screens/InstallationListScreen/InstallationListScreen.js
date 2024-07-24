import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomCard from '../../components/CardComponent/CustomCard';


const DATA = [
  { id: '1', title: 'Install Docs for IOS', screen: 'IOSInstallScreen' },
  { id: '2', title: 'Install Docs for Android', screen: 'AndroidInstallScreen' },
];

const InstallationListScreen = () => {
  const navigation = useNavigation();

  const renderItem =({item})=> (
      <CustomCard 
          title = {item.title}
          onPress={()=> navigation.navigate(item.screen)}
      />
  )
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"#f1f1f1",
    
  }
})
export default InstallationListScreen;
