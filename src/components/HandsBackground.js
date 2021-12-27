import React from "react";
import { ImageBackground } from 'react-native';

import DarkModle from './DarkModle'

const image = require('../../assets/images/backgroundHands.jpg')

const HandsBackground = (props) => {
    
    return <ImageBackground source={image} resizeMode="cover" style={props.style}>
        <DarkModle>
            {props.children}
        </DarkModle>
    </ImageBackground>
}

export default HandsBackground