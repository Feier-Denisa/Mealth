import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import HandsBackground from "../components/HandsBackground";
import PrimeTitle from "../components/PrimeTitle";
import RoundedButton from "../components/RoundedButton";
import Background from "../components/Background";

import authScreensIds from "../constants/authScreensIds";

const SignInUpScreen = ({navigation}) => {

    const windowWidth = Dimensions.get('window').width;

    const titleWidth = windowWidth * 0.8

    const titleHeight = titleWidth - 85

    const onSignInTapped = () => {
        navigation.navigate(authScreensIds.signIn)
    }

    const onSignUpTapped = () => {
        navigation.navigate(authScreensIds.signUp)
    }

    return (
        <Background>
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
                        onPress={onSignInTapped}
                    />
                    <RoundedButton 
                        text="Sign out" 
                        style={styles.button}
                        onPress={onSignUpTapped}
                    />
                </View>
            </View>
        </Background>
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

