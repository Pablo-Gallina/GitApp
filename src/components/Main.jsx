import React from "react";
import { View, StyleSheet } from "react-native";

import AppBar from "./AppBar";
import theme from "../utils/theme";
import { AppRoutes } from "../navigation";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <AppRoutes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
});

export default Main;
