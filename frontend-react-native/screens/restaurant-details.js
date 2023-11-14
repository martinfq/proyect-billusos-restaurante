import { useRoute } from "@react-navigation/native";
import MenuList from "../components/menus/menu-list";



const RestaurantDetailScreen = () => {
    const route = useRoute()
    const { restaurantID } = route.params

    return (
        <MenuList restaurantID={restaurantID} />
    );
}

export default RestaurantDetailScreen;