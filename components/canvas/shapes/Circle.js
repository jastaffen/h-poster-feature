import React, { useState } from 'react';
import { View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import Movable from '../../animations/Movable';

import { ADD_SHAPE } from '../../../actions/types';

const Circle = ({ addShape, movable }) => {
    const [ shapeStyle, setShapeStyle ] = useState({
        backgroundColor: 'white',
        borderRadius: '50%',
        width: 50,
        height: 50
    });

    if (movable) {
        return (
        
            <Movable>
                <TouchableHighlight style={{position: 'absolute', alignSelf: 'center' }}>

                    <View style={shapeStyle} />

                </TouchableHighlight>
            </Movable>
        
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