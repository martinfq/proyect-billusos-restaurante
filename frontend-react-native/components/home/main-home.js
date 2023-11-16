import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Button, FlatList, Image, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { useWindowDimensions } from 'react-native';
import TypeItem from "./type-item";
import { RefreshControl } from "react-native-gesture-handler";

const API_ENDPOINT = "http://192.168.0.138:8080/api/food-type/"

const HomeMain = () => {

    const { width } = useWindowDimensions();

    const [searchQuery, setSearchQuery] = useState("")
    const handleSearch = (query) => {
        setSearchQuery(query)
    }

    const navigation = useNavigation()
    const handleSearchNavigation = () => {
        navigation.navigate('MainSearch', { query: searchQuery.toLowerCase(), queryType: "name" })
        setSearchQuery("")
    }


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
        <View style={styles.screen}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <View style={{ alignItems: 'center' }}>

                <Text style={{ paddingBottom: 20, fontSize: 40 }}>Billusos</Text>
                <Image
                    style={{ width: width, height: 250, marginBottom: 5, borderRadius: 10 }}
                    source={{
                        uri: 'https://media.istockphoto.com/id/1307190527/es/foto/feliz-camarero-sirviendo-comida-a-un-grupo-de-amigos-en-un-pub.jpg?s=612x612&w=0&k=20&c=-BICd4vjkPYTHSW4zCdVd1vqbjG2Guz07i9Ctm9nzo4=',
                    }}
                />
            </View>
            <View style={styles.searchbar}>
                <TextInput
                    placeholder='Restaurantes, locales, platos...'
                    style={{ margin: 10, fontSize: 19 }}
                    autoCapitalize="none"
                    clearButtonMode='always'
                    value={searchQuery}
                    onChangeText={(query) => handleSearch(query)}
                />
                <Button title="Buscar" onPress={handleSearchNavigation} />
            </View>

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

            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
            />

            <View>
                <Text style={{ fontSize: 27, marginTop: 20 }}>En tendencia</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: StatusBar.currentHeight,

    },
    searchbar: {
        alignContent: 'space-around',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
    },
    list: {
        alignItems: 'center'
    }

})
export default HomeMain;