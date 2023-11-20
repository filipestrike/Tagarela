import React from "react";
import {
  StatusBar,
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
} from "react-native";
import logo from "../common/assets/icons/logoTagarela.png";
import SubmitButton from "../components/submitButton";
import CreateButton from "../components/createButton";
import { useNavigation } from "@react-navigation/native";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../components/fireBaseConfig";

const { width, height } = Dimensions.get("window");
const fontSize = Math.min(width, height) * 0.03;

const FormLogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Conta criada!");
        const user = userCredential.user;
        console.log(user);
        alert("Conta criada com sucesso!");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Erro ao criar conta: " + error.message);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Login bem-sucedido");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.error("Erro durante o login:", error);
        console.log(error);
        setErrorMessage("CRIE UMA CONTA PARA CONTINUAR");
      });
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          placeholderTextColor="#A7A7A7"
          color="D3D3D3"
        />
      </View>
      <View>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          placeholderTextColor="#A7A7A7"
        />
      </View>
      <CreateButton onPress={handleCreateAccount} />
      <SubmitButton onPress={handleSignIn} />
      <StatusBar style="auto" />
      {errorMessage !== "" && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}{" "}
      {/* Exibir mensagem de erro condicionalmente */}
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
    width: "20%",
    aspectRatio: 450 / 300,
    margin: 10,
  },
  input: {
    height: "60%",
    width: "100%",
    borderWidth: 3,
    borderRadius: 20,
    fontFamily: "Mitr_400Regular",
    fontSize: fontSize,
    borderColor: "#6C6CBF",
    backgroundColor: "#ffffff90",
    padding: 15,
    margin: 10,
  },
});

export default FormLogin;
