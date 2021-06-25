import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const GradientButton = ({ content, action, width }) => {
  return (
    <TouchableOpacity onPress={action}>
      <LinearGradient
        colors={["#5919AD", "#00C5BD"]}
        start={[0.0, 0.8]}
        end={[0.9, 1.0]}
        style={{
          height: 70,
          width: width,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          marginHorizontal: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          {content}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
