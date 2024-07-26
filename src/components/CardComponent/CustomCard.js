import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomCard = ({title, onPress}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.docsContainerWrapper}>
        <View style={[styles.docsContainer, styles.elevateCard]}>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.docsItems}>
              <Text style={styles.text}>{title}</Text>
              <MaterialCommunityIcons
                name="arrow-right-thin"
                size={20}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  docsContainerWrapper: {
    width: '100%',
    padding: 10,
  },
  docsContainer: {
    width: '100%',
    height: 50,
    padding: 10,
    marginVertical: 10,
  },
  docsItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#850F8D',
    marginLeft: 10,
  },
  elevateCard: {
    elevation: 5,
    backgroundColor: '#F5F7F8',
    borderRadius: 10,
  },
  icon: {
    color: '#850F8D',
  },
});

export default CustomCard;
