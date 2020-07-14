import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function AppButton({
  title,
  onPress,
  color = "primary",
  fontColor = "white",
  width = "100%",
  padding = 10,
  icon,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[color], width, padding },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors[fontColor] }]}>{title}</Text>
      {icon && (
        <MaterialCommunityIcons name={icon} size={15} color={colors.white} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
  },
  text: {
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
