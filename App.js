/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './src/routes/AuthRoutes';
import AppRoutes from './src/routes/AppRoutes';


const App = () => {
    
  return (
    <NavigationContainer>
      {/* <AuthRoutes /> */}
      <AppRoutes />
    </NavigationContainer>
  )

};

export default App;