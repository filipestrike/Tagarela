import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import iconCheck from "../common/assets/icons/icon_check.svg";
import { useNavigation } from "@react-navigation/core";

const StepOneCreate = () => {
  const [nodeName, setNodeName] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [showCheckIcon, setShowCheckIcon] = useState(false);
  const [showCheckIconAudio, setShowCheckIconAudio] = useState(false);
  const navigation = useNavigation();

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    if (!result.cancelled) {
      const imageUri = result.uri;
      if (imageUri) {
        try {
          await AsyncStorage.setItem("savedImage", imageUri);
          setImageUrl(imageUri);
          setShowCheckIcon(true);
        } catch (error) {
          console.error("Error saving image locally:", error);
        }
      } else {
        console.error("Invalid image URI");
      }
    }
  };

  const handleAudioPicker = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "audio/mpeg",
      copyToCacheDirectory: false,
    });

    if (!result.cancelled) {
      const { uri } = result;

      try {
        await AsyncStorage.setItem("savedAudio", uri);
        setAudioUrl(uri);
        setShowCheckIconAudio(true);
      } catch (error) {
        console.error("Error saving audio locally:", error);
      }
    }
  };

  const saveCardLocally = async () => {
    try {
      // Salvar os dados localmente (nome, imagem, áudio)
      await AsyncStorage.setItem("cardName", nodeName);
      // Adicione outras informações do card que deseja salvar localmente

      navigation.navigate("Categories");
    } catch (error) {
      console.error("Error saving card locally:", error);
    }
  };

  return (
    <View style={styles.NameContainer}>
      <TextInput
        style={styles.cardNameInput}
        placeholder="CARD NAME"
        placeholderTextColor="#5E5CB2"
        value={nodeName}
        onChangeText={(text) => setNodeName(text)}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleImagePicker}
      >
        <Text style={styles.textUpload}>UPLOAD IMAGE</Text>
        {showCheckIcon && (
          <View style={styles.iconCheckContainer}>
            <Image source={iconCheck} style={styles.checkIcon} />
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleAudioPicker}
      >
        <Text style={styles.textUpload}>UPLOAD AUDIO</Text>
        {showCheckIconAudio && (
          <View style={styles.iconCheckContainer}>
            <Image source={iconCheck} style={styles.checkIcon} />
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.confirmData} onPress={saveCardLocally}>
        <Text style={styles.textConfirm}>CREATE CARD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  NameContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  cardNameInput: {
    borderWidth: 1,
    borderRadius: 30,
    fontFamily: "Mitr_400Regular",
    padding: 20,
    fontSize: 16,
    height: 66,
    width: "40%",
    borderColor: "#F4F4F4",
    backgroundColor: "#F4F4F4",
  },
  buttonConteiner: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    borderRadius: 30,
    width: 225,
    height: 191,
    backgroundColor: "#F4F4F4",
  },
  textUpload: {
    fontFamily: "Mitr_400Regular",
    color: "#5E5CB2",
    fontSize: 20,
    marginVertical: 10,
  },
  iconCheckContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    position: "absolute",
    marginTop: 20,
    width: 40,
    height: 30,
  },
  confirmData: {
    width: 211,
    height: 50,
    border: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    borderRadius: 30,
    backgroundColor: "#5E5CB2",
  },
  textConfirm: {
    fontFamily: "Mitr_400Regular",
    color: "#FFFFFF",
    fontSize: 20,
    marginVertical: 10,
  },
});

export default StepOneCreate;
