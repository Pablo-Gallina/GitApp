import React from "react";
import { Text } from "react-native";

import styles from "./styledtextStyles";

const StyledText = ({
  fontWeight,
  color,
  fontSize,
  style,
  children,
  active,
  secondary,
  ...rest
}) => {
  const textStyle = [
    styles.text,
    fontWeight === "bold" || active ? styles.bold : styles.normal,
    fontWeight === "normal" && styles.normal,
    color === "primary" && styles.primary,
    fontSize === "small" && styles.small,
    fontSize === "subheading" && styles.subheading,
    fontSize === "heading" && styles.heading,
    secondary && styles.secondary,
    style,
  ];

  return (
    <Text style={textStyle} {...rest}>
      {children}
    </Text>
  );
};

export default StyledText;
