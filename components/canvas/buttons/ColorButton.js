import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { randomColorPicker } from '../../../utils/randomColorPicker';

const ColorButton = ({ handleButtonClicked }) => {
    const [ color, setColor ] = useState('');

    useEffect(() => {
        setColor(randomColorPicker());
    }, [])

    return(
        <TouchableOpacity style={{ backgroundColor: color.hex, 
            width: 20, height: 20, borderWidth: 1, marginRight: 15 }}
            onPress={() => handleButtonClicked('color')}
        >
        </TouchableOpacity>
    )
}

export default ColorButton;