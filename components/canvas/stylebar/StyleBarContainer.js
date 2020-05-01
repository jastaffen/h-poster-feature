import React from 'react';
import { View, Text } from 'react-native';

import ColorStyleBar from './ColorStyleBar';

const StyleBarContainer = ({ type }) => {
    if (type === 'color') {
        return(
            <ColorStyleBar />
        )
    }
}

export default StyleBarContainer;