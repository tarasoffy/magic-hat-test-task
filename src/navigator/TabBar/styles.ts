import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import { Nunito400 } from '../../constants/fonts';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  label: {
    fontSize: RFValue(16, 812),
    fontFamily: Nunito400,
  },
  iconWr: {
 
  },
});

export default styles;
