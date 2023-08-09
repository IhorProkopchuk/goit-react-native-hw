import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import background from "./assets/img/bg.jpg";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./src/screens/RegistrationScreen";
//import { LoginScreen } from "./src/screens/LoginScreen";
//import { PostsScreen } from "./src/screens/PostsScreen";


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        {fontsLoaded && <RegistrationScreen />}
        {/* {fontsLoaded && <LoginScreen />} */}
        {/* {fontsLoaded && <PostsScreen />} */}
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
