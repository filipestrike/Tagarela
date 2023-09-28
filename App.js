import "@fontsource/league-spartan";
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  LexendExa_100Thin,
  LexendExa_200ExtraLight,
  LexendExa_300Light,
  LexendExa_400Regular,
  LexendExa_500Medium,
  LexendExa_600SemiBold,
  LexendExa_700Bold,
  LexendExa_800ExtraBold,
  LexendExa_900Black,
} from '@expo-google-fonts/lexend-exa';
import {
  Mitr_200ExtraLight,
  Mitr_300Light,
  Mitr_400Regular,
  Mitr_500Medium,
  Mitr_600SemiBold,
  Mitr_700Bold,
} from '@expo-google-fonts/mitr';
import FormLogin from "./src/screens/loginScreen";
import ControlScreen from "./src/screens/pwrdControlScreen";
import Home from "./src/screens/homeScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    LexendExa_100Thin,
    LexendExa_200ExtraLight,
    LexendExa_300Light,
    LexendExa_400Regular,
    LexendExa_500Medium,
    LexendExa_600SemiBold,
    LexendExa_700Bold,
    LexendExa_800ExtraBold,
    LexendExa_900Black,
    Mitr_200ExtraLight,
    Mitr_300Light,
    Mitr_400Regular,
    Mitr_500Medium,
    Mitr_600SemiBold,
    Mitr_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Home />
    );
  }
}