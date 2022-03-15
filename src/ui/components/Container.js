import React from "react";
import { View, StyleSheet } from "react-native";

export default function Container({ children }) {
  return <View style={styles.view}>{children}</View>;
}

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});
