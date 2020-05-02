import React, { useRef, useEffect } from 'react';
import { Animated, PanResponder, Dimensions } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const SwipeAndUnMount = props => {
    const swipeDown = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(PanResponder.create({
        onMoveShouldSetPanResponder: () => true,

        onPanResponderGrant: () => {
            swipeDown.setOffset({ x: width, y: height });
        },

        onPanResponderMove: Animated.event( [ null, { dx: swipeDown.x, dy: swipeDown.y }] ),
        
        onPanResponderRelease: () => { swipeDown.flattenOffset(); }
    
    })).current;

    const { children, handleSwipeDown } = props;
    return (
        <GestureRecognizer onSwipeDown={ handleSwipeDown }>
            <Animated.View style={{ transform: [ { translateX: swipeDown.x }, 
                { translateY: swipeDown.y }] }} 
                { ...panResponder.panHandlers}
            >
                { children }
            </Animated.View>     
        </GestureRecognizer>
    )

}

export default SwipeAndUnMount;