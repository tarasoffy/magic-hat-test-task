import React, { FC } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles'

interface HeaderI {
  title: string;
}

const Header: FC<HeaderI> = ({title}) => {



  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

export default Header;
