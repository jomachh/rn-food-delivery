import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const Fab = ({ icon, size, action, color, style }) => {
  return (
    <TouchableOpacity
      style={[
        {
          borderRadius: 100,
          backgroundColor: color,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
      onPress={action}
    >
      <MaterialIcons name={icon} size={size} color="white" />
    </TouchableOpacity>
  );
};
