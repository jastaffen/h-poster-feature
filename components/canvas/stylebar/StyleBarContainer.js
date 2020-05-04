import React from 'react';
import { View, Text } from 'react-native';

import ColorStyleBar from './ColorStyleBar';

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
        </View>
    )
}

export default StyleBarContainer;