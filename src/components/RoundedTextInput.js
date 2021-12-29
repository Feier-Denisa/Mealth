import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const RoundedTextInput = (props) => {

    const height = !!props.style && !!props.style.height ? props.style.height : 50

    const radius = height / 2

    return <TextInput {...props}
        style={{
            height: height,
            borderRadius: radius,
            ...styles.textInput,
            ...props.style
        }}/>
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'white',
        width: '100%',
        paddingHorizontal: 20,
    }
})

export default RoundedTextInput