import React, { useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import Background from '../components/Background'
import RoundedButton from '../components/RoundedButton'
import RoundedTextInput from '../components/RoundedTextInput'
import useKeyboard from '../hooks/useKeyboard'

const SignInScreen = ({navigation}) => {

    const quarterWindowHeight = Dimensions.get('window').height / 4;
    const isKeyboardUp = useKeyboard()
    const [username, setUsername] = useState(undefined)
    const [password, setPassword] = useState(undefined)

    const onSignIn = () => {

    }

    const onForgotPassword = () => {

    }

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <Background>
            <SafeAreaView style={styles.fullscreen}>
                <View style={styles.margin}>
                    <TouchableOpacity onPress={goBack}>
                        <Icon name="arrow-left-circle" size={50} color="rgba(246, 131, 65, 1)" />
                    </TouchableOpacity>
                    <View style={{height: !isKeyboardUp ? quarterWindowHeight : 0}}/>
                    <View style={{...styles.center}}>
                        <Text style={{...styles.title, marginBottom: !isKeyboardUp ? 35 : 10 }}>Sign in</Text>
                        <RoundedTextInput 
                            placeholder="Username" 
                            style={{...styles.marginTop}}
                            onChangeText={setUsername}
                            value={username} />
                        <RoundedTextInput 
                            placeholder="Password" 
                            style={{...styles.marginTop}} 
                            secureTextEntry={true}
                            onChangeText={setPassword}
                            value={password} />
                        <RoundedButton 
                            text="Sign in" 
                            style={{ ...styles.marginTop, ...styles.signInButton}} 
                            textStyle={{color: 'white'}}
                            onPress={onSignIn} />
                        <TouchableOpacity style={styles.forgotPasswordCont} onPress={onForgotPassword}>
                            <View style={{flex: 1}}/>
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </Background>
    )
}

const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 60,
        fontFamily: 'InriaSerif-Regular',
        color: 'rgba(246, 131, 65, 1)',
    },
    margin: {
        margin: 15
    },
    marginTop: {
        marginTop: 20
    },
    signInButton: {
        width: '100%', 
        height: 50,
        backgroundColor: 'rgba(246, 131, 65, 1)',
    },
    forgotPasswordText: {
        color: 'rgba(246, 131, 65, 1)',
        fontSize: 16
    },
    forgotPasswordCont: {
        marginTop: 10,
        flexDirection: 'row',
        marginHorizontal: 25,
    }
})

export default SignInScreen