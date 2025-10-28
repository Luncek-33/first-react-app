import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity} from "react-native";
import data from "../data/countries.json";

class CountriesScreen extends React.Component{
    constructor() {
        super();
        this.state = {
            countries: [],
        };
    }

    componentDidMount() {
        this.setState({
            countries: data,
        })
    }

    render(){
        return(
            <View>
                <Text style={styles.screenTitle}>Countries screen</Text>
                <FlatList
                data={this.state.countries}
                keyExtractor={countries => countries.id}
                renderItem={({item}) => (
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("CountryDetails", {country: item})}>
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
        )
    }
}

const styles = StyleSheet.create({
    screenTitle:{
        fontSize: 20,
        textAlign: "center",
        marginVertical: 15,
        fontWeight:"bold"
    },
    cardWrapper: {
        backgroundColor: "#d3d3d3",
        marginBottom: 15,
    },
    countries: {
        fontWeight: "bold"
    }
});

export default CountriesScreen;

//https://kahoot.it/challenge/09813677?challenge-id=2e551d53-f470-4aa6-aa87-7e8e5dbc6006_1761587241907
 

