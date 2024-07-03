import { createDrawerNavigator } from "@react-navigation/drawer";
import { Draweritem } from "@react-navigation/drawer";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import SettingsScreen from "../../screens/SettingsScreen/SettingsScreen";
import TabNavigation from "../TabNavigation/TabNavigation";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerHome" component={TabNavigation}/>
      <Drawer.Screen name="DrawerSettings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
