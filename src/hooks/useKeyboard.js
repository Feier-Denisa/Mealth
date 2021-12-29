import { useEffect, useState } from 'react'
import { Keyboard, Platform } from 'react-native'

const useKeyboard = () => {
    const [isKeyboard, setIsKeyboard] = useState(false)

    const showKeyboardId = Platform.OS === 'ios' ? "keyboardWillShow" : "keyboardDidShow"

    const hideKeyboardId = Platform.OS === 'ios' ? "keyboardWillHide" : "keyboardDidHide"

    useEffect(() => {
        const showSubscription = Keyboard.addListener(showKeyboardId, () => {
            setIsKeyboard(true)
        });
        const hideSubscription = Keyboard.addListener(hideKeyboardId, () => {
            setIsKeyboard(false)
        });
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, [])

    return isKeyboard
}

export default useKeyboard;