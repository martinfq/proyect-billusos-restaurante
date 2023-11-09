import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Button } from "react-native";
import RestaurantList from "../components/restaurants/restaurant-list";

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={style.screen}>
            <RestaurantList />
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        padding: 20
    }
})
export default HomeScreen;