import React, { useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export function Inicial() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Memo")}
          style={styles.button}
        >
          <Text>Memo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("UseMemo")}
          style={styles.button}
        >
          <Text>useMemo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Text>useCallback</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "45%",
    padding: 5,
    marginTop: 30,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardContainer: {
    width: "50%",
    height: "50%",
    padding: 5,
  },
  button: {
    flex: 1,
    backgroundColor: "#D8E1F4",
    alignItems: "center",
    justifyContent: "center",
  },
});
