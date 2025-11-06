import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const CartScreen = ({ route }) => {
    const { cart } = route.params;

    const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Cart</Text>

            <FlatList
                data={cart}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text>Price: {item.price}</Text>
                    </View>
                )}
            />

            <Text style={styles.total}>Total: {total}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff",
        padding:12
    },
    title:{
        fontSize:22,
        fontWeight:"bold",
        textAlign:"center",
        marginBottom:10
    },
    item:{
        padding:10,
        backgroundColor:"#eee",
        marginVertical:6,
        borderRadius:8
    },
    name:{
        fontWeight:"bold",
        fontSize:18
    },
    total:{
        textAlign:"center",
        fontSize:22,
        marginTop:20,
        fontWeight:"bold"
    }
});

export default CartScreen;
