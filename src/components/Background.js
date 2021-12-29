import React from 'react'
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import DarkModle from './DarkModle';

const Background = (props) => {
    return (
        <LinearGradient
            start={{x: 0.0, y: 0}} end={{x: 0, y: 1.0}}
            colors={[
                '#041F31',
                '#183B51'
            ]}
            style={styles.fullscreen}>
            <DarkModle>
                {props.children}
            </DarkModle>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    fullscreen: {
        flex: 1,
    }
})

export default Background
