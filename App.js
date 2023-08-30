import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import logo from "./assets/g aroto.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.formTitle}>Tagarela</Text>
      <Text style={styles.formLogin}>Login</Text>
      <TextInput
        style={styles.formInput}
        placeholder="Usuário"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      ></TextInput>
      <TextInput
        style={styles.formInput}
        placeholder="Senha"
        autoCapitalize="none"
        secureTextEntry
      ></TextInput>
      <Pressable style={styles.formButton}>
        <Text style={styles.formTextButton}>Continuar</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AAC8DA",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    margin: 10,
  },
  formTitle: {
    color: "#004F84",
    alignItems: "center",
    font: "Mitr",
    fontSize: 64,
    marginBottom: 20,
  },
  formLogin: {
    color: "#004F84",
    alignItems: "center",
    font: "Mitr",
    fontSize: 48,
    marginTop: 48,
    marginBottom: 28,
  },
  formInput: {
    borderRadius: 30,
    borderWidth: 1,
    borderRadius: 30,
    fontSize: 25,
    width: "80%",
    backgroundColor: "#D9D9D9",
    padding: 10,
    margin: 10,
  },
  formButton: {
    backgroundColor: "#004F84",
    borderWidth: 1,
    borderRadius: 20,
    width: "35%",
    padding: 10,
    margin: 20,
  },
  formTextButton: {
    color: "#FFF",
    alignItems: "center",
    fontSize: 24,
    fontFamily: "lexend",
    width: "100%",
  },
});
