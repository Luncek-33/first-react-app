import React from "react";
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

class UsersDetailsScreen extends React.Component {
    constructor() {
        super(); 
        this.state = {
            
            posts: [],
        };
    }

    async componentDidMount() {
        const {user} = this.props.route.params;

        const data = await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${user.id}` );
        const jsonData = await data.json();
        
        this.setState({
            
            posts:jsonData,
        });
    }

    render() {
        const {user} = this.props.route.params;
        const {posts} = this.state;
        return(
            <View>
                <Text>Users Screen</Text>
                <Text>{user.username}</Text>
                <Text>{user.email}</Text>
                <FlatList
                    keyExtractor={posts => posts.id}
                    data= {posts}
                    renderItem={({item}) =>(
                        <View>
                           <Text>{item.title}</Text>
                           <Text>{item.body}</Text>
                           
                           
                            
                        </View>
                    )}
                />
            </View>

        
        );

    }
}

const style = StyleSheet.create({});

export default UsersDetailsScreen;