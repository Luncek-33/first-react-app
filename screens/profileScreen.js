import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text style={style.textStyle}>Name: Luna</Text>
      <Text style={style.textStyle}>Age: 16</Text>
      <Text style={style.textStyle}>
        Bio: I am a student at Digital School. Currently, I am studying React Native.
      </Text>

      
      <Button title="Back to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  textStyle: {
    fontSize: 20,
    color: "#04068bff",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default ProfileScreen;
