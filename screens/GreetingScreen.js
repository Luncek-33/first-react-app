
import React from "react";
import { Text, StyleSheet, View } from "react-native";

const GreetingScreen = () => {

    return <View style={style.container}>
        <Text style={style.textStyle}>Hello World!</Text>
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
        fontSize: 30,
        color: "#da1f1fff"
    }
});

//eksportovanje komponente
export default GreetingScreen;