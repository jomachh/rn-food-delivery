import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const TabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.bottomNavigator}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tab,
              label === "Cart" && {
                backgroundColor: isFocused ? "#00C5BD" : "#5919AD",
                borderRadius: 30,
                marginHorizontal: 35,
              },
            ]}
          >
            <MaterialIcons
              name={
                label === "Home"
                  ? "home"
                  : label === "Business"
                  ? "store"
                  : label === "Cart"
                  ? "shopping-cart"
                  : label === "Fav" && isFocused
                  ? "favorite"
                  : label === "Fav" && !isFocused
                  ? "favorite-border"
                  : label === "Profile" && isFocused
                  ? "person"
                  : label === "Profile" && "person-outline"
              }
              size={label === "Cart" ? 30 : 25}
              color={
                label === "Cart" ? "white" : isFocused ? "#00C5BD" : "grey"
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigator: {
    flexDirection: "row",
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
