import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { Home } from "../screens";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TabBar } from "../components";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => (
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
);

const equis = () => <View style={{ backgroundColor: "red", flex: 1 }} />;

export const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Business") {
            iconName = focused ? "store" : "store";
          } else if (route.name === "Cart") {
            iconName = focused ? "shopping-cart" : "shopping-cart";
          } else if (route.name === "Fav") {
            iconName = focused ? "favorite" : "favorite-border";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Business" component={equis} />
      <Tab.Screen name="Cart" component={equis} />
      <Tab.Screen name="Fav" component={equis} />
      <Tab.Screen name="Profile" component={equis} />
    </Tab.Navigator>
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
