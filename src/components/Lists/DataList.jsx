import React from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItem.jsx";
import Divider from "../Divider/Divider.jsx";

const DataList = ({ data }) => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <Divider />}
      renderItem={({ item }) => <ListItem {...item} />}
    />
  );
};

export default DataList;
