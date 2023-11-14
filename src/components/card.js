import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Text,
  ScrollView,
} from "react-native";

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
                    // Aqui vai a logica para executar o sonido da card
                    alert("Card Pressed1!");
                  }}
                >
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  CARD TEXT 4
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  CARD TEXT 4
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  CARD TEXT 4
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
                </TouchableOpacity>
                <Text style={styles.cardText}>
                  {/* aqui vai a logica para trazer o text descrição da imagen */}
                  CARD TEXT 4
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
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
                  {/* Aqui vai a logica para trazer a imagen do banco de dados */}
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
              {/* Aqui vai a logica para trazer a imagen do banco de dados */}
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
});

export default CardModel;
