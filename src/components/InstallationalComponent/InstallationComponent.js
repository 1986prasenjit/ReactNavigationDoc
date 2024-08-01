import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InstallationComponent = ({data}) => {
  // Check if data is an array and has at least one element (to avoid potential errors)
  if (Array.isArray(data) && data.length > 0) {
    const firstItem = data[0]; // Get the first element

    // If the first element is a string, render it as plain text
    if (typeof firstItem === 'string') {
      return <Text style={styles.textContent}>{firstItem}</Text>;
    } else {
      // Otherwise, assume it's an array and render steps
      return (
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.textContent}>Steps:</Text>
            {data.map((item, index) => (
              <View key={index} style={styles.itemsContainer}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={[styles.contentText]}>{item.content}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      );
    }
  } else {
    // Handle the case where data is not an array or is empty
    return <Text>No data provided</Text>; // Or any appropriate message
  }
};

const styles = StyleSheet.create({
  textContent: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#201E43',
    textAlign: 'justify',
    marginHorizontal: 6,
    lineHeight: 30,
  },
  container: {
    marginTop: 10,
  },
  itemsContainer:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  titleText:{
    fontSize:18,
    color: '#201E43',
    fontWeight:"500"
  },
  contentText:{
    fontSize:15,
    color: '#201E43',
    fontWeight:"500",
    borderWidth:1,
    borderColor:"#5F6F65",
    margin:10,
  }
});

export default InstallationComponent;
