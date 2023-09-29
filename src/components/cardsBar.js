import {
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    View,
    Text,
} from "react-native";

const CardsCategories = () => {
    return(
        <View style={styles.containerFather}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>
                        DIA A DIA
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>
                        AÇÕES
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>
                        EMOÇÕES
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>
                        NECESSIDADES
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>
                        COMIDAS
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerFather: {
        alignItems: "center",
        justifyContent: "center"
    }, 
    container: {
        width: 1211,
        height: 77,
        backgroundColor: "#F4F4F4",
        borderRadius: 30,
        flexDirection: "row",
    },
    optionButton :{
        marginVertical: 10,
        marginHorizontal: 30,
    },
    optionText:{
        fontFamily: "Mitr_500Medium",
        fontSize: 36,
        color: "#949494",
    },
});

export default CardsCategories;