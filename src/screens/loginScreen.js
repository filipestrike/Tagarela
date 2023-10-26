import React from "react";
import {
  StatusBar,
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";
import logo from "../common/assets/icons/logoTagarela.png";
import SubmitButton from "../components/submitButton";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const fontSize = Math.min(width, height) * 0.02; // Font size based on screen size

const FormLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <TextInput
        style={styles.formInput}
        placeholder="Usuário"
        keyboardType="email-address"
        placeholderTextColor="#A7A7A7"
        autoCapitalize="none"
        autoComplete="email"
        color="D3D3D3"
      />
      <TextInput
        style={styles.formInput}
        placeholder="Senha"
        placeholderTextColor="#A7A7A7"
        autoCapitalize="none"
        secureTextEntry
      />
      <SubmitButton
        onPress={() => {
          // Aqui vai os processos que os botão vai executar depois de ser pressionado
          alert("Button Pressed!");
          navigation.navigate("Home");
        }}
      />
      <StatusBar style="auto" />
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
  logo: {
    width: "20%", // Adjust as needed
    aspectRatio: 450 / 300,
    margin: 10,
  },
  formInput: {
    borderWidth: 1,
    borderRadius: 20,
    fontFamily: "Spartan_400Regular",
    fontSize: fontSize, // Responsive font size
    height: 66,
    width: "80%", // Adjust as needed
    borderColor: "#F4F4F4",
    backgroundColor: "#F4F4F4",
    padding: 10,
    margin: 10,
  },
});

export default FormLogin;
