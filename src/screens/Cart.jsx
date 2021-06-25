import React from "react";
import { View } from "react-native";
import { HorizontalList } from "../containers";
import { Fab, Section } from "../components";
import { styles } from "../styles";
import { address, items } from "../constants";

export const Cart = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <HorizontalList
          data={address}
          template="address"
          endComponent={
            <Fab
              icon="add"
              color="#5919AD"
              size={35}
              style={{ width: 60, height: 60, alignSelf: "center" }}
            />
          }
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <HorizontalList data={items} template="item" />
      </View>
    </View>
  );
};
