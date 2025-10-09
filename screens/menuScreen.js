import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const MenuScreen = (props) => {
  //console.log(props);  
  return (
    <View>
      <Text style={styles.text}>Welcome to Menu Screen</Text>
      <Button 
      title="Go to list screen"
      onPress={()=> props.navigation.navigate("List")}>
        </Button>   
      <Button style={styles.btn}
      title="Go to Student Screen screen"
      onPress={()=> props.navigation.navigate("Ucenik")}>
        </Button>         
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
  btn: {

  },
});

export default MenuScreen;
