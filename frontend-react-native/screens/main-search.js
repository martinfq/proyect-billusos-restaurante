import MainSearch from "../components/full-search/main-search";
import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import RestaurantList from "../components/restaurants/restaurant-list";

const MainSearchScreen = ({ navigation }) => {
    const route = useRoute()
    const { query, queryType } = route.params ? route.params : ""

    React.useLayoutEffect(() => {
        navigation.setOptions({ title: query ? query : "Los más visitados" });
    }, [navigation])

    return (
        query ? <MainSearch searchQuery={query} queryType={queryType} /> : <RestaurantList searchQuery={query} queryType={queryType} />
    );
}

export default MainSearchScreen;