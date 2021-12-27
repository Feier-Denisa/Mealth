import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'

const RoundedButton = (props) => {

    const defaultHeight = 45

    const borderRadius = !!props.style && !!props.style.height ? (props.style.height / 2) : defaultHeight / 2

    return (
        <View style={{...styles.container, ...styles.center, height: defaultHeight, borderRadius: borderRadius, ...props.style}}>
            <TouchableOpacity onPress={props.onPress} style={{flex: 1, ...styles.center, width: '100%', borderRadius: borderRadius}}>
                <Text style={{...styles.text, ...props.textStyle, fontFamily: 'InriaSerif-Regular'}}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: 'white'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    }
})

export default RoundedButton
