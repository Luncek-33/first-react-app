import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import data from "../data/countries.json";

class CountriesScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      searchText: "",
    };
  }

  componentDidMount() {
    this.setState({
      countries: data,
    });
  }

  render() {
    const filteredCountries = this.state.countries.filter(
      (item) =>
        item.name.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        item.country.toLowerCase().includes(this.state.searchText.toLowerCase())
    );

    return (
      <View>
        <Text style={styles.screenTitle}>Countries screen</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Search by city or country..."
          value={this.state.searchText}
          onChangeText={(text) => this.setState({ searchText: text })}
        />

       <FlatList
          data={filteredCountries}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("CountryDetail", { country: item })}
            >
              <View style={styles.cardWrapper}>
                <Text>City name: {item.name}</Text>
                <Text style={styles.countries}>Country name: {item.country}</Text>
                <Text>City description: {item.description}</Text>
                <Text>City population: {item.population}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

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
  searchInput: {
    borderWidth: 1,
    borderColor: "#999",
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 8,
    padding: 8,
  },
});

export default CountriesScreen;

//https://kahoot.it/challenge/09813677?challenge-id=2e551d53-f470-4aa6-aa87-7e8e5dbc6006_1761587241907
