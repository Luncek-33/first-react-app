import React from "react";
import { Text,StyleSheet, View, FlatList } from "react-native";

const hobbys=[
    {activity: "Basketball", time: "Everyday evening"},
    {activity: "Programing", time: "Thuesday, Thursday"},
    
];

const marks=[
    {subject: "Math", grade:"7"},
    {subject: "Phisycs", grade: "9"},
    {subject: "Astronomy", grade: "8"},
];

const payments=[
    {category:"School", date:"30.09.2025", price:"500$"},
    {category:"Insurance", date:"06.09.2025.", price:"10$"},
    
];



const StudentScreen =()=>{
    return (
        <View style={style.container}>
            <Text style={style.title}>Student Info</Text>
            <Text style={style.info}>Ime: Luna</Text>
            <Text style={style.info}>Prezime: Vojnovic</Text>
            <Text style={style.info}>Datum rodjenja: 02.06.2009.</Text>
            <Text style={style.info}>Broj indexa: 3</Text>

            <Text style={style.title}>Hobbys</Text>

            <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={hobby=>hobby.activity}
                data={hobbys}
                renderItem={({item})=>{
                        return (
                            <View style={style.itemBox}>
                            <Text style={style.itemText}>{item.activity} - {item.time}</Text>
                            </View>
                        );
                            } 
                        }
            />

            <Text style={style.title}>Grades</Text>

             <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={mark=>mark.subject}
                data={marks}
                renderItem={({item})=>{
                        return (
                            <View style={style.itemBox}>
                            <Text style={style.itemText}>{item.subject} - {item.grade}</Text>
                            </View>
                        )
                            } 
                        }
            />

            <Text style={style.title}>Payments</Text>
            
             <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={payment=>payment.category}
                data={payments}
                renderItem={({item})=>{
                        return (
                            <View style={style.itemBox}>
                            <Text style={style.itemText}>{item.category} - {item.date} - {item.price}</Text>
                            </View>
                        )
                            } 
                        }
            />


        </View>


    
)};

const style= StyleSheet.create({
     container: {
        flex:1,
        backgroundColor:"#fff",
        padding:20,
     },
     title:{
        fontSize:26,
        fontWeight:"bold",
        textAlign:"center",
        marginBottom: 20,

     },
     info:{
        fontSize:18,
        textAlign:"left",
        marginBottom:5,
     },
     itemBox: {
        backgroundColor: "#d4d4d4ff",
        borderRadius:20,
        paddingVertical:10,
        paddingHorizontal:15,
        margin:5,
        height:80,
        width:350,
     },
     itemText:{
        fontSize:16,
        textAlign:"center",
        
     },

});

export default StudentScreen;