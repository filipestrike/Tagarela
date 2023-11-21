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
import Coco from "../common/images/Coco.png";
import banana from "../common/images/banana.png";
import maca from "../common/images/maca.jpg";
import bolo1 from "../common/images/bolo.png";
import agua from "../common/images/agua.png";
import { Audio } from "expo-av";

const { width, height } = Dimensions.get("window");
const cardWidth = width * 0.2; // Card width based on screen size
const cardHeight = height * 0.35; // Card height based on screen size
const cardMargin = width * 0.005; // Card margin based on screen size

const SimA = require("../common/audio/Sim.mp3");
const NaoA = require("../common/audio/Não.mp3");
const LaA = require("../common/audio/La.mp3");
const AquiA = require("../common/audio/Aqui.mp3");
const FecharA = require("../common/audio/Fechar.mp3");
const CorrerA = require("../common/audio/QueroCorrer.mp3");
const AbrirA = require("../common/audio/Abrir.mp3");
const PiscarA = require("../common/audio/EstouPiscando.mp3");
const RindoA = require("../common/audio/EstouRindo.mp3");
const AssustadoA = require("../common/audio/EstouAssustado.mp3");
const ChorandoA = require("../common/audio/EstouChorando.mp3");
const FelizA = require("../common/audio/EstouFeliz.mp3");
const LavarA = require("../common/audio/LavarAsMãos.mp3");
const XixiA = require("../common/audio/PrecisoFazerXixi.mp3");
const ComerA = require("../common/audio/EuQueroComer.mp3");
const CocoA = require("../common/audio/PrecisoFazerCoco.mp3");

async function playSound(audio) {
  const sound = new Audio.Sound();
  try {
    await sound.loadAsync(audio),
      {
        shouldPlay: true,
      };
    await sound.setPositionAsync(0);
    await sound.playAsync();
  } catch (error) {
    console.error(error);
  }
}
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
                  onPress={() => playSound(SimA)}
                >
                  <Image source={Sim} style={[styles.cardImage]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>SIM</Text>
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
                  onPress={() => playSound(NaoA)}
                >
                  <Image source={Não} style={[styles.cardImage]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>NÃO</Text>
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
                  onPress={() => playSound(LaA)}
                >
                  <Image source={Lá} style={[styles.cardImage]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>Lá</Text>
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
                  onPress={() => playSound(AquiA)}
                >
                  <Image source={Aqui} style={[styles.cardImageAqui]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>Aqui</Text>
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
                  onPress={() => playSound(FecharA)}
                >
                  <Image source={Fechar} style={[styles.cardImage]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>FECHAR</Text>
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
                  onPress={() => playSound(CorrerA)}
                >
                  <Image source={Correr} style={[styles.cardImage]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>CORRER</Text>
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
                  onPress={() => playSound(AbrirA)}
                >
                  <Image source={Abrir} style={[styles.cardImage]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>ABRIR</Text>
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
                  onPress={() => playSound(PiscarA)}
                >
                  <Image source={Piscar} style={[styles.cardImageFull]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>PISCAR</Text>
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
                  onPress={() => playSound(RindoA)}
                >
                  <Image source={Rindo} style={[styles.cardImageFull]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>RINDO</Text>
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
                  onPress={() => playSound(AssustadoA)}
                >
                  <Image source={Assustado} style={[styles.cardImageFull]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>ASSUSTADO</Text>
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
                  onPress={() => playSound(ChorandoA)}
                >
                  <Image source={Chorando} style={[styles.cardImageFull]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>CHORANDO</Text>
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
                  onPress={() => playSound(FelizA)}
                >
                  <Image source={Feliz} style={[styles.cardImageFull]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>FELIZ</Text>
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
                  onPress={() => playSound(LavarA)}
                >
                  <Image source={Lavar} style={[styles.cardImageFull]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>LAVAR AS MÂOS</Text>
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
                  onPress={() => playSound(XixiA)}
                >
                  <Image source={Xixi} style={[styles.cardImageFull]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>XIXI</Text>
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
                  onPress={() => playSound(ComerA)}
                >
                  <Image source={Comer} style={[styles.cardImageFull]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>COMER</Text>
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
                  onPress={() => playSound(CocoA)}
                >
                  <Image source={Coco} style={[styles.cardImageFull]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>COCÔ</Text>
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
                  <Image source={agua} style={[styles.cardImage]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>ÁGUA</Text>
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
                  <Image source={maca} style={[styles.cardImageComida]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>MAÇÃ</Text>
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
                  <Image source={banana} style={[styles.cardImageComida]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>BANANA</Text>
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
                  <Image source={bolo1} style={[styles.cardImageComida]} />
                </TouchableOpacity>
                <Text style={styles.cardText}>BOLO</Text>
              </View>
            </ScrollView>
          </>
        );
      default:
        return (
          <>
            <TouchableOpacity
              style={[
                styles.cardButtonFav,
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
              <Image source={Abrir} style={[styles.cardFirebase]} />
            </TouchableOpacity>
            <Text style={styles.cardTextFav}>CARD TEXT 1</Text>
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
  cardButtonFav: {
    backgroundColor: "#F4F4F4",
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 500,
  },
  cardTextFav: {
    marginTop: 5,
    fontFamily: "Mitr_500Medium",
    fontSize: width * 0.02,
    color: "#000000",
    marginLeft: 550,
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
  cardImageComida: {
    width: "85%",
    height: "100%",
    borderRadius: 10,
    marginLeft: 15,
  },
  cardFirebase: {
    width: "85%",
    height: "100%",
    borderRadius: 10,
    marginLeft: 15,
  },
});

export default CardModel;
