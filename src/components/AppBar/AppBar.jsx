import React from "react";
import {
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Link, useLocation } from "react-router-native";
import appbarStyles from "./appbarStyles";
import StyledText from "../Text";
import ItemTab from "./ItemTab/ItemTab";

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  
  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <ItemTab active={active}>{children}</ItemTab>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={appbarStyles.container}>
      <View style={appbarStyles.header}>
        <Image
          source={require("../../assets/icons/git.png")}
          style={appbarStyles.image}
        />
        <View>
          <StyledText fontSize="small" secondary>
            Pablo-Gallina
          </StyledText>
          <StyledText fontWeight="bold">
            Pull Requests
          </StyledText>
        </View>
      </View>
      <ScrollView horizontal style={appbarStyles.scroll}>
        <AppBarTab to="/">Open</AppBarTab>
        <AppBarTab to="/closed">Closed</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
