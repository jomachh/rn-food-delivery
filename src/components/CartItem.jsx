import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { Fab } from "./";
import { styles } from "../styles";

export const CartItem = ({ name, price, description, image }) => {
  const [qty, setQty] = useState(1);
  return (
    <View style={styles.cartItemContainer}>
      <Fab
        icon="delete"
        color="#FB345E"
        size={24}
        style={{ width: 40, height: 40 }}
      />
      <Image style={styles.cartItemImage} source={{ uri: image }} />
      <Text>{name}</Text>
      <Text>{description}</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row" }}>
          <Fab
            icon="remove"
            color="grey"
            size={10}
            style={{ width: 20, height: 20, borderRadius: 5 }}
            action={() => setQty(qty - 1)}
          />
          <Text>{qty}</Text>
          <Fab
            icon="add"
            color="#5919AD"
            size={10}
            style={{ width: 20, height: 20, borderRadius: 5 }}
            action={() => setQty(qty + 1)}
          />
        </View>
        <Text>${price * qty}</Text>
      </View>
    </View>
  );
};
