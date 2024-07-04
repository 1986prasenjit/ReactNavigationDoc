import { createDrawerNavigator } from "@react-navigation/drawer";
import { Draweritem } from "@react-navigation/drawer";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import SettingsScreen from "../../screens/SettingsScreen/SettingsScreen";
import TabNavigation from "../TabNavigation/TabNavigation";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="Home" 
        component={TabNavigation}
        options={{
          headerTitle:"React Native Docs",
          headerStyle:{
            backgroundColor: `rgba(90,90,250,0.8)`,
          },
          headerTintColor:"#fff",
        }}
        />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
