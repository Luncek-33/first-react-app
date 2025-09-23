
import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ExerciseScreen = () => {
    //deklaracija varijabli let i const
    let message = "Hi there!";  //const varijable se ne mogu mijenjati
    let message1 ="Hi from message 1!"
    //message = "Moja varijabla ima novu vrijednost!";

    return <View style={styles.container}>
        <Text>{message}</Text>
        <Text>{message1}</Text>
    </View>
}; 

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems: "center",
        justifyContent : "center",
    }
   
    
});



export default ExerciseScreen;