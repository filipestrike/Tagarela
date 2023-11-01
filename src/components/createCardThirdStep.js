import React from 'react';
import { StyleSheet, Dimensions, TextInput, View, TouchableOpacity, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');
const fontSize = Math.min(width, height) * 0.03; // Font size based on screen size

const StepThreeCreate = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.cardNameInput}
                placeholder="NOME DO CARD"
                placeholderTextColor="#5E5CB2"
            />
            <View style={styles.uploadButton}>
                <Text style={styles.textUpload}>IMAGEM CARREGADA</Text>
                    <Svg width="58" height="47" viewBox="0 0 58 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M46.7675 0L41.7332 5.25314L21.4503 25.5361L15.5405 19.8452L10.2874 14.592L0 24.8794L5.25314 30.1326L16.1972 41.0766L21.2314 46.3297L26.4846 41.0766L52.0206 15.5405L57.2738 10.2874L46.7675 0Z" fill="#5E5CB2"/>
                    </Svg>
            </View>
            <View style={styles.containerAudioBttn}>
                <View style={styles.recordBttn}>
                    <Svg width="58" height="47" viewBox="0 0 58 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M46.7675 0L41.7332 5.25314L21.4503 25.5361L15.5405 19.8452L10.2874 14.592L0 24.8794L5.25314 30.1326L16.1972 41.0766L21.2314 46.3297L26.4846 41.0766L52.0206 15.5405L57.2738 10.2874L46.7675 0Z" fill="#5E5CB2"/>
                    </Svg>
                    <Text style={styles.textAudioBttn}>ÁUDIO CARREGADO</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
    },
    uploadButton:{
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,
        borderRadius: 30,
        width: 225,
        height: 191,
        backgroundColor: "#F4F4F4",
    },
    textUpload: {
        fontFamily: "Spartan_500Medium",
        color: "#5E5CB2",
        fontSize: 20,
        marginVertical: 10,
    },
    textAudioOptions: {
        marginHorizontal: 10,
        fontFamily: "Spartan_500Medium",
        color: "#5E5CB2",
        fontSize: 20,
    },
    containerAudioBttn:{
        alignItems: "center",
        flexDirection: "row",
    },
    recordBttn: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: "#F4F4F4",
        height: 50,
        width: 245,
        borderRadius: 30,
    },
    noAudioBttn: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: "#F4F4F4",
        height: 50,
        width: 245,
        borderRadius: 30,
    },
    textAudioBttn: {
        marginHorizontal: 5,
        fontFamily: "Spartan_500Medium",
        fontSize: 20,
        color: "#5E5CB2",
    },
    cardNameInput: {
        borderWidth: 1,
        borderRadius: 30,
        fontFamily: "Spartan_500Medium",
        fontSize: fontSize, // Responsive font size
        height: 66,
        width: "40%", // Adjust as needed
        borderColor: "#F4F4F4",
        backgroundColor: "#F4F4F4",
    },
});

export default StepThreeCreate;