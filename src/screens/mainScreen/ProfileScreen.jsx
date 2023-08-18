import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import background from "../../../assets/img/bg.jpg";
import avatar from "../../../assets/img/avatarDefault.png";
import { Ionicons } from "@expo/vector-icons";

export function ProfileScreen({ navigation }) {
  const [avatarPhoto, setAvatarPhoto] = useState(avatar);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.backgroundStyle}>
          <StatusBar style="auto" />
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.activeKeyboard}
          >
            <View style={styles.containerForm}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={styles.exitBtn}
              >
                <Ionicons name="exit-outline" size={24} color="#BDBDBD" />
              </TouchableOpacity>
              <View style={styles.containerAvatar}>
                <Image source={avatarPhoto} style={styles.image} />
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[
                    styles.buttonAvatar,
                    avatarPhoto && { borderColor: "#BDBDBD" },
                  ]}
                  onPress={() => setAvatarPhoto(avatarPhoto ? null : avatar)}
                >
                  {avatarPhoto && (
                    <Ionicons name="close-outline" size={24} color="#BDBDBD" />
                  )}
                  {!avatarPhoto && (
                    <Ionicons name="add-outline" size={24} color="#FF6C00" />
                  )}
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Natali Romanova</Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  activeKeyboard: {
    width: "100%",
  },
  containerForm: {
    alignItems: "center",
    paddingTop: 22,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    width: "100%",
    height: 600,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
  },
  containerAvatar: {
    width: 120,
    height: 120,
    top: -60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
  },
  image: { borderRadius: 16, overflow: "hidden" },
  buttonAvatar: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
    marginBottom: 32,
    marginTop: 32,
  },
  exitBtn: { marginLeft: "auto" },
});
