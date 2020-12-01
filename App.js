/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabScreens from './src/screens/TabScreens';
import DetailNewsScreen from './src/screens/DetailNewsScreen';

const Stack = createStackNavigator()

class App extends Component{
      
     render(){
          return(
                 <NavigationContainer>
                      <Stack.Navigator
                      >
                          <Stack.Screen
                               name="Home"
                               component={TabScreens}
                               options={{headerShown:false}}
                          />
                          <Stack.Screen 
                               name="Detail"
                               component={DetailNewsScreen}
                               options={{title:''}}
                          />
                      </Stack.Navigator>
                 </NavigationContainer>
          )
     }
}

export default App;