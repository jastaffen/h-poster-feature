import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import Shapes from '../../../images/shapes.png';

const ShapeButton = () => {
    return(
        <TouchableOpacity style={{marginRight: 10}}>
            <Image source={Shapes} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
    )
}

export default ShapeButton;