import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import CanvasLanding from '../logoComponents/CanvasLanding';
import CanvasFormFields from './CanvasFormFields';

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