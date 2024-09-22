import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';
import ListIcon from '../../assets/images/icons/menu.svg';
import HomeIcon from '../../assets/images/icons/home.svg';

import {RootStackParamList} from '../../typescript/types';
import styles from './styles';
import { listPath, homePath } from '../../constants/pathLocations';
import { blackColor, grayColor, tintColor } from '../../constants/colors';
import { isAndroid } from '../../constants/common';

const tabBarName = (focused: boolean, route: string): ReactElement => {
  const getLabel = (): string =>
    ({
      [homePath]: 'Home',
      [listPath]: 'List',
    }[route as keyof RootStackParamList]);

  return <Text style={[styles.label, {color: blackColor}]}>{getLabel()}</Text>;
};

export const tabIcon = (focused: boolean, route: string): ReactElement => {
  const getIcon = (): ReactElement =>
    ({
      [homePath]: <HomeIcon />,
      [listPath]: <ListIcon /> ,
    }[route as keyof RootStackParamList]);

  return (
    <View style={[styles.wrapper, {marginTop: isAndroid? 0: 20}]}>
      <View style={styles.iconWr}>{getIcon()}</View>
      <View>{tabBarName(focused, route)}</View>
    </View>
  );
};
