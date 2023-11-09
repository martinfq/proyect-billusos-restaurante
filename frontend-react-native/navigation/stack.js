import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import RestaurantDetailScreen from '../screens/restaurant-details';

const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantDetailScreen} />
        </Stack.Navigator>
    );
}