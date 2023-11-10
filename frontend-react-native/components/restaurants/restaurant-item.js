import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const RestaurantItem = ({ id, name }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RestaurantDetail', { restaurantID: id })} >
            <Text>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 30
    }
})
export default RestaurantItem;