import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Background from './Background'

const ScreenBase = ({children}) => {
    return (
        <Background>
            <SafeAreaView style={styles.fullscreen}>
                {children}
            </SafeAreaView>
        </Background>
    )
}

const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
    }
})

export default ScreenBase
