import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";
import logo from "../../assets/logoTagarela_2.png";
import SubmitButton from "../components/loginButton";

const ControlScreen = () => {

  return (
    <View style={styles.container}> 
      <Image source={logo} style={styles.logo} />
      {/* <Text style={styles.textDesc}>CONTROLE DE RESPONSÁVEL</Text> */}
      <TextInput
        style={styles.formInput}
        placeholder="Senha"
        placeholderTextColor={"#A7A7A7"}
        autoCapitalize="none"
        secureTextEntry
      ></TextInput>
      <SubmitButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5E5CB2",
    alignItems: "center",
    justifyContent: "center",
  },
  textDesc:{
    color: "#FFFFFF",
    fontFamily: "Mitr_400Regular",
    fontSize: 16,
  },
  logo: {
    width: 300,
    height: 180,
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

export default ControlScreen;