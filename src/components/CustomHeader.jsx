import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";

export const CustomHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.customHeaderContainer}>
      <View style={styles.customHeaderItems}>
        <TouchableOpacity
          style={styles.customHeaderBackButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="keyboard-arrow-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.customHeaderTitle}>{title}</Text>
        <View style={{ width: 64 }} />
      </View>
    </SafeAreaView>
  );
};
