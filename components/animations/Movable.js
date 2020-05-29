import React, { useRef } from 'react';
import { Animated, PanResponder, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Movable = props => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
          onMoveShouldSetPanResponder: () => true,
          onPanResponderGrant: () => {
            pan.setOffset({
              x: pan.x._value,
              y: pan.y._value
            });
          },
          onPanResponderMove:
            (pan.x._value < -width) || (pan.x._value > width) || 
            (pan.y._value < -height) || (pan.y._value > height) ? null : 
            Animated.event(
            [
              null,
              { dx: pan.x, dy: pan.y }
            ]
          ),
          onPanResponderRelease: () => {
            pan.flattenOffset();
          }
        })
      ).current;
    
    console.log(pan)

    return ( 
        <Animated.View { ...panResponder.panHandlers } 
            style={{ transform: [{ translateX: pan.x }, { translateY: pan.y }], 
                justifyContent: 'center' }}>
            { props.children }
        </Animated.View>
    )
}

export default Movable;