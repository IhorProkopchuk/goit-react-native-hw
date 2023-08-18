import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import avatar from "../../../assets/img/avatarDefault.png";

export function PostsScreen({ route, navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prev) => [...prev, route.params]);
    }
  }, [route.params]);
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image source={avatar} style={{ width: 60, height: 60 }} />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <View>
              <Image source={{ uri: item.photo }} style={styles.photo} />
            </View>
            <Text style={styles.postText}>{item.name}</Text>
            <View style={styles.postAction}>
              <TouchableOpacity
                style={styles.commentBtn}
                onPress={() =>
                  navigation.navigate("CommentsScreen", { photo: item.photo })
                }
              >
                <FontAwesome name="comment-o" size={24} color="#BDBDBD" />
                <Text>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.locationBtn}
                onPress={() =>
                  navigation.navigate("MapScreen", {
                    location: item.locationPhoto,
                  })
                }
              >
                <MaterialCommunityIcons
                  name="map-marker-outline"
                  size={24}
                  color="#BDBDBD"
                />
                <Text style={styles.locationText}>{item.locationName}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  user: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    marginBottom: 32,
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
  photo: {
    height: 240,
    width: "auto",
    borderRadius: 8,
  },
  postText: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginTop: 8,
  },
  commentBtn: {
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
  },
  postContainer: {
    marginBottom: 32,
  },
  locationBtn: {
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
  },
  postAction: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 8,
  },
  locationText: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
    color: "#212121",
  },
});
