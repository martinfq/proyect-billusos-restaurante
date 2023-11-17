import { useState, useEffect } from "react";
import { Button, FlatList, Image, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import TypeItem from "./type-item";
import { RefreshControl } from "react-native-gesture-handler";

const API_ENDPOINT = "http://192.168.0.138:8080/api/food-type/"

const TypeList = () => {
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
            const response = await fetch(API_ENDPOINT)
            const data = await response.json()
            setData(data)

        } catch (error) {
            console.error(error)
        }
    }

    const renderFoodTypeItem = ({ item }) => {
        return (
            <TypeItem id={item.id} name={item.name} />
        )
    }

    return (
        <View style={{ marginVertical: 20 }}>
            <FlatList
                data={data}
                contentContainerStyle={styles.list}
                numColumns={3}
                keyExtractor={item => item.id}
                renderItem={renderFoodTypeItem}
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

const styles = StyleSheet.create({
    list: {
        alignItems: 'center'
    }

})
export default TypeList;