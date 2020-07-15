import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import List from "../components/List";
import PickerModal from "../components/PickerModal";
import useApi from "../hooks/useApi";
import placeApi from "../api/place";
import recordApi from "../api/record";
import ActivityIndicator from "../components/ActivityIndicator";
import moment from "moment";
import { cos } from "react-native-reanimated";

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

function HistoryScreen(props) {
  const [modal, setModal] = useState(false);
  const getPlaceApi = useApi(placeApi.getPlace);
  const getRecordsApi = useApi(recordApi.getRecords);

  useEffect(() => {
    getPlaceApi.request();
    getRecordsApi.request();
  }, []);

  const handleData = (item) => {
    console.log(item);
  };

  const isOnTime = (date) => {
    const checkInTime = moment(new Date().setHours(22, 30, 0));

    const checkIn = checkInTime.minutes() + checkInTime.hours() * 60;
    const compare = date.minutes() + date.hours() * 60;

    if (checkIn >= compare) return true;
    else return false;
  };

  return (
    <>
      <ActivityIndicator
        visible={getPlaceApi.loading || getRecordsApi.loading}
      />
      <LinearGradient
        colors={[colors.primary, colors.primary_dark]}
        style={styles.header}
      >
        <AppScreen>
          <AppText style={styles.title}>Check-In History</AppText>
          <View style={styles.placeContainer}>
            <Image
              style={styles.image}
              source={
                getPlaceApi.data.logo
                  ? { uri: getPlaceApi.data.logo }
                  : require("../assets/placeDefault.png")
              }
            />
            <View style={styles.placeCol}>
              <AppText style={styles.place}>{getPlaceApi.data.name}</AppText>
              <AppText style={styles.subPlace}>{getPlaceApi.data.name}</AppText>
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
          data={getRecordsApi.data}
          keyExtractor={(listing) => listing._id}
          renderItem={({ item }) => (
            <View style={styles.bigContainer}>
              <AppText style={styles.time}>
                {moment(item.date).format("MMM Do")}
              </AppText>
              <View style={styles.listContainer}>
                <List
                  icon={isOnTime(moment(item.date)) ? icon.onTime : icon.late}
                  title={isOnTime(moment(item.date)) ? "on time" : "late"}
                  subTitle={moment(item.date).format("LT")}
                />
              </View>
            </View>
          )}
        />
      </AppScreen>
      {/* <PickerModal
        visible={modal}
        items={[getPlaceApi.data.name]}
        onClose={() => setModal(false)}
        value={getPlaceApi.data.name}
        onSelectItem={handleData}
        placeholder="Place"
      /> */}
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
