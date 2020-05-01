import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

import CanvasLanding from '../logoComponents/CanvasLanding';
import CanvasFormFields from './CanvasFormFields';

import { Universals } from '../../stylesheets/Universals';


const CanvasForm = ({ navigation }) => {
    return (
        <View style={{...Universals.main}}>
            <CanvasLanding />
            <CanvasFormFields navigation={ navigation } />
        </View>
    )
}

export default CanvasForm;