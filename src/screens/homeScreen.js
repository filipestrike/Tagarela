import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    View,
} from "react-native";

import CardsCategories from "../components/cardsBar";
import OptionsMenu from "../components/optionsBar";
import CardModel from "../components/card";
import HeaderComponent from "../components/header";

const Home = () => {
    return(
        <View style={styles.containerFather}>
            <HeaderComponent />
            <View style={styles.containerBars}>
                <CardsCategories />
            </View>
            <CardModel />
            <View style={styles.containerBars}>
                <OptionsMenu homeColor="#5E5CB2" favColor="#949494" addColor="#949494" categoriesColor="#949494" userColor="#949494" />
            </View>
            <StatusBar />
        </View>
    );
};

const styles = StyleSheet.create({
    containerFather: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    containerBars: {
        width: "100%",
        justifyContent: "center",
        marginVertical: 30,
    },
});

export default Home;