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
  return (
    <View>
      {data.map((friend) => (
        <FriendPerform key={String(friend.id)} data={friend} />
      ))}
    </View>
  );
}
