import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import CustomDetails from '../../components/DetailsComponent/CustomDetails';

const DetailsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomDetails
          data="React Navigation is a Popular Libary for Routing and Navigation inReact Native applications both for IOS & Android.It Provides a Comprehensive and fexible way to navigate between the screens and manage the navigation state within your application.React Navigation is widely used due to its ease of use, entensive documentation, and active community support."
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
});
export default DetailsScreen;
