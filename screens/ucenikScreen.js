import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import UcenikDetails from "./components/ucenikDetails";

const UcenikScreen = () => {
 
  const [favorites, setFavorites] = useState({
    Luna: false,
    Marko: false,
    Haris: false,
    Leon: false,
  });

 
  const toggleFavorite = (name) => {
    setFavorites({
      ...favorites,
      [name]: !favorites[name],
    });
  };

  return (
    <View>
      <Text style={style.text}>Student Screen</Text>

      <UcenikDetails
        name="Luna"
        image={require("../assets/avatar2.png")}
        description="Prvi student"
        isFavorite={favorites.Luna}
        onToggleFavorite={() => toggleFavorite("Luna")}
      />

      <UcenikDetails
        name="Marko"
        image={require("../assets/avatar3.png")}
        description="Drugi student"
        isFavorite={favorites.Marko}
        onToggleFavorite={() => toggleFavorite("Marko")}
      />

      <UcenikDetails
        name="Haris"
        image={require("../assets/avatar6.png")}
        description="Treći student"
        isFavorite={favorites.Haris}
        onToggleFavorite={() => toggleFavorite("Haris")}
      />

      <UcenikDetails
        name="Leon"
        image={require("../assets/avatar5.jpg")}
        description="Četvrti student"
        isFavorite={favorites.Leon}
        onToggleFavorite={() => toggleFavorite("Leon")}
      />
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
});

export default UcenikScreen;
