import { StyleSheet, View } from "react-native";
import RestaurantList from "../components/restaurants/restaurant-list";

const RestaurantScreen = () => {
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
export default RestaurantScreen;