import {StyleSheet, View, ScrollView, useWindowDimensions} from 'react-native';
import React from 'react';
import RenderHTML from 'react-native-render-html';

const DetailsComponent = ({htmlData}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <RenderHTML contentWidth={useWindowDimensions().width} source={{html:htmlData}}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
  },
});
export default DetailsComponent;
