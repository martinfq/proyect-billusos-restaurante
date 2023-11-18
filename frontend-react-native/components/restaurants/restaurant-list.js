import { Text, View, FlatList, StyleSheet } from "react-native";
import { restaurantData } from "../../example-data";
import { RefreshControl } from "react-native-gesture-handler";
import RestaurantItem from "./restaurant-item";
import { useEffect, useState } from "react";

const API_ENDPOINT = "http://192.168.0.138:8080/api/"

const RestaurantList = ({ searchQuery, queryType }) => {


    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    //console.log(searchQuery)

    const handleRefresh = () => {
        console.log('refreshing')
        setRefresh(prevState => !prevState)
    }


    useEffect(() => {
        if (isLoading) {
            fetchDataAndType();
        }
    }, [isLoading, refresh])

    const fetchDataAndType = async () => {
        try {
            // Fetch data
            const response = await fetch(API_ENDPOINT + "all-restaurants/");
            const data = await response.json();
            let newData = data
            if (searchQuery && queryType === "name") {
                newData = data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
            }
            if (searchQuery && queryType === "type") {
                newData = data.filter(item => item.restaurant_type === searchQuery);
            }
            setData(newData);

            // Fetch type
            let updatedData = [];
            for (const item of newData) {
                try {
                    const typeResponse = await fetch(API_ENDPOINT + "food-type/" + item.restaurant_type);
                    const typeData = await typeResponse.json();
                    item["restaurant_type"] = typeData.name;
                    updatedData.push(item);
                } catch (error) {
                    console.error(error);
                }
            }

            setData(updatedData);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    const renderItem = ({ item }) => {
        return <RestaurantItem id={item.id} name={item.name} logo_url={item.logo_url} restaurant_type={item.restaurant_type} num_menus={item.num_menus} />
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Restaurantes encontrados: {'\t'}{data.length}</Text>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={handleRefresh}
                    />
                }
                style={styles.list}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
    },
    text: {
        fontSize: 20,
        marginLeft: 20
    },
    list: {
        padding: 15,
        marginVertical: 0,
    }
})
export default RestaurantList;