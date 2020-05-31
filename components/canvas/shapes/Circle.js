import React, { useState, useRef } from 'react';
import { View, TouchableHighlight, Animated } from 'react-native';
import { connect } from 'react-redux';
import { PinchGestureHandler } from 'react-native-gesture-handler';

import Movable from '../../animations/Movable';

import { ADD_SHAPE } from '../../../actions/types';

const Circle = ({ addShape, movable }) => {
    const scale = useRef(new Animated.Value(1)).current;
    const translateX = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(0)).current;
    const [ shapeStyle, setShapeStyle ] = useState({
        backgroundColor: 'white',
        borderRadius: '50%',
        width: 50,
        height: 50
    });

    const onPinchEvent = Animated.event(
        [
          {
            nativeEvent: { scale }
          }
        ],
        {
          useNativeDriver: true
        }
    );

    
    let circleTransformStyle = {
        transform: [
            { translateY }, { translateX }
        ]
    }

    const onPinchHandlerStateChange = e => {
        scale.setValue(e.nativeEvent.scale);
    }

    let scaleStyle = {
        transform:[
            { perspective: 200 },
            {
                scale
            }
        ]
    }

    if (movable) {
        return (
        <PinchGestureHandler onGestureEvent={onPinchEvent}
            onHandlerStateChange={onPinchHandlerStateChange} >
                <Movable>
                    <TouchableHighlight style={{position: 'absolute', alignSelf: 'center' }}>
                        <Animated.View style={[ shapeStyle, scaleStyle ]} />
                    </TouchableHighlight>
                </Movable>
        </PinchGestureHandler>
        )
    }
    return (
    
        <TouchableHighlight onPress={() => 
            addShape({ ...shapeStyle, type: 'circle' })}>
            <View style={shapeStyle} />
        </TouchableHighlight>
        
    )
}

const mdp = dispatch => ({
    addShape: ( circle ) => dispatch({
        type: ADD_SHAPE,
        payload: circle
    })
})

export default connect( null, mdp )(Circle);