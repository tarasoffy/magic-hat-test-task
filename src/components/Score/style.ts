import { StyleSheet } from "react-native";
import { blackColor, grayLightColor } from "../../constants/colors";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: grayLightColor,
        borderWidth: 1,
        borderColor: blackColor,
        alignItems: "center",
        justifyContent: "center",
      },
      content: {
        alignItems: "center",
      },
      score: {
        fontSize: RFValue(20, 812),
      },
});

export default styles