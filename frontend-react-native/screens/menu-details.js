import { useRoute } from "@react-navigation/native";
import MenuDetails from "../components/menus/menu-details";
const MenuDetailsScreen = () => {
    const route = useRoute()
    const { img_url, name, price } = route.params

    return (
        <MenuDetails img_url={img_url} name={name} price={price} />
    );
}

export default MenuDetailsScreen;