import React from "react";
import { Image } from 'react-native';

const titlePath = "../../assets/images/title.png"

const PrimeTitle = (props) => {
    return (
        <Image source={require(titlePath)} style={props.style} />
    )
}

export default PrimeTitle