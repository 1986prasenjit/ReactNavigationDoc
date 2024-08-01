import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingTextContainer}>
        <Text style={styles.headingText}>
          We are a team of passionate React Native developers commited to
          crafting exceptional mobile experience. As dedicated freelancers, we
          specialise in building robust and scalable apps tailored to your
          unique needs. Beyond our professional services, we believe in
          fostering the growth of the React Native community. That's why we
          offer a collection of free apps designed to empower aspiring
          developers and showcase the potential of this powerful framework. Join
          us in our mission to create innovative apps and support the next
          generation of React Native talent. Let's build something amazing
          together!
        </Text>
      </View>
    </View>
  );
};
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
    fontWeight: '500',
    color: '#201E43',
    textAlign: 'justify',
    // marginHorizontal: 6,
    lineHeight: 30,
  },
});
export default AboutScreen;
