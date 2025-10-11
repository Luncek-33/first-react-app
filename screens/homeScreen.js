import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the Home Screen</Text>

      <Button title="Go back to Menu" onPress={() => navigation.navigate("Menu")} />

      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.touchText}>Go to Profile Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  touchable: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
  },
  touchText: {
    color: "white",
    fontSize: 16,
  },
});

export default HomeScreen;
