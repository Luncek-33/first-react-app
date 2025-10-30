import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const NumbersScreen = () => {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Numbers Screen</Text>

      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <View style={styles.numberBox}>
            <Text style={styles.numberText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  numberBox: {
    width: 300,
    height: 60,
    backgroundColor: "#d3d3d3",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  numberText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default NumbersScreen;