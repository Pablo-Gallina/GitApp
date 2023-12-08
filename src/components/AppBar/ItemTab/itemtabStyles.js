import { StyleSheet } from "react-native";

import theme from "../../../utils/theme";

export default StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.appBarBackground,
    marginRight: 8,
    paddingHorizontal: 5,
    paddingBottom: 3,
  },
  activeContainer: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 3,
  },
  text: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.appBarText,
  },
  active: {
    color: theme.colors.appBarTextActive,
    fontWeight: theme.fontWeights.bold,
  },
  image: {
    width: 15,
    height: 15,
    resizeMode: "contain",
    marginRight: 4,
  },
  opacity: {
    opacity: 0.7,
  },
});
