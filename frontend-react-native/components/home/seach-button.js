import { Button, FlatList, Image, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const SearchButton = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const handleSearch = (query) => {
        setSearchQuery(query)
    }

    const navigation = useNavigation()
    const handleSearchNavigation = () => {
        navigation.navigate('MainSearch', { query: searchQuery.toLowerCase(), queryType: "name" })
        setSearchQuery("")
    }

    return (
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
    );
}
const styles = StyleSheet.create({
    searchbar: {
        alignContent: 'space-around',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
    }

})
export default SearchButton;