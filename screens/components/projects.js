import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const Projects = () => {
    return(
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.title}>PROJECTS</Text>
                <TouchableOpacity style={style.button}>
                    <Text style={style.viewAll}>View All</Text>
                </TouchableOpacity>
            </View>

            <View style={style.projectRow}>
                <Image source={require("../../assets/pr1.jpg")} style={style.projectImage}></Image>
                <Image source={require("../../assets/pr2.jpg")} style={style.projectImage}></Image>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        paddingTop:20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    title:{
        fontWeight:"bold",
        fontSize: 18,
    },
    viewAll:{
        
        fontWeight:"bold",
    },
    button: {
        backgroundColor: "#FFD700",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    projectRow:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    projectImage:{
        width:150,
        height:100,
        borderRadius:10,
    },
});

export default Projects;