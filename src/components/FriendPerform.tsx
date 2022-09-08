import React, { memo } from "react";

import { Text, View, TouchableOpacity } from "react-native";

interface Props {
  data: {
    id: number;
    name: string;
    likes: number;
  };
}

export function FriendComponent({ data }: Props) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text>
        {data.name} - likes: {data.likes}
      </Text>
    </View>
  );
}

export const FriendPerform = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});
