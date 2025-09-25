import React from "react";
import { Text,StyleSheet, View, FlatList } from "react-native";

const students=[
    {name:"Luna", surname:"Vojnovic", age:"16"},
    {name:"Nidal", surname:"Nidalovic", age:"28"},
    {name:"Lejla", surname:"Begic", age:"17"}
];

const animals=[
    {spiece:"dog", living_place:"nature", food:"meat"},
    {spiece:"cat", living_place:"home", food:"meat"},
    {spiece:"parrot", living_place:"cage", food:"seeds"},
];



const ListScreen =()=>{
    return (
        <View>
            <Text>ListScreen</Text>
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={student=>student.surname}
            data={students}
            renderItem={({item})=>{
                return <Text style={style.studentWrapper}>{item.name}-{item.surname}-{item.age}</Text>
            } 
        }
            />
            <Text>animal list</Text>
            <FlatList
            horizontal={false}
            keyExtractor={animal=>animal.spiece}
            data={animals}
            renderItem={({item})=>{
                return <Text>{item.spiece}-{item.living_place}-{item.food}</Text>
            } 
        }
            />
        </View>
    
)};

const style= StyleSheet.create({

});

export default ListScreen;