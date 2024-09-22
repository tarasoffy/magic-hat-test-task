import { StyleSheet } from "react-native";
import { greenColor, redColor, whiteColor } from "../../../constants/colors";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerContent: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: whiteColor
  },
  characterContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  characterInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  characterImage: {
    height: 50,
    width: 40,
  },
  characterTextContainer: {
    marginLeft: 10,
  },
  characterName: {
    fontWeight: "700",
    fontSize: RFValue(14, 812),
  },
  characterAttempts: {
    fontSize: RFValue(14, 812),
    marginTop: 10,
  },
  checkIconContainer: {
    backgroundColor: greenColor,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  falseIconContainer: {
    flexDirection: "row",
  },
  closeIconContainer: {
    width: 40,
    height: 40,
    borderWidth: 3,
    borderColor: redColor,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
});

export default styles;