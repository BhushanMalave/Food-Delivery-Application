// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Flex from './src/Flex';
import Home from './src/Home';
import Count from './src/Count';
import Project from './src/Project';
import SignUp from './src/SignUp';
import Login from './src/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Project" component={Project} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Flex" component={Flex} />
        <Stack.Screen name="Count" component={Count} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
