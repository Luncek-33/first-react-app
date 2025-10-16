import React from "react";
import { Text,StyleSheet,View } from "react-native";

const BoxScreen = () => {
    return(
        <View style={style.wrapper}>
            <View style={style.box1Style}></View>
            <View style={style.box2Style}></View>
            <View style={style.box3Style}></View>
            <View style={style.box4Style}></View>
            <View style={style.box5Style}></View>
            <View style={style.box6Style}></View>
         
         </View>
)};

const style = StyleSheet.create({
    wrapper:{
        flex:1,
        flexDirection: "row",
        //justifyContent: "center",
        flexWrap:"wrap", // required for alignContent to work
        alignItems: "space-evenly",
        },
    viewStyle:{
        borderWidth: 3,
        borderColor:"black"
    },
    textStyle:{
        borderWidth:1,
        borderColor: "red",
        borderTopLeftRadius:20,
        borderBottomRightRadius:20,
        margin:20,
        padding: 20,
    },
    box1Style:{
        width:100,
        height:100,
        backgroundColor: "red",
        //alignSelf: "flex-end",
    },
     box2Style:{
        width:100,
        height:100,
        backgroundColor: "yellow",
    },
     box3Style:{
        width:100,
        height:100,
        backgroundColor: "green",
    },
     box4Style:{
        width:100,
        height:100,
        backgroundColor: "blue",
    },
     box5Style:{
        width:100,
        height:100,
        backgroundColor: "orange",
    },
     box6Style:{
        width:100,
        height:100,
        backgroundColor: "purple",
    },
});

export default BoxScreen;
