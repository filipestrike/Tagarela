import {
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    View,
    Text,
} from "react-native";

const { width, height } = Dimensions.get('window');
const cardWidth = width * 0.2; // Card width based on screen size
const cardHeight = height * 0.35; // Card height based on screen size
const cardMargin = width * 0.005; // Card margin based on screen size

const CardModel = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={[styles.cardButton, { width: cardWidth, height: cardHeight, marginVertical: cardMargin }]} onPress={() => {
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
        backgroundColor: "#FFFFFF",
    },
    cardButton: {
        backgroundColor: "#F4F4F4",
        borderRadius: 30,
        marginTop: 20,
        marginHorizontal: cardMargin,
        // Width and height set dynamically
    },
    cardText: {
        marginTop: 5,
        fontFamily: "Mitr_500Medium",
        fontSize: width * 0.02, // Font size based on screen size
        color: "#000000",
    },
});

export default CardModel;