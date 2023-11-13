import { useRoute } from "@react-navigation/native";
import MenuDetails from "../components/menus/menu-details";
const MenuDetailsScreen = () => {
    const route = useRoute()

    return (
        <MenuDetails />
    );
}

export default MenuDetailsScreen;