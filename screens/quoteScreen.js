
import React from "react";
import { Text, StyleSheet, View } from "react-native";

const QuoteScreen = () => {

    return <View style={style.container}>
        
        <Text style={style.quoteStyle}>Peace cannot be kept by force; it can only be achived by understanding!</Text>
       

        <Text style={style.authorStyle}>-Albert Einstein</Text>

    </View>
}; 


const style = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : "#fff",
        alignItems: "flex-start",
        justifyContent : "center",
    },
    quoteStyle: {
        fontSize: 25,
        
        textAlign: "center",

    
    }  ,
    authorStyle:{
        fontSize: 20,
        textAlign:"left",
        //alignSelf:"flex-start"
    },
    
});

//eksportovanje komponente
export default QuoteScreen;