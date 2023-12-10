import React from "react";
import StyledText from "../../Text";
import { Image, View } from "react-native";
import styles from "./itemtabStyles";

const BranchWhite = require("../../../assets/icons/branch-white.png");

const ItemTab = ({ active, children }) => {
  const styleText = [styles.text, active && styles.active];
  const styleContainer = [styles.container, active && styles.activeContainer];
  const styleImage = [styles.image, !active && styles.opacity];
  return (
    <View style={styleContainer}>
      <Image
        source={BranchWhite}
        style={styleImage}
      />
      <StyledText active={active} style={styleText}>
        {children}
      </StyledText>
    </View>
  );
};

export default ItemTab;
