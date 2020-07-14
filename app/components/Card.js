import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({
  title,
  subTitle,
  description,
  image,
  onPress,
  backgroundColor = colors.white,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, { backgroundColor }]}>
        <View style={styles.profile}>
          {image && <Image style={styles.image} source={image} />}
          <View>
            {subTitle && <AppText style={styles.subTitle2}>{subTitle}</AppText>}
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
          </View>
        </View>
        <AppText style={styles.subTitle} numberOfLines={3}>
          {description}
        </AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,

    marginBottom: 25,
    overflow: "hidden",
    padding: 20,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  subTitle2: {
    color: colors.secondary,
    fontSize: 13,
    marginBottom: 5,
  },
  title: {
    marginBottom: 10,
    fontWeight: "600",
    fontSize: 18,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Card;
