import React from 'react';
import { StyleSheet, Dimensions, TextInput, View, TouchableOpacity, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');
const fontSize = Math.min(width, height) * 0.03; // Font size based on screen size

const StepOneCreate = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.cardNameInput}
                placeholder="     NOME DA CARD"
                placeholderTextColor="#5E5CB2"
            />
            <TouchableOpacity style={styles.uploadButton}>
                <Text style={styles.textUpload}>UPLOAD IMAGEM</Text>
                <Svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M0 0V4.03183H35.7206V0H0ZM17.8603 8.06367L4.46508 20.1592H13.3952V32.2547H22.3254V20.1592H31.2555L17.8603 8.06367Z" fill="#5E5CB2"/>
                </Svg>
            </TouchableOpacity>
            <View style={styles.containerAudioBttn}>
                <TouchableOpacity style={styles.recordBttn}>
                    <Svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/Svg">
                        <Path d="M8.78801 0.00949635C8.65485 0.0258851 8.52327 0.0490359 8.39416 0.0787942C7.71073 0.196143 7.10176 0.490445 6.6709 0.911605C6.24004 1.33277 6.01393 1.85476 6.03104 2.38872V7.00858C6.03104 7.62121 6.35023 8.20875 6.9184 8.64195C7.48657 9.07514 8.25717 9.31851 9.06068 9.31851C9.86419 9.31851 10.6348 9.07514 11.203 8.64195C11.7711 8.20875 12.0903 7.62121 12.0903 7.00858V2.38872C12.105 2.06129 12.0281 1.73522 11.8648 1.43217C11.7015 1.12913 11.4556 0.856026 11.1433 0.631008C10.8309 0.405989 10.4594 0.234199 10.0533 0.127044C9.64727 0.0198888 9.21595 -0.0201805 8.78801 0.00949635ZM1.03214 4.69865C0.718598 4.77901 0.448177 4.93541 0.262176 5.14397C0.0761747 5.35252 -0.0151816 5.60176 0.00206009 5.85362V7.00858C0.00206009 10.4273 3.30437 13.2223 7.57616 13.7998V16.2483H6.06134C4.39504 16.2483 3.0317 17.2878 3.0317 18.5582H15.1805C15.1805 17.2878 13.8172 16.2483 12.1509 16.2483H10.6361V13.7998C14.9079 13.2454 18.2102 10.4273 18.2102 7.00858V5.85362C18.2102 5.5473 18.0506 5.25353 17.7665 5.03693C17.4824 4.82033 17.0971 4.69865 16.6954 4.69865C16.2936 4.69865 15.9083 4.82033 15.6242 5.03693C15.3401 5.25353 15.1805 5.5473 15.1805 5.85362V7.00858C15.1805 9.5726 12.4842 11.6284 9.12127 11.6284C5.75837 11.6284 3.062 9.5726 3.062 7.00858V5.85362C3.06566 5.68275 3.01955 5.51339 2.92699 5.35776C2.83443 5.20212 2.69773 5.06409 2.52674 4.95361C2.35575 4.84312 2.15474 4.76295 1.9382 4.71886C1.72165 4.67477 1.49497 4.66787 1.27451 4.69865C1.21397 4.69588 1.15327 4.69588 1.09273 4.69865H1.03214Z" fill="#5E5CB2"/>
                    </Svg>
                    <Text style={styles.textAudioBttn}>GRAVAR ÁUDIO</Text>
                </TouchableOpacity>
                <Text style={styles.textAudioOptions}>OU</Text>
                <TouchableOpacity style={styles.noAudioBttn}>
                    <Svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M11.0967 0C4.96577 0 0 4.96577 0 11.0967C0 17.2276 4.96577 22.1934 11.0967 22.1934C17.2276 22.1934 22.1934 17.2276 22.1934 11.0967C22.1934 4.96577 17.2276 0 11.0967 0ZM6.93544 4.93803L11.0967 9.0993L15.258 4.93803L17.2554 6.93544L13.0941 11.0967L17.2554 15.258L15.258 17.2554L11.0967 13.0941L6.93544 17.2554L4.93803 15.258L9.0993 11.0967L4.93803 6.93544L6.93544 4.93803Z" fill="#5E5CB2"/>
                    </Svg>
                    <Text style={styles.textAudioBttn}>SEM ÁUDIO</Text>
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

export default StepOneCreate;