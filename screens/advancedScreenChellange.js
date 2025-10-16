import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AdvancedBoxScreenChellange = () => {
    return(
        <View style={style.wrapper}>
            <View style={style.box1}></View>
            <View style={style.box2}></View>
            <View style={style.box3}></View>
        </View>
    );
};

const style = StyleSheet.create({
    wrapper:{
        flex:1,
        flexDirection: "column"
    },
    box1:{
        alignSelf:"baseline",
        height: 50,
        width:50,
        backgroundColor: "yellow"
    },
    box2:{
        alignSelf:"center",
        height: 50,
        width:50,
        backgroundColor: "yellow"
    },
    box3:{
        alignSelf:"flex-end",
        height: 50,
        width:50,
        backgroundColor: "yellow"
    },
});

export default AdvancedBoxScreenChellange;