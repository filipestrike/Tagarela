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
import * as FileSystem from 'expo-file-system';
import AsyncStorage from "@react-native-async-storage/async-storage";
import iconCheck from "../common/assets/icons/icon_check.svg";
import OptionsMenu from "../components/optionsBar";
import HeaderComponent from "../components/header";
import Home from "./homeScreen";
import { useNavigation } from "@react-navigation/core";
import { Asset } from 'expo-asset';

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

    if (!result.canceled) {
      const imageAssets = result.assets;

      if (imageAssets && imageAssets.length > 0) {
        const imageUri = imageAssets[0].uri;
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
      } else {
        console.error("No image selected");
      }
    }
  };

  const getContentUriPath = (contentUri) => {
    const uriParts = contentUri.split('/');
    if (uriParts.length > 0) {
      uriParts.splice(0, 3, 'content:'); // Replace 'content' with 'content:'
      return uriParts.join('/');
    }
    return contentUri;
  };

  const getContentUriFileName = (contentUri) => {
    const uriParts = contentUri.split('/');
    return uriParts[uriParts.length - 1];
  };

  const handleAudioPicker = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: 'audio/*',
        copyToCacheDirectory: false,
      });
  
      console.log("Resultado da seleção de áudio:", result);
  
      if (!result.cancelled) {
        const { uri } = result.assets[0];
  
        if (uri) {
          try {
            const filename = result.assets[0].name;
            const fileUri = `${FileSystem.documentDirectory}${filename}`;
  
            await FileSystem.copyAsync({
              from: uri,
              to: fileUri,
            });
  
            await AsyncStorage.setItem("savedAudio", fileUri);
            setAudioUrl(fileUri);
            setShowCheckIconAudio(true);
          } catch (error) {
            console.error("Erro ao copiar o áudio:", error);
          }
        } else {
          console.error("URI do áudio inválida");
        }
      } else {
        console.log("A seleção foi cancelada.");
      }
    } catch (error) {
      console.error("Erro ao selecionar o áudio:", error);
    }
  };
  
  

  const saveCardLocally = async () => {
    try {
      // Salvar os dados localmente (nome, imagem, áudio)
      await AsyncStorage.setItem("cardName", nodeName);
      console.log("SAVED NAME");
  
      // Salvar imageUrl e audioUrl, se necessário
      if (imageUrl) {
        await AsyncStorage.setItem("savedImage", imageUrl);
        console.log("SAVED IMAGE");
      }
      if (audioUrl) {
        await AsyncStorage.setItem("savedAudio", audioUrl);
        console.log("SAVED AUDIO");
      }
  
      navigation.navigate("Home");
    } catch (error) {
      console.error("Erro ao salvar o card localmente:", error);
    }
  };

  return (
    <View style={styles.NameContainer}>
      <HeaderComponent />
      <TextInput
        style={styles.cardNameInput}
        placeholder="NOME DO CARD"
        placeholderTextColor="#5E5CB2"
        value={nodeName}
        onChangeText={(text) => setNodeName(text)}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleImagePicker}
      >
        <Text style={styles.textUpload}>UPLOAD IMAGEM</Text>
        {showCheckIcon && (
          <View style={styles.iconCheckContainer}>
            <Text style={styles.textUpload}>REALIZADO</Text>
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.audioBttn} onPress={handleAudioPicker}>
        <Text style={styles.textUpload}>UPLOAD AUDIO</Text>
        {showCheckIconAudio && (
          <View style={styles.iconCheckContainer}>
            <Text style={styles.textUpload}>REALIZADO</Text>
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.confirmData} onPress={saveCardLocally}>
        <Text style={styles.textConfirm}>CRIAR CARD</Text>
      </TouchableOpacity>
      <View style={styles.containerBars}>
        <OptionsMenu homeColor="#949494" addColor="#5E5CB2" />
      </View>
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
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    borderRadius: 30,
    width: 225,
    height: 169,
    backgroundColor: "#F4F4F4",
  },
  audioBttn: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 30,
    width: 225,
    height: 169,
    backgroundColor: "#F4F4F4",
  },
  textUpload: {
    fontFamily: "Mitr_400Regular",
    color: "#5E5CB2",
    fontSize: 20,
    // marginVertical: 10,
  },
  iconCheckContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    position: "relative",
    marginTop: 20,
    width: 40,
    height: 30,
  },
  confirmData: {
    width: 250,
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
  containerBars: {
    width: "100%",
    justifyContent: "center",
    marginVertical: 30,
  },
});

export default StepOneCreate;
