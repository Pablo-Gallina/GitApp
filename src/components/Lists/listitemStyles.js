import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    minHeight: 80,
    position: "relative",
    paddingVertical: 10,
  },
  cardName: {
    flex: 5,
    flexDirection: "column",
    marginRight: 5,
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: "row",
  },
  cardSystem: {
    flex: 3,
    marginRight: 5,
  },
  cardStatus: {
    flex: 2,
    marginRight: 5,
  },
  image: {
    width: 15,
    height: 15,
    resizeMode: "contain",
    marginRight: 5,
    opacity: 0.7,
    marginTop: 3,
    position: "absolute",
    top: 0,
    left: 0,
  },
  text: { maxWidth: "70%", textAlign: "center" },
});
