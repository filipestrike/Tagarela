import {
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    View,
    Text,
    Image,
} from "react-native";

const CardModel = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.cardButton} onPress={() => {
                // Aqui vai a logica para executar o sonido da card
                alert('Card Pressed!');
            }}>
                {/* Aqui vai a logica para trazer a imagen do banco de dados */}
            </TouchableOpacity>
            <Text style={styles.cardText}>
                {/* aqui vai a logica para trazer o text descrição da imagen */}
                CARD TEXT
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    cardButton :{
        backgroundColor: "#F4F4F4",
        borderRadius: 30,
        height: 234,
        width: 267,
        marginTop: 20,
        marginHorizontal: 30,
    },
    cardText:{
        marginTop: 5,
        fontFamily: "Mitr_500Medium",
        fontSize: 30,
        color: "#000000",
    },
});

export default CardModel;