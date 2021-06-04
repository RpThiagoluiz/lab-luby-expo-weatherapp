import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons"; //NATIVO TBM
import { colors } from "../styles/colors";

const { reload } = colors;

export const RealoadIcon = ({ load }) => {
  const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";
  //name ali e mudar o icon, no name do icon, so q eu nao vou nao

  return (
    <View style={styles.reloadIcon}>
      <SimpleLineIcons onPress={load} name="refresh" size={24} color={reload} />
    </View>
  );
};

const styles = StyleSheet.create({
  reloadIcon: {
    position: "absolute",
    top: 40,
    right: 20,
  },
});
