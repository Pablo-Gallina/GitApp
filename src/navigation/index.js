import OpenScreen from "../screens/OpenScreen/OpenScreen";
import { Navigate, Route, Routes } from "react-router-native";
import ClosedScreen from "../screens/ClosedScreen/ClosedScreen";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<OpenScreen />} />
      <Route path="/closed" element={<ClosedScreen />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
