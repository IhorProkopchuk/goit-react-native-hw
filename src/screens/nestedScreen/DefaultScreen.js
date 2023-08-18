import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { PostsScreen } from "../mainScreen/PostsScreen";
import { MapScreen } from "./MapScreen";
import { CommentsScreen } from "./CommentsScreen";

const PostStack = createStackNavigator();

export function DefaultScreen({ navigation }) {
  return (
    <PostStack.Navigator initialRouteName="PostsScreen">
      <PostStack.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Ionicons
                name="exit-outline"
                size={24}
                color="#BDBDBD"
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => null,
        }}
      />
      <PostStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ title: "Карта" }}
      />
      <PostStack.Screen
        name="CommentsScreen"
        options={{
          title: "Коментарі",
        }}
        component={CommentsScreen}
      />
    </PostStack.Navigator>
  );
}
