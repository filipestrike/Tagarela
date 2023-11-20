import { StyleSheet, TouchableOpacity, Dimensions, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const optionButtonMargin = width * 0.02; // Margin based on screen size

const OptionsMenu = ({
  homeColor,
  favColor,
  addColor,
  categoriesColor,
  userColor,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerFather}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            { marginHorizontal: optionButtonMargin },
          ]}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Svg
            width={70}
            height={60}
            viewBox="0 0 70 60"
            fill={homeColor}
            xmlns="http://www.w3.org/2000/Svg"
          >
            <Path d="M31.0327 0L0 23.2745H7.75817V54.3072H23.2745V38.7908H38.7908V54.3072H54.3072V23.0418L62.0653 23.2745L31.0327 0Z" />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButtonAdd,
            { marginHorizontal: optionButtonMargin },
          ]}
          onPress={() => {
            navigation.navigate("CreateCard");
          }}
        >
          <Svg
            width={70}
            height={60}
            viewBox="0 0 70 60"
            fill={addColor}
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path d="M18.3418 0V20.2168H0V33.6946H18.3418V53.9114H30.5696V33.6946H48.9114V20.2168H30.5696V0H18.3418Z" />
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButtonStar,
            { marginHorizontal: optionButtonMargin },
          ]}
          onPress={() => {
            navigation.navigate("Categories");
          }}
        >
          <Svg
            width={70}
            height={60}
            viewBox="0 0 70 60"
            fill={favColor}
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path d="M34.7451 0L26.0588 22.3088H0L21.7157 37.1814L13.0294 59.4902L34.7451 44.6176L56.4608 59.4902L47.7745 37.1814L69.4902 22.3088H43.4314L34.7451 0Z" />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFather: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  container: {
    width: width * 0.5, // Width based on screen size
    height: height * 0.14, // Height based on screen size
    backgroundColor: "#F4F4F4",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  optionButton: {
    marginVertical: height * 0.026, // Margin based on screen size
  },
  optionButtonStar: {
    marginVertical: height * 0.026, // Margin based on screen size
    marginLeft: -2,
  },
  optionButtonAdd: {
    marginVertical: height * 0.035, // Margin based on screen size
  },
  optionButtonCategories: {
    marginVertical: height * 0.03, // Margin based on screen size
  },
});

export default OptionsMenu;
