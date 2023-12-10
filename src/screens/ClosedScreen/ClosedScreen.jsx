import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../../utils/theme";
import EmptyData from "../../components/EmptyData/EmptyData";
import DataList from "../../components/Lists/DataList";
import Loader from "../../components/Loader";
import useListPRS from "../../hooks/useListPRS";

const style = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.small,
    flex: 1,
  },
});

const ClosedScreen = () => {
  const { items, isLoading, isEmpty } = useListPRS({ state: "closed" });

  return (
    <View style={style.container}>
      {isLoading ? <Loader /> : !isEmpty ? <DataList data={items} /> : <EmptyData />}
    </View>
  );
};

export default ClosedScreen;
