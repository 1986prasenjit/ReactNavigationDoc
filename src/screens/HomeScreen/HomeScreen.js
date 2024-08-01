import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import installImage from '../../assets/images/install.jpg';
import installImage1 from '../../assets/images/installs1.jpg';
import tabImg from '../../assets/images/tabNav.jpg';
import navImg from '../../assets/images/nav.jpg';
import {useNavigation} from '@react-navigation/native';
import DetailsScreen from '../DetailsScreen/DetailsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons
            name="menu"
            style={styles.navigationIcon}
          />
        </TouchableOpacity>
        <Text style={styles.navigationText}>React Navigation Docs</Text>
      </View>
      <View>
        <View style={styles.headerImageWrapper}>
          <ImageBackground
            blurRadius={8}
            source={navImg}
            style={styles.headerImage}>
            <Text style={styles.headerText}>React Native Navigation Doc</Text>
          </ImageBackground>
        </View>
        <Text
          style={styles.description}
          numberOfLines={7}
          onPress={() => navigation.navigate(DetailsScreen)}>
          React Navigation is a Popular Libary for Routing and Navigation in
          React Native applications both for IOS & Android.It Provides a
          Comprehensive and fexible way to navigate between the screens and
          manage the navigation state within your application.React Navigation
          READ MORE is widely used due to its ease of use, entensive
          documentation, and active community support.
        </Text>
      </View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesContainerText}>Categories</Text>
        <Text style={styles.categoriesContainerText}>See all</Text>
      </View>
      <View style={styles.docsContainer}>
        <View style={[styles.shadow, styles.categoriesImgContainer]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('InstallationListScreen')}>
            <Image source={installImage} style={styles.categoriesImg} />
          </TouchableOpacity>
          <Text style={styles.categoryText}>Installation</Text>
        </View>
        <View style={[styles.shadow, styles.categoriesImgContainer]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DrawerDocsListScreen')}>
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
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEDEB',
  },
  navigationContainer: {
    backgroundColor: '#850F8D',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flexStart',
    alignItems: 'center',
    height: 70,
    padding: 5,
  },
  navigationText: {
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  navigationIcon: {
    fontSize: 35,
    color: '#fff',
  },
  headerImageWrapper: {
    width: '95%',
    height: 150,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    zIndex: 100,
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#850F8D',
    textAlign: 'justify',
    letterSpacing: 0.2,
    marginHorizontal: 16,
    lineHeight: 25,
    width: '94%',
  },
  categoriesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
