import React, { useEffect } from "react";
import {
  StatusBar,
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  Text,
} from "react-native";
import SubmitButton from "../components/submitButton";
import CreateButton from "../components/createButton";
import { useNavigation } from "@react-navigation/native";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../components/fireBaseConfig';
import { setPersistence, browserLocalPersistence } from 'firebase/auth'; // Importe setPersistence e browserLocalPersistence
import AsyncStorage from '@react-native-async-storage/async-storage';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Setting a timer']);

const { width, height } = Dimensions.get("window");
const fontSize = Math.min(width, height) * 0.03;

const FormLogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const auth = getAuth(app);

  useEffect(() => {
    async function configurePersistence() {
      try {
        await setPersistence(auth, browserLocalPersistence);
        console.log(
          "Persistência definida como AsyncStorage para sessão local"
        );
      } catch (error) {
        console.error("Erro ao definir a persistência:", error);
      }
    }

    configurePersistence();
  }, []);
  
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
      <HeaderLoginComponent />
      <View styles={styles.TopBar}>
        {/* TextInput para o email */}
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="E-mail"
          keyboardType="email-address"
          placeholderTextColor="#A7A7A7"
          color="D3D3D3"
        />
      </View>
      <View>
        {/* TextInput para a senha */}
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Senha"
          secureTextEntry={true}
          placeholderTextColor="#A7A7A7"
        />
      </View>

      {/* Botões de criar conta e entrar */}
      <CreateButton onPress={handleCreateAccount} />
      <SubmitButton onPress={handleSignIn} />
      <StatusBar style="auto" />

      <View style={styles.errorContainer}>
        {errorMessage !== "" && (
          <Text style={styles.errorText}>{errorMessage}</Text>
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
  input: {
    width: 400,
    borderWidth: 3,
    borderRadius: 20,
    fontFamily: "Mitr_400Regular",
    fontSize: fontSize,
    borderColor: "#6C6CBF",
    backgroundColor: "#ffffff90",
    padding: 15,
    margin: 10,
  },
  errorContainer: {},
  errorText: {
    color: "red",
    fontSize: 16,
  },
});

export default FormLogin;
