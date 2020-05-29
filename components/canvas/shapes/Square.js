import React, { useState } from 'react';
import { View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import Movable from '../../animations/Movable';


import { ADD_SHAPE } from '../../../actions/types';

const Square = ({ addShape, movable }) => {
    const [ shapeStyle, setShapeStyle ] = useState({
        backgroundColor: 'white',
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
            addShape({ ...shapeStyle, type: 'square' })} >
            <View style={shapeStyle} />
        </TouchableHighlight>
    )
}

const mdp = dispatch => ({
    addShape: ( square ) => dispatch({
        type: ADD_SHAPE,
        payload: square
    })
})

export default connect( null, mdp)(Square);