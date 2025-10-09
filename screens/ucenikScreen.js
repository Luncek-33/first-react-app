import React from "react";
import { Text, View, StyleSheet } from "react-native";
import UcenikDetails from "./components/ucenikDetails";

const UcenikScreen = () => {
    return(
    <View>
        <Text style={style.text}>Student Screen</Text>
        <UcenikDetails name="Luna" image={require("../assets/avatar2.png")} description="Prvi student" />
        <UcenikDetails name="Marko" image={require("../assets/avatar3.png")} description="Drugi student"/>
        <UcenikDetails name="Haris" image={require("../assets/avatar6.png")} description="Treći student"/>
        <UcenikDetails name="Leon" image={require("../assets/avatar5.jpg")} description="Četvrti student"/>
    </View>
    );
};

const style = StyleSheet.create({
    text:{
        textAlign: "center",
        fontSize: 20,
        marginVertical:20,
    },
});

export default UcenikScreen;