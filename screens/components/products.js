import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class Product extends React.Component {
    render() {
        const {name, stock, price, image} = this.props.data;

        return(
            <View style={styles.card}>
                <Image source={{uri:image}} style={styles.productImg}></Image>
                <Text style={styles.Name}>{name}</Text>
                <Text>Stock: {stock}</Text>
                <Text>Price :{price}</Text>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    card: {
        backgroundColor:"#fff",
        padding:12,
        marginVertical:10,
        borderRadius: 10,
        elevation:3,
    },
    productImg: {
        width: "100%",
        height: 160,
        borderRadius: 10,
        marginBottom:8,
    },
    Name:{
        fontSize:18,
        fontWeight:"bold"
    }
});

export default Product;