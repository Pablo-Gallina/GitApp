import React from "react";
import { Image, View } from "react-native";
import StyledText from "../Text";

import styles from "./emptydataStyles.js";

const EmptyData = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icons/branch-white.png")}
        style={styles.image}
      />

      <StyledText
        fontSize="heading"
        fontWeight="bold"
        style={styles.text}
      >
        There aren't any open pull requests.
      </StyledText>
    </View>
  );
};

export default EmptyData;
