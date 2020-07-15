import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "../components/AppText";
import Card from "../components/Card";
import { LinearGradient } from "expo-linear-gradient";
import AppScreen from "../components/AppScreen";
import routes from "../navigation/routes";
import useApi from "../hooks/useApi";
import placeApi from "../api/place";
import ActivityIndicator from "../components/ActivityIndicator";

function MyPlaceScreen({ navigation }) {
  const getPlaceApi = useApi(placeApi.getPlace);

  useEffect(() => {
    getPlaceApi.request();
  }, []);

  return (
    <>
      <ActivityIndicator visible={getPlaceApi.loading} />
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
          <AppText style={styles.title}>My Work Places</AppText>

          <View>
            <Card
              image={
                getPlaceApi.data.logo
                  ? { uri: getPlaceApi.data.logo }
                  : require("../assets/placeDefault.png")
              }
              title={getPlaceApi.data.name}
              subTitle="My work"
              description={getPlaceApi.data.address}
              backgroundColor={colors.light}
            />
          </View>
        </AppScreen>
      </LinearGradient>
    </>
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
