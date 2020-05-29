import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';

import CanvasLanding from '../logoComponents/CanvasLanding';
import CanvasFormFields from './CanvasFormFields';
import Movable from '../animations/Movable';

import { Universals } from '../../stylesheets/Universals';


const CanvasForm = ({ navigation }) => {
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{...Universals.main}}>
            <CanvasLanding />
            <CanvasFormFields navigation={ navigation } />
        </View>
    </TouchableWithoutFeedback>
    )
}

export default CanvasForm;