import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import data from "../data/products.json";
import Product from "./components/products";

class ProductScreen extends React.Component {
    constructor() {
        super();
        this.state ={
            products:[],
        };
    }

    componentDidMount() {
        this.setState({
            products: data,
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Products</Text>

                <FlatList
                    data={this.state.products}
                    keyExtractor={(products) => products.id}
                    renderItem={({item}) => (<View><Product data={item}/></View>)}
                />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#d3d3d3",
        flexDirection:"column"
    },
    title:{
        fontSize: 22,
        fontWeight:"bold",
        textAlign:"center",
        marginVertical: 10,
    }
});

export default ProductScreen;