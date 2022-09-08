import React, { useState, useCallback } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";

import { FriendList } from "../components/FriendList";

export function Inicial() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25,
    backgroundColor: "#444",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginVertical: 10,
  },
  list: {
    marginTop: 20,
  },
});
