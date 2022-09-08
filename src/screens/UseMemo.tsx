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

import { FriendListPerform } from "../components/FriendListPerform";
import { Feather } from "@expo/vector-icons";

export function UseMemo() {
  const [name, setName] = useState("");
  const [friends, setFriends] = useState([]);
  const navigation = useNavigation();

  async function handleSearch() {
    const response = await fetch(`http://192.168.1.5:3333/friends?q=${name}`);
    const data = await response.json();

    setFriends(data);
  }

  function voltar() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
        <Feather style={styles.iconHeader} name="arrow-left" size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>UseMemo</Text>

      <TextInput
        placeholder="Nome do cliente"
        onChangeText={setName}
        style={styles.input}
      />

      <Button title="Buscar" onPress={handleSearch} />

      <FriendListPerform data={friends} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25,
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
  btnVoltar: {
    width: 60,
    height: 45,
    justifyContent: "center",
    paddingLeft: 10,
  },

  iconHeader: {
    color: "#000",
    justifyContent: "center",
  },
});
