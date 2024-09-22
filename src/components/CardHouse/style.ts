import { StyleSheet } from "react-native";
import { grayLightColor } from "../../constants/colors";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        backgroundColor: grayLightColor,
        alignItems: "center",
        paddingVertical: 18,
      },
      image: {
        width: 40,
        height: 50,
        resizeMode: "cover",
      },
      title: {
        fontWeight: "500",
        marginTop: 10,
        fontSize: RFValue(16, 812),
      },
});

export default styles