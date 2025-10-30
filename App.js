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
import UcenikScreen from './screens/ucenikScreen';
import HomeScreen from './screens/homeScreen';
import ProfileScreen from './screens/profileScreen';
import ProfilScreen from './screens/profilScreen';
import BoxScreen from './screens/boxScreen';
import BoxScreenChellange from './screens/boxScreenChellange';
import AdvancedBoxScreenChellange from './screens/advancedScreenChellange';
import PostScreen from './screens/postScreen';
import UsersScreen from './screens/usersScreen';
import UsersPostScreen from './screens/usersPostScreen';
import UsersDetailsScreen from './screens/UsersDetailsScreen';
import PhotosScreen from './screens/imageScreen';
import PhotoDetailsScreen from './screens/PhotoDetailScreen';
import CountriesScreen from './screens/countriesScreen';
import CountryDetail from './screens/countryDetail';
import { StackScreen } from 'react-native-screens';
import WeatherScreen from './screens/weatherScreen';


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
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
        <Stack.Screen name="Ucenik" component={UcenikScreen}></Stack.Screen>
        <Stack.Screen name="Profil" component={ProfilScreen}></Stack.Screen>
        <Stack.Screen name="Box" component={BoxScreen}></Stack.Screen>
        <Stack.Screen name="Ch1" component={BoxScreenChellange}></Stack.Screen>
        <Stack.Screen name="Ch1a" component={AdvancedBoxScreenChellange}></Stack.Screen>
        <Stack.Screen name="Posts" component={PostScreen}></Stack.Screen>
        <Stack.Screen name="Users" component={UsersScreen}></Stack.Screen>
        <Stack.Screen name="UPSc" component={UsersPostScreen}></Stack.Screen>
        <Stack.Screen name="UDSc" component={UsersDetailsScreen}></Stack.Screen>
        <Stack.Screen name="Photos" component={PhotosScreen}></Stack.Screen>
        <Stack.Screen name="PhotoDetail" component={PhotoDetailsScreen}></Stack.Screen>
        <Stack.Screen name="Countries" component={CountriesScreen}></Stack.Screen>
        <Stack.Screen name="CountryDetails" component={CountryDetail}></Stack.Screen>
        <Stack.Screen name="Weather" component={WeatherScreen}></Stack.Screen>
       
       

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
