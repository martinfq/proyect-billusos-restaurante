import { Text, View, StyleSheet } from "react-native";
import RestaurantList from "../restaurants/restaurant-list";
import MenuList from "../menus/menu-list";

const MainSearch = ({ searchQuery, queryType }) => {
    return (
        <View style={styles.container}>
            <RestaurantList searchQuery={searchQuery} queryType={queryType} />
            <View style={styles.lineStyle} />
            <MenuList name={searchQuery} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        marginRight: 50,
        marginLeft: 50,
    }

})
export default MainSearch;