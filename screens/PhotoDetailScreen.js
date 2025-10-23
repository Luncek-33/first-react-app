import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function PhotoDetailsScreen({route}){
    const {image} = route.params;

    return (
        <View style={StyleSheet.container}>
            <Image source={image} style ={styles.image}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#fff"
    },
    image: {
        width : 300,
        height: 300,
        borderRadius: 10,
    }
});