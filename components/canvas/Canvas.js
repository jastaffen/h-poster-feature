import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Dimensions } from 'react-native';

import ButtonStyleContainer from './ButtonStyleContainer'

const { width, height } = Dimensions.get('window');

const ViewPosters = ({ backgroundColor }) => {
    const [ buttonStyleClicked, setButtonStyleClicked ] = useState(false);
    const [ dimensions, setdimensions ] = useState({
        width,
        height
    });

    const shrinkCanvas = () => {
        setdimensions({
            width: width - 30,
            height: height - 100
        });
    }

    const handleButtonClicked = type => {
        shrinkCanvas();
        console.log(type);
    }

    return(
        <View style={{flex: 1, alignItems: 'center', 
            backgroundColor: 'hsl(230, 17%, 14%)'}}>
            <View style={{ backgroundColor: backgroundColor, 
                width: dimensions.width, height: dimensions.height, 
                justifyContent: 'center', alignItems: 'center' }} >
                <View style={{flexDirection: 'row', 
                    position: 'absolute', right: 10, 
                    top: 15, alignItems: 'center' }}>
                    <ButtonStyleContainer 
                        handleButtonClicked={handleButtonClicked}
                    />
                </View>
            </View>
        </View>
    )
}

const msp = state => ({
    backgroundColor: state.background.backgroundColor
});

export default connect(msp)(ViewPosters);