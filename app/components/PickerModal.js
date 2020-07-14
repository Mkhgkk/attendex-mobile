import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Picker,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function PickerModal({
  visible,
  onClose,
  onSelectItem,

  placeholder,
  items,
  value,
}) {
  const [selectedItem, setSelectedItem] = useState(value);
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modal} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            onClose();
            onSelectItem(selectedItem);
          }}
        >
          <AppText style={styles.done}>Done</AppText>
        </TouchableOpacity>
      </View>
      <Picker
        style={styles.picker}
        selectedValue={selectedItem}
        onValueChange={(item) => {
          setSelectedItem(item);
        }}
      >
        <Picker.Item label={placeholder} />
        {items.map((item) => (
          <Picker.Item label={item} value={item} key={item} />
        ))}
      </Picker>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: { flex: 1, opacity: 0.7, backgroundColor: colors.dark },
  buttonContainer: {
    backgroundColor: colors.white,

    paddingVertical: 10,
    alignItems: "flex-end",
  },
  done: {
    color: colors.medium,
    marginRight: 30,
  },
  picker: {
    backgroundColor: colors.light,
  },
});

export default PickerModal;
