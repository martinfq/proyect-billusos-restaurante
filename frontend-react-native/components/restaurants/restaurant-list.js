import { Text, View, FlatList } from "react-native";
import { restaurantData } from "../../example-data";
import { RefreshControl } from "react-native-gesture-handler";
import RestaurantItem from "./restaurant-item";
import { useEffect, useState } from "react";

const API_ENDPOINT = "http://192.168.0.138:8080/api/"

let fetchUrl = "restaurants/"


const RestaurantList = ({ searchQuery }) => {


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
            const response = await fetch("http://192.168.0.138:8080/api/all-restaurants/");
            const data = await response.json();
            const newData = data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
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
    // const fetchData2 = async () => {
    //     try {
    //         if (searchQuery === "") {
    //             fetchUrl = "all-restaurants/"
    //         }
    //         const urlToFetch = API_ENDPOINT + fetchUrl + searchQuery
    //         const response = await fetch(urlToFetch)
    //         const data = await response.json()

    //         console.log(data)
    //         if (!Array.isArray(data)) {
    //             console.error("La respuesta no es un array:", data);
    //             return; // o manejar el error de alguna manera
    //         }

    //         let newData = []
    //         for (const item of data) {
    //             try {
    //                 const typeResponse = await fetch(API_ENDPOINT + "food-type/" + item.restaurant_type);
    //                 const typeData = await typeResponse.json();
    //                 item["restaurant_type"] = typeData.name;
    //                 newData.push(item);
    //             } catch (error) {
    //                 console.error(error);
    //             }
    //         }

    //         setData(newData)

    //     } catch (error) {
    //         console.error(error)
    //     }
    // }



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