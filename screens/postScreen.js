import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

class PostScreen extends React.Component {
    constructor() {
        super(); //konstruktro klase react.component
        this.state = {
            posts: [],
        };
    }

    async componentDidMount() {
        const data = await fetch ("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await data.json();
        this.setState({
            posts:jsonData,
        });
    }

    render() {
        const {posts} = this.state;
        const firstTen = posts. slice(0,10);
        return(
            <View>
                <Text>Posts Screen</Text>
                <FlatList
                    keyExtractor={posts => posts.id}
                    data= {firstTen}
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

export default PostScreen;