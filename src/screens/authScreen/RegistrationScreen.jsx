import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import background from "../../../assets/img/bg.jpg";
import { AntDesign } from "@expo/vector-icons";


export function RegistrationScreen({ navigation }) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [inputLoginInFocus, setInputLoginInFocus] = useState(false);
  const [inputEmailInFocus, setInputEmailInFocus] = useState(false);
  const [inputPasswordInFocus, setInputPasswordInFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const isHideKeyboard = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };

  const handleSubmit = () => {
    console.log("Login:", login);
    console.log("Email:", email);
    console.log("Password:", password);
    navigation.navigate("Home");
  };

  const onFocusLogin = () => {
      setIsShowKeyboard(true);
      setInputLoginInFocus(true);
  };
  
  const onFocusEmail = () => {
    setIsShowKeyboard(true);
    setInputEmailInFocus(true);
  };

  const onFocusPassword = () => {
    setIsShowKeyboard(true);
    setInputPasswordInFocus(true);
  };

  return (
    <TouchableWithoutFeedback onPress={isHideKeyboard}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ImageBackground source={background} style={styles.backgroundStyle}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={isShowKeyboard ? -95 : 0}
            style={styles.activeKeyboard}
          >
            <View
              style={{
                ...styles.containerForm,
                paddingBottom: isShowKeyboard ? 16 : 144,
              }}
            >
              <View style={styles.containerAvatar}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.btnAvatar}
                  onPress={() => console.log("btnAvatar")}
                >
                  <AntDesign name="plus" size={20} color="#FF6C00" />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <View style={styles.form}>
                <View>
                  <TextInput
                    style={[
                      styles.input,
                      inputLoginInFocus && styles.inputActive,
                    ]}
                    placeholder="Логін"
                    value={login}
                    onFocus={onFocusLogin}
                    onBlur={() => setInputLoginInFocus(false)}
                    onChangeText={setLogin}
                  />
                </View>
                <View>
                  <TextInput
                    keyboardType="email-address"
                    style={[
                      styles.input,
                      inputEmailInFocus && styles.inputActive,
                    ]}
                    placeholder="Адреса електронної пошти"
                    value={email}
                    onFocus={onFocusEmail}
                    onBlur={() => setInputEmailInFocus(false)}
                    onChangeText={setEmail}
                  />
                </View>
                <View style={styles.label}>
                  <TextInput
                    style={[
                      styles.input,
                      inputPasswordInFocus && styles.inputActive,
                    ]}
                    placeholder="Пароль"
                    secureTextEntry={showPassword}
                    value={password}
                    onChangeText={setPassword}
                    onFocus={onFocusPassword}
                    onBlur={() => setInputPasswordInFocus(false)}
                  />
                  <TouchableOpacity
                    style={styles.containerShowPassword}
                    onPress={() => setShowPassword((prev) => !prev)}
                  >
                    <Text style={styles.textShowPassword}>
                      {showPassword ? "Показати" : "Приховати"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleSubmit}
                style={styles.btnSubmit}
              >
                <Text style={styles.textBtnSubmit}>Зареєструватися</Text>
              </TouchableOpacity>
              {!isShowKeyboard && (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.textLink}>Вже є акаунт? Увійти</Text>
                </TouchableOpacity>
              )}
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
    paddingTop: 92,
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    position: "relative",
    paddingHorizontal: 16,
  },
  containerAvatar: {
    width: 120,
    height: 120,
    top: -60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
  },
  btnAvatar: {
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
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
    marginBottom: 32,
  },
  form: {
    width: "100%",
    marginBottom: 16,
  },
  input: {
    fontFamily: "Roboto",
    fontSize: 16,
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 40,
  },
  inputActive: {
    borderWidth: 1,
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
  },
  btnSubmit: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 100,
    height: 50,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
  },
  textBtnSubmit: {
    paddingVertical: 16,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
  textLink: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
  label: {
    position: "relative",
  },
  containerShowPassword: {
    position: "absolute",
    right: 16,
    top: "25%",
  },
  textShowPassword: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});

export default RegistrationScreen;
