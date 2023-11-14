import { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { RefreshControl } from "react-native-gesture-handler";
import MenuItem from "./menu-item";

const API_ENDPOINT = "http://192.168.0.138:8080/api/menus/"

const MenuList = ({ restaurantID }) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const handleRefresh = () => {
        console.log('refreshing')
        setIsLoading(prevState => !prevState)
    }


    useEffect(() => {
        fetchData()
    }, [isLoading])

    const fetchData = async () => {
        try {
            const response = await fetch(API_ENDPOINT + '?restaurant_id=' + restaurantID)
            const data = await response.json()
            setData(data)

        } catch (error) {
            console.error(error)
        }
    }


    const renderItem = ({ item }) => {
        return (
            <MenuItem img_url={item.img_url} name={item.name} price={item.price} />
        )
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

export default MenuList;