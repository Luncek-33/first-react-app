import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const MoviesScreen = () => {
  const movies = [
    { title: "The Godfather", year: 1972 },
    { title: "Jurassic Park", year: 1993 },
    { title: "The Dark Knight", year: 2008 },
    { title: "Inception", year: 2010 },
    { title: "Titanic", year: 1997 },
    { title: "Avatar", year: 2009 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movies Screen</Text>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          const isOld = item.year < 2000;
          return (
            <View style={[styles.movieBox, isOld ? styles.oldMovie : styles.newMovie]}>
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text style={styles.movieYear}>{item.year}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  movieBox: {
    width: 320,
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
  },
  oldMovie: {
    backgroundColor: "#bdbdbd", 
  },
  newMovie: {
    backgroundColor: "#87CEEB", 
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  movieYear: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default MoviesScreen;