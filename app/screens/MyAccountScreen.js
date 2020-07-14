import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Alert } from "react-native";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import routes from "../navigation/routes";

const handleLogout = () => {
  Alert.alert("Attendex", "Would you like to logout?", [
    {
      text: "No",
      style: "cancel",
    },
    {
      text: "Yes",
      onPress: () => {
        console.log("logout");
      },
    },
  ]);
};

function MyAccountScreen({ navigation }) {
  return (
    <>
      <LinearGradient
        colors={[colors.primary, colors.primary_dark]}
        style={styles.header}
      >
        <AppScreen>
          <AppText style={styles.title}>My Account</AppText>

          <View style={styles.profile}>
            <Image
              style={styles.avatar}
              source={require("../assets/default.png")}
            />
            <AppText style={styles.name}>Joy</AppText>
            <AppText style={styles.email}>email@address.com</AppText>
          </View>
        </AppScreen>
      </LinearGradient>
      <AppScreen style={styles.container}>
        <ListItem
          onPress={() => navigation.navigate(routes.MYPLACES)}
          title="My Places"
          IconComponent={
            <Icon name="map-marker" backgroundColor={colors.primary_light} />
          }
        />
        <View style={styles.button}>
          <AppButton title="Logout" onPress={handleLogout} />
        </View>
      </AppScreen>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 290,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
    padding: 15,
  },
  profile: {
    padding: 10,
    alignItems: "center",
  },
  avatar: { width: 100, height: 100, borderRadius: 55, marginBottom: 10 },
  name: {
    color: colors.white,
    fontSize: 18,
  },
  email: {
    color: colors.white,
    opacity: 0.8,
  },
  container: {
    backgroundColor: colors.light,
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "space-between",
  },
  button: {
    padding: 20,
  },
});

export default MyAccountScreen;
