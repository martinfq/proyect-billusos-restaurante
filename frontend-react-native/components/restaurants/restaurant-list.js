import { Text, View, FlatList } from "react-native";
import { restaurantData } from "../../example-data";
import { RefreshControl } from "react-native-gesture-handler";
import RestaurantItem from "./restaurant-item";
import { useEffect, useState } from "react";

const API_ENDPOINT = "http://192.168.0.138:8080/api/"

let fetchUrl = "restaurants/"


const RestaurantList = ({ searchQuery }) => {


    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    console.log(searchQuery)

    const handleRefresh = () => {
        console.log('refreshing')
        setIsLoading(prevState => !prevState)
    }


    useEffect(() => {
        fetchData()
    }, [isLoading])

    const fetchData = async () => {
        try {
            if (searchQuery === "") {
                fetchUrl = "all-restaurants/"
            }
            const response = await fetch(API_ENDPOINT + fetchUrl + searchQuery)
            const data = await response.json()
            setData(data)

        } catch (error) {
            console.error(error)
        }
    }


    const renderItem = ({ item }) => {
        return <RestaurantItem id={item.id} name={item.name} logo_url={item.logo_url} restaurant_type={item.restaurant_type} />
    }
    return (
        <View>
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
            />
        </View>
    );
}

export default RestaurantList;