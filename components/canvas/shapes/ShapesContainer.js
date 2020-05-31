import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import Triangle from './Triangle';
import Square from './Square';
import Circle from './Circle';

const ShapesContainer = ({ shapes, navigation }) => {

    return (
        <View style={{ zIndex: 2000, 
            justifyContent: 'center', alignItems: 'center', 
            position: 'absolute', top: '50%', left: '50%' }}>

            {shapes.map(shape => {
                if (shape.type === 'square') {
                    return <Square key={shape.id} movable={true} />
                }
                if (shape.type === 'triangle') {
                    return <Triangle key={shape.id} movable={true} />
                }
                if (shape.type === 'circle') {
                    return <Circle key={shape.id} movable={true} />
                }   
            })}

        </View>
    )
}

export default ShapesContainer;