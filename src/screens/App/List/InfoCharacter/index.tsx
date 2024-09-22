import React from "react";
import { Image, SafeAreaView, Text, View, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import ArrowBackIcon from "../../../../assets/images/icons/arrow-back.svg";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { blackColor } from "../../../../constants/colors";
import styles from "./styles";

function InfoCharacter(): React.JSX.Element {
  const route = useRoute();
  const { info }: any = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <ArrowBackIcon fill={blackColor} />
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{info.name}</Text>
        </View>
      </View>
      <View style={styles.containerContent}>
        <View style={styles.characterInfo}>
          <Image style={styles.characterImage} source={{ uri: info.image }} />
          {info.isTrue ? (
            <View style={styles.characterDetails}>
              <Text style={styles.characterDetailText}>
                House: {info.house}
              </Text>
              {info.dateOfBirth && (
                <Text style={styles.characterDetailText}>
                  Date of birthday: {info.dateOfBirth}
                </Text>
              )}
              <Text style={styles.characterDetailText}>
                Actor: {info.actor}
              </Text>
              <Text style={styles.characterDetailText}>
                Species: {info.species}
              </Text>
            </View>
          ) : (
            <Text style={styles.accessDeniedText}>ACCESS DENIED</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default InfoCharacter;
