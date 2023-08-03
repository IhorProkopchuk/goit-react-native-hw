import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export function LoginScreen() {
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Увійти</Text>
      <View style={styles.form}>
        <View>
          <TextInput
            style={[
              styles.input,
              isEmailFocused && {
                borderColor: "#FF6C00",
                backgroundColor: "#fff",
              },
            ]}
            placeholder="Адреса електронної пошти"
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
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
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
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
          onPress={() => console.log("btnSubmit")}
          style={styles.btnSubmit}
        >
          <Text style={styles.textBtnSubmit}>Увійти</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textLink}>Немає акаунту? Зареєструватися</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingBottom: 144,
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    position: "relative",
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

export default LoginScreen;
