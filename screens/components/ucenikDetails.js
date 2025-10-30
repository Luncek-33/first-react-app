import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // koristi expo icons

const UcenikDetails = (props) => {
  return (
    <View style={style.cardWrapper}>
      <Image source={props.image} style={style.img} />

      <View style={style.textWrapper}>
        <Text style={style.infoWrapper}>{props.name}</Text>
        <Text style={style.descriptionWrapper}>{props.description}</Text>
      </View>

      {/* Srce toggle */}
      <TouchableOpacity onPress={props.onToggleFavorite}>
        <AntDesign
          name="heart"
          size={26}
          color={props.isFavorite ? "red" : "gray"}
          style={style.heart}
        />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  cardWrapper: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    width: "90%",
    alignSelf: "center",
    marginBottom: 15,
    alignItems: "center",
    padding: 10,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  textWrapper: {
    flex: 1,
    marginLeft: 15,
  },
  infoWrapper: {
    fontWeight: "bold",
    fontSize: 16,
  },
  descriptionWrapper: {
    marginTop: 4,
    fontSize: 14,
  },
  heart: {
    marginRight: 10,
  },
});

export default UcenikDetails;
