import { StyleSheet } from "react-native";
import Constants from "expo-constants";

import theme from "../../utils/theme";

export default StyleSheet.create({
  container: {
    minHeight: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    paddingTop: 10,
    paddingLeft: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  scroll: {
    paddingBottom: 1,
  },
  image: {
    width: 45,
    height: 45,
    resizeMode: "contain",
    marginRight: 15,
  },
});
