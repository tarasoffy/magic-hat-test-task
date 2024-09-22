import { StyleSheet } from "react-native";
import {grayLightColor, whiteColor } from "../../../constants/colors";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  flatListContent: {
    paddingHorizontal: 0,
  },
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardContainer: {
    width: "49%",
  },
  notInHouseButton: {
    width: "100%",
    backgroundColor: grayLightColor,
    marginTop: 10,
  },
  notInHouseText: {
    fontSize: RFValue(16, 812),
    paddingVertical: 45,
    textAlign: "center",
    fontWeight: "700",
  },
});

export default styles