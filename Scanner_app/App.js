import React from 'react';
import { StyleSheet, Text, View,Image, ScrollView} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from './components/login'
import {Home} from './components/HomeScreen'
import {Signup} from './components/Signup'
import {Data} from './components/Data'


const Stack = createStackNavigator()


export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name = "Login"
        component = {Login}
        options = {{headerShown: false}}
        />
        <Stack.Screen
        name = "Home"
        component = {Home}
        options = {{title: 'Scan Somthing'}}
        />
        <Stack.Screen
        name = 'Signup'
        component = {Signup}
        />
        <Stack.Screen
        name = 'Data'
        component = {Data}
        options = {{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  
    
    
  );
}