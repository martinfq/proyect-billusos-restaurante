import { Button, FlatList, Image, StatusBar, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { useWindowDimensions } from 'react-native';
import SearchButton from "./seach-button";
import TypeList from "./type-list";
import OneMenu from "./one-menu";

const HomeMain = () => {

    const { width } = useWindowDimensions();

    return (
        <View style={styles.screen} >
            <ScrollView >
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
                <SearchButton />
                <TypeList />

                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />

                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 27, marginTop: 20 }}>En tendencia</Text>
                    <OneMenu />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: StatusBar.currentHeight,
        paddingBottom: 20
    },
})
export default HomeMain;