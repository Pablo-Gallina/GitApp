import { StyleSheet } from "react-native";
import theme from "../../../utils/theme";

export default StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textColor,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  normal: {
    fontWeight: theme.fontWeights.normal,
  },
  primary: {
    color: theme.colors.primary,
  },
  small: {
    fontSize: theme.fontSizes.small,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  heading: {
    fontSize: theme.fontSizes.heading,
  },
});
