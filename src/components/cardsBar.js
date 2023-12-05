import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Text,
} from "react-native";

const { width, height } = Dimensions.get("window");
const optionButtonMargin = width * 0.027; // Margin based on screen size

const CardsCategories = ({ selectedCategory, onCategoryChange }) => {
  return (
    <View style={styles.containerFather}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => onCategoryChange("DIA A DIA")}
          style={[
            styles.optionButton,
            { marginHorizontal: optionButtonMargin },
          ]}
        >
          <Text style={styles.optionText}>DIA A DIA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onCategoryChange("AÇÕES")}
          style={[
            styles.optionButton,
            { marginHorizontal: optionButtonMargin },
          ]}
        >
          <Text style={styles.optionText}>AÇÕES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onCategoryChange("EMOÇÕES")}
          style={[
            styles.optionButton,
            { marginHorizontal: optionButtonMargin },
          ]}
        >
          <Text style={styles.optionText}>EMOÇÕES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onCategoryChange("NECESSIDADES")}
          style={[
            styles.optionButton,
            { marginHorizontal: optionButtonMargin },
          ]}
        >
          <Text style={styles.optionText}>NECESSIDADES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onCategoryChange("COMIDAS")}
          style={[
            styles.optionButton,
            { marginHorizontal: optionButtonMargin },
          ]}
        >
          <Text style={styles.optionText}>COMIDAS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onCategoryChange("PERSONALIZADAS")}
          style={[
            styles.optionButton,
            { marginHorizontal: optionButtonMargin },
          ]}
        >
          <Text style={styles.optionText}>PERSONALIZADAS</Text>
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
    width: width * 0.97, // Width based on screen size
    height: height * 0.1, // Height based on screen size
    backgroundColor: "#F4F4F4",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  optionButton: {
    marginVertical: height * 0.015, // Margin based on screen size
  },
  optionText: {
    fontFamily: "Mitr_500Medium",
    fontSize: width * 0.02, // Font size based on screen size
    color: "#949494",
  },
});

export default CardsCategories;
