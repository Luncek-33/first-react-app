
import React from "react";
import { Text, StyleSheet, View } from "react-native";

const FactScreen = () => {

    return <View style={style.container}>
        <Text style={style.textStyle}>Time moves slower near strong gravity – this is called gravitational time dilation, proven by Einstein’s theory of relativity.</Text>
        <Text style={style.textStyle}>Absolute zero (-273.15 °C) is the lowest possible temperature, where particles have minimal motion, but quantum effects mean they never stop completely.</Text>
        <Text style={style.textStyle}>Light can act as both a wave and a particle – this is known as wave-particle duality, one of the key ideas of quantum mechanics.</Text>
    </View>
}; 


const style = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : "#fff",
        alignItems: "center",
        justifyContent : "center",
    },
    textStyle: {
        fontSize: 20,
        color: "#04068bff"
    }
    
});


export default FactScreen;