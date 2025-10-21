import React from "react";
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

class UsersPostScreen extends React.Component {
    constructor() {
        super(); 
        this.state = {
            users: [],
           
        };
    }

    async componentDidMount() {
        const data = await fetch ("https://jsonplaceholder.typicode.com/users");
       
        const jsonData = await data.json();
        this.setState({
            users:jsonData,
           
        });
    }

    render() {
        const {users} = this.state;
        const { navigation } = this.props;
        return(
            <View>
                <Text>Users Screen</Text>
                <FlatList
                    keyExtractor={users => users.id}
                    data= {users}
                    renderItem={({item}) =>(
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate("UDSc", {user: item})}>
                               <Text>{item.name}</Text> 
                            </TouchableOpacity>
                            
                        </View>
                    )}
                />
            </View>
        );
    }
}

const style = StyleSheet.create({});

export default UsersPostScreen;