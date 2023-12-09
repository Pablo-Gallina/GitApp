import React from "react";
import { Image, View } from "react-native";

import styles from "./listitemStyles";
import StyledText from "../Text";

const ListItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardName}>
        <View style={styles.descriptionContainer}>
          <Image
            source={require("../../assets/icons/branch-white.png")}
            style={styles.image}
          />
          <StyledText fontWeight="bold" numberOfLines={2}>
            {"\t\t\t"}1000 Nombre de la pr asdfasdfasdf asdfasdfasdf
            asdfasdfasdf
          </StyledText>
        </View>
        <StyledText fontSize="small" secondary numberOfLines={1}>
          Hace 2 dias by pablo gallina
        </StyledText>
      </View>

      <View style={styles.cardSystem}>
        <StyledText secondary numberOfLines={2}>
          Sistema o repo
        </StyledText>
      </View>

      <View style={styles.cardStatus}>
        <StyledText fontWeight="bold" numberOfLines={1}>
          Abierto
        </StyledText>
      </View>
    </View>
  );
};

export default ListItem;
