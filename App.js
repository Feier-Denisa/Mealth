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
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

import authScreensIds from './src/constants/authScreensIds';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen 
            name={authScreensIds.prime}
            component={PrimeScreen} 
          />
          <Stack.Screen 
            name={authScreensIds.second} 
            component={SignInUpScreen} 
            options={{
              gestureEnabled: false
            }}
          />
          <Stack.Screen 
            name={authScreensIds.signIn}  
            component={SignInScreen} 
            options={{
              gestureEnabled: false
            }}
          />
          <Stack.Screen 
            name={authScreensIds.signUp}
            component={SignUpScreen} 
            options={{
              gestureEnabled: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
};

export default App;