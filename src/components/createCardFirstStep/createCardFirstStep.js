import React from "react";
import {
  StyleSheet,
  Dimensions,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  IconAudioImage,
  IconUploadImage,
} from "../../common/styles/assets/icons";
import * as S from "./styles";

const { width, height } = Dimensions.get("window");
const fontSize = Math.min(width, height) * 0.03; // Font size based on screen size

export function StepOneCreate() {
  return (
    <View>
      <S.Container>
        <TextInput>
          <S.cardNameInput
            placeholder="     NOME DO CARD"
            placeholderTextColor={colors.soft.purple6}
          />
        </TextInput>
        <TouchableOpacity>
          <S.uploadButton>
            <IconUploadImage />
            <S.Text>UPLOAD IMAGEM</S.Text>
          </S.uploadButton>
        </TouchableOpacity>
      </S.Container>
      <View>
        <S.containerAudioBttn>
          <TouchableOpacity>
            <IconAudioImage />
            <S.textAudioBttn>UPLOAD AUDIO</S.textAudioBttn>
          </TouchableOpacity>
        </S.containerAudioBttn>
      </View>
    </View>
  );
}
