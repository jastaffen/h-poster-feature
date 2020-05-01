import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { randomColorPicker } from '../../../utils/randomColorPicker';

const ColorButton = ({ handleButtonClicked }) => {
    return(
        <TouchableOpacity style={{ backgroundColor: randomColorPicker().hex, 
            width: 20, height: 20, borderWidth: 1, marginRight: 15 }}
            onPress={() => handleButtonClicked('color')}
        >
        </TouchableOpacity>
    )
}

export default ColorButton;