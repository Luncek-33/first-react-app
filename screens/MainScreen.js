// importovanje biblioteka
import React from "react";
import { Text, StyleSheet, View } from "react-native";

//kreiranje komponente
const MainScreen = () => {

    return <View style={style.container}>
        <Text style={style.textStyle}>This is Main Screen</Text>
    </View>
}; //sintaksa za kreiranje komponente

//kreiranje stylesheeta

const style = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : "#ffffffff",
        alignItems: "center",
        justifyContent : "center",
    },
    textStyle: {
        fontSize: 30
    }
});

//eksportovanje komponente
export default MainScreen;