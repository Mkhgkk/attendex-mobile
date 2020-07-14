import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "../components/AppText";
import Card from "../components/Card";
import { LinearGradient } from "expo-linear-gradient";
import AppScreen from "../components/AppScreen";
import routes from "../navigation/routes";

const places = [
  {
    _id: 1,
    image: require("../assets/appleLogo.png"),
    place: "Apple china",
    label: "My work",
    address:
      "China, Guangdong Province, Guangzhou, Tianhe District, Tianhe Rd, 590号百脑汇科技大厦B1",
  },
  {
    _id: 2,
    image: require("../assets/appleLogo.png"),
    place: "Apple china",
    label: "My work",
    address:
      "China, Guangdong Province, Guangzhou, Tianhe District, Tianhe Rd, 590号百脑汇科技大厦B1",
  },
  {
    _id: 3,
    image: require("../assets/appleLogo.png"),
    place: "Apple china",
    label: "My work",
    address:
      "China, Guangdong Province, Guangzhou, Tianhe District, Tianhe Rd, 590号百脑汇科技大厦B1",
  },
  {
    _id: 4,
    image: require("../assets/appleLogo.png"),
    place: "Apple china",
    label: "My work",
    address:
      "China, Guangdong Province, Guangzhou, Tianhe District, Tianhe Rd, 590号百脑汇科技大厦B1",
  },
];

function MyPlaceScreen({ navigation }) {
  return (
    <LinearGradient
      colors={[colors.primary_dark, colors.primary]}
      style={styles.container}
    >
      <AppScreen style={styles.list}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={35}
          color={colors.white}
          style={styles.chevron}
          onPress={() => {
            navigation.navigate(routes.MYACCOUNT);
          }}
        />
        <AppText style={styles.title}>My Places</AppText>

        <View>
          <FlatList
            data={places}
            keyExtractor={(listing) => listing._id.toString()}
            renderItem={({ item }) => (
              <Card
                image={item.image}
                title={item.place}
                subTitle={item.label}
                description={item.address}
                backgroundColor={colors.light}
              />
            )}
          />
        </View>
      </AppScreen>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingBottom: 50,
  },

  title: {
    color: colors.white,
    fontSize: 18,
    paddingBottom: 30,
  },
  list: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    alignItems: "center",
  },
  handle: {
    backgroundColor: colors.primary,
    width: 60,
    height: 5,
    borderRadius: 5,
    margin: 10,
  },
  header: {
    flexDirection: "row",
  },
  chevron: {
    position: "absolute",
    left: 0,
    top: 15,
    opacity: 0.8,
  },
});

export default MyPlaceScreen;
