import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomDetails = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingTextContainer}>
        <Text style={styles.headingText}>{data}</Text>
      </View>
    </View>
  );
};

export default CustomDetails;

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
