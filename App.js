/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PrimeScreen from './src/screens/PrimeScreen';
import SignInUpScreen from './src/screens/SignInUpScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    // return (
    //   <NavigationContainer>
    //     <Stack.Navigator screenOptions={{
    //       headerShown: false
    //     }}>
    //       <Stack.Screen name="Prime" component={PrimeScreen} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // )
    return <SignInUpScreen />
};

export default App;