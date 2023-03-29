import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Navigation from "../components/Navigation";

const login = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Hasfsdnfsndflsdfaposdlalsdnasdlija</Text>
      </ScrollView>
      <Navigation />
    </View>
  );
};

export default login;

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
