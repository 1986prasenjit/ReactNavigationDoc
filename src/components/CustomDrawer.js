import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function CustomDrawer(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: `#8200d6`}}>
        <ImageBackground
          style={{padding: 15}}
          source={require('../assets/images/menu-bg.jpeg')}>
          <Image
            source={require(`../assets/images/user-profile.jpg`)}
            style={styles.userProfileImg}
          />
          <Text style={styles.userInfo}>PrashenJeet Roy</Text>
          <Text style={styles.userInfo}>Contributer</Text>
        </ImageBackground>
        <View style={styles.drawerItems}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.drawerBottomItems}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.drawerBottomItemsView}>
            <MaterialCommunityIcons name="share-variant" size={20} />
            <Text style={styles.drawerBottomText}>Share with your Friends</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical:20}}>
          <View style={styles.drawerBottomItemsView}>
            <MaterialCommunityIcons name="logout" size={20} />
            <Text style={styles.drawerBottomText}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CustomDrawer;

const styles = StyleSheet.create({
  userProfileImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userInfo: {
    color: '#fff',
    fontWeight: 'bold',
  },
  drawerItems: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  drawerBottomItems: {
    borderTopWidth: 2,
    borderTopColor: '#212121',
    padding: 20,
  },
  drawerBottomText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#212121',
    marginHorizontal: 10,
  },
  drawerBottomItemsView: {
    flexDirection: 'row',
  },
});
