import { DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack, ProfileStack } from './stack';
import { Image, Linking, View } from 'react-native';
import { Ionicons, EvilIcons, AntDesign } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
    return (
        <Drawer.Navigator
        >
            <Drawer.Screen
                name="HomeStack"
                component={HomeStack}
                options={{ title: 'Home', drawerIcon: () => <Ionicons name='home' size={22} /> }} />
        </Drawer.Navigator>
    );
}