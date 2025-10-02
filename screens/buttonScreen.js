import React from "react";
import { View,Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const ButtonScreen = ()=>{
    let counter = 0;
    let counter1=0;
    return(
        <View>
            <Text>Button Screen</Text>
            <Button title="Click me"
            onPress={() => console.log("Button Clicked",": ", counter++)}
            ></Button>
            <TouchableOpacity
            style={style.TouchableBtn}
            onAccessibilityEscape={()=> console.log("Touchable Opacity Clicket", counter1++)}>
                <Text style={style.txtStyle}>Click Touchable Elemnt</Text>
            </TouchableOpacity>
        </View>
    )
};

const style= StyleSheet.create({
    TouchableBtn:{
        backgroundColor:"purple",
        marginVertical:15,
        padding: 20,
        borderRadius:6,
        marginHorizontal:20,
        
    },
    txtStyle:{
        color:"white",
        textAlign: "center",
        fontSize: 25,
        fontWeight:"bold"

    }
});

export default ButtonScreen;