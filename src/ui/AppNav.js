import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "../assets/screens";

import { MainContext } from "../providers/Provider";
import { Quiz, Result, Home } from "./screens";

const Stack = createNativeStackNavigator();

export default function AppNav() {
  const {
    state: { user },
  } = useContext(MainContext);

  console.log(user);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={SCREENS.HOME}
      >
        {user ? (
          <>
            <Stack.Screen name={SCREENS.QUIZ} component={Quiz} />
            <Stack.Screen name={SCREENS.RESULT} component={Result} />
          </>
        ) : (
          <Stack.Screen name={SCREENS.HOME} component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
