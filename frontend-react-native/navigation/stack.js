import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import RestaurantDetailScreen from '../screens/restaurant-details';
import RestaurantScreen from '../screens/restaurant';
import MenuDetailsScreen from '../screens/menu-details';

const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
            <Stack.Screen name="MenuDetail" component={MenuDetailsScreen} />
        </Stack.Navigator>
    );
}