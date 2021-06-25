import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";

export const PopularProduct = ({ name, image, description, price }) => {
  const [isFav, setFav] = useState(false);

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.popularProductContainer}
      onPress={() => navigation.navigate("Product", { name: name })}
    >
      {isFav ? (
        <MaterialIcons
          style={styles.favButton}
          onPress={() => setFav(!isFav)}
          name="favorite-border"
          size={24}
          color="grey"
        />
      ) : (
        <MaterialIcons
          style={styles.favButton}
          onPress={() => setFav(!isFav)}
          name="favorite"
          size={24}
          color="#ef5350"
        />
      )}

      <View style={styles.popularProductImageContainer}>
        <Image style={styles.popularProductImage} source={{ uri: image }} />
      </View>
      <Text style={styles.popularProductName}>{name}</Text>
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={styles.popularProductDescription}
      >
        {description}
      </Text>
      <View style={[styles.spaceBetween, styles.row, styles.alignItemsCenter]}>
        <Text style={styles.popularProductPrice}>${price}</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#213751" />
      </View>
    </TouchableOpacity>
  );
};
