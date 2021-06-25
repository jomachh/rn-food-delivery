import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { Home, Product, Cart } from "../screens";
import { View } from "react-native";
import { TabBar } from "../components";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBar={(props) => <TabBar {...props} />}
    tabBarOptions={{
      showLabel: false,
    }}
    initialRouteName="Home"
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Business" component={equis} />
    <Tab.Screen name="Cart" component={Cart} />
    <Tab.Screen name="Fav" component={equis} />
    <Tab.Screen name="Profile" component={equis} />
  </Tab.Navigator>
);

const equis = () => <View style={{ backgroundColor: "red", flex: 1 }} />;

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerStyle: styles.header,
          title: "Inicio",
          headerTitleStyle: styles.title,
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  header: {
    height: 115,
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
  bottomNavigator: {
    height: 60,
    backgroundColor: "white",
    borderRadius: 30,
    marginBottom: 30,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.13,
    shadowRadius: 4.65,
    elevation: 8,
  },
  tab: {
    height: 60,
  },
});
