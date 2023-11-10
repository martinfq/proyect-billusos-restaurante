import { Text, View, FlatList } from "react-native";
import { restaurantData } from "../../example-data";
import { RefreshControl } from "react-native-gesture-handler";
import RestaurantItem from "./restaurant-item";

const RestaurantList = () => {
    const renderItem = ({ item }) => {
        return <RestaurantItem id={item.id} name={item.name} />
    }
    return (
        <View>
            <FlatList
                data={restaurantData}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={() => console.log('refreshing .. ')}
                    />
                }
            />
        </View>
    );
}

export default RestaurantList;