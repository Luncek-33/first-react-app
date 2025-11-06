import React from "react";
import {View, Text, StyleSheet, FlatList, Button} from "react-native";
import data from "../data/products.json";
import Product from "./components/products";

class ProductScreen extends React.Component {
    constructor() {
        super();
        this.state ={
            products:[],
            cart:[]
        };
    }

    componentDidMount() {
        this.setState({
            products: data,
        });
    }

    addToCart = (item) => {
        this.setState((prevState) => ({
            cart: [...prevState.cart, item]
        }));
    };

    getCartTotal = () => {
        const total = this.state.cart.reduce((sum, item) => sum + Number(item.price), 0);

        return total;
    };

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Products</Text>

                <Button 
                    title="Go to Cart" 
                    onPress={() => this.props.navigation.navigate("Cart", { cart: this.state.cart })}
                />

                <FlatList
                    data={this.state.products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <Product data={item} onAddToCart={this.addToCart}/>
                    )}
                />

                <Text style={styles.info}>Items in Cart: {this.state.cart.length}</Text>
                <Text style={styles.info}>Total: {this.getCartTotal()}</Text>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#d3d3d3",
        flexDirection:"column",
        padding:10
    },
    title:{
        fontSize: 22,
        fontWeight:"bold",
        textAlign:"center",
        marginVertical: 10,
    },
    info:{
        textAlign:"center",
        fontSize:18,
        marginVertical:3,
        fontWeight:"bold"
    }
});

export default ProductScreen;
