import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

class PhotosScreen extends React.Component{
    constructor() {
        super();
        this.state ={
            photos :[],
        };
    }

    async componentDidMount(){
        const data = await fetch("https://jsonplaceholder.typicode.com/photos");
        const jsonData = await data.json();
        this.setState({
            photos: jsonData,
        });
    }

    render() {
        const {photos} = this.state;
        const firstTwenty = photos. slice(0,20);
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Photos Screen</Text>
                <FlatList
                    keyExtractor={photos => photos.id}
                    data={firstTwenty}
                    renderItem={({item}) =>(
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate("PhotoDetail", {image : require("../assets/avatar2.png")})}
                        style={styles.card}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Image style={styles.image} source={require("../assets/avatar2.png")} ></Image>
                        </TouchableOpacity>
        )}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        padding :10,
    },
    header:{
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
        color: "#333"
    },
    card:{
        backgroundColor:"#fff",
        borderRadius: 12,
        padding: 10,
        marginVertical: 9,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    image: {
        width : 120,
        height: 120,
        borderRadius: 8,
        marginBottom: 8,
        alignSelf:"flex-start",
        
        
    },
    title: {
        fontSize: 14,
        textAlign: "center",
        color:"#444",
        marginBottom: 10,
    },
});

export default PhotosScreen;