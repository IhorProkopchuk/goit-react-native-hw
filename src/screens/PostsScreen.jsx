import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function PostsScreen() {
  return (
    <View style={styles.container}>
      <Text>Here will be Posts Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PostsScreen;
