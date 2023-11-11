import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { useWindowDimensions } from 'react-native';


const HomeMain = () => {

    const { height, width } = useWindowDimensions();

    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = (query) => {
        setSearchQuery(query)
    }
    const handleNavigation = () => {
        navigation.navigate('Restaurant', { query: searchQuery.toLowerCase() })
        setSearchQuery("")
    }

    const navigation = useNavigation()
    return (
        <View style={styles.screen}>
            <View style={{ alignItems: "center" }}>

                <Text style={{ paddingBottom: 20 }}>Home Page Billusos</Text>
                <Image
                    style={{ width: width, height: 200, marginBottom: 20, borderRadius: 10 }}
                    source={{
                        uri: 'https://media.istockphoto.com/id/1307190527/es/foto/feliz-camarero-sirviendo-comida-a-un-grupo-de-amigos-en-un-pub.jpg?s=612x612&w=0&k=20&c=-BICd4vjkPYTHSW4zCdVd1vqbjG2Guz07i9Ctm9nzo4=',
                    }}
                />
            </View>
            <View style={styles.searchbar}>
                <TextInput
                    placeholder='Buscar...'
                    style={{ margin: 10, fontSize: 25 }}
                    autoCapitalize="none"
                    clearButtonMode='always'
                    value={searchQuery}
                    onChangeText={(query) => handleSearch(query)}
                />
                <Button title="Buscar" onPress={handleNavigation} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
    },
    searchbar: {
        alignContent: 'space-around',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 3,
    },

})
export default HomeMain;