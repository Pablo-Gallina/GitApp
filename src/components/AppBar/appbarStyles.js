import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import theme from "../../utils/theme";

export default StyleSheet.create({
  container: {
    minHeight: Constants.statusBarHeight,
    // flexDirection: "row",
    backgroundColor: theme.colors.appBarBackground,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  text: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.appBarText,
  },
  active: {
    color: theme.colors.appBarTextActive,
    fontWeight: theme.fontWeights.bold,
  },
  scroll: {
    paddingBottom: 1,
  },
  image: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
});
