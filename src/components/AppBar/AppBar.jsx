import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Constants from "expo-constants";

import { Link, useLocation } from "react-router-native";
import theme from "../../utils/theme";
import StyledText from "../Text";

const styles = StyleSheet.create({
  container: {
    minHeight: Constants.statusBarHeight,
    flexDirection: "row",
    backgroundColor: theme.colors.appBarBackground,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  text: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.appBarText,
    paddingHorizontal: 10,
  },
  active: {
    color: theme.colors.appBarTextActive,
    fontWeight: theme.fontWeights.bold,
  },
  scroll: {
    paddingBottom: 1,
  },
});

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  const style = [styles.text, active && styles.active];
  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight={active ? "bold" : "normal"} style={style}>
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
