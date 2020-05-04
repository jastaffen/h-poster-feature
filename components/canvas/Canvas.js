import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Dimensions, ImageBackground } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import ButtonStyleContainer from './ButtonStyleContainer';
import StyleBarContainer from './stylebar/StyleBarContainer';
import Scale from '../animations/Scale';

const { width, height } = Dimensions.get('window');

const ViewPosters = ({ background: { backgroundColor, backgroundImage }, 
    navigation }) => {

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
            backgroundColor: 'hsl(230, 17%, 14%)', zIndex: 200 }}>
        <GestureRecognizer onSwipeDown={ handleSwipeDown }>

            { backgroundImage ?
            <Scale>
                <ImageBackground style={{ width: dimensions.width, 
                    height: dimensions.height, justifyContent: 'center', 
                    alignItems: 'center', resizeMode: "contain" }} 
                    source={{ uri: backgroundImage }}>

                        <ButtonStyleContainer 
                            handleButtonClicked={handleButtonClicked}
                        />

                </ImageBackground>
            </Scale>
            :

            <View style={{ backgroundColor: backgroundColor, 
                width: dimensions.width, height: dimensions.height, 
                justifyContent: 'center', alignItems: 'center' }} >

                    <ButtonStyleContainer 
                        handleButtonClicked={handleButtonClicked}
                    />

                </View>
                
            }

        </GestureRecognizer>
        
        </View>
        {buttonStyleClicked && type && (
            <StyleBarContainer type={type} />
        )}
    </>
    )
}

const msp = state => ({
    background: state.background,
});

export default connect(msp)(ViewPosters);