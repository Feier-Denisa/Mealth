import React from 'react'
import { View } from 'react-native'

const DarkModle = (props) => {
    return (
        <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)', ...props.style}}>
            {props.children}
        </View>
    )
}

export default DarkModle