import React from "react";
import { View, ScrollView } from "react-native";
import {
  Category,
  PopularProduct,
  Recommended,
  AddressBadge,
} from "../components";
import { CartItem } from "../components/CartItem";
import { styles } from "../styles";

export const HorizontalList = ({
  data,
  template,
  containerStyle,
  imageStyle,
  endComponent,
}) => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.leftPadding}>
      {template === "categories"
        ? data.map((category, index) => (
            <Category
              key={index}
              name={category.name}
              image={category.image}
              containerStyle={containerStyle}
              imageStyle={imageStyle}
            />
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
        : template === "recommended"
        ? data.map((product, index) => (
            <Recommended
              key={index}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              business={product.business}
            />
          ))
        : template === "address"
        ? data.map((address, index) => (
            <AddressBadge
              key={index}
              name={address.name}
              description={address.description}
              icon={address.icon}
            />
          ))
        : template === "item" &&
          data.map((item, index) => (
            <CartItem
              key={index}
              name={item.name}
              image={item.image}
              description={item.description}
              price={item.price}
            />
          ))}
      {endComponent && endComponent}
    </ScrollView>
  );
};
