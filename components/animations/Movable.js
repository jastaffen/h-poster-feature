import React, { useState, useRef } from 'react';
import { Animated, PanResponder, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');


const Movable = props => {
    const navigation = useNavigation();

    const [ target, setTarget ] = useState(null)
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
          onMoveShouldSetPanResponder: (e) => { 
              setTarget(e.target); 
              return true},
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
          onPanResponderRelease: (e) => {
            setTarget(null);
            pan.flattenOffset();
          }
        })
      ).current;
    
    // if shape is not selected turn off swipable navigation gestures
    target !== null ? 
      navigation.setOptions({ gestureEnabled: false }) 
      : 
      navigation.setOptions({ gestureEnabled: true })
    
    return ( 
        <Animated.View { ...panResponder.panHandlers } 
            style={{ transform: [{ translateX: pan.x }, { translateY: pan.y }], 
                justifyContent: 'center' }}>
            { props.children }
        </Animated.View>
    )
}

export default Movable;