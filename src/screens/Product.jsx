import React, { useState } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import { WaveContainer, HorizontalList } from "../containers";
import { CustomHeader, Fab, Section, GradientButton } from "../components";
import { ingredients } from "../constants";
import { styles } from "../styles";

const { width } = Dimensions.get("screen");

export const Product = ({}) => {
  const route = useRoute();
  const { name } = route.params;

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <CustomHeader title={name} />
      <Image
        source={{
          uri:
            "https://okdiario.com/img/2019/05/27/dia-mundial-de-la-hamburguesa-655x368.jpg",
        }}
        style={styles.productImage}
      />
      <WaveContainer>
        <Fab
          icon="favorite"
          color="#FB345E"
          size={30}
          style={styles.fabFavProduct}
        />
        <Section title="Descripción">
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum
            dui sed neque congue, a pulvinar orci placerat. Integer pulvinar
            tortor in turpis lobortis, nec consectetur lacus condimentum.
          </Text>
        </Section>
        <Section
          title="Ingredientes"
          action={() => {}}
          actionLabel="Quitar ingredientes"
        >
          <HorizontalList
            template="categories"
            data={ingredients}
            containerStyle={styles.ingredientContainer}
            imageStyle={styles.ingredientImage}
          />
        </Section>
      </WaveContainer>
      <View
        style={{
          position: "absolute",
          bottom: 30,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: width,
        }}
      >
        <GradientButton content="Ordenar ahora" width={width * 0.6} />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#213751",
            width: width * 0.4,
            marginEnd: 20,
          }}
        >
          $12.58
        </Text>
      </View>
    </View>
  );
};
