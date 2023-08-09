import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoginFocused, setLoginFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [isShowKeyboard, setShowKeyboard] = useState(false);

  const handleSubmit = () => {
    console.log("Login:", login);
    console.log("Email:", email);
    console.log("Password:", password);
  };
  const handleLoginFocus = () => {
    setLoginFocused(true);
    setShowKeyboard(true);
  };

  const handleLoginBlur = () => {
    setLoginFocused(false);
  };

  const handleEmailFocus = () => {
    setEmailFocused(true);
    setShowKeyboard(true);
  };

  const handleEmailBlur = () => {
    setEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
    setShowKeyboard(true);
  };

  const handlePasswordBlur = () => {
    setPasswordFocused(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={isShowKeyboard ? -190 : 0}
      >
        <View style={styles.container}>
          <KeyboardAvoidingView
            style={styles.avatarContainer}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.avatar}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.btnAvatar}
                onPress={() => console.log("btnAvatar")}
              >
                <AntDesign name="plus" size={20} color="#FF6C00" />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={styles.form}>
            <View>
              <TextInput
                style={[
                  styles.input,
                  isLoginFocused && {
                    borderColor: "#FF6C00",
                    backgroundColor: "#fff",
                  },
                ]}
                placeholder="Логін"
                onFocus={handleLoginFocus}
                onBlur={handleLoginBlur}
                onChangeText={setLogin}
              />
            </View>
            <View>
              <TextInput
                keyboardType="email-address"
                style={[
                  styles.input,
                  isEmailFocused && {
                    borderColor: "#FF6C00",
                    backgroundColor: "#fff",
                  },
                ]}
                placeholder="Адреса електронної пошти"
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
                onChangeText={setEmail}
              />
            </View>
            <View>
              <TextInput
                style={[
                  styles.input,
                  isPasswordFocused && {
                    borderColor: "#FF6C00",
                    backgroundColor: "#fff",
                  },
                ]}
                placeholder="Пароль"
                secureTextEntry={!showPassword}
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.showPasswordButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={styles.showPasswordButtonText}>
                  {showPassword ? "Приховати" : "Показати"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleSubmit}
              style={styles.btnSubmit}
            >
              <Text style={styles.textBtnSubmit}>Зареєструватися</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.textLink}>Вже є акаунт? Увійти</Text>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 52,
    paddingBottom: 78,
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    position: "relative",
  },
  avatar: {
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
    right: -12,
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  avatarContainer: {
    top: -52,
    position: "absolute",
    alignItems: "center",
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
    marginBottom: 32,
  },
  form: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
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
  showPasswordButton: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 50,
    justifyContent: "center",
    paddingRight: 16,
  },
  showPasswordButtonText: {
    color: "#1B4371",
    fontSize: 16,
  },
  btnSubmit: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 100,
    height: 50,
    backgroundColor: "#FF6C00",
    marginTop: 43,
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
});

export default RegistrationScreen;
