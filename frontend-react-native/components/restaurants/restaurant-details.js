import { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";
import { RefreshControl } from "react-native-gesture-handler";
import MenuList from "../menus/menu-list";

const RestaurantDetails = ({ restaurantID, name, logo_url, restaurant_type }) => {
    return (
        <View >
            <View style={{ alignItems: "center", marginTop: 30 }}>
                <Image
                    style={{ width: 140, height: 140, borderRadius: 25 }}
                    source={{ uri: logo_url }}
                    onError={() => console.log("Sin Imagen")}
                />
                <View style={{ alignItems: "center", marginBottom: 20 }}>
                    <Text style={{ fontSize: 37 }}>{name}</Text>
                    <Text style={{ fontSize: 15 }}>{restaurant_type}</Text>
                </View>
            </View>
            <View style={styles.lineStyle} />
            <Text style={{ fontSize: 27, marginTop: 20, marginLeft: 24 }}>Más Vendidos</Text>
            <MenuList restaurantID={restaurantID} />
        </View>
    );
}
const styles = StyleSheet.create({
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        marginRight: 50,
        marginLeft: 50,
    }

})
export default RestaurantDetails;