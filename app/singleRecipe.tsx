import { StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Navigation from "../components/Navigation";

export const singleRecipe = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.title}>Single Recipe</Text>
        </View>
      </ScrollView>
      <Navigation />
    </View>
  );
};

export default singleRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
