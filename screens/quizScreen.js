import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const QuizScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Screen</Text>
      <Text style={styles.question}>Which color is the sky?</Text>

      {/* prvi red */}
      <View style={styles.row}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Blue"
            onPress={() => console.log("Answer correct!")}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="White"
            onPress={() => console.log("Answer incorrect!")}
          />
        </View>
      </View>

      {/* drugi red */}
      <View style={styles.row}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Yellow"
            onPress={() => console.log("Answer incorrect!")}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Pink"
            onPress={() => console.log("Answer incorrect!")}
          />
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  question: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default QuizScreen;