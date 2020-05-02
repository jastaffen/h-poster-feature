import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Dimensions } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import ButtonStyleContainer from './ButtonStyleContainer';
import StyleBarContainer from './stylebar/StyleBarContainer';
import SwipeAndUnMount from '../animations/SwipeAndUnMount';

const { width, height } = Dimensions.get('window');

const ViewPosters = ({ backgroundColor, navigation }) => {

    const [ buttonStyleClicked, setButtonStyleClicked ] = useState(false);
    const [ dimensions, setDimensions ] = useState({
        width,
        height
    });
    const [ type, setType ] = useState('');

    const shrinkCanvas = () => {
        setDimensions({
            width: width - 30,
            height: height - 90
        });
    }

    const handleButtonClicked = type => {
        shrinkCanvas();
        setButtonStyleClicked(true);
        setType(type);
    }

    const handleSwipeDown = () => {
        setButtonStyleClicked(false);
        setType('')
        setDimensions({
            width,
            height
        })
    }

    return(
    <>
        
        <View style={{flex: 1, alignItems: 'center', 
            backgroundColor: 'hsl(230, 17%, 14%)', zIndex: 200}}>
        <GestureRecognizer onSwipeDown={ handleSwipeDown }>

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

        </GestureRecognizer>
        
        </View>
        {buttonStyleClicked && type && (
            <StyleBarContainer type={type} />
        )}
    </>
    )
}

const msp = state => ({
    backgroundColor: state.background.backgroundColor
});

export default connect(msp)(ViewPosters);