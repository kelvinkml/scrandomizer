import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Link href="/">Home</Link>
      <Link href="/mealPlan">Meals</Link>
      <Link href="/profile">User</Link>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 10,
    width: "100%",
    height: 70,
    borderWidth: 1,
  },
});
