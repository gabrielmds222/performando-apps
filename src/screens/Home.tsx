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

import { Feather } from "@expo/vector-icons";

import { FriendList } from "../components/FriendList";

export function Home() {
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
      <Text style={styles.title}>Home</Text>

      <TextInput
        placeholder="Nome do cliente"
        onChangeText={setName}
        style={styles.input}
      />

      <Button title="Buscar" onPress={handleSearch} />

      <ScrollView style={styles.list}>
        <FriendList data={friends} />
      </ScrollView>
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
    paddingLeft: 12,
  },

  iconHeader: {
    color: "#000",
    justifyContent: "center",
  },
});

// import React, { useState, useCallback } from "react";

// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   Button,
//   ScrollView,
// } from "react-native";

// import { FriendList } from "../components/FriendList";

// export function Home() {
//   const [name, setName] = useState("");
//   const [friends, setFriends] = useState([]);

//   async function handleSearch() {
//     const response = await fetch(`http://192.168.1.5:3333/friends?q=${name}`);
//     const data = await response.json();

//     setFriends(data);
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Amigos</Text>

//       <TextInput
//         placeholder="Nome do cliente"
//         onChangeText={setName}
//         style={styles.input}
//       />

//       <Button title="Buscar" onPress={handleSearch} />

//       <FriendList data={friends} follow={handleFollow} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 100,
//     padding: 25,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   input: {
//     borderWidth: 1,
//     padding: 7,
//     marginVertical: 10,
//   },
//   list: {
//     marginTop: 20,
//   },
// });
