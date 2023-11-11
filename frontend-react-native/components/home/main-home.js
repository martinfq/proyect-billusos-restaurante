import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";



const HomeMain = () => {

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
            <Text style={{ paddingBottom: 20 }}>Home Page Billusos</Text>
            <View style={styles.searchbar}>
                <TextInput
                    placeholder='Buscar...'
                    style={{ margin: 10 }}
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
        padding: 10
    },
    searchbar: {
        alignContent: 'space-around',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 3,
    },

})
export default HomeMain;