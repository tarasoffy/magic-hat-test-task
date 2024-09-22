import { StyleSheet } from "react-native";
import { blackColor, whiteColor} from "../../constants/colors";
import { Nunito400 } from "../../constants/fonts";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: whiteColor,
    justifyContent: 'center',
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    fontSize: RFValue(20, 812),
    fontFamily: Nunito400,
    color: blackColor
  },
  resetButton: {
    position: 'absolute',
    right: 16,
    color: blackColor,
  },
});

export default styles