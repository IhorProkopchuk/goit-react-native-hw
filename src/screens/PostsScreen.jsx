import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";
import avatar from "../../assets/img/avatarDefault.png";

export function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>
        <TouchableOpacity style={styles.exitBtn}>
          <Ionicons name="exit-outline" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View style={styles.user}>
          <Image source={avatar} style={{ width: 60, height: 60 }} />
          <View>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.containerBtnFooter}>
          <TouchableOpacity style={styles.deactiveBtnFooter}>
            <Ionicons
              name="ios-grid-outline"
              size={24}
              color="rgba(33, 33, 33, 0.8)"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.activeBtnFooter}>
            <Ionicons name="add-sharp" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.deactiveBtnFooter}>
            <Octicons name="person" size={24} color="rgba(33, 33, 33, 0.8)" />
          </TouchableOpacity>
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
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 55,
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 0.5 },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOpacity: 1,
    shadowRadius: 1,
    position: "relative",
  },
  exitBtn: {
    position: "absolute",
    right: 16,
    bottom: 10,
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    color: "#212121",
    paddingVertical: 11,
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
  footer: {
    backgroundColor: "#fff",
    paddingTop: 9,
    paddingBottom: 34,
    shadowOffset: { width: 0, height: -0.5 },
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOpacity: 1,
    shadowRadius: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerBtnFooter: {
    flexDirection: "row",
    gap: 31,
    justifyContent: "center",
    alignItems: "center",
  },
  activeBtnFooter: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
  deactiveBtnFooter: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
});

export default PostsScreen;
