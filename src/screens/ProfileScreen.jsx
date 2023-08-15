import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Here will be Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
