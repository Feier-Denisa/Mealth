import React from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons"

import HandsBackground from "../components/HandsBackground";
import PrimeTitle from "../components/PrimeTitle";

import authScreensIds from "../constants/authScreensIds";

const PrimeScreen = ({navigation}) => {

    const windowWidth = Dimensions.get('window').width;

    const titleWidth = windowWidth * 0.8

    const titleHeight = titleWidth - 85

    const goToSignInUpScreen = () => {
        navigation.navigate(authScreensIds.second)
    }

    return (
        <HandsBackground style={styles.fullscreen}>
            <View style={{...styles.fullscreen, ...styles.centerAll}}>
                <View style={{...styles.titleImageContainer, width: titleWidth, height: titleHeight}}>
                    <PrimeTitle style={styles.titleImage}/>
                </View>
            </View>
            <TouchableOpacity style={{...styles.bottomContainer, ...styles.centerAll}} onPress={goToSignInUpScreen}>
                <Icon name="arrow-right-circle" size={80} color="rgba(246, 131, 65, 1)"/>
            </TouchableOpacity>
        </HandsBackground>
    )
}

const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
    },
    titleImage: {
        height: '100%', 
        width: '100%'
    },
    titleImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerAll: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer: {
        height: 170,
        width: '100%',
    }
})

export default PrimeScreen;

