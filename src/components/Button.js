import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../styles/colors";

export const Button = ({ text }) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.3}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.text_color,
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: colors.primary_color,
  },
});
