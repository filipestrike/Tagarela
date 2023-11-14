import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  Alert,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "./fireBaseConfig";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import iconCheck from "/src/common/assets/icons/icon_check.svg";

const firestore = getFirestore();

const StepOneCreate = () => {
  const [nodeName, setNodeName] = useState("");
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [showImageUpload, setShowImageUpload] = useState(true);
  //const [showAudioUpload, setShowAudioUpload] = useState(true);

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    if (!result.cancelled) {
      const imageUri = result.assets[0].uri;
      if (imageUri) {
        // Call the uploadImage function with the valid image URI
        uploadImage(imageUri, "image/jpeg");
      } else {
        console.error("Invalid image URI");
      }
    }
  };

  // Função para escolher uma imagem
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
            setImage(downloadURL);
          })
          .catch((error) => {
            console.error("Error getting download URL: ", error);
          });
      }
    );
  };

  // Função para escolher um arquivo de áudio
  const uploadAudio = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Audio,
    });

    if (!result.cancelled) {
      setAudio(result.uri);
    }
  };

  // Função para fazer o upload dos dados para o Firebase
  const uploadDataToFirebase = async () => {
    try {
      // Upload da imagem para o Firebase Storage
      const imageRef = storage.ref().child(`images/${nodeName}`);
      const imageSnapshot = await imageRef.putFile(image);
      const imageUrl = await imageSnapshot.ref.getDownloadURL();

      // Upload do áudio para o Firebase Storage
      const audioRef = storage.ref().child(`audio/${nodeName}`);
      const audioSnapshot = await audioRef.putFile(audio);
      const audioUrl = await audioSnapshot.ref.getDownloadURL();

      // Salvar os dados no Firestore
      await addDoc(collection(firestore, "seu_colecao"), {
        nodeName,
        imageUrl,
        audioUrl,
      });

      Alert.alert("Sucesso", "Dados salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
      Alert.alert(
        "Erro",
        "Ocorreu um erro ao salvar os dados. Tente novamente."
      );
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.cardNameInput}
        placeholder="NOME DO CARD"
        placeholderTextColor="#5E5CB2"
        value={nodeName}
        onChangeText={(text) => setNodeName(text)}
      />
      {showImageUpload && (
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => {
            handleImagePicker();
          }}
        >
          <Text style={styles.textUpload}>UPLOAD IMAGEM</Text>
          <Svg
            width="36"
            height="33"
            viewBox="0 0 36 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M0 0V4.03183H35.7206V0H0ZM17.8603 8.06367L4.46508 20.1592H13.3952V32.2547H22.3254V20.1592H31.2555L17.8603 8.06367Z"
              fill="#5E5CB2"
            />
          </Svg>
        </TouchableOpacity>
      )}
      {image && <View style={styles.iconCheckContainer}>{iconCheck}</View>}
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => {
          // Call the function to upload audio
          uploadAudio();
        }}
      >
        <Text style={styles.textUpload}>UPLOAD ÁUDIO</Text>
      </TouchableOpacity>
      {/* Substituído trecho de código pelo ícone check */}
      {audio && <View style={styles.iconCheckContainer}>{iconCheck}</View>}
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => {
          // Call the function to upload all data to Firebase
          uploadDataToFirebase();
        }}
      >
        <Text style={styles.textUpload}>SALVAR DADOS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  uploadButton: {
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
  textAudioOptions: {
    marginHorizontal: 10,
    fontFamily: "Mitr_400Regular",
    color: "#5E5CB2",
    fontSize: 20,
  },
  containerAudioBttn: {
    alignItems: "center",
    flexDirection: "row",
  },
  recordBttn: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 5,
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
    marginVertical: 5,
    backgroundColor: "#F4F4F4",
    height: 50,
    width: 245,
    borderRadius: 30,
  },
  textAudioBttn: {
    marginHorizontal: 5,
    fontFamily: "Mitr_400Regular",
    fontSize: 20,
    color: "#5E5CB2",
  },
  cardNameInput: {
    borderWidth: 1,
    borderRadius: 30,
    fontFamily: "Mitr_400Regular",
    padding: 20,
    fontSize: 16, // Responsive font size
    height: 66,
    width: "40%", // Adjust as needed
    borderColor: "#F4F4F4",
    backgroundColor: "#F4F4F4",
  },

  iconCheckContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default StepOneCreate;
