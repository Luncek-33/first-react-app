import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const WeatherScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Screen</Text>
      <View style={styles.wrapper}>
        <Image
          style={styles.img}
          source={require("../assets/weather.png")}
        ></Image>
        <View style={styles.txtWrapper}>
          <Text style={styles.wText}>Current Weather: windy</Text>
          <Text style={styles.wText}>Current Temperature: 14</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    marginVertical: 20,
  },
  wText: {
    fontSize: 15,
  },
 wrapper: {
  backgroundColor: "#d3d3d3",
  width: 370,
  borderRadius: 20,
  height: 170,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 20,
},

img: {
  height: 100,
  width: 100,
  borderRadius: 15,
},

txtWrapper: {
  marginLeft: 20,
  justifyContent: "center",
},

    
  
});

export default WeatherScreen;
