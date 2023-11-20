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
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import storage from "./fireBaseConfig.js";
import { getFirestore } from "firebase/firestore";
import iconCheck from "../common/assets/icons/icon_check.svg";
import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/core";

const firestore = getFirestore();
const collectionRef = collection(firestore, "seu_colecao");

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
        uploadImage(imageUri, "image/jpeg");
        setShowCheckIcon(true);
      } else {
        console.error("Invalid image URI");
      }
    }
  };

  const uploadImage = async (uri, fileType) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storageRef = ref(storage, "Stuff/" + new Date().getTime());
    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Handle upload progress if needed
      },
      (error) => {
        console.error("Error uploading image: ", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log("File available at", downloadURL);
            setImageUrl(downloadURL);
          })
          .catch((error) => {
            console.error("Error getting download URL: ", error);
          });
      }
    );
  };

  const handleAudioPicker = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "audio/mpeg",
      copyToCacheDirectory: false,
    });

    if (!result.cancelled) {
      const { uri } = result;

      try {
        const response = await fetch(uri);
        const blob = await response.blob();

        const storageRef = ref(
          storage,
          "audio/" + new Date().getTime() + ".mp3"
        );
        const uploadTask = uploadBytesResumable(storageRef, blob);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Handle upload progress if needed
          },
          (error) => {
            console.error("Error uploading audio: ", error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                console.log("Audio file available at", downloadURL);
                setAudioUrl(downloadURL);
                setShowCheckIconAudio(true);
              })
              .catch((error) => {
                console.error("Error getting audio download URL: ", error);
              });
          }
        );
      } catch (error) {
        console.error("Error fetching audio file: ", error);
      }
    }
  };

  const uploadToFirebase = async () => {
    try {
      const responseImage = await fetch(imageUrl);
      const blobImage = await responseImage.blob();
      const responseAudio = await fetch(audioUrl);
      const blobAudio = await responseAudio.blob();

      const storageRef = ref(storage, "YourCollection/" + new Date().getTime());
      const imageRef = storageRef.child("image.jpg");
      const audioRef = storageRef.child("audio.mp3");

      const uploadTaskImage = uploadBytesResumable(imageRef, blobImage);
      const uploadTaskAudio = uploadBytesResumable(audioRef, blobAudio);

      await Promise.all([uploadTaskImage, uploadTaskAudio]);

      const imageDownloadURL = await getDownloadURL(imageRef);
      const audioDownloadURL = await getDownloadURL(audioRef);

      // Salvar as URLs em um único nó no Firebase Firestore
      await addDoc(collectionRef, {
        nodeName,
        imageUrl: imageDownloadURL,
        audioUrl: audioDownloadURL,
      });

      // Navega para a próxima tela após o envio
      navigation.navigate("Categories");
    } catch (error) {
      console.error("Error uploading files or saving to Firebase:", error);
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
        style={styles.buttonConteiner}
        onPress={() => {
          handleImagePicker();
        }}
      >
        <Text style={styles.textUpload}>UPLOAD IMAGEM</Text>
        {showCheckIcon && (
          <View style={styles.iconCheckContainer}>
            <Image source={iconCheck} style={styles.checkIcon} />
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonConteiner}
        onPress={() => {
          handleAudioPicker();
        }}
      >
        <Text style={styles.textUpload}>UPLOAD AUDIO</Text>
        {showCheckIconAudio && (
          <View style={styles.iconCheckContainer}>
            <Image source={iconCheck} style={styles.checkIcon} />
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.confirmData}
        onPress={() => {
          uploadToFirebase();
          navigation.navigate("Categories");
        }}
      >
        <Text style={styles.textConfirm}>CRIAR CARD</Text>
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
