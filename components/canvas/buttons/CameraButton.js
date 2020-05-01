import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import Camera from '../../../images/upload-photo.png';

const CameraButton = () => {
    return(
        <TouchableOpacity style={{marginRight: 10 }}>
            <Image source={Camera} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
    )
}

export default CameraButton;