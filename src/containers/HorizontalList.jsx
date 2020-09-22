import React from "react";
import { View, ScrollView } from "react-native";
import { Category, PopularProduct, Recommended } from "../components";
import { styles } from "../styles";

export const HorizontalList = ({ data, template }) => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.leftPadding}>
      {template === "categories"
        ? data.map((category, index) => (
            <Category key={index} name={category.name} image={category.image} />
          ))
        : template === "populars"
        ? data.map((product, index) => (
            <PopularProduct
              key={index}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))
        : template === "recommended" &&
          data.map((product, index) => (
            <Recommended
              key={index}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              business={product.business}
            />
          ))}
    </ScrollView>
  );
};
