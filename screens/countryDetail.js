import React from "react";
import { Text, StyleSheet, View } from "react-native";

const CountryDetail = ({route}) => {
  const { country } = route.params;
  return (
    <View style={styles.cardWrapper}>
      <Text>City name: {country.name}</Text>
      <Text style={styles.countries}>Country name: {country.country}</Text>
      <Text>City description: {country.description}</Text>
      <Text>City population: {country.population}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 15,
    fontWeight: "bold",
  },
  cardWrapper: {
    backgroundColor: "#d3d3d3",
    marginBottom: 15,
  },
  countries: {
    fontWeight: "bold",
  },
});
export default CountryDetail;
