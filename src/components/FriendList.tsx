import React, { useMemo } from "react";

import { View, Text, FlatList } from "react-native";
import { Friend } from "./Friend";

interface Props {
  data: {
    [x: string]: any;
    id: Number;
    name: String;
    likes: Number;
  };
  follow: () => void;
}
[];

export function FriendList({ data, follow }: Props) {
  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
      return likes + friend.likes;
    }, 0);
  }, [data]);

  return (
    <View>
      <Text>Total de likes: {totalLikes}</Text>

      {/* {data.map((friend) => (
        <Friend key={String(friend.id)} data={friend} follow={follow} />
      ))} */}

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Friend data={item} follow={follow} />}
      />
    </View>
  );
}
