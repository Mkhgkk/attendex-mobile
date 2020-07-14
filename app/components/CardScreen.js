import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";
import AppScreen from "./AppScreen";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function CardScreen({
  header,
  children,
  height = 85,
  topBackgroundImage,
}) {
  return (
    <>
      {topBackgroundImage && (
        <ImageBackground
          style={[styles.header, { height: `${107 - height}%` }]}
          source={topBackgroundImage}
          blurRadius={10}
        >
          {header}
        </ImageBackground>
      )}
      {!topBackgroundImage && (
        <LinearGradient
          colors={[colors.primary_dark, colors.primary]}
          style={[styles.header, { height: `${107 - height}%` }]}
        >
          {header}
        </LinearGradient>
      )}

      <LinearGradient
        colors={[colors.light, colors.white]}
        style={[styles.container, { height: `${height}%` }]}
      >
        <>{children}</>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight,
    width: "100%",
    justifyContent: "flex-end",
    position: "relative",
    paddingBottom: Dimensions.get("window").height * 0.06,
  },
  container: {
    borderRadius: 30,
    width: "100%",
    flex: 1,
    alignItems: "center",
    position: "relative",
    bottom: 30,
    overflow: "hidden",
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default CardScreen;
