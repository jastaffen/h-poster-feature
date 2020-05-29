import React from 'react';
import { View, Text } from 'react-native';

import ColorStyleBar from './ColorStyleBar';
import ShapeStyleBar from './ShapeStyleBar';

const StyleBarContainer = ({ type }) => {
    // if (type === 'color') {
    //     return(
    //         <ColorStyleBar />
    //     )
    // }
    return (
        <View style={{flex: 1, backgroundColor: 'hsl(230, 17%, 14%)', 
        height: 10}}>
            {type === 'color' && (
                <ColorStyleBar />
            )}
            {type === 'shapes' && (
                <ShapeStyleBar />
            )}
        </View>
    )
}

export default StyleBarContainer;