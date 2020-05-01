import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const MoveIntoView = (props) => {
    const moveIntoView = useRef(new Animated.Value(400)).current;

    useEffect(() => {
        Animated.spring(
            moveIntoView, {
                toValue: 0,
                duration: 500
            }
        ).start()
    }, [])

    return (
        <Animated.View style={{ ...props.style, transform: [{translateY: moveIntoView }] }}>
            { props.children }
        </Animated.View>
    )
}

export default MoveIntoView;