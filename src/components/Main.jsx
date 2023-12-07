import React from "react";
import Constants from "expo-constants";
import { View, StyleSheet, Text } from "react-native";
import AppBar from "./AppBar";

import { Routes, Route, Navigate } from "react-router-native";
import Home from "../screens/Home/Home";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Text>Sign In</Text>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>

    </View>
  );
};

export default Main;
