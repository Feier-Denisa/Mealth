import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons"

import HandsBackground from "../components/HandsBackground";
import PrimeTitle from "../components/PrimeTitle";

const PrimeScreen = () => {

    const windowWidth = Dimensions.get('window').width;

    const titleWidth = windowWidth * 0.8

    const titleHeight = titleWidth - 85

    return (
        <HandsBackground style={styles.fullscreen}>
            <View style={{...styles.fullscreen, ...styles.centerAll}}>
                <View style={{...styles.titleImageContainer, width: titleWidth, height: titleHeight}}>
                    <PrimeTitle style={styles.titleImage}/>
                </View>
            </View>
            <View style={{...styles.bottomContainer, ...styles.centerAll}}>
                <Icon name="arrow-right-circle" size={80} color="rgba(246, 131, 65, 1)"/>
            </View>
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
        // width: 350, 
        // height: 250,
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

