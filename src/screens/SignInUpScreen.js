import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons"
import LinearGradient from 'react-native-linear-gradient'


import HandsBackground from "../components/HandsBackground";
import PrimeTitle from "../components/PrimeTitle";
import DarkModle from '../components/DarkModle';
import RoundedButton from "../components/RoundedButton";

const SignInUpScreen = () => {

    const windowWidth = Dimensions.get('window').width;

    const titleWidth = windowWidth * 0.8

    const titleHeight = titleWidth - 85

    return (
        <LinearGradient
            start={{x: 0.0, y: 0}} end={{x: 0, y: 1.0}}
            colors={[
                '#041F31',
                '#183B51'
            ]}
            style={styles.fullscreen}>
                <DarkModle>
                    <View style={{...styles.fullscreen, ...styles.center}}>
                        <View>
                            <HandsBackground style={{ width: titleWidth, height: titleHeight + 45, marginBottom: 90}}>
                                <PrimeTitle style={{ width: titleWidth, height: titleHeight}}/>
                            </HandsBackground>
                        </View>
                        <View style={{width: '87%'}}>
                            <RoundedButton 
                                text="Sign in" 
                                style={{...styles.button, backgroundColor: '#F68341'}} 
                                textStyle={{color: 'white'}}
                            />
                            <RoundedButton 
                                text="Sign out" 
                                style={styles.button} 
                            />
                        </View>
                    </View>
                </DarkModle>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 50, 
        marginTop: 25,
    }
})

export default SignInUpScreen;

