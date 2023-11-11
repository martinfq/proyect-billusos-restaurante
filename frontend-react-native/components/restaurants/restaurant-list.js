import { Text, View, FlatList } from "react-native";
import { restaurantData } from "../../example-data";
import { RefreshControl } from "react-native-gesture-handler";
import RestaurantItem from "./restaurant-item";
import { useEffect, useState } from "react";

const API_ENDPOINT = "http://127.0.0.1:8081/api/restaurants/"

const text = 'tacos/'

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
            const response = await fetch(API_ENDPOINT + searchQuery)
            const data = await response.json()
            console.log(data)
            setData(data)

        } catch (error) {
            console.error(error)
        }
    }


    const renderItem = ({ item }) => {
        return <RestaurantItem id={item.id} name={item.name} />
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