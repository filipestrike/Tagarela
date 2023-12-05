import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Audio } from "expo-av";

const { width, height } = Dimensions.get("window");
const cardWidth = width * 0.2; // Card width based on screen size
const cardHeight = height * 0.35; // Card height based on screen size
const cardMargin = width * 0.005; // Card margin based on screen size

const Categories = () => {
  const [cardName, setCardName] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const name = await AsyncStorage.getItem("cardName");
        const image = await AsyncStorage.getItem("savedImage");
        const audio = await AsyncStorage.getItem("savedAudio");

        if (name !== null) {
          setCardName(name);
        }

        if (image !== null) {
          setImageUrl(image);
        }

        if (audio !== null) {
          setAudioUrl(audio);
        }
      } catch (error) {
        console.error("Error retrieving data:", error);
      }
    };

    getData();
  }, []);

  const playAudio = async () => {
    console.log("Trying to play audio");
    if (audioUrl) {
      const { sound } = await Audio.Sound.createAsync({ uri: audioUrl });
      setSound(sound);
  
      try {
        console.log("Playing audio");
        await sound.playAsync();
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.containerFather}>
      <View style={styles.dataContainer}>
        {audioUrl && (
          <TouchableOpacity
            style={[
              styles.cardButton,
              {
                width: cardWidth,
                height: cardHeight,
                marginVertical: cardMargin,
              },
            ]}
            onPress={playAudio}
          >
            {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
          </TouchableOpacity>
        )}
        <Text style={styles.cardText}>{cardName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFather: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  containerBars: {
    width: "100%",
    justifyContent: "center",
    marginVertical: 30,
  },
  cardButton: {
    backgroundColor: "#F4F4F4",
    borderRadius: 30,
    marginTop: 20,
  },
  cardText: {
    marginTop: 5,
    fontFamily: "Mitr_500Medium",
    fontSize: width * 0.02,
    color: "#000000",
  },
  dataContainer: {
    marginLeft: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    marginTop: 20,
  },
  cardName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  audioText: {
    fontSize: 18,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default Categories;