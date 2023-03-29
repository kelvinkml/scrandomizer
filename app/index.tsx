import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import Navigation from "../components/Navigation";

export default function index() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.title}>Home</Text>
          <Text style={styles.subtitle}>
            This is the first page of your app.
          </Text>
        </View>
      </ScrollView>
      <Navigation />
    </View>
  );
}

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
