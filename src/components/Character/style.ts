import { StyleSheet } from "react-native";
import { grayLightColor } from "../../constants/colors";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 20,
      },
      image: {
        width: 150,
        height: 200,
        resizeMode: "cover",
      },
      name: {
        fontWeight: "500",
        marginTop: 10,
        fontSize: RFValue(16, 812),
      },
});

export default styles