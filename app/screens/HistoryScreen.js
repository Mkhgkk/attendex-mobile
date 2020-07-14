import React, { useState } from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import List from "../components/List";
import PickerModal from "../components/PickerModal";

const icon = {
  onTime: {
    name: "check-circle-outline",
    backgroundColor: "#bae7ff",
    iconColor: "#40a9ff",
  },
  late: {
    name: "timer-off",
    backgroundColor: "#ffd8bf",
    iconColor: "#ff7a45",
  },
};

const listItem = [
  {
    place: "apple",
    date: "Today",
    time: "9:30 am",
    state: "on time",
    _id: "1",
  },
  {
    place: "apple",
    date: "6th July",
    time: "9:30 am",
    state: "on time",
    _id: "2",
  },
  {
    place: "apple",
    date: "5th July",
    time: "9:50 am",
    state: "late",
    _id: "3",
  },
  {
    place: "apple",
    date: "4th July",
    time: "9:30 am",
    state: "on time",
    _id: "4",
  },
  {
    place: "apple",
    date: "3th July",
    time: "9:30 am",
    state: "on time",
    _id: "5",
  },
];

function HistoryScreen(props) {
  const [modal, setModal] = useState(false);

  const handleData = (item) => {
    console.log(item);
  };

  return (
    <>
      <LinearGradient
        colors={[colors.primary, colors.primary_dark]}
        style={styles.header}
      >
        <AppScreen>
          <AppText style={styles.title}>Check-In History</AppText>
          <View style={styles.placeContainer}>
            <Image
              style={styles.image}
              source={require("../assets/appleLogo.png")}
            />
            <View style={styles.placeCol}>
              <AppText style={styles.place}>Apple china</AppText>
              <AppText style={styles.subPlace}>Apple china</AppText>
            </View>
            <AppButton
              title="place"
              width={90}
              color="primary_medium"
              icon="chevron-down"
              onPress={() => setModal(!modal)}
            />
          </View>
        </AppScreen>
      </LinearGradient>
      <AppScreen style={styles.contaier}>
        <FlatList
          data={listItem}
          keyExtractor={(listing) => listing._id.toString()}
          renderItem={({ item }) => (
            <View style={styles.bigContainer}>
              <AppText style={styles.time}>{item.date}</AppText>
              <View style={styles.listContainer}>
                <List
                  icon={item.state === "on time" ? icon.onTime : icon.late}
                  title={item.state}
                  subTitle={item.time}
                />
              </View>
            </View>
          )}
        />
      </AppScreen>
      <PickerModal
        visible={modal}
        items={["Apple china", "Huawei", "TikTok"]}
        onClose={() => setModal(false)}
        value={"Apple china"}
        onSelectItem={handleData}
        placeholder="Place"
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 230,
  },
  contaier: {
    backgroundColor: colors.light,
    flex: 1,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
    padding: 15,
  },
  placeContainer: {
    flexDirection: "row",
    margin: 30,
    alignItems: "center",
  },
  place: {
    fontSize: 20,
    color: colors.white,
  },
  subPlace: {
    color: colors.white,
    opacity: 0.8,
  },
  placeCol: {
    flex: 1,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  listContainer: {
    paddingLeft: 20,
    borderLeftColor: "#d9d9d9",

    borderLeftWidth: 1,
    flex: 1,
    marginLeft: 15,
  },
  bigContainer: {
    flexDirection: "row",
  },
  time: {
    color: colors.medium,
    width: 60,
    textAlign: "right",
  },
});

export default HistoryScreen;
