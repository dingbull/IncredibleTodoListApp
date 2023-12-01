/**
 * My To Do List App
 *
 * @format
 */

import React /*, {useState} */from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screen/HomeScreen';
import AboutScreen from './screen/HomeScreen';
import ChuckNorrisFact from './ChuckNorrisFact';



const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
      <ChuckNorrisFact />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({

});

export default App;
