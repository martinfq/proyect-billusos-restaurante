import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
const TypeItem = ({ name, id }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Restaurant', { query: id, queryType: "type" })}>
            <View >
                <Text>{name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#c5c5c5',
        borderRadius: 10,
        marginVertical: 5,
        padding: 15,
        marginTop: 15,
        flexWrap: "wrap",
    },

})

export default TypeItem;