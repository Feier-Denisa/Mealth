import React from "react";
import {SafeAreaView, StyleSheet, View} from "react-native";

import HandsBackground from "../components/HandsBackground";
import PrimeTitle from "../components/PrimeTitle";

const PrimeScreen = () => {
    return (
        <HandsBackground style={styles.fullscreen}>
            <SafeAreaView style={styles.fullscreen}>
                <View style={{...styles.fullscreen, ...styles.centerAll}}>
                    <View style={styles.titleImageContainer}>
                        <PrimeTitle style={styles.titleImage}/>
                    </View>
                </View>
                <View style={styles.bottomContainer}>

                </View>
            </SafeAreaView>
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
        width: 350, 
        height: 250,
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
        backgroundColor: 'red'
    }
})

export default PrimeScreen;

