import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Text,
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
          </>
        );
      case "AÇÕES":
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
      case "EMOÇÕES":
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
      case "NECESSIDADES":
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
      case "COMIDAS":
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
  return <View style={styles.container}>{renderCard()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  cardButton: {
    backgroundColor: "#F4F4F4",
    borderRadius: 30,
    marginTop: 20,
    marginHorizontal: cardMargin,
    // Width and height set dynamically
  },
  cardText: {
    marginTop: 5,
    fontFamily: "Mitr_500Medium",
    fontSize: width * 0.02, // Font size based on screen size
    color: "#000000",
  },
});

export default CardModel;
