import { Text } from "react-native";
import OpenScreen from "../screens/OpenScreen/OpenScreen";
import { Navigate, Route, Routes } from "react-router-native";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<OpenScreen />} />
      <Route path="/signin" element={<Text>Sign In</Text>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
