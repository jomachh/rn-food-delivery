import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../styles";

export const AddressBadge = ({ name, description, icon }) => {
  const [selected, isSelected] = useState(false);

  return (
    <TouchableOpacity
      style={[
        styles.addressBadgeContainer,
        { backgroundColor: selected ? "#5919AD" : "white" },
      ]}
      onPress={() => isSelected(!selected)}
    >
      <View style={{ flexDirection: "row", alignItems: "center", height: 60 }}>
        <MaterialIcons
          name={icon}
          size={30}
          color={selected ? "white" : "grey"}
        />
        <View style={{ marginStart: 10, marginEnd: 10 }}>
          <Text
            style={[
              styles.addressBadgeName,
              { color: selected ? "white" : "black" },
            ]}
          >
            {name}
          </Text>
          <Text
            style={[
              styles.addressBadgeDescription,
              { color: selected ? "white" : "grey" },
            ]}
          >
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
