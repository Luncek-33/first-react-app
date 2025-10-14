import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileInfo from "./components/profileInfo";
import Projects from "./components/projects";

const ProfilScreen = () =>{
    return(
        <View style={style.container}>
            <ProfileInfo/>
            <Projects/>
        </View>
    );


};

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
      
    }
});

export default ProfilScreen;