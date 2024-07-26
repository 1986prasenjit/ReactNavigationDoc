import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import CustomCard from '../../components/CardComponent/CustomCard';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    title: 'Drawer Installation Information',
    screen: 'DrawerInstallationInformation',
  },
  {
    id: 2,
    title: 'Reanimated Installation Docs',
    screen: 'ReanimatedInstallationDocs',
  },
  {
    id: 3,
    title: 'Drawer Installation Docs',
    screen: 'DrawerInstallationDocs',
  },
];

const DrawerDocsListScreen = () => {
    const navigation = useNavigation();
  const renderItem = ({item}) => (
    <CustomCard
      title={item.title}
      onPress={() => navigation.navigate(item.screen)}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#f1f1f1", 
  }
});
export default DrawerDocsListScreen;
