import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import RestaurantDetailScreen from '../screens/restaurant-details';
import RestaurantScreen from '../screens/restaurant';
import MenuDetailsScreen from '../screens/menu-details';
import MainSearchScreen from '../screens/main-search';

const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MainSearch" component={MainSearchScreen} />
            <Stack.Screen
                name="Restaurant"
                component={RestaurantScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#3498db', // Cambia el color del encabezado (header)
                    },
                    cardStyle: { backgroundColor: '#fff' }, // Cambia el color de fondo de la pantalla
                }}
            />
            <Stack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#3498db', // Cambia el color del encabezado (header)
                    },
                    cardStyle: { backgroundColor: '#fff' }, // Cambia el color de fondo de la pantalla
                }} />

            <Stack.Screen
                name="MenuDetail"
                component={MenuDetailsScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#3498db', // Cambia el color del encabezado (header)
                    },
                    cardStyle: { backgroundColor: '#fff' }, // Cambia el color de fondo de la pantalla
                }} />
        </Stack.Navigator>
    );
}