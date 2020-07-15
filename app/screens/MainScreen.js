import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import Card from "../components/Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import MapModal from "../components/MapModal";
import useLocation from "../hooks/useLocation";

function MainScreen(props) {
  const [check, setCheck] = useState(false);
  const [modal, setModal] = useState(false);
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  // const location = useLocation();

  const placeLocation = {
    // latitude: 23.198659,
    // longitude: 113.27657,
    latitude: 37.66681066113026,
    longitude: 127.05118912203275,
  };

  const location = {
    latitude: 37.66681066113026,
    longitude: 127.05118912203275,
  };
  useEffect(() => {
    setTime;

    return () => clearInterval(setTime);
  }, []);

  const setTime = setInterval(() => {
    const time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();

    setHour(hour);
    setMinute(min);
  }, 1000);

  // const handleCheck = setInterval(() => {
  //   if (location)
  //     if (
  //       placeLocation.latitude - 0.0001 <= placeLocation.latitude &&
  //       location.latitude <= 23.198659 + 0.0001 &&
  //       placeLocation.longitude - 0.0001 <= location.longitude &&
  //       location.longitude <= placeLocation.longitude + 0.0001
  //     )
  //       setCheck(true);
  //     else setCheck(false);
  // }, 1000);

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
                {check ? (
                  <View style={styles.checkInContiner}>
                    <AppText style={styles.checkInText}>
                      {`${hour}:${minute}`}
                    </AppText>
                    <AppText style={styles.checkIn}>CHECK IN</AppText>
                  </View>
                ) : (
                  <AppText style={styles.buttonText}>
                    {`${hour}:${minute}`}
                  </AppText>
                )}
              </LinearGradient>
            </View>
          </LinearGradient>
        </LottieView>
      </TouchableOpacity>
      {location && (
        <MapModal
          visible={modal}
          onPress={() => setModal(false)}
          location={location}
          place={placeLocation}
        />
      )}
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
    fontSize: 40,
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
  checkInContiner: {
    alignItems: "center",
  },
  checkInText: {
    color: colors.white,
    opacity: 0.7,
    fontSize: 18,
    marginBottom: 5,
  },
  checkIn: {
    color: colors.white,
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default MainScreen;
