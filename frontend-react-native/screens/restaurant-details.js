import { useRoute } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";

const RestaurantDetailScreen = () => {
    const route = useRoute()

    const { restaurantID } = route.params

    return (
        <View style={style.screen}>
            <Text>this is the Restaurant detail Screen for {restaurantID}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        padding: 20
    }
})
export default RestaurantDetailScreen;