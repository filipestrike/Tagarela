import React from "react";
import {
  StyleSheet,
  Dimensions,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";
import { Image } from "react-native";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "./fireBaseConfig"
import { addDoc, collection, onSnapshot } from "firebase/firestore";

const { width, height } = Dimensions.get("window");
const fontSize = Math.min(width, height) * 0.03; // Font size based on screen size

const StepOneCreate = () => {
  const [image, setImage] = useState("");

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      if (imageUri) {
        // Call the uploadImage function with the valid image URI
        uploadImage(imageUri, "image/jpeg");
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
            setImage(downloadURL);
          })
          .catch((error) => {
            console.error("Error getting download URL: ", error);
          });
      }
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.cardNameInput}
        placeholder="NOME DO CARD"
        placeholderTextColor="#5E5CB2"
      />
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => {
          handleImagePicker(); // Chama a função handleImagePicker quando o botão é pressionado
        }}
      >
        <Text style={styles.textUpload}>UPLOAD IMAGEM</Text>
        <Image source={{ uri: image }} />
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
    fontSize: fontSize, // Responsive font size
    height: 66,
    width: "40%", // Adjust as needed
    borderColor: "#F4F4F4",
    backgroundColor: "#F4F4F4",
  },
});

export default StepOneCreate;
