import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const FadeIn = (props) => {
    const fadeIn = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
            fadeIn, {
                toValue: 1,
                duration: 2000
            }
        ).start()
    }, []);

    return(
        <Animated.View style={{ ...props.style, opacity: fadeIn }}>
            { props.children }
        </Animated.View>
    )
}

export default FadeIn;