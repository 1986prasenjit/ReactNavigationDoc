import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DetailsComponent from '../../components/DetailsComponent/DetailsComponent';

const DetailsScreen = ({route}) => {
  const {htmlData} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.headingTextContainer}>
        <DetailsComponent htmlData={htmlData}/>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headingTextContainer: {
    padding: 8,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#201E43',
    textAlign: 'justify',
    marginHorizontal: 6,
    lineHeight: 30,
  },
});
