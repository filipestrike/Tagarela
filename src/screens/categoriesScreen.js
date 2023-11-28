import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import HeaderComponent from "../components/header";
import CardsCategoriesEdit from "../components/cardsBarEdit";
import OptionsMenu from "../components/optionsBar";
import CardModelFav from "../components/CardModel";

const Categories = () => {
  return (
    <View style={styles.containerFather}>
      <HeaderComponent />
      <View style={styles.containerBars}>
        <CardsCategoriesEdit />
      </View>
      <CardModelFav />
      <View style={styles.containerBars}>
        <OptionsMenu
          homeColor="#949494"
          favColor="#949494"
          addColor="#949494"
          categoriesColor="#5E5CB2"
          userColor="#949494"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFather: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  containerBars: {
    width: "100%",
    justifyContent: "center",
    marginVertical: 30,
  },
});

export default Categories;
