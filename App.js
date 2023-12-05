import AppLoading from "expo-app-loading";
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
} from "@expo-google-fonts/lexend-exa";
import {
  Mitr_200ExtraLight,
  Mitr_300Light,
  Mitr_400Regular,
  Mitr_500Medium,
  Mitr_600SemiBold,
  Mitr_700Bold,
} from "@expo-google-fonts/mitr";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FormLogin from "./src/screens/loginScreen";
import ControlScreen from "./src/screens/pwrdControlScreen";
import Home from "./src/screens/homeScreen";
import Categories from "./src/screens/categoriesScreen";
import CreateCard from "./src/screens/createCardScreen";


const Stack = createStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="FormLogin" component={FormLogin} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="CreateCard" component={CreateCard} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
