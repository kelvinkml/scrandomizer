import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Link } from "expo-router";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function index() {
  const [result, setResult] = useState({ results: [] });
  const [gotResult, setGotResult] = useState(false);

  const getResults = () => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=fbedaf07a0434073adbd9688a9dbb2b9&query=pasta&number=2"
      )
      .then((res) => {
        setResult(res.data);
        console.log(result);
      })
      .catch((err) => {
        console.log(err, "<err");
      });
  };

  const showResults = () => {
    setGotResult(true);
    console.log(result);
    result.results.forEach(() => {
      console.log("test");
    });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.title}></Text>
          <Text style={styles.subtitle}>Welcome to Scrandomiser!</Text>
          <TouchableOpacity onPress={getResults}>
            <Text>Touch here for results</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showResults}>
            <Text>Touch here to consolelog results</Text>
          </TouchableOpacity>
          {gotResult
            ? result.results.map((item) => {
                return (
                  <View key={item.id}>
                    <Text>{item.title}</Text>
                    <Image
                      style={styles.image}
                      source={{ uri: item.image }}
                    ></Image>
                  </View>
                );
              })
            : null}
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
  image: {
    height: 100,
    width: 100,
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
