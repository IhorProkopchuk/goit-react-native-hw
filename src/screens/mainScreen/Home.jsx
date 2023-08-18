import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Octicons, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { ProfileScreen } from "./ProfileScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { DefaultScreen } from "../nestedScreen/DefaultScreen";

const Tab = createBottomTabNavigator();

export function Home({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 9,
          paddingHorizontal: 80,
        },
        tabBarItemStyle: {
          borderRadius: 20,
        },
      }}
    >
      <Tab.Screen
        name="DefaultScreen"
        component={DefaultScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-grid-outline"
              size={24}
              color={focused ? "#FF6C00" : "rgba(33, 33, 33, 0.8)"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => navigation.navigate("DefaultScreen")}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ),
          tabBarIcon: () => (
            <View style={styles.backgroundPlus}>
              <Ionicons name="add-sharp" size={24} color="#FFF" />
            </View>
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="person"
              size={24}
              color={focused ? "#FF6C00" : "rgba(33, 33, 33, 0.8)"}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  backgroundPlus: {
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
