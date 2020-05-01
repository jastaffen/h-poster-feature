import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Dimensions } from 'react-native';

import ButtonStyleContainer from './ButtonStyleContainer';
import StyleBarContainer from './stylebar/StyleBarContainer';

const { width, height } = Dimensions.get('window');

const ViewPosters = ({ backgroundColor, navigation }) => {

    const [ buttonStyleClicked, setButtonStyleClicked ] = useState(false);
    const [ dimensions, setdimensions ] = useState({
        width,
        height
    });
    const [ type, setType ] = useState('');

    const shrinkCanvas = () => {
        setdimensions({
            width: width - 30,
            height: height - 90
        });
    }

    const handleButtonClicked = type => {
        shrinkCanvas();
        setButtonStyleClicked(true);
        setType(type);
    }

    return(
    <>
        <View style={{flex: 1, alignItems: 'center', 
            backgroundColor: 'hsl(230, 17%, 14%)', zIndex: 200}}>
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
        {buttonStyleClicked && type && (
            <View style={{flex: 1, backgroundColor: 'hsl(230, 17%, 14%)', 
                height: 10}} >
                <StyleBarContainer type={type} />
            </View>
        )}
    </>
    )
}

const msp = state => ({
    backgroundColor: state.background.backgroundColor
});

export default connect(msp)(ViewPosters);