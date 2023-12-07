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

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  const style = [appbarStyles.text, active && appbarStyles.active];
  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText active={active} style={style}>
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={appbarStyles.container}>
      <View>
        <Image
          source={require("../../assets/icons/git.png")}
          style={appbarStyles.image}
        />
      </View>
      <ScrollView horizontal style={appbarStyles.scroll}>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
