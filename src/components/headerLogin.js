import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import logo from "../common/assets/icons/logoTagarela_3.png";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const logoWidth = width * 0.15; // Logo width based on screen size

const HeaderComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.containerHeader, { width }]}>
      <Image source={logo} style={[styles.imgLogo, { width: logoWidth }]} />
      <View style={styles.containerBttn}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Svg
            width={52}
            height={49}
            viewBox="0 0 52 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M19.3273 0V6.99601H45.0971V41.9761H19.3273V48.9721H51.5395V0H19.3273ZM12.8849 13.992L0 24.486L12.8849 34.9801V27.984H38.6546V20.988H12.8849V13.992Z"
              fill="#5E5CB2"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    marginTop: -20,
    paddingBottom: 200,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-between", // This will align items to the start and end
    // paddingHorizontal: 10, // Add some horizontal padding for spacing
  },
  imgLogo: {
    height: height * 0.07,
    margin: 10,
  },
  containerBttn: {
    flexDirection: "row",
  },
  configButton: {
    margin: 10,
  },
  logoutButton: {
    margin: 10,
    marginRight: 20,
  },
});

export default HeaderComponent;
