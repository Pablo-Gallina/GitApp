import React from "react";
import { Image, View } from "react-native";

import styles from "./listitemStyles";
import StyledText from "../Text";
import { extractDataPR } from "../../utils/extractDataPR";
import { EstadosPR } from "../../utils/constants";
const { ABIERTO } = EstadosPR;

const BranchWhite = require("../../assets/icons/branch-white.png");
const BranchGreen = require("../../assets/icons/branch-green.png");
const BranchRed = require("../../assets/icons/branch-red.png");

const ListItem = (props) => {
  const { title, author, state, repositoryName, acepted, description } =
    extractDataPR(props);

  const image = acepted
    ? BranchGreen
    : state === ABIERTO
    ? BranchWhite
    : BranchRed;

  return (
    <View style={styles.container}>
      <View style={styles.cardName}>
        <View style={styles.descriptionContainer}>
          <Image source={image} style={styles.image} />
          <StyledText fontWeight="bold" numberOfLines={2}>
            {"\t\t\t"}
            {title}
          </StyledText>
        </View>
        <StyledText fontSize="small" secondary numberOfLines={1}>
          {description}
        </StyledText>
      </View>

      <View style={styles.cardSystem}>
        <StyledText secondary numberOfLines={2}>
          {repositoryName}
        </StyledText>
      </View>

      <View style={styles.cardStatus}>
        <StyledText fontWeight="bold" numberOfLines={1}>
          {state.toUpperCase()}
        </StyledText>
      </View>
    </View>
  );
};

export default ListItem;
