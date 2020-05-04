import React, { useRef, useEffect } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';

const Scale = props => {
    const scale = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
            scale,
            { toValue: 1,
            duration: 300 }
        ).start();
    }, []);

    return (
        <Animated.View style={{...props.style, transform: [{ scale: scale }]}}>
                { props.children }
        </Animated.View>
    )

}

export default Scale;