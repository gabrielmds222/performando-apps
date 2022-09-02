import React from "react";

import { View, Text } from "react-native";
import { Friend } from "./Friend";

interface Props {
  data: {
    [x: string]: any;
    id: number;
    name: string;
    likes: number;
  };
}
[];

export function FriendList({ data }: Props) {
  const totalLikes = data.reduce((likes, friend) => {
    return likes + friend.likes;
  }, 0);

  return (
    <View>
      <Text>Total de likes: {totalLikes}</Text>

      {data.map((friend) => (
        <Friend key={String(friend.id)} data={friend} />
      ))}
    </View>
  );
}
