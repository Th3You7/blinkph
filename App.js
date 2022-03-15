import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Provider from "./src/providers/Provider";
import AppNav from "./src/ui/AppNav";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider>
        <AppNav />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
