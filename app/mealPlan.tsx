import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import Navigation from "../components/Navigation";

const mealPlan = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.title}>Meal Plan</Text>
        </View>
      </ScrollView>
      <Navigation />
    </View>
  );
};

export default mealPlan;

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
