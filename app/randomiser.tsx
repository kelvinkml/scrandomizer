import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Navigation from "../components/Navigation";

const randomiser = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.title}>Randomiser</Text>
        </View>
      </ScrollView>
      <Navigation />
    </View>
  );
};

export default randomiser;

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
