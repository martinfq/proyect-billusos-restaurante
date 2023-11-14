import { StyleSheet, View } from "react-native";
import RestaurantList from "../components/restaurants/restaurant-list";
import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";

const RestaurantScreen = ({ navigation }) => {

    const route = useRoute()
    const { query, queryType } = route.params ? route.params : ""

    React.useLayoutEffect(() => {
        navigation.setOptions({ title: query ? query : "Los mas visitados" });
    }, [navigation])

    return (
        <View style={style.screen}>
            <RestaurantList searchQuery={query} queryType={queryType} />
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        padding: 20
    }
})
export default RestaurantScreen;