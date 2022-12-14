import React, { memo } from "react";

import { Text, View, TouchableOpacity } from "react-native";

interface Props {
  data: {
    name: string;
    likes: number;
  };
}

export function Friend({ data }: Props) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text>
        {data.name} - likes: {data.likes}
      </Text>
    </View>
  );
}

// import React, { memo } from "react";

// import { Text, View, TouchableOpacity } from "react-native";

// import lodash from "lodash";
// interface Props {
//   data: {
//     id: number;
//     name: string;
//     likes: number;
//   };
//   follow: () => void;
// }

// function FriendComponent({ data, follow }: Props) {
//   return (
//     <View style={{ marginBottom: 10 }}>
//       <Text>
//         {data.name} - likes: {data.likes}
//       </Text>

//       <TouchableOpacity onPress={follow}>
//         <Text>Deixar de seguir</Text>
//       </TouchableOpacity>

//       <Text>
//         online em:
//         {new Date().getHours()}:{new Date().getMinutes()}
//       </Text>
//     </View>
//   );
// }

// export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
//   return lodash.isEqual(prevProps.data, nextProps.data);
// });
