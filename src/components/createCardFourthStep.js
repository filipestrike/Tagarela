import React from 'react';
import { StyleSheet, Dimensions, TextInput, View, TouchableOpacity, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');
const fontSize = Math.min(width, height) * 0.03; // Font size based on screen size
const cardWidth = width * 0.2; // Card width based on screen size
const cardHeight = height * 0.35; // Card height based on screen size
const cardMargin = width * 0.005; // Card margin based on screen size

const StepFourCreate = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <View style={[styles.cardButton, { width: cardWidth, height: cardHeight, marginVertical: cardMargin }]}>
                    {/* Aqui vai a logica para trazer a imagen do banco de dados */}
                </View>
                <Text style={styles.cardText}>
                    {/* aqui vai a logica para trazer o text descrição da imagen */}
                    CARD TEXT
                </Text>
            </View>
            <Text style={styles.textAudioOptions}>CONFIRMAR CRIAÇÃO DA CARD</Text>
            <View style={styles.containerAudioBttn}>
                <TouchableOpacity style={styles.confirmationBttn}>
                    <Svg width="58" height="47" viewBox="0 0 58 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M46.7675 0L41.7332 5.25314L21.4503 25.5361L15.5405 19.8452L10.2874 14.592L0 24.8794L5.25314 30.1326L16.1972 41.0766L21.2314 46.3297L26.4846 41.0766L52.0206 15.5405L57.2738 10.2874L46.7675 0Z" fill="#5E5CB2"/>
                    </Svg>
                    <Text style={styles.textOptionsBttns}>SIM</Text>
                </TouchableOpacity>
                <Text style={styles.textAudioOptions}>OU</Text>
                <TouchableOpacity style={styles.confirmationBttn}>
                    <Svg width="58" height="47" viewBox="0 0 58 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M11.0967 0C4.96577 0 0 4.96577 0 11.0967C0 17.2276 4.96577 22.1934 11.0967 22.1934C17.2276 22.1934 22.1934 17.2276 22.1934 11.0967C22.1934 4.96577 17.2276 0 11.0967 0ZM6.93544 4.93803L11.0967 9.0993L15.258 4.93803L17.2554 6.93544L13.0941 11.0967L17.2554 15.258L15.258 17.2554L11.0967 13.0941L6.93544 17.2554L4.93803 15.258L9.0993 11.0967L4.93803 6.93544L6.93544 4.93803Z" fill="#5E5CB2"/>
                    </Svg>
                    <Text style={styles.textOptionsBttns}>NÃO</Text>
                </TouchableOpacity>
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
    confirmationText: {
        marginVertical: 10,
        fontFamily: "Spartan_500Medium",
        color: "#5E5CB2",
        fontSize: 20,
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
    confirmationBttn: {
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
    cardButton: {
        backgroundColor: "#F4F4F4",
        borderRadius: 30,
        marginTop: 20,
        marginHorizontal: cardMargin,
        // Width and height set dynamically
    },
    textOptionsBttns: {
        marginHorizontal: 5,
        fontFamily: "Spartan_500Medium",
        fontSize: 20,
        color: "#5E5CB2",
    },
    cardText: {
        marginTop: 5,
        fontFamily: "Mitr_500Medium",
        fontSize: width * 0.02, // Font size based on screen size
        color: "#000000",
    },
});

export default StepFourCreate;