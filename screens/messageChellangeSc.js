
import React from "react";
import { Text, StyleSheet, View } from "react-native";

const MessageChellange = () => {
    //deklaracija varijabli let i const
    let message = "Hi there!";  //const varijable se ne mogu mijenjati
    let message1 ="Hi from message 1!"
    //message = "Moja varijabla ima novu vrijednost!";

    return <View style={styles.container}>
        <Text style={styles.messageText}>{message}</Text>
        <Text>{message1}</Text>
    </View>
}; 

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems: "center",
        justifyContent : "center",
    },
    message :{
        padding :12,
        borderRadius :18,
        backgroundColor :"#fff",
        maxWidth :"50%",
        shadowOffset : {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowColor: "#000",
    },
    messageText:{
        fontSize: 16,
        color: "#333",
    }
   
    
});



export default MessageChellange;