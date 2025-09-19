
import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ProfileScreen = () => {

    return <View style={style.container}>
        <Text style={style.textStyle}>Name: Luna</Text>
        <Text style={style.textStyle}>Age: 16</Text>
        <Text style={style.textStyle}>Bio: I am a student at Digital School. Currently, I am studying React Native.</Text>
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

//eksportovanje komponente
export default ProfileScreen;