import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import PrimeScreen from '../screens/auth/PrimeScreen';
import SignInUpScreen from '../screens/auth/SignInUpScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
 
import authScreensIds from '../constants/authScreensIds';
 
const Stack = createNativeStackNavigator();
 
const AuthRoutes = () => {
    return (
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
    )
};
 
export default AuthRoutes;