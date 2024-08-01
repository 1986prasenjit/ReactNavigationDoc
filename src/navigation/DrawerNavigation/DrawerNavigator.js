import {createDrawerNavigator} from '@react-navigation/drawer';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';
import StackNavigation from '../StackNavigation/StackNavigation';
import DetailsScreen from '../../screens/DetailsScreen/DetailsScreen';
import JoinTeam from '../../screens/JoinOurTeamScreen/JoinTeam';
import MessageScreen from '../../screens/MessageScreen/MessageScreen';
import CustomDrawer from '../../components/CustomDrawerComponent/CustomDrawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AboutScreen from '../../screens/AboutUsScreen/AboutScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerStyle: {
        backgroundColor: '#850F8D',
      },
      headerTintColor: '#fff',
      drawerActiveBackgroundColor:`rgba(90,90,250,0.8)`,
      drawerActiveTintColor:"#fff",
      drawerInactiveTintColor:"#212121",
      headerShown:false,
      drawerLabelStyle:
      {
        marginLeft:-25,
        fontSize:15,
        fontWeight:"bold"
      }
    }}>
      <Drawer.Screen
        name="Home"
        component={StackNavigation}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons name="home" size={15} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About Us"
        component={AboutScreen}
        options={{
          headerShown:true,

          drawerIcon: ({color}) => (
            <MaterialCommunityIcons
              name="information-variant"
              size={15}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Join Our Team"
        component={JoinTeam}
        options={{
          headerShown:true,
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-group"
              size={15}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact Us"
        component={MessageScreen}
        options={{
          headerShown:true,
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons name="headphones" size={15} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown:true,
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons name="cog" size={15} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
