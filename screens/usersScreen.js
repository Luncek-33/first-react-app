import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

class UsersScreen extends React.Component {
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
        return(
            <View>
                <Text>Users Screen</Text>
                <FlatList
                    keyExtractor={users => users.id}
                    data= {users}
                    renderItem={({item}) =>(
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.email}</Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const style = StyleSheet.create({});

export default UsersScreen;