import React, { FC } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styles from "./style";

interface CharacterI {
  uri: string;
  name: string;
}

const Character: FC<CharacterI> = ({ uri, name }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri }} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Character;
