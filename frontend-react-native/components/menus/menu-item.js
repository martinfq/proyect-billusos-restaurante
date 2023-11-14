import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MenuItem = ({ img_url, name, price }) => {
    const navigation = useNavigation()
    return (
        <View style={{ justifyContent: "space-around", alignItems: "center" }}>
            <Text style={{ fontSize: 27, marginTop: 20 }}>Más Vendidos</Text>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MenuDetail')} >
                <View style={{ alignItems: "center" }}>
                    <Image
                        style={{ width: 80, height: 80, borderRadius: 25 }}
                        source={{ uri: img_url }}
                        onError={() => console.log("Sin Imagen")}
                    />
                    <View>
                        <Text style={{ fontSize: 17 }}>{name}</Text>
                        <Text style={{ fontSize: 15 }}>{price}</Text>
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
        marginVertical: 5,
        padding: 15,
        width: 150,
        marginTop: 15
    }
})

export default MenuItem;