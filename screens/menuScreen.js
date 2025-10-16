import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MenuScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Welcome to Menu Screen</Text>

      <Button
        title="Go to List Screen"
        onPress={() => props.navigation.navigate("List")}
      />

      <Button
        title="Go to Student Screen"
        onPress={() => props.navigation.navigate("Ucenik")}
      />

      
      <Button
        title="Go to Home Screen"
        onPress={() => props.navigation.navigate("Home")}
        
      />

       <Button
        title="Go to Box Screen"
        onPress={() => props.navigation.navigate("Box")}
      />

       <Button
        title="Go to Box Screen Chellange 1"
        onPress={() => props.navigation.navigate("Ch1")}
      />

       <Button
        title="Go to Box Screen Chellange 1 advanced"
        onPress={() => props.navigation.navigate("Ch1a")}
      />
    </View>
    

    
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
});

export default MenuScreen;
