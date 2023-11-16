import { useRoute } from "@react-navigation/native";
import MenuList from "../components/menus/menu-list";
import React from "react";
import RestaurantDetails from "../components/restaurants/restaurant-details";


const RestaurantDetailScreen = ({ navigation }) => {
    const route = useRoute()
    const { restaurantID, name, logo_url, restaurant_type } = route.params

    React.useLayoutEffect(() => {
        navigation.setOptions({ title: name ? name : "Restaurant" });
    }, [navigation])

    return (
        <RestaurantDetails restaurantID={restaurantID} name={name} logo_url={logo_url} restaurant_type={restaurant_type} />
    );
}

export default RestaurantDetailScreen;