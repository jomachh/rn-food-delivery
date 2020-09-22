import React from "react";
import { ScrollView } from "react-native";
import { Section } from "../components";
import { HorizontalList } from "../containers";
import { styles } from "../styles";
import { categories, popularProducts, recommended } from "../constants";

export const Home = () => {
  const seeAll = () => {
    console.log("Hola");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Section title="Explorar categorias" action={seeAll}>
        <HorizontalList template="categories" data={categories} />
      </Section>
      <Section title="Productos populares">
        <HorizontalList template="populars" data={popularProducts} />
      </Section>
      <Section title="Recomendados">
        <HorizontalList template="recommended" data={recommended} />
      </Section>
    </ScrollView>
  );
};
