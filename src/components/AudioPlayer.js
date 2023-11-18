import { Audio } from "expo-av";

useEffect(() => {
  Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    playsInSilentModeIOS: true,
    shouldDuckAndroid: true,
    interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    playThroughEarpieceAndroid: false,
  });
}, []);

const playAudio = async (audioPath) => {
  const { sound } = await Audio.Sound.createAsync(
    { uri: audioPath },
    { shouldPlay: true }
  );

  // opcional: você pode adicionar manipuladores de eventos aqui
};
const audioPathCard1 = "caminho/do/audio1.mp3";
const audioPathCard2 = "caminho/do/audio2.mp3";

playAudio(audioPathCard1); // reproduza o áudio para o card 1
// ou
playAudio(audioPathCard2); // reproduza o áudio para o card 2
