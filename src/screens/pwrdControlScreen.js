import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import logo from "../common/assets/icons/logoTagarela_2.png";
import SubmitButton from "../components/submitButton";

const { width, height } = Dimensions.get("window");
const logoWidth = width * 0.2; // Logo width based on screen size
const logoHeight = height * 0.21; // Logo height based on screen size
const formWidth = width * 0.4; // Form width based on screen size
const formHeight = height * 0.07; // Form height based on screen size
const formMargin = width * 0.01; // Form margin based on screen size
const buttonTextSize = width * 0.01; // Button text size based on screen size

const ControlScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={[styles.logo, { width: logoWidth, height: logoHeight }]}
      />
      <Text style={styles.textDesc}>CONTROLE DE RESPONSÁVEL</Text>
      <TextInput
        style={[
          styles.formInput,
          { width: formWidth, height: formHeight, marginVertical: formMargin },
        ]}
        placeholder="Senha"
        placeholderTextColor={"#A7A7A7"}
        autoCapitalize="none"
        secureTextEntry
      />
      <SubmitButton
        onPress={() => {
          // Aqui vai os processos que os botão vai executar depois de ser pressionado
          alert("Button Pressed!");
        }}
        // Modificamos a aparência do botão reutilizando passando valores diferentes para os estilos
        buttonStyle={{ backgroundColor: "#D5D4FF" }}
        textStyle={{
          color: "#5E5CB2",
          textAlign: "center",
          alignItems: "center",
          paddingVertical: 10,
          fontFamily: "LexendExa_400Regular",
          fontSize: buttonTextSize,
          fontWeight: 400,
          width: "100%",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5E5CB2",
    alignItems: "center",
    justifyContent: "center",
  },
  textDesc: {
    color: "#FFFFFF",
    fontFamily: "Mitr_400Regular",
    fontSize: buttonTextSize,
  },
  logo: {
    margin: 10,
  },
  formInput: {
    borderWidth: 1,
    borderRadius: 20,
    fontFamily: "League Spartan",
    fontSize: buttonTextSize,
    borderColor: "#F4F4F4",
    backgroundColor: "#F4F4F4",
    padding: 10,
  },
});

export default ControlScreen;
