import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import MainScreen from "./screens/MainScreen";

//import Screen1 from './screens/screen1';
//import GreetingScreen from './screens/greetingScreen';
//import ProfileScreen from './screens/profileScreen';
//import ExerciseScreen from './screens/exerciseScreen';
//import MessageChellange from './screens/messageChellangeSc';
//import QuoteScreen from './screens/quoteScreen';
//import FactScreen from './screens/factScreen';
import ListScreen from './screens/listScreen';
//import StudentScreen from './screens/studentScreen';
import ButtonScreen from './screens/buttonScreen';
import QuizScreen from './screens/quizScreen';

import MainScreen from './screens/MainScreen';
import MenuScreen from './screens/menuScreen';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        
        <Stack.Screen name="Quiz" component={QuizScreen}></Stack.Screen>
        <Stack.Screen name="List" component={ListScreen}></Stack.Screen>
        <Stack.Screen name="Main" component={MainScreen}></Stack.Screen>
        <Stack.Screen name="Menu" component={MenuScreen}></Stack.Screen>
        <Stack.Screen name="Button" component={ButtonScreen}></Stack.Screen>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#da1f1fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
