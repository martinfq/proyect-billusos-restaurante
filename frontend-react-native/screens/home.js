import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Button } from "react-native";
import HomeMain from "../components/home/main-home";

const HomeScreen = () => {
    return (
        <View style={style.screen}>
            <HomeMain />
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        padding: 20
    }
})
export default HomeScreen;