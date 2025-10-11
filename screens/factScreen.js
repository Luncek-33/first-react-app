import React from "react";
import { Text, StyleSheet, View } from "react-native";

const FactScreen = () => {
  
  const fact1 =
    "Time moves slower near strong gravity – this is called gravitational time dilation, proven by Einstein’s theory of relativity.";
  const fact2 =
    "Absolute zero (-273.15 °C) is the lowest possible temperature, where particles have minimal motion, but quantum effects mean they never stop completely.";
  let fact3 = "Light can act as both a wave and a particle – this is known as wave-particle duality, one of the key ideas of quantum mechanics.";
  
  
 

  return (
    <View style={styles.container}>
      <Text style={styles.factOne}>{fact1}</Text>
      <Text style={styles.factTwo}>{fact2}</Text>
      <Text style={styles.factThree}>{fact3}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  factOne: {
    fontSize: 20,
    color: "#1a73e8",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  factTwo: {
    fontSize: 18,
    color: "#0b8043",
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 20,
  },
  factThree: {
    fontSize: 19,
    color: "#8b0000",
    textAlign: "center",
  },
});

export default FactScreen;
