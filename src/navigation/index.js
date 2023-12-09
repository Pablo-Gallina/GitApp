import { Text } from "react-native";
import Home from "../screens/OpensScreen/OpensScreen";
import { Navigate, Route, Routes } from "react-router-native";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Text>Sign In</Text>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
