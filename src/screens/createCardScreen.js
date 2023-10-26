import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from "react-native";
import Svg, { Path } from 'react-native-svg';

import OptionsMenu from "../components/optionsBar";
import HeaderComponent from "../components/header";
import CardModel from "../components/card";
import StepOneCreate from "../components/createCardFirstStep";

const { width, height } = Dimensions.get('window');
const fontSize = Math.min(width, height) * 0.05; // Font size based on screen size

const CreateCard = () => {
    return (
        <View style={styles.containerFather}>
            <HeaderComponent />
            <View style={styles.containerStatement}>
                <Svg width={70} height={60} viewBox="0 0 70 60" fill="#5E5CB2" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M18.3418 0V20.2168H0V33.6946H18.3418V53.9114H30.5696V33.6946H48.9114V20.2168H30.5696V0H18.3418Z" />
                </Svg>
                <Text style={styles.enunciatingText}>CRIANDO CARD</Text>
            </View>
            <View style={styles.containerContent}>
                <StepOneCreate />
            </View>
            <View style={styles.containerBars}>
                <OptionsMenu homeColor="#949494" favColor="#949494" addColor="#5E5CB2" categoriesColor="#949494" userColor="#949494" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerFather: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    containerContent:{
        width: "100%",
        justifyContent: "center",
    },
    containerBars: {
        width: "100%",
        justifyContent: "center",
        marginVertical: 30,
    },
    containerStatement: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20,
    },
    enunciatingText:{
        fontFamily: "Mitr_500Medium",
        fontSize: fontSize,
        color: "#5E5CB2",
        justifyContent: "center",
    },
});

export default CreateCard;