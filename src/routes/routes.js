import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Inicial } from "../screens/Inicial";
import { Home } from "../screens/Home";
import { Memo } from "../screens/Memo";
import { UseMemo } from "../screens/UseMemo";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Inicial"}
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Memo" component={Memo} />
        <Stack.Screen name="UseMemo" component={UseMemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
