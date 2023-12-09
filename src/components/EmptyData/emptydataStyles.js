import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 80,
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginRight: 15,
    opacity: 0.7,
    marginBottom: 10,
  },
  text: { maxWidth: "70%", textAlign: "center" },
});
