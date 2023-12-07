import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import theme from "../../utils/theme";

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  primary: {
    color: Platform.select({
      android: theme.colors.primary,
      ios: theme.colors.textPrimary,
      default: theme.colors.textPrimary,
    }),
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

const StyledText = ({
  fontWeight,
  color,
  fontSize,
  style,
  children,
  ...rest
}) => {
  const textStyle = [
    styles.text,
    fontWeight === "bold" && styles.bold,
    color === "primary" && styles.primary,
    fontSize === "small" && styles.small,
    fontSize === "subheading" && styles.subheading,
    fontSize === "heading" && styles.heading,
    style,
  ];
  return (
    <Text style={textStyle} {...rest}>
      {children}
    </Text>
  );
};

export default StyledText;
