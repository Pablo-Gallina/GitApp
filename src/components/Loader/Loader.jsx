import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import theme from "../../utils/theme";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
