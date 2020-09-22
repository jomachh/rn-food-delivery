import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../styles";

export const Recommended = ({ image, name, business, description, price }) => {
  const [isFav, setFav] = useState(false);

  return (
    <View style={[styles.recommendedContainer, styles.row]}>
      {isFav ? (
        <MaterialIcons
          style={styles.favButton}
          onPress={() => setFav(!isFav)}
          name="favorite"
          size={24}
          color="#ef5350"
        />
      ) : (
        <MaterialIcons
          style={styles.favButton}
          onPress={() => setFav(!isFav)}
          name="favorite-border"
          size={24}
          color="grey"
        />
      )}
      <Image style={styles.recommendedImage} source={{ uri: image }} />
      <View style={styles.recommendedInfoContainer}>
        <Text style={styles.recommendedBusiness}>{business}</Text>
        <Text style={styles.recommendedName}>{name}</Text>
        <Text style={styles.recommendedDescription}>{description}</Text>
        <View
          style={[styles.spaceBetween, styles.row, styles.alignItemsCenter]}
        >
          <Text style={styles.popularProductPrice}>${price}</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color="#213751"
          />
        </View>
      </View>
    </View>
  );
};
