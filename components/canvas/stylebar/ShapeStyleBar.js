import React from 'react';
import { View, Text } from 'react-native';

import MoveIntoView from '../../animations/MoveIntoView';
import Triangle from '../shapes/Triangle';
import Circle from '../shapes/Circle';
import Square from '../shapes/Square';

const ShapeStyleBar = () => (
    <MoveIntoView style={{ position: 'absolute', bottom: 28, marginLeft: 8 }} >
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
            <Triangle />
            <Circle />
            <Square />
        </View>
    </MoveIntoView>
)

export default ShapeStyleBar;