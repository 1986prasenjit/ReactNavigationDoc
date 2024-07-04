import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>MessageScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default MessageScreen;
