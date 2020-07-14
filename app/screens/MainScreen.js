import React, { useState } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import Card from "../components/Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import MapModal from "../components/MapModal";

function MainScreen(props) {
  const [check, setCheck] = useState(false);
  const [modal, setModal] = useState(false);
  return (
    <>
      <LinearGradient
        colors={[colors.primary_dark, colors.primary]}
        style={styles.background}
      />
      <View style={styles.backgroundBottom} />
      <AppScreen style={styles.container}>
        <View>
          <View style={styles.header}>
            <AppText style={styles.text}>Attendex</AppText>
          </View>
          <View>
            <AppText style={styles.date}>7th July, Monday </AppText>
            <AppText style={styles.day}>Hello, Joy</AppText>
          </View>
        </View>

        <View style={styles.location}>
          {check ? (
            <Card
              onPress={() => setModal(true)}
              image={require("../assets/appleLogo.png")}
              title="Apple china"
              description="China, Guangdong Province, Guangzhou, Tianhe District, Tianhe Rd, 590号百脑汇科技大厦B1"
              subTitle="My work"
            />
          ) : (
            <TouchableOpacity
              style={styles.locationContainer}
              onPress={() => setModal(true)}
            >
              <MaterialCommunityIcons
                name="map-marker"
                size={24}
                color={colors.secondary}
              />
              <AppText style={styles.locationText}>See my location</AppText>
            </TouchableOpacity>
          )}
        </View>
      </AppScreen>
      <TouchableOpacity style={styles.button}>
        <LottieView
          autoPlay
          loop
          style={styles.lottie}
          source={
            check
              ? require("../assets/blink.json")
              : require("../assets/none.json")
          }
        >
          <LinearGradient
            colors={[colors.primary_medium, colors.primary]}
            style={styles.button2}
          >
            <View style={styles.border}>
              <LinearGradient
                colors={[colors.primary_dark, colors.primary]}
                style={styles.button3}
              >
                <AppText style={styles.buttonText}>
                  {check ? "Check in" : "out of range"}
                </AppText>
              </LinearGradient>
            </View>
          </LinearGradient>
        </LottieView>
      </TouchableOpacity>

      <MapModal visible={modal} onPress={() => setModal(false)} />
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: Dimensions.get("window").height / 2 - 50,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  backgroundBottom: {
    position: "absolute",
    left: 0,
    right: 0,
    top: Dimensions.get("window").height / 2 - 50,
    width: "100%",
    height: "100%",
    backgroundColor: colors.primary_dark,
  },
  text: {
    fontSize: 18,
    color: colors.white,
  },
  header: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 280,
    width: 280,
    borderRadius: 140,
    overflow: "hidden",
    position: "absolute",
    top: Dimensions.get("window").height / 2 - 190,
    left: (Dimensions.get("window").width - 280) / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  lottie: {
    height: 280,
    width: 280,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    height: 250,
    width: 250,
    borderRadius: 125,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  border: {
    height: 210,
    width: 210,
    borderRadius: 105,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primary,
  },
  button3: {
    height: 160,
    width: 160,
    borderRadius: 80,
    backgroundColor: colors.primary_dark,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 22,
    color: colors.white,
    opacity: 0.7,
    textTransform: "uppercase",
    padding: 20,
    textAlign: "center",
  },
  container: {
    justifyContent: "space-between",
  },
  location: {
    padding: 25,
    zIndex: 1,
  },
  date: {
    color: colors.white,
    fontSize: 20,
    marginTop: 20,
    marginLeft: 30,
    marginBottom: 5,
    fontWeight: "600",
  },
  day: {
    color: colors.white,
    marginLeft: 30,
    opacity: 0.7,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    justifyContent: "center",
  },
  locationText: { color: colors.secondary, marginLeft: 5 },
});

export default MainScreen;
