import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../../utils/theme";
import StyledText from "../../components/Text";
import EmptyData from "../../components/EmptyData/EmptyData";

const style = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.small,
  },
});

const OpensScreen = () => {
  const prs = [];
  return (
    <View style={style.container}>
      <StyledText>OpensScreen</StyledText>

      {prs.length > 0 ? // prs.map((pr) => (
      //   <View key={pr.id}>
      //     <StyledText>{pr.title}</StyledText>
      //   </View>
      // ))
      null : (
        <EmptyData />
      )}
    </View>
  );
};

export default OpensScreen;
