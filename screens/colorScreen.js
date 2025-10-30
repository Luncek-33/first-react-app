import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ColorScreen = () => {
  const colors = [
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#00FF00" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Orange", hex: "#FFA500" },
    { name: "Purple", hex: "#800080" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Colors Screen</Text>

      <FlatList
        data={colors}
        keyExtractor={(item) => item.hex}
        renderItem={({ item }) => (
          <View style={[styles.colorBox, { backgroundColor: item.hex }]}>
            <Text style={styles.colorName}>{item.name}</Text>
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
  colorBox: {
    width: 300,
    height: 60,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  colorName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ColorScreen;