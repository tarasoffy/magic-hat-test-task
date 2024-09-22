import React, { FC, useEffect, useState } from "react";
import {
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import Character from "../../../components/Character";
import CardHouse from "../../../components/CardHouse";
import { ScrollView } from "react-native-gesture-handler";
import { API_CHARACTERS_URL } from "../../../constants/url";
import { cardData } from "../../../mockData/cardData";
import { useScore } from "../../../store/ScoreStore";
import { useAttempts } from "../../../store/AttemtsStore";
import { useData } from "../../../store/DataStore";
import ScoreMenu from "../../../components/ScoreMenu";
import { useFilterData } from "../../../store/FilterStore";
import { useRandomCharacter } from "../../../store/RandomCharacter";

const Home: FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const randomCharacter = useRandomCharacter((state) => state.randomCharacter);
  const filterData = useFilterData((state) => state.filterData);
  const attempts = useAttempts((state) => state.attempts);
  const setCountTotal = useScore((state) => state.setCountTotal);
  const setCountSuccess = useScore((state) => state.setCountSuccess);
  const setCountFailed = useScore((state) => state.setCountFailed);
  const setAttempts = useAttempts((state) => state.setAttempts);
  const setFilterData = useFilterData((state) => state.setFilterData);
  const setRandomCharacter = useRandomCharacter(
    (state) => state.setRandomCharacter
  );
  const setData = useData((state) => state.setData);

  const onRefresh = () => {
    setRefreshing(true);
    if (filterData?.length) {
      setRandomCharacter(filterData[getRandomNum()]);
    }
    setRefreshing(false);
  };

  const fetchCharacters = async () => {
    try {
      const response = await fetch(API_CHARACTERS_URL);
      const data = await response.json();
      const firstTwentyCharacters = data.slice(0, 20);
      const randomNum = getRandomNum();
      setData(firstTwentyCharacters);
      setFilterData(firstTwentyCharacters);
      setRandomCharacter(firstTwentyCharacters[randomNum]);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const getRandomNum = (randomMax: number = 20) => {
    return Math.floor(Math.random() * randomMax);
  };

  const checkHouse = (house: string) => {
    const filter = filterData?.filter(
      (item) => item.id !== randomCharacter?.id
    );

    if (randomCharacter?.house == house) {
      if (filter?.length) {
        const random = getRandomNum(filter?.length);
        setRandomCharacter(filter[random]);
      }
      if (randomCharacter.count) {
        setAttempts([
          ...attempts!,
          {
            ...randomCharacter,
            count: randomCharacter.count + 1,
            isTrue: true,
          }!,
        ]);
      } else {
        setAttempts([
          ...attempts!,
          { ...randomCharacter, count: 1, isTrue: true }!,
        ]);
      }
      setCountSuccess();
    } else {
      setCountFailed();
      const random = getRandomNum(filterData?.length);
      if (filterData?.length) {
        setRandomCharacter(filterData[random]);
      }
      if (randomCharacter?.count) {
        setAttempts([
          ...attempts!,
          {
            ...randomCharacter,
            count: randomCharacter.count + 1,
            isTrue: false,
          }!,
        ]);
      } else {
        setAttempts([
          ...attempts!,
          { ...randomCharacter, count: 1, isTrue: false }! as never,
        ]);
      }
    }
    setCountTotal();
    setFilterData(filter);
  };

  const renderCardHouse = (item: (typeof cardData)[0]) => (
    <TouchableOpacity
      onPress={() => checkHouse(item.title)}
      style={styles.cardContainer}
      key={item.id}
    >
      <CardHouse uri={item.uri} title={item.title} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.contentContainer}
      >
        <ScoreMenu />
        {randomCharacter && (
          <Character uri={randomCharacter.image} name={randomCharacter.name} />
        )}
        <View style={styles.cardGrid}>
          {cardData.map((item) => renderCardHouse(item))}
        </View>
        <TouchableOpacity
          onPress={() => checkHouse("")}
          style={styles.notInHouseButton}
        >
          <Text style={styles.notInHouseText}>Not in House</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
