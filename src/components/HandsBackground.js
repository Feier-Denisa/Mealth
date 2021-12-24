import React from "react";
import {ImageBackground, View} from 'react-native';

const image = require('../../assets/images/backgroundHands.jpg')

const HandsBackground = (props) => {
    
    return <ImageBackground source={image} resizeMode="cover" style={props.style}>
        <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
            {props.children}
        </View>
    </ImageBackground>
}

export default HandsBackground