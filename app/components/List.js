import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Icon from "./Icon";

function List({ title, subTitle, icon, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.profile}>
          {icon && (
            <Icon
              name={icon.name}
              backgroundColor={icon.backgroundColor}
              iconColor={icon.iconColor}
            />
          )}
          <View style={styles.textContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    padding: 15,
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  subTitle: {
    color: colors.medium,
    fontSize: 13,
  },

  title: {
    marginBottom: 5,
    fontWeight: "600",
    fontSize: 18,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default List;
