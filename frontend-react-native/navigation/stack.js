import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export const HomeStack = () => {
    const navigation = useNavigation()
    return (
        <Stack.Navigator screenOptions={() => navOptions(navigation)}>
            <Stack.Screen name="Home" component={HomeTabs} />
        </Stack.Navigator>
    );
}