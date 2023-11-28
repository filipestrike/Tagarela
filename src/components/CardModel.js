import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Text,
  Image,
} from "react-native";
import { Audio } from "expo-av";
import Abrir from "../common/images/Abrir.png";
const AbrirA = require("../common/audio/Abrir.mp3");

const { width, height } = Dimensions.get("window");
const cardWidth = width * 0.2; // Card width based on screen size
const cardHeight = height * 0.35; // Card height based on screen size
const cardMargin = width * 0.005; // Card margin based on screen size

async function playSound(audio) {
  const sound = new Audio.Sound();
  try {
    await sound.loadAsync(audio),
      {
        shouldPlay: true,
      };
    await sound.setPositionAsync(0);
    await sound.playAsync();
  } catch (error) {
    console.error(error);
  }
}

const CardModelFav = ({ imageUrl, cardText, onPress }) => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.cardButtonFav,
          {
            width: cardWidth,
            height: cardHeight,
            marginVertical: cardMargin,
          },
        ]}
        onPress={() => playSound(AbrirA)}
      >
        <Image source={Abrir} style={[styles.cardFirebase]} />
      </TouchableOpacity>
      <Text style={styles.cardTextFav}>CARD TEXT 1</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  scrollViewContent: {
    alignItems: "center",
  },
  cardContainer: {
    marginLeft: 40,
    margin: 12,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cardButton: {
    backgroundColor: "#F4F4F4",
    borderRadius: 30,
    marginTop: 20,
  },
  cardButtonFav: {
    backgroundColor: "#F4F4F4",
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 500,
  },
  cardTextFav: {
    marginTop: 5,
    fontFamily: "Mitr_500Medium",
    fontSize: width * 0.02,
    color: "#000000",
    marginLeft: 550,
  },
  cardText: {
    marginTop: 5,
    fontFamily: "Mitr_500Medium",
    fontSize: width * 0.02,
    color: "#000000",
  },
  cardImage: {
    width: "90%",
    height: "100%",
    borderRadius: 15,
    marginTop: 15,
    marginLeft: 12.5,
  },
  cardImageAqui: {
    width: "90%",
    height: "100%",
    borderRadius: 15,
    marginLeft: 35,
  },
  cardImageFull: {
    width: "90%",
    height: "100%",
    borderRadius: 10,
    marginLeft: 15,
  },
  cardImageComida: {
    width: "85%",
    height: "100%",
    borderRadius: 10,
    marginLeft: 15,
  },
  cardFirebase: {
    width: "85%",
    height: "100%",
    borderRadius: 10,
    marginLeft: 15,
  },
});

export default CardModelFav;
