import React, { useMemo } from "react";

import { View, Text, FlatList } from "react-native";
import { FriendPerform } from "./FriendPerform";

interface Props {
  data: {
    id: Number;
    name: String;
    likes: Number;
  }[];
}

export function FriendListPerform({ data }: Props) {
  // const totalLikes = data.reduce((likes, friend) => {
  //   return likes + friend.likes;
  // }, 0);

  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
      return likes + friend.likes;
    }, 0);
  }, [data]);

  return (
    <View>
      <Text>Total de likes: {totalLikes}</Text>

      {/* {data.map((friend) => (
        <FriendPerform key={String(friend.id)} data={friend} />
      ))} */}

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FriendPerform data={item} />}
      />
    </View>
  );
}
