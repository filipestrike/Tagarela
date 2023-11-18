import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import { styles, cardWidth, cardHeight, cardMargin } from "./card";

export const CardModel = ({ selectedCategory }) => {
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
                  <Image
                    source={card.image}
                    style={{ width: "100%", height: "100%" }}
                  />
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
