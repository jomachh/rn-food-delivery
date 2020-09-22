import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";

export const Section = ({ title, action, children }) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {action && (
          <TouchableOpacity onPress={action}>
            <Text style={styles.sectionAction}>Ver más</Text>
          </TouchableOpacity>
        )}
      </View>
      {children}
    </View>
  );
};
