import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderComponent from "../components/header";
import CardsCategoriesEdit from "../components/cardsBarEdit";


import { Audio } from "expo-av";

const Categories = () => {
  const [cardName, setCardName] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);

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
    if (audioUrl) {
      const soundObject = new Audio.Sound();

      try {
        await soundObject.loadAsync({ uri: audioUrl });
        await soundObject.playAsync();
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    }
  };

  return (
    <View style={styles.containerFather}>
    <HeaderComponent />
    <View style={styles.containerBars}>
      <CardsCategoriesEdit />
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.cardName}>{cardName}</Text>
        {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
        {audioUrl && (
          <TouchableOpacity onPress={playAudio}>
            <Text style={styles.audioText}>Play Audio</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  dataContainer: {
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