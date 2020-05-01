import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ClearButton = () => {
    return(
        <TouchableOpacity>
            <Text style={{fontSize: 18}}>X</Text>
        </TouchableOpacity>
    )
}

export default ClearButton;