import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";
import logo from "../../assets/logoTagarela.png";
import SubmitButton from "../components/submitButton";

const FormLogin = () => {

  return (
    <View style={styles.container}> 
      <Image source={logo} style={styles.logo} />
      <TextInput
        style={styles.formInput}
        placeholder="Usuário"
        keyboardType="email-address"
        placeholderTextColor={"#A7A7A7"}
        autoCapitalize="none"
        autoComplete="email"
        color="D3D3D3"
      ></TextInput>
      <TextInput
        style={styles.formInput}
        placeholder="Senha"
        placeholderTextColor={"#A7A7A7"}
        autoCapitalize="none"
        secureTextEntry
      ></TextInput>
      <SubmitButton 
        onPress={() => {
          alert('Button Pressed!');
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 400,
    height: 300,
    margin: 10,
  },
  formInput: {
    borderWidth: 1,
    borderRadius: 20,
    fontFamily: "League Spartan",
    fontSize: 20,
    height: 66,
    width: 564,
    borderColor: "#F4F4F4",
    backgroundColor: "#F4F4F4",
    padding: 10,
    margin: 10,
  },
});

export default FormLogin;