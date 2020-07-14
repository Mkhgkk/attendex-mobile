import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";

function MainButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={[colors.white, colors.light]} style={styles.box}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name="check-bold"
            color={colors.white}
            size={25}
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: "relative",
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,

    borderRadius: 30,

    height: 60,
    justifyContent: "center",
    width: 60,
  },
});

export default MainButton;
