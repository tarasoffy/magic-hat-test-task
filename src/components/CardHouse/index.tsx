import React, { FC } from "react";
import { Image, Text, View } from "react-native";
import styles from "./style";

interface CardHouseI {
  title: string;
  uri: number;
}

const CardHouse: FC<CardHouseI> = ({ title, uri }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={uri} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CardHouse;
