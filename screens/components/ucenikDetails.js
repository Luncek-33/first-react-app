import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const UcenikDetails = (props) => {
    
    return(
        <View>
        <View style={style.cardWrapper}>
   <View>
        <Image source={props.image} style={style.img}></Image>
    </View>
    <View>
        <Text style={style.infoWrapper}>{props.name}</Text>
        <Text style={style.descriptionWrapper}>{props.description}</Text>
    </View>
    </View>
    </View>
    );
};

const style = StyleSheet.create({
   
    cardWrapper :{
        flexDirection:"row",
        backgroundColor:"white",
        borderRadius:8,
        width:"90%",
        alignSelf:"center",
        marginBottom:15,
    },
    img:{
        width:100,
        height:100,
        borderRadius:8,
        borderBottomLeftRadius:8,
    },
    infoWrapper:{
        marginLeft:20,
        marginTop:20,
        fontWeight:"bold"
    },
    descriptionWrapper:{
      marginLeft:20,
       
    },

});

export default UcenikDetails;