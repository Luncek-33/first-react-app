import React from "react";
import { View, Text, StyleSheet} from "react-native";

const BoxScreenChellange = () => {
    return (
    <View style={style.wrapper}>
    <View style={style.box1}></View>
    <View style={style.box2}></View>
    <View style={style.box3}></View>
    </View>
)};

const style = StyleSheet.create({
    wrapper:{
        flex:1,
        flexDirection: "row",
        justifyContent:"space-evenly"
    },
    box1:{
        width:50,
        height:50,
        backgroundColor: "purple"
    },
    box2:{
        width:50,
        height:50,
        backgroundColor: "yellow",
        alignSelf: "center"
    },
    box3:{
        width:50,
        height:50,
        backgroundColor: "grey"
    },
});

export default BoxScreenChellange;