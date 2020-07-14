import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

import defaultStyles from "../config/styles";

function AppTextInput({
  icon,
  width = "100%",
  color = "white",
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.primary}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={[defaultStyles.text, styles.text]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    marginVertical: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    width: "100%",
  },
});

export default AppTextInput;
