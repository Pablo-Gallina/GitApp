import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../../utils/theme";
import EmptyData from "../../components/EmptyData/EmptyData";
import DataList from "../../components/Lists/DataList";

const style = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.small,
    flex: 1,
  },
});

const OpenScreen = () => {
  const prs = [{key: 'a'}, {key: 'b'},{key: 'c'},{key: 'd'}, {key: 'e'},{key: 'f'},{key: 'g'}, {key: 'h'},{key: 'i'},{key: 'j'}, {key: 'k'}, {key: 'l'},{key: 'm'},{key: 'n'}];
  return (
    <View style={style.container}>
      {prs ? <DataList data={prs} /> : <EmptyData />}
    </View>
  );
};

export default OpenScreen;
