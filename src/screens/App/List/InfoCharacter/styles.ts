import { StyleSheet } from "react-native";
import { redColor, whiteColor } from "../../../../constants/colors";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor
  },
  headerContainer: {
    justifyContent: "center",
  },
  backButtonContainer: {
    position: "absolute",
    zIndex: 1000,
    left: 16,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonText: {
    fontSize: RFValue(16, 812),
  },
  titleContainer: {
    paddingHorizontal: 16,
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: RFValue(18, 812),
    textAlign: "center",
    fontWeight: "700",
  },
  containerContent: {
    padding: 16,
  },
  characterInfo: {
    flexDirection: "row",
    marginTop: 20,
  },
  characterImage: {
    width: 130,
    height: 200,
  },
  characterDetails: {
    marginLeft: 20,
  },
  characterDetailText: {
    fontSize: RFValue(14, 812),
    marginTop: 10,
  },
  accessDeniedText: {
    color: redColor,
    fontSize: RFValue(18, 812),
    marginLeft: 20,
  },
});

export default styles;