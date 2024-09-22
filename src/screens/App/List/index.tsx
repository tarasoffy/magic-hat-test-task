import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import ScoreMenu from "../../../components/ScoreMenu";
import Input from "../../../components/Input";
import { useData } from "../../../store/DataStore";
import { useAttempts } from "../../../store/AttemtsStore";
import { RFValue } from "react-native-responsive-fontsize";
import CheckIcon from "../../../assets/images/icons/check.svg";
import CloseIcon from "../../../assets/images/icons/close.svg";
import SyncIcon from "../../../assets/images/icons/sync.svg";
import { blackColor, redColor } from "../../../constants/colors";
import { useFilterData } from "../../../store/FilterStore";
import { CharacterI } from "../../../typescript/interfaces";
import { useRandomCharacter } from "../../../store/RandomCharacter";
import { useNavigation } from "@react-navigation/native";
import { infoCharacterPath } from "../../../constants/pathLocations";

function List(): React.JSX.Element {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState<CharacterI[]>([]);

  const navigation = useNavigation();

  const data = useData((state) => state.data);
  const filterData = useFilterData((state) => state.filterData);
  const attempts = useAttempts((state) => state.attempts);

  useEffect(() => {
    const filtered = attempts.filter((item) =>
      item && item.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchData(filtered);
  }, [search, attempts]);

  const setFilterData = useFilterData((state) => state.setFilterData);
  const setAttempts = useAttempts((state) => state.setAttempts);
  const setRandomCharacter = useRandomCharacter((state) => state.setRandomCharacter);

  const getRandomNum = (randomMax: number = 20) => {
    return Math.floor(Math.random() * randomMax);
  };

  const returnCard = (id: string) => {
    const item = attempts.find((item) => item.id === id);
    const filterAttempts = attempts.filter((item) => item.id !== id);
    const newData = [...filterData, item];
    setFilterData(newData as never);
    setAttempts(filterAttempts);
    const random = getRandomNum(newData?.length);
    setRandomCharacter(newData[random] as never);
  };

  const goToInfoCharacter = (info: any) => {
    navigation.navigate(infoCharacterPath, { info });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerContent}>
        <ScoreMenu />
        <Input
          value={search}
          onChange={(value) => setSearch(value)}
          placeholder="Filter characters..."
        />
        <FlatList
          data={searchData.length > 0 ? searchData : data}
          keyExtractor={(item: CharacterI) => item.id}
          renderItem={({ item }: { item: CharacterI }) => {
            const isHas = attempts.find((i) => i.id === item.id);
            if (isHas) {
              return (
                <TouchableOpacity
                  onPress={() => goToInfoCharacter(isHas)}
                  style={styles.characterContainer}
                >
                  <View style={styles.characterInfoContainer}>
                    <Image style={styles.characterImage} source={{ uri: item.image }} />
                    <View style={styles.characterTextContainer}>
                      <Text style={styles.characterName}>{item.name}</Text>
                      <Text style={styles.characterAttempts}>
                        Attempts: {isHas.count}
                      </Text>
                    </View>
                  </View>
                  <View>
                    {isHas.isTrue ? (
                      <View style={styles.checkIconContainer}>
                        <CheckIcon />
                      </View>
                    ) : (
                      <View style={styles.falseIconContainer}>
                        <TouchableOpacity onPress={() => returnCard(isHas.id)}>
                          <SyncIcon fill={blackColor} width={40} height={40} />
                        </TouchableOpacity>
                        <View style={styles.closeIconContainer}>
                          <CloseIcon fill={redColor} />
                        </View>
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              );
            }
            return null;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default List;
