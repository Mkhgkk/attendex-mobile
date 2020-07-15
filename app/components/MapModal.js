import React from "react";
import { StyleSheet, View, Modal, TouchableOpacity } from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";

function MapModal({ visible, onPress, onRefresh, location, place }) {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      presentationStyle={"pageSheet"}
    >
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location && location.latitude,
            longitude: location && location.longitude,
            latitudeDelta: 0.0008,
            longitudeDelta: 0.0009,
          }}
        >
          <Circle
            center={{
              latitude: place && place.latitude,
              longitude: place && place.longitude,
            }}
            radius={10}
            strokeColor="transparent"
            fillColor={"rgba(54, 252, 169, 0.4)"}
          />
          <Marker
            coordinate={{
              latitude: place && place.latitude,
              longitude: place && place.longitude,
            }}
            title="Apple china"
          />
          <Marker
            coordinate={{
              latitude: location && location.latitude,
              longitude: location && location.longitude,
            }}
            title="Me"
          />
        </MapView>

        <TouchableOpacity style={styles.closeContainer} onPress={onPress}>
          <MaterialCommunityIcons name="close" size={20} color={colors.white} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.refreshContainer} onPress={onRefresh}>
          <MaterialCommunityIcons
            name="refresh"
            size={20}
            color={colors.white}
          />
          <AppText style={styles.text}>Relocate</AppText>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  closeContainer: {
    backgroundColor: colors.dark,
    height: 35,
    width: 35,
    borderRadius: 17.5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 10,
    right: 10,
    opacity: 0.5,
  },
  refreshContainer: {
    opacity: 0.5,
    backgroundColor: colors.dark,
    height: 35,
    borderRadius: 17.5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 10,
    left: 10,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  text: {
    color: colors.white,
    marginLeft: 5,
  },
});

export default MapModal;
