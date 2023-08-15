import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import avatar from "../../assets/img/avatarDefault.png";

export function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.user}>
          <Image source={avatar} style={{ width: 60, height: 60 }} />
          <View>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  main: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    gap: 16,
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: -0.5 },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  user: {
    flexDirection: "row",
    justifyContent: "flrx-start",
    alignItems: "center",
    gap: 8,
  },
  userName: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});

export default PostsScreen;
