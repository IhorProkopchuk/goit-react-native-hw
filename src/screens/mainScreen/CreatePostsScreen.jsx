import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";

export function CreatePostsScreen({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [locationPhoto, setLocationPhoto] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return console.log("Permission to access location was denied");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        return console.log("Permission to access camera was denied");
      }
    })();
  }, []);

  async function getLocationAsync() {
    const location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    try {
      const [locationData] = await Location.reverseGeocodeAsync(coords);
      setLocationName(locationData.street);
    } catch (error) {
      console.log("Error fetching location data:", error);
    }

    setLocationPhoto(coords);
  }

  useEffect(() => {
    if (photo && !locationName) {
      getLocationAsync();
    }
  }, [photo]);

  function isHideKeyboard() {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);

    if (!locationName) {
      getLocationAsync();
    }
  };

  async function sendPost() {
    navigation.navigate("PostsScreen", {
      photo,
      locationName,
      name,
      locationPhoto,
    });
    setPhoto(null);
    setName(null);
  }

  function isClearPost() {
    setPhoto(null);
    setName(null);
    setLocationName(null);
  }

  return (
    <TouchableWithoutFeedback onPress={isHideKeyboard}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.activeKeyboard}
      >
        <View style={[styles.container, isShowKeyboard && { paddingTop: 2 }]}>
          {photo && (
            <View style={styles.photoContainer}>
              <Image source={{ uri: photo }} style={styles.photo} />
            </View>
          )}
          {!photo && (
            <Camera style={styles.camera} type={type} ref={setCamera}>
              <View style={styles.cameraBtnContainer}>
                <TouchableOpacity style={styles.cameraBtn} onPress={takePhoto}>
                  <FontAwesome name="camera" size={24} color="#BDBDBD" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cameraBtn}
                  onPress={toggleCameraType}
                >
                  <Ionicons
                    name="ios-reload-outline"
                    size={24}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
              </View>
            </Camera>
          )}
          {!photo ? (
            <View style={{ marginTop: 8 }}>
              <Text style={styles.text}>Завантажте фото</Text>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => setPhoto(null)}
              style={styles.editContainer}
            >
              <Text style={styles.text}>Редагувати фото</Text>
            </TouchableOpacity>
          )}
          <View style={styles.inputsContainer}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Назва..."
                value={name}
                onChangeText={setName}
                onFocus={() => setIsShowKeyboard(true)}
                onBlur={() => setIsShowKeyboard(false)}
              />
            </View>
            <View>
              <TextInput
                style={{ ...styles.input, paddingLeft: 28 }}
                placeholder="Місцевість..."
                value={locationName || ""}
                onChangeText={setLocationName}
                onFocus={() => setIsShowKeyboard(true)}
                onBlur={() => setIsShowKeyboard(false)}
              />
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={24}
                color="#BDBDBD"
                style={styles.marker}
              />
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.publishBtn,
              !name || !photo || !locationName ? styles.disPublishBtn : null,
            ]}
            disabled={!name && !photo}
            onPress={sendPost}
          >
            <Text
              style={[
                styles.textPublishBtn,
                !name || !photo || !locationName
                  ? styles.disTextPublishBtn
                  : null,
              ]}
            >
              Опублікувати
            </Text>
          </TouchableOpacity>
          {!isShowKeyboard && (
            <View style={styles.containerDeleteBtn}>
              <TouchableOpacity style={styles.deleteBtn} onPress={isClearPost}>
                <AntDesign name="delete" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  activeKeyboard: {
    height: "100%",
  },
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  camera: {
    backgroundColor: "#E8E8E8",
    height: 240,
    borderRadius: 8,
  },
  cameraBtnContainer: {
    height: 240,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 240,
    borderRadius: 8,
    paddingBottom: 5,
    paddingHorizontal: 5,
  },
  cameraBtn: {
    width: 40,
    height: 40,
    backgroundColor: "#212121",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  photoContainer: {
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    height: 240,
    width: "100%",
  },
  photo: {
    borderRadius: 8,
    height: "100%",
    width: "100%",
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  editContainer: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    width: 150,
  },
  inputsContainer: {
    marginTop: 32,
    marginBottom: 32,
    gap: 16,
    position: "relative",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    paddingBottom: 15,
    paddingTop: 16,
  },
  marker: {
    position: "absolute",
    bottom: 13,
  },
  publishBtn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingVertical: 16,
  },
  textPublishBtn: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
  disPublishBtn: {
    backgroundColor: "#F6F6F6",
  },
  disTextPublishBtn: {
    color: "#BDBDBD",
  },
  containerDeleteBtn: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 180,
  },
  deleteBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});
