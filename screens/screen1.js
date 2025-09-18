// importovanje biblioteka
import React from "react";
import { Text, StyleSheet, View } from "react-native";

//kreiranje komponente
const screen1 = () => {

    return <View style={style.container}>
        <Text style={style.textStyle}>This is screen 1!</Text>
    </View>
}; //sintaksa za kreiranje komponente

//kreiranje stylesheeta

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
export default screen1;