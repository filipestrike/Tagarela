import {
  TouchableOpacity,
  Dimensions,
  View,
  Text,
} from "react-native";
import * as S from "./styles";

const { width, height } = Dimensions.get("window");
const cardWidth = width * 0.2; // Card width based on screen size
const cardHeight = height * 0.35; // Card height based on screen size
const cardMargin = width * 0.005; // Card margin based on screen size

export function card() {
  return (
    <View>
      <S.Container>
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
            // Aqui vai a logica para executar o som da card
            alert("Card Pressed!");
          }}
        >
          <S.cardButton></S.cardButton>
        </TouchableOpacity>
        <Text>
          <S.cardText>CARD TEXT</S.cardText>
        </Text>
      </S.Container>
    </View>
  );
}
