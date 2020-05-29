import React, { useState } from 'react';
import { TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';

import Movable from '../../animations/Movable';

import { ADD_SHAPE } from '../../../actions/types';

const Triangle = ({ addShape, movable }) => {
    const [ shapeStyle, setShapeStyle ] = useState({
        width: 0,
        height: 0,
        borderColor: 'black',
        borderLeftWidth: 25,
        borderRightWidth: 25,
        borderBottomWidth: 50,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white'
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
            addShape({ ...shapeStyle, type: 'triangle' })}>
            <View style={shapeStyle} />
        </TouchableHighlight>
    )
}

const mdp = dispatch => ({
    addShape: ( shapeObject ) => dispatch({
        type: ADD_SHAPE,
        payload: shapeObject
    })
})

export default connect( null, mdp )(Triangle);