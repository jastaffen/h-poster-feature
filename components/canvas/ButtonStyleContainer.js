import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import ClearButton from './buttons/ClearButton';
import ColorButton from './buttons/ColorButton';
import CameraButton from './buttons/CameraButton';
import ShapesButton from './buttons/ShapeButton';
import DeleteImageButton from './buttons/DeleteImageButton';

const ButtonStyleContainer = ({ handleButtonClicked, backgroundImage }) => (
    <View style={{
                    flexDirection: 'row', 
                    position: 'absolute', right: 10, 
                    top: 15, alignItems: 'center', backgroundColor: 'white', 
                    borderWidth: 1, borderRadius: 10, padding: 5, opacity: 0.7 
                }}>

        <ShapesButton handleButtonClicked={handleButtonClicked} />
        
        { backgroundImage ? 
            <DeleteImageButton />
        :
            <CameraButton />
        }

        <ColorButton handleButtonClicked={handleButtonClicked} />
        <ClearButton />
    </View>
);

const msp = state => ({
    backgroundImage: state.background.backgroundImage
})

export default connect( msp )(ButtonStyleContainer);