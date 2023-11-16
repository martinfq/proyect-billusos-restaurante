import { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { RefreshControl } from "react-native-gesture-handler";
import MenuItem from "./menu-item";

const API_ENDPOINT = "http://192.168.0.138:8080/api/menus/"

const MenuList = ({ restaurantID, name }) => {

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
            let urlParam = ""
            if (restaurantID) {
                urlParam = '?restaurant_id=' + restaurantID
            }
            if (name) {
                urlParam = '?name=' + name
            }
            const response = await fetch(API_ENDPOINT + urlParam)
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