import React, { useState, useEffect, useContext } from "react";
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
import MapModal from "../components/MapModal";
import moment from "moment";
import AuthContext from "../auth/context";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";
import placeApi from "../api/place";
import recordApi from "../api/record";
import * as Location from "expo-location";

function MainScreen(props) {
  const [modal, setModal] = useState(false);
  const [clock, setClock] = useState(moment(new Date()).format("HH:mm"));
  const { user } = useContext(AuthContext);
  const getPlaceApi = useApi(placeApi.getPlace);
  const [location, setLocation] = useState();

  const placeLocation = {
    // latitude: 23.198659,
    // longitude: 113.27657,
    latitude: 37.66681066113026,
    longitude: 127.05118912203275,
  };

  const getLocationFirst = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };
  // const location = {
  //   latitude: 37.66681066113026,
  //   longitude: 127.05118912203275,
  // };
  useEffect(() => {
    getPlaceApi.request();
    getLocationFirst();
    setTime;
    setLocationTimer;
    return () => clearInterval(setTime, setLocationTimer);
  }, []);

  const getLocation = async () => {
    const {
      coords: { latitude, longitude },
    } = await Location.getLastKnownPositionAsync();
    setLocation({ latitude, longitude });
  };

  const setLocationTimer = setInterval(() => {
    getLocation();
  }, 30000);

  const setTime = setInterval(() => {
    const clock = moment(new Date()).format("HH:mm");
    setClock(clock);
  }, 1000);

  const date = moment(new Date()).format("MMMM Do, dddd");

  const handleActive = () => {
    if (location)
      if (
        placeLocation.latitude - 0.1 <= location.latitude &&
        location.latitude <= placeLocation.latitude + 0.1 &&
        placeLocation.longitude - 0.1 <= location.longitude &&
        location.longitude <= placeLocation.longitude + 0.1
      )
        return true;
      else return false;
  };

  const handleCheckIn = () => {
    if (location && handleActive()) {
      try {
        recordApi.newRecord();
        Alert.alert("Sucessfully checked in!");
      } catch (ex) {
        Alert.alert("Occured unexpected problem! Please check in again.");
      }
    } else Alert.alert("You are not in location");
  };

  return (
    <>
      <ActivityIndicator visible={getPlaceApi.loading} />
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
            <AppText style={styles.date}>{date}</AppText>
            <AppText style={styles.day}>Hello, {user.name}</AppText>
          </View>
        </View>

        <View style={styles.location}>
          {location && handleActive() ? (
            <Card
              onPress={() => setModal(true)}
              image={
                getPlaceApi.data.logo
                  ? getPlaceApi.data.logo
                  : require("../assets/placeDefault.png")
              }
              title={getPlaceApi.data.name}
              description={getPlaceApi.data.address}
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
      <TouchableOpacity style={styles.button} onPress={handleCheckIn}>
        <View
          style={[
            styles.lottie,
            {
              backgroundColor:
                location && handleActive() ? colors.secondary : colors.primary,
            },
          ]}
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
                {location && handleActive() ? (
                  <View style={styles.checkInContiner}>
                    <AppText style={styles.checkInText}>{clock}</AppText>
                    <AppText style={styles.checkIn}>CHECK IN</AppText>
                  </View>
                ) : (
                  <AppText style={styles.buttonText}>{clock}</AppText>
                )}
              </LinearGradient>
            </View>
          </LinearGradient>
        </View>
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
