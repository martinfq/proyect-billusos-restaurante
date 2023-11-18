import { useState, useEffect } from "react";
import { Button, FlatList, Image, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import MenuItem from "../menus/menu-item";

const API_ENDPOINT = "http://192.168.0.138:8080/api/menus/"


const OneMenu = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch(API_ENDPOINT)
            const data = await response.json()
            if (data.length === 0) {
                throw new Error("No se obtuvo la data")
            } else {
                setData(data)
                setIsLoading(false)
            }
        } catch (error) {
            console.error(error)
            // setIsLoading(false)
        }
    }
    if (!isLoading) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomItem = data[randomIndex];
        return (
            <View style={styles.list}>
                <MenuItem img_url={randomItem.img_url} name={randomItem.name} price={randomItem.price} />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    list: {
        marginVertical: 10,
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }

})

export default OneMenu;