import React, { FC } from "react";
import { Text, View } from "react-native";
import styles from "./style";

interface ScoreI {
  title: string;
  score: number;
}

const Score: FC<ScoreI> = ({ title, score }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.score}>{score}</Text>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export default Score;
