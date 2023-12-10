import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../../utils/theme";
import EmptyData from "../../components/EmptyData/EmptyData";
import DataList from "../../components/Lists/DataList";
import useApi from "../../hooks/useApi";
import useGenerateQueryUrl from "../../hooks/useGenerateQueryUrl";
import Loader from "../../components/Loader";

const style = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.small,
    flex: 1,
  },
});

const OpenScreen = () => {
  const url = useGenerateQueryUrl("/search/issues", { author: "PabloGallinaG" });

  const { data, isLoading } = useApi(url);
  console.log(data);
  return (
    <View style={style.container}>
      {isLoading ? <Loader /> : data ? <DataList data={data} /> : <EmptyData />}
    </View>
  );
};

export default OpenScreen;
