import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RestaurantItem = ({ id, name, logo_url, restaurant_type }) => {
    const navigation = useNavigation()
    return (
        <View style={{ marginVertical: 5 }}>
            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('RestaurantDetail', { restaurantID: id, name, logo_url, restaurant_type })}
            >
                <View style={{ justifyContent: "space-around", flexDirection: "row", alignItems: "center" }}>
                    <Image
                        style={{ width: 80, height: 80, borderRadius: 25 }}
                        source={{ uri: logo_url }}
                        onError={() => console.log("Sin Imagen")}
                    />
                    <View>
                        <Text style={{ fontSize: 25 }}>{name}</Text>
                        <Text style={{ fontSize: 15 }}>{restaurant_type}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 10,
        padding: 20,
        backgroundColor: '#f4f4f4',
    }
})
export default RestaurantItem;