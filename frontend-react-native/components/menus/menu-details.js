import { Text, View, Image, StyleSheet } from "react-native";

const MenuDetails = ({ img_url, name, price }) => {
    return (
        <View >
            <View style={{ alignItems: "center" }}>
                <Image
                    style={{ width: 300, height: 280, borderRadius: 10, marginBottom: 10 }}
                    source={{ uri: img_url }}
                    onError={() => console.log("Sin Imagen")}
                />
            </View>
            <View style={styles.lineStyle} />
            <View style={{ marginLeft: 30, marginTop: 20 }}>
                <Text style={{ fontSize: 27 }}>{name}</Text>
                <Text style={{ fontSize: 35 }}>${price}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    searchbar: {
        alignContent: 'space-around',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        marginRight: 30,
        marginLeft: 30,
    }

})
export default MenuDetails;