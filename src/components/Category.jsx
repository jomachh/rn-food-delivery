import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles";

export const Category = ({ image, name, containerStyle, imageStyle }) => {
  const colors = ["#E2F8D5", "#C3F4E9", "#FFEFD2", "#FEDADB", "#E7D8E9"];

  return (
    <TouchableOpacity style={styles.categoryContainer}>
      <View
        style={[
          styles.categoryImageContainer,
          {
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
          },
          containerStyle,
        ]}
      >
        <Image
          style={[styles.categoryImage, imageStyle]}
          source={{ uri: image }}
        />
      </View>
      <Text style={styles.categoryName}>{name}</Text>
    </TouchableOpacity>
  );
};
