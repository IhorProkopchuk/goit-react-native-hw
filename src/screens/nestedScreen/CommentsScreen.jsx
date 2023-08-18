import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { format, parseISO } from "date-fns";
import avatar from "../../../assets/img/avatarDefault.png";


export function CommentsScreen({ route }) {
  const [text, setText] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [messages, setMessages] = useState([]);

  function isHideKeyboard() {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  }

  function handleSend() {
    if (text.trim() !== "") {
      const newMessage = {
        id: messages.length,
        text,
        timestamp: new Date().toISOString(),
      };
      setMessages([...messages, newMessage]);
      setText("");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={isHideKeyboard}>
      <View style={styles.container}>
        <View>
          <Image source={{ uri: route.params.photo }} style={styles.photo} />
        </View>
        <View style={styles.messagesContainer}>
          {messages.map((message) => (
            <View style={styles.message} key={message.id}>
              <Image source={avatar} style={styles.avatar} />

              <View style={styles.messageContent}>
                <View style={styles.messageTextContainer}>
                  <Text style={styles.messageText}>{message.text}</Text>
                  <Text style={styles.timestamp}>
                    {format(
                      parseISO(message.timestamp),
                      "dd MMMM, yyyy | HH:mm"
                    )}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.activeKeyboard}
        >
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Коментувати..."
              style={styles.input}
              value={text}
              onChangeText={setText}
            />
            <TouchableOpacity style={styles.inputBtn} onPress={handleSend}>
              <AntDesign name="arrowup" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  activeKeyboard: {
    width: "100%",
  },
  photo: {
    height: 240,
    width: "auto",
    borderRadius: 8,
  },
  messagesContainer: {
    flex: 1,
    marginTop: 24,
    marginRight: 60,
  },
  message: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  messageContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  avatar: {
    position: "absolute",
    top: 0,
    right: -65,
    width: 28,
    height: 28,
    borderRadius: 12,
    marginRight: 8,
    marginTop: 4,
  },
  messageTextContainer: {
    flex: 1,
  },
  messageText: {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 13,
    marginBottom: 4,
  },
  timestamp: {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 10,
    color: "#BDBDBD",
    alignSelf: "flex-end",
  },
  inputContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    paddingVertical: 16,
    paddingLeft: 16,
  },
  inputBtn: {
    position: "absolute",
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    width: 34,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    right: 8,
    bottom: 8,
  },
});
