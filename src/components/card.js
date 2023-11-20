import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import Abrir from "../common/images/Abrir.png";
import Correr from "../common/images/Correr.png";
import Fechar from "../common/images/Fechar.png";
import Piscar from "../common/images/Piscar.png";
import Aqui from "../common/images/Aqui.png";
import Lá from "../common/images/Lá.png";
import Sim from "../common/images/Sim.png";
import Não from "../common/images/Não.png";
import Rindo from "../common/images/Rindo.png";
import Assustado from "../common/images/Assustado.png";
import Chorando from "../common/images/Chorando.png";
import Feliz from "../common/images/Feliz.png";
import Lavar from "../common/images/Lavar.png";
import Xixi from "../common/images/Xixi.png";
import Comer from "../common/images/Comer.png";
import Coco from "../common/images/Feliz.png";

const { width, height } = Dimensions.get("window");
const cardWidth = width * 0.2; // Card width based on screen size
const cardHeight = height * 0.35; // Card height based on screen size
const cardMargin = width * 0.005; // Card margin based on screen size

const CardModel = ({ selectedCategory }) => {
  const renderCard = () => {
    switch (selectedCategory) {
      case "DIA A DIA":
        return (
          <>
            <ScrollView horizontal>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    alert("Card Pressed1!");
                  }}
                >
                  <Image source={Sim} style={[styles.cardImage]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  SIM
                </Text>
              </View>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    alert("Card Pressed2!");
                  }}
                >
                  <Image source={Não} style={[styles.cardImage]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  NÃO
                </Text>
              </View>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed3!");
                  }}
                >
                  <Image source={Lá} style={[styles.cardImage]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  Lá
                </Text>
              </View>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed4!");
                  }}
                >
                  <Image source={Aqui} style={[styles.cardImageAqui]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  Aqui
                </Text>
              </View>
            </ScrollView>
          </>
        );
      case "AÇÕES":
        return (
          <>
            <ScrollView horizontal>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed1!");
                  }}
                >
                  <Image source={Fechar} style={[styles.cardImage]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  FECHAR
                </Text>
              </View>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed2!");
                  }}
                >
                  <Image source={Correr} style={[styles.cardImage]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  CORRER
                </Text>
              </View>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed3!");
                  }}
                >
                  <Image source={Abrir} style={[styles.cardImage]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  ABRIR
                </Text>
              </View>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed4!");
                  }}
                >
                  <Image source={Piscar} style={[styles.cardImageFull]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  PISCAR
                </Text>
              </View>
            </ScrollView>
          </>
        );
      case "EMOÇÕES":
        return (
          <>
            <ScrollView horizontal>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed1!");
                  }}
                >
                  <Image source={Rindo} style={[styles.cardImageFull]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  RINDO
                </Text>
              </View>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed2!");
                  }}
                >
                  <Image source={Assustado} style={[styles.cardImageFull]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  ASSUSTADO
                </Text>
              </View>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed3!");
                  }}
                >
                  <Image source={Chorando} style={[styles.cardImageFull]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  CHORANDO
                </Text>
              </View>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed4!");
                  }}
                >
                  <Image source={Feliz} style={[styles.cardImageFull]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  FELIZ
                </Text>
              </View>
            </ScrollView>
          </>
        );
      case "NECESSIDADES":
        return (
          <>
            <ScrollView horizontal>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed1!");
                  }}
                >
                  <Image source={Lavar} style={[styles.cardImageFull]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  LAVAR AS MÂOS
                </Text>
              </View>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed2!");
                  }}
                >
                  <Image source={Xixi} style={[styles.cardImageFull]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  XIXI
                </Text>
              </View>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed3!");
                  }}
                >
                  <Image source={Comer} style={[styles.cardImageFull]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  COMER
                </Text>
              </View>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed4!");
                  }}
                >
                  <Image source={Coco} style={[styles.cardImageFull]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  COCÔ
                </Text>
              </View>
            </ScrollView>
          </>
        );
      case "COMIDAS":
        return (
          <>
            <ScrollView horizontal>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed1!");
                  }}
                >
                  <Image source={Abrir} style={[styles.cardImage]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  CARD TEXT 1
                </Text>
              </View>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed2!");
                  }}
                >
                  <Image source={Abrir} style={[styles.cardImage]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  CARD TEXT 2
                </Text>
              </View>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed3!");
                  }}
                >
                  <Image source={Abrir} style={[styles.cardImage]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  CARD TEXT 3
                </Text>
              </View>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardButton,
                    {
                      width: cardWidth,
                      height: cardHeight,
                      marginVertical: cardMargin,
                    },
                  ]}
                  onPress={() => {
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed4!");
                  }}
                >
                  <Image source={Abrir} style={[styles.cardImage]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  CARD TEXT 4
                </Text>
              </View>
            </ScrollView>
          </>
        );
      default:
        return (
          <>
            <TouchableOpacity
              style={[
                styles.cardButton,
                {
                  width: cardWidth,
                  height: cardHeight,
                  marginVertical: cardMargin,
                },
              ]}
              onPress={() => {
                // Aqui vai a logica para executar o sonido da card
                alert("Card Pressed1!");
              }}
            >
              <Image source={Abrir} style={[styles.cardImage]} />
            </TouchableOpacity>
            <Text style={styles.cardText}>
              {/* aqui vai a logica para trazer o text descrição da imagen */}
              CARD TEXT 1
            </Text>
          </>
        );
    }
  };
  return <View>{renderCard()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  scrollViewContent: {
    alignItems: "center",
  },
  cardContainer: {
    marginLeft: 40,
    margin: 12,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cardButton: {
    backgroundColor: "#F4F4F4",
    borderRadius: 30,
    marginTop: 20,
  },
  cardText: {
    marginTop: 5,
    fontFamily: "Mitr_500Medium",
    fontSize: width * 0.02,
    color: "#000000",
  },
  cardImage: {
    width: "90%",
    height: "100%",
    borderRadius: 15,
    marginTop: 15,
    marginLeft: 12.5,
  },
  cardImageAqui: {
    width: "90%",
    height: "100%",
    borderRadius: 15,
    marginLeft: 35,
  },
  cardImageFull: {
    width: "90%",
    height: "100%",
    borderRadius: 10,
    marginLeft: 15,
  },
});

export default CardModel;
