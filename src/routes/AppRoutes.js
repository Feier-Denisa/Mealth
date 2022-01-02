import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import appScreensIds from '../constants/appScreensIds'

import Background from '../components/Background';

import FriendsScreen from '../screens/app/friendsStack/FriendsScreen'
import HomeScreen from '../screens/app/homeStack/HomeScreen'
import QuotesScreen from '../screens/app/quotesStack/QuotesScreen'
import ProfileScreen from '../screens/app/profileStack/ProfileScreen'

const Tab = createBottomTabNavigator();

const AppRoutes = () => {

  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === appScreensIds.home) {
                  return <FontAwesome5Icons name="home" size={size} color={color} />;
                } else if (route.name === appScreensIds.quotes) {
                  return <AntDesignIcons name="message1" size={size} color={color} />;
                } else if (route.name === appScreensIds.friends) {
                  return <EntypoIcons name="share" size={size} color={color} />;
                } else if (route.name === appScreensIds.profile) {
                  return <FontAwesomeIcons name="user" size={size} color={color} />;
                }
                return <Ionicons name="home" size={size} color={color} />;
            },
            tabBarActiveTintColor: 'rgba(246, 131, 65, 1)',
            tabBarInactiveTintColor: 'white',
            tabBarBackground: () => {
              return <View style={{...StyleSheet.absoluteFill, backgroundColor: 'rgba(12, 32, 44, 1)'}} />
            },
            headerShown: false
        })}>
        <Tab.Screen name={appScreensIds.home} component={HomeScreen} />
        <Tab.Screen name={appScreensIds.quotes} component={QuotesScreen} />
        <Tab.Screen name={appScreensIds.friends} component={FriendsScreen} />
        <Tab.Screen name={appScreensIds.profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default AppRoutes