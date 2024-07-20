import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import installImage from '../../assets/images/install.jpg';
import installImage1 from '../../assets/images/installs1.jpg';
import tabImg from '../../assets/images/tabNav.jpg';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesContainerText}>Categories</Text>
        <Text style={styles.categoriesContainerText}>See all</Text>
      </View>
      <View style={styles.docsContainer}>
        <View style={[styles.shadow, styles.categoriesImgContainer]}>
          <TouchableOpacity>
            <Image source={installImage} style={styles.categoriesImg} />
          </TouchableOpacity>
          <Text style={styles.categoryText}>Installation</Text>
        </View>
        <View style={[styles.shadow, styles.categoriesImgContainer]}>
          <TouchableOpacity>
            <Image source={installImage1} style={styles.categoriesImg} />
          </TouchableOpacity>
          <Text style={styles.categoryText}>Drawer Navigation</Text>
        </View>
        <View style={[styles.shadow, styles.categoriesImgContainer]}>
          <TouchableOpacity>
            <Image source={tabImg} style={styles.categoriesImg} />
          </TouchableOpacity>
          <Text style={styles.categoryText}>Tab Navigation</Text>
        </View>
        <View style={[styles.shadow, styles.categoriesImgContainer]}>
          <TouchableOpacity>
            <Image source={installImage} style={styles.categoriesImg} />
          </TouchableOpacity>
          <Text style={styles.categoryText}>Stack Navigation</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEEDEB',
  },
  categoriesContainer: {
    flexDirection: 'row',
    gap: 200,
    marginBottom: 10,
  },
  categoriesContainerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
    color: '#850F8D',
  },
  docsContainer: {
    alignContent: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    padding: 10,
  },
  categoriesImgContainer: {
    paddingBottom: 5,
    marginBottom: 10,
  },
  categoriesImg: {
    width: 185,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#850F8D',
    textAlign: 'center',
  },
  shadow: {
    elevation: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default HomeScreen;
