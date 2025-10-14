import React from "react";
import { View, StyleSheet, Text, TouchableOpacity,Image } from "react-native";

const ProfileInfo = () => {
    return (
        <View style={style.container}>
            <Image source={require("../../assets/avatar2.png")} style={style.avatar}></Image>
            <View style={style.card}>
            <Text style={style.name}>JOHN DOE</Text>
            <Text style={style.role}>UI/UX Designer</Text>
            <Text style={style.decription}>We are passionate about creating beautiful designs for startups and leading brands.</Text>
            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>Hire Me</Text>
            </TouchableOpacity>
            </View>
        </View>

    );
};

const style = StyleSheet.create({
    container: {
        alignItems: "center",
       
        marginTop:-10,
        paddingBottom: 15,
        
    },
    avatar:{
        width:470,
        height:300,
        borderRadius:55,
        marginBottom: -50,
    },
    card:{
        backgroundColor:"#e8e8e8",
        alignItems: "center",
        borderRadius: 30,
        paddingHorizontal:20,
        marginHorizontal:20,
        height: 230,
        paddingVertical:40,
    },
    name: {
        fontSize: 22,
        fontWeight:"bold",
    },
    role: {
        fontSize: 16,
        marginBottom: 10,
    },
    description: {
        textAlign:"center",
        marginBottom: 15,
        marginBottom:20,

    },
    button: {
        backgroundColor: "#FFD700",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    buttonText:{
        fontWeight:"bold"
    }
});

export default ProfileInfo;