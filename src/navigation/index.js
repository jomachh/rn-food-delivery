import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { Home } from "../screens";

const Stack = createStackNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: styles.header,
          title: "Inicio",
          headerTitleStyle: styles.title,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  header: {
    height: 130,
    shadowColor: "#607d8b",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.65,
    elevation: 8,
  },
  title: { color: "#5A1CAB", fontSize: 23 },
});
