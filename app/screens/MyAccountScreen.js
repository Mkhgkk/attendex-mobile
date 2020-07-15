import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Image, Alert } from "react-native";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import routes from "../navigation/routes";
import AuthContext from "../auth/context";
import useApi from "../hooks/useApi";
import memberApi from "../api/member";
import useAuth from "../auth/useAuth";
import ActivityIndicator from "../components/ActivityIndicator";

function MyAccountScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  const { logOut } = useAuth();

  const getUserDetailApi = useApi(memberApi.getMemberDetail);

  useEffect(() => {
    getUserDetailApi.request(user._id);
  }, []);

  const handleLogout = () => {
    Alert.alert("Attendex", "Would you like to logout?", [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          logOut();
        },
      },
    ]);
  };
  return (
    <>
      <ActivityIndicator visible={getUserDetailApi.loading} />
      <LinearGradient
        colors={[colors.primary, colors.primary_dark]}
        style={styles.header}
      >
        <AppScreen>
          <AppText style={styles.title}>My Account</AppText>

          <View style={styles.profile}>
            <Image
              style={styles.avatar}
              source={
                getUserDetailApi.data.avatar
                  ? { uri: getUserDetailApi.data.avatar }
                  : require("../assets/default.png")
              }
            />
            <AppText style={styles.name}>{user.name}</AppText>
            <AppText style={styles.email}>
              {getUserDetailApi.data.phone}
            </AppText>
          </View>
        </AppScreen>
      </LinearGradient>
      <AppScreen style={styles.container}>
        <ListItem
          onPress={() => navigation.navigate(routes.MYPLACES)}
          title="My Work Places"
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
